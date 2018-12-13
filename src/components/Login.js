/* eslint-disable */
import React, { Component } from "react";
import webService from "./webService";
import {
	StyleSheet,
	Linking,
	TextInput,
	Text,
	AsyncStorage,
	KeyboardAvoidingView,
	ScrollView,
	View,
	TouchableOpacity,
	Alert,
	FlatList,
	ActivityIndicator,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
 class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: true,
			username: "",
			password: "",
			detail: "nothing",
			eventFrom: "android tech app",
			deviceId: "54454554546459",
			eventTime: "Thursday, 6 September 2018, 19:04:12",
			version: "0",
			visible: false,
			hasToken: false,
			Token: null,
		};
	}

	componentDidMount() {
		AsyncStorage.getItem("id_token").then(token => {
			this.setState({ hasToken: token !== null, isLoaded: false });
			if (this.state.hasToken) {
				this.setState({ Token: token });
			}
		});
		AsyncStorage.getItem("password").then(password => {
			if (this.state.hasToken) {
				this.logIn(
					this.state.Token,
					password,
					this.state.detail,
					this.state.eventFrom,
					this.state.deviceId,
					this.state.eventTime,
					this.state.version
				);
			}
		});
	}
	handleUserName = text => {
		this.setState({ username: text });
	};
	handlePassword = text => {
		this.setState({ password: text });
	};
	naviagteHome() {
		AsyncStorage.removeItem("id_token"),
			AsyncStorage.removeItem("password"),
			this.props.navigation.navigate("Home");
	}
	logIn(username, password, detail, eventFrom, deviceId, eventTime, version) {
		console.log(username);
		this.setState({
			visible: true,
		});
		fetch(webService.loginDetails, {
			method: "POST",
			headers: {
				Host: "bam.barrister.com",
				"Content-Type": "application/x-www-form-urlencoded",
			},

			body:
				"username=" +
				username +
				"&password=" +
				password +
				"&detail=" +
				detail +
				"&eventFrom=" +
				eventFrom +
				"&deviceId=" +
				deviceId +
				"&eventTime=" +
				eventTime +
				"&version=" +
				version,
		})
			.then(response => response.json())
			.then(responseJson => {
				if (responseJson[0].status == "True") {
					AsyncStorage.setItem("id_token", responseJson[0].TechnicianCode);
					AsyncStorage.setItem("password", password);
				

					this.props.navigation.navigate("Drawer", {
						data: responseJson[0],
						password: password,
					});
					this.setState({ visible: false });
				} else {
					this.setState({
						isLoaded:false
					});
					
					
					Alert.alert("Info", "Something went wrong! Check username and password!", [
						{
							text: "OK",
							onPress: () =>
							 {
								this.naviagteHome();
								this.setState({ visible: false });
							},
						},
					]);
				}
			})
			.catch(err => {
				console.log(err);
			})
			.then((json) => {
				if (json) {
					souccess(json);
				}
			})
	}

	render() {
	
		if (this.state.isLoaded) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}
		if (this.state.hasToken) {
			return (
				<Spinner
					visible={this.state.visible}
					textContent={"Please wait!"}
					textStyle={{ color: "#FFF" }}
				/>
			);
		}
		else{
		return (
			<View style={styles.container1}>
				<View style={styles.logoContainer}>
					<Text style={styles.title}>Login To Barrister!</Text>
				</View>
				<View style={styles.formContainer}>
					<KeyboardAvoidingView behavior="padding" style={styles.container}>
						<Spinner
							visible={this.state.visible}
							textContent={"Please wait!"}
							textStyle={{ color: "#FFF" }}
						/>
						<View style={styles.container}>
							<TextInput
								placeholder="Username  Or Email"
								placeholderTextColor="#BFBBC9"
								underlineColorAndroid="rgba(0,0,0,0)"
								returnKeyType="next"
								onSubmitEditing={() => this.passwordInput.focus()}
								style={styles.input}
								onChangeText={this.handleUserName}
							/>
							<TextInput
								placeholder="Password"
								placeholderTextColor="#BFBBC9"
								underlineColorAndroid="rgba(0,0,0,0)"
								secureTextEntry
								returnKeyType="go"
								ref={input => (this.passwordInput = input)}
								style={styles.input}
								onChangeText={this.handlePassword}
							/>

							<TouchableOpacity
								onPress={() =>
									this.logIn(
										this.state.username,
										this.state.password,
										this.state.detail,
										this.state.eventFrom,
										this.state.deviceId,
										this.state.eventTime,
										this.state.version
									)
								}
								style={styles.buttonContainer}
							>
								<Text style={styles.buttonUp}>Login</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={() => this.props.navigation.navigate("SignUp")}
							>
								<Text style={styles.buttonUp}>Sign Up</Text>
							</TouchableOpacity>
							<Text
								style={styles.text}
								onPress={() => this.props.navigation.navigate("ForgotPassword")}
							>
								Forgot Password?
							</Text>
							<Text style={styles.subtitle}>Powered by Barrister!</Text>
						</View>
					</KeyboardAvoidingView>
				</View>
			</View>
		);}
	}
}
export default LoginForm;
const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginBottom: 50,
	},
	container1: {
		flex: 1,
		backgroundColor: "#3399ff",
	},
	logoContainer: {
		alignItems: "center",
		flexGrow: 1,
		justifyContent: "center",
	},
	text: {
		color: "#BFBBC9",
		paddingVertical: 15,
		top: 20,
		marginBottom: 35,
		textAlign: "center",
	},
	title: {
		color: "#BFBBC9",
		marginTop: 20,
		width: 300,
		textAlign: "center",
		opacity: 0.9,
		fontSize: 20,
	},
	input: {
		height: 40,
		backgroundColor: "rgba(255,255,255,0.2)",
		marginBottom: 10,
		color: "#FFF",
		paddingHorizontal: 10,
		fontWeight: "100",
	},
	buttonContainer: {
		backgroundColor: "#2980b9",
		paddingVertical: 15,
		marginBottom: 15,
		top: 30,
	},
	buttonText: {
		textAlign: "center",
		color: "#BFBBC9",
		// fontWeight: "700",
	},
	buttonUp: {
		textAlign: "center",
		color: "#BFBBC9",
		fontWeight: "700",
	},
	subtitle: {
		top: 60,
		fontSize: 15,
		color: "#BFBBC9",
		fontWeight: "100",
		textAlign: "center",
	},
});
