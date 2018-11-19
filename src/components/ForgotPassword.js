/* eslint-disable */
import React, { Component } from "react";

import {
	StyleSheet,
	Linking,
	TextInput,
	Text,
	KeyboardAvoidingView,
	ScrollView,
	View,
	TouchableOpacity,
} from "react-native";

import { createStackNavigator } from "react-navigation";

export default class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: false,
		};
	}
	test() {
		this.props.navigation.setParams({ name: "Lucy" });
		this.setState({
			value: true,
		});
	}
	render() {
		if (this.state.value) {
			console.log(this.props.navigation.state.params.name);
		}
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text
						onPress={() => this.props.navigation.navigate("Home")}
						style={styles.click}
					>
						Barrister
					</Text>
					<Text style={styles.title}>Enter Your Username</Text>
				</View>

				<View style={styles.formContainer}>
					<KeyboardAvoidingView behavior="padding" style={styles.container1}>
						<View style={styles.container1}>
							<TextInput
								placeholder="Username"
								placeholderTextColor="#BFBBC9"
								underlineColorAndroid="rgba(0,0,0,0)"
								returnKeyType="go"
								onSubmitEditing={() => this.passwordInput.focus()}
								style={styles.input}
							/>

							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={() => this.test()}
							>
								<Text style={styles.buttonText}>Send Email</Text>
							</TouchableOpacity>

							<Text style={styles.subtitle}>Powered by Barrister!</Text>
						</View>
					</KeyboardAvoidingView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	click: {
		textDecorationLine: "underline",
		color: "#30336b",
		textAlign: "center",
		marginBottom: 10,
		marginTop: 30,
		fontSize: 25,
	},
	input: {
		height: 40,
		backgroundColor: "rgba(255,255,255,0.2)",
		marginBottom: 50,
		color: "#FFF",
		paddingHorizontal: 10,
		fontWeight: "100",
	},
	subtitle: {
		top: 60,
		fontSize: 15,
		color: "#BFBBC9",
		fontWeight: "100",
		textAlign: "center",
	},
	buttonText: {
		textAlign: "center",
		color: "#BFBBC9",
		fontWeight: "700",
	},
	buttonContainer: {
		backgroundColor: "#2980b9",
		paddingVertical: 15,
		marginBottom: 150,
		top: 30,
	},
	container1: {
		padding: 10,
		marginBottom: 50,
	},
	container: {
		flex: 1,
		backgroundColor: "#3399ff",
	},
	logoContainer: {
		alignItems: "center",
		flexGrow: 1,
		justifyContent: "center",
	},
	title: {
		color: "#BFBBC9",
		marginTop: 20,
		width: 300,
		textAlign: "center",
		opacity: 0.9,
		fontSize: 25,
	},
});
