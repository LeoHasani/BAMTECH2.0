/* eslint-disable */
import React from "react";
import { Icon } from "react-native-elements";
import { TabNavigator } from "react-navigation";
// import { Picker } from "react-native-picker-dropdown";
// import Checkbox from "react-native-custom-checkbox";
import IOSPicker from "react-native-ios-picker";
// import LoginForm from "./Login";
import CheckBox from "react-native-checkbox";
// import PickerAndroid from "react-native-picker-android";
import Loading from "react-native-whc-loading";
import webService from "./webService";
import Spinner from "react-native-loading-spinner-overlay";
import {
	Text,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	View,
	Picker,
	AppRegistry,
	Platform,
	ActivityIndicator,
	Button,
	Alert,
} from "react-native";

const MyPicker = Platform.select({
	ios: IOSPicker,
	android: Picker,
});

class Company extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			FirstName: "",
			MiddleName: "",
			LastName: "",
			UserName: "",
			Password: "",
			ConfirmPassword: "",
			StateId: "1",
			City: "",
			PostalCode: "",
			CountryName: "",
			Address: "",
			StateName: "",
			Email: "",
			PhoneNo: "",
			SSNNo: "",
			taxWorkFor: "1",
			TaxCompanyBASID: "",
			CompanyName: "",
			detail: "no",
			CountryId: "",
			IsOtherTechniciansPerformingForYou: false,
			isLoading: true,
			CountryPickerValueHolder: "Select Country",
			StatePickerValueHolder: "Select State",
			CountryPickedId: "",
			test: "USA",
			ssn: null,
			CompArray: new Array(),
			op: null,
			stId: "",
			BASIDSource: null,
			statesArray: [],
			visible: false,
		};
	}

	getCheckBoxValue() {
		if (this.state.IsOtherTechniciansPerformingForYou == "No") {
			return "Yes";
		}

		return "No";
	}

	componentDidMount() {
		return fetch(
			webService.setSignUpDetails,

			{
				method: "POST",
				headers: {
					Host: "bam.barrister.com",
					"Content-Type": "application/x-www-form-urlencoded",
				},

				body: "detail= ",
			}
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState(
					{
						isLoading: false,
						countrydataSource: responseJson.lstCountry,
						statedataSource: responseJson.lstState,
						BASIDSource: responseJson.BASID,
					},
					function() {
						this.setState({ UserName: this.state.BASIDSource });
					}
				);
			})
			.catch(error => {
				console.error(error);
			})
			.then((json)=> {
				if(json) {
					success(json);
				}
			})
	}
	getStates(cId) {
		let stArray = [];
		for (let item of this.state.statedataSource) {
			let x = item.CountryId;
			let y = cId;

			if (x == y) {
				stArray.push(item);
			}
		}
		return stArray;
	}

	handleFirstName = text => {
		this.setState({ FirstName: text });
	};
	handleMiddleName = text => {
		this.setState({ MiddleName: text });
	};
	handleLastName = text => {
		this.setState({ LastName: text });
	};
	handleUserName = text => {
		this.setState({ UserName: text });
	};
	handlePassword = text => {
		this.setState({ Password: text });
	};
	handleConfirmPassword = text => {
		this.setState({ ConfirmPassword: text });
	};
	handleStateID = text => {
		this.setState({ StateId: text });
	};
	handleCountryID = text => {
		this.setState({ CountryId: text });
	};
	handleAddress = text => {
		this.setState({ Address: text });
	};
	handleCity = text => {
		this.setState({ City: text });
	};
	handlePostalCode = text => {
		this.setState({ PostalCode: text });
	};
	handleCountrySelected = value => {
		this.setState({ CountryName: value });
	};
	handleStateSelected = value => {
		this.setState({ StateName: value });
	};
	handleEmail = text => {
		this.setState({ Email: text });
	};
	handlePhoneNo = text => {
		this.setState({ PhoneNo: text });
	};
	handleSSNNo = text => {
		this.setState({ SSNNo: text });
	};
	handleIsOtherTechniciansPerformingForYou = value => {
		this.setState({ IsOtherTechniciansPerformingForYou: value });
	};
	handleTaxWorkFor = text => {
		this.setState({ taxWorkFor: text });
	};
	handleTaxCompanyBASID = text => {
		this.setState({ TaxCompanyBASID: text });
	};
	handleCompanyName = text => {
		this.setState({ CompanyName: text });
	};
	handleDetail = text => {
		this.setState({ detail: text });
	};
	findCountryId(country) {
		for (let item of this.state.countrydataSource) {
			let x = item.CountryName;
			let y = country;

			if (x == y) {
				return item.CountryId;
			}
		}
	}
	setCountryPickerValueHolder(x) {
		if (x == "") {
			return "Select Country";
		}

		return x;
	}

	setStatePickerValueHolder(x) {
		if (x == "") {
			return "Select State";
		}

		return x;
	}

	registerUser(
		FirstName,
		MiddleName,
		LastName,
		UserName,
		Password,
		ConfirmPassword,
		Address,
		StateId,
		City,
		PostalCode,
		CountryName,
		StateName,
		Email,
		PhoneNo,
		SSNNo,
		taxWorkFor,
		TaxCompanyBASID,
		CompanyName,
		detail,
		CountryId,
		IsOtherTechniciansPerformingForYou
	) {
		this.setState({
			visible: true,
		});
		if (Password != ConfirmPassword) {
			alert("Password field does not match Confirm Password field!");
		} else {
			fetch(webService.addTechnician, {
				method: "POST",
				headers: {
					Host: "bam.barrister.com",
					"Content-Type": "application/x-www-form-urlencoded",
				},

				body:
					"FirstName= " +
					FirstName +
					"&MiddleName=" +
					MiddleName +
					"&LastName=" +
					LastName +
					"&Username=" +
					UserName +
					"&Password=" +
					Password +
					"&Address=" +
					Address +
					"&City=" +
					City +
					"&PostalCode=" +
					PostalCode +
					"&StateId=" +
					StateId +
					"&" +
					"StateName=" +
					StateName +
					"&CountryId=" +
					CountryId +
					"&CountryName=" +
					CountryName +
					"&Email=" +
					Email +
					"&PhoneNo=" +
					PhoneNo +
					"&" +
					"IsOtherTechniciansPerformingForYou=" +
					IsOtherTechniciansPerformingForYou +
					"&taxWorkFor=" +
					taxWorkFor +
					"&TaxCompanyBASID=" +
					TaxCompanyBASID +
					"&CompanyName=" +
					CompanyName +
					"&detail=" +
					detail +
					"&SSNNo=" +
					SSNNo,
			})
				.then(response => response.json())
				.then(responseJson => {
					Alert.alert("Info", responseJson.message, [
						{
							text: "OK",
							onPress: () => {
								this.setState({ visible: false });
							},
						},
					]);
				})
				.catch(err => {
					console.log(err);
				})
				.then((json) =>{
					if(json){
						success(json);
					}
				})
		}
	}

	render() {
		let SSnno = this.state.ssn;
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}

		let ss = (
			<TextInput
				underlineColorAndroid="transparent"
				style={styles.textInput1}
				placeholder="SSNno"
				placeholderTextColor="#dbdbdb"
				onChangeText={this.handleSSNNo}
			/>
		);
		if (this.state.CountryPickerValueHolder == "USA") {
			SSnno = ss;
		}

		return (
			<KeyboardAvoidingView keyboardVerticalOffset={70} behavior="padding" enabled>
				<ScrollView style={styles.RegForm}>
					<Spinner
						visible={this.state.visible}
						textContent={"Loading..."}
						textStyle={{ color: "#FFF" }}
					/>
					<Text
						onPress={() => this.props.navigation.navigate("Home")}
						style={styles.click}
					>
						Barrister
					</Text>
					<Text style={styles.header}>Sign Up</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Pay To"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleTaxCompanyBASID}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Company Name"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleCompanyName}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="First Name"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleFirstName}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Middle Name"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleMiddleName}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Last Name"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleLastName}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder={"UserName: " + this.state.UserName}
						placeholderTextColor="#dbdbdb"
						// onChangeText={this.handleUserName}
						editable={false}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Password"
						placeholderTextColor="#dbdbdb"
						secureTextEntry
						onChangeText={this.handlePassword}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Confirm Password"
						placeholderTextColor="#dbdbdb"
						secureTextEntry
						onChangeText={this.handleConfirmPassword}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Address"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleAddress}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="City"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleCity}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Postal Code"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handlePostalCode}
					/>
					<MyPicker
						selectedValue={this.state.CountryPickerValueHolder}
						onValueChange={itemValue =>
							this.setState({
								CountryPickerValueHolder: this.setCountryPickerValueHolder(itemValue),
								CountryId: this.findCountryId(itemValue),
								StatePickerValueHolder: "Select State",
								statesArray: this.getStates(this.findCountryId(itemValue)),
							})
						}
						textStyle={styles.pickerText}
						style={styles.dd}
						prompt="Select Country"
					>
						<Picker.Item label={""} value={""} key={""} />
						{this.state.countrydataSource.map(item => (
							<Picker.Item
								label={item.CountryName}
								value={item.CountryName}
								key={item.CountryId}
							/>
						))}
					</MyPicker>
					<MyPicker
						selectedValue={this.state.StatePickerValueHolder}
						onValueChange={itemValue =>
							this.setState({
								StatePickerValueHolder: this.setStatePickerValueHolder(itemValue),
							})
						}
						textStyle={styles.pickerText}
						style={styles.dd}
						mode="dropdown"
						prompt="Select State"
					>
						<Picker.Item label={""} value={""} key={""} />
						{this.state.statesArray.map(item => (
							<Picker.Item
								label={item.StateName}
								value={item.StateName}
								key={item.StateId}
							/>
						))}
					</MyPicker>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Email"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleEmail}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Phone Number"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handlePhoneNo}
					/>
					{SSnno}
					<View style={styles.CheckboxView}>
						<CheckBox
							label=""
							onChange={checked =>
								this.setState({
									IsOtherTechniciansPerformingForYou: checked,
								})
							}
						/>
						<Text style={styles.CheckboxText}>
							Will you have other technicians performing work for you?(If yes, please
							select)
						</Text>
					</View>
					<TouchableOpacity style={styles.buttonContainer1}>
						<Text
							style={styles.buttonText}
							onPress={() =>
								this.registerUser(
									this.state.FirstName,
									this.state.MiddleName,
									this.state.LastName,
									this.state.UserName,
									this.state.Password,
									this.state.ConfirmPassword,
									this.state.Address,
									this.state.StateId,
									this.state.City,
									this.state.PostalCode,
									this.state.CountryName,
									this.state.StateName,
									this.state.Email,
									this.state.PhoneNo,
									this.state.SSNNo,
									this.state.taxWorkFor,
									this.state.TaxCompanyBASID,
									this.state.CompanyName,
									this.state.detail,
									this.state.CountryId,
									this.state.IsOtherTechniciansPerformingForYou
								)
							}
						>
							Sign Up
						</Text>
					</TouchableOpacity>
					<Text style={styles.subtitle}>Powered by Barrister!</Text>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

class Individual extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			FirstName: "",
			MiddleName: "",
			LastName: "",
			UserName: "",
			Password: "",
			ConfirmPassword: "",
			StateId: "1",
			City: "",
			PostalCode: "",
			CountryName: "",
			Address: "",
			StateName: "",
			Email: "",
			PhoneNo: "",
			SSNNo: "",
			taxWorkFor: "1",
			TaxCompanyBASID: "",
			CompanyName: "",
			detail: "no",
			CountryId: "",
			IsOtherTechniciansPerformingForYou: false,
			isLoading: true,
			CountryPickerValueHolder: "Select Country",
			StatePickerValueHolder: "Select State",
			CountryPickedId: "",
			test: "USA",
			ssn: null,
			CompArray: new Array(),
			op: null,
			stId: "",
			BASIDSource: null,
			statesArray: [],
		};
	}

	getCheckBoxValue() {
		if (this.state.IsOtherTechniciansPerformingForYou == "No") {
			return "Yes";
		}

		return "No";
	}

	componentDidMount() {
		return fetch(
			webService.setSignUpDetails,

			{
				method: "POST",
				headers: {
					Host: "bam.barrister.com",
					"Content-Type": "application/x-www-form-urlencoded",
				},

				body: "detail= ",
			}
		)
			.then(response => response.json())
			.then(responseJson => {
				this.setState(
					{
						isLoading: false,
						countrydataSource: responseJson.lstCountry,
						statedataSource: responseJson.lstState,
						BASIDSource: responseJson.BASID,
					},
					function() {
						this.setState({ UserName: this.state.BASIDSource });
					}
				);
			})
			.catch(error => {
				console.error(error);
			})
			.then((json)=>{
				if(json){
					success(json);
				}
			})
	}
	getStates(cId) {
		let stArray = [];
		for (let item of this.state.statedataSource) {
			let x = item.CountryId;
			let y = cId;

			if (x == y) {
				stArray.push(item);
			}
		}
		return stArray;
	}

	handleFirstName = text => {
		this.setState({ FirstName: text });
	};
	handleMiddleName = text => {
		this.setState({ MiddleName: text });
	};
	handleLastName = text => {
		this.setState({ LastName: text });
	};
	handleUserName = text => {
		this.setState({ UserName: text });
	};
	handlePassword = text => {
		this.setState({ Password: text });
	};
	handleConfirmPassword = text => {
		this.setState({ ConfirmPassword: text });
	};
	handleStateID = text => {
		this.setState({ StateId: text });
	};
	handleCountryID = text => {
		this.setState({ CountryId: text });
	};
	handleAddress = text => {
		this.setState({ Address: text });
	};
	handleCity = text => {
		this.setState({ City: text });
	};
	handlePostalCode = text => {
		this.setState({ PostalCode: text });
	};
	handleCountrySelected = value => {
		this.setState({ CountryName: value });
	};
	handleStateSelected = value => {
		this.setState({ StateName: value });
	};
	handleEmail = text => {
		this.setState({ Email: text });
	};
	handlePhoneNo = text => {
		this.setState({ PhoneNo: text });
	};
	handleSSNNo = text => {
		this.setState({ SSNNo: text });
	};
	handleIsOtherTechniciansPerformingForYou = value => {
		this.setState({ IsOtherTechniciansPerformingForYou: value });
	};
	handleTaxWorkFor = text => {
		this.setState({ taxWorkFor: text });
	};
	handleDetail = text => {
		this.setState({ detail: text });
	};
	findCountryId(country) {
		for (let item of this.state.countrydataSource) {
			let x = item.CountryName;
			let y = country;

			if (x == y) {
				return item.CountryId;
			}
		}
	}
	setCountryPickerValueHolder(x) {
		if (x == "") {
			return "Select Country";
		}

		return x;
	}

	setStatePickerValueHolder(x) {
		if (x == "") {
			return "Select State";
		}

		return x;
	}

	registerUser(
		FirstName,
		MiddleName,
		LastName,
		UserName,
		Password,
		ConfirmPassword,
		Address,
		StateId,
		City,
		PostalCode,
		CountryName,
		StateName,
		Email,
		PhoneNo,
		SSNNo,
		taxWorkFor,
		TaxCompanyBASID,
		CompanyName,
		detail,
		CountryId,
		IsOtherTechniciansPerformingForYou
	) {
		if (Password != ConfirmPassword) {
			alert("Password field does not match Confirm Password field!");
		} else {
			fetch(webService.addTechnician, {
				method: "POST",
				headers: {
					Host: "bam.barrister.com",
					"Content-Type": "application/x-www-form-urlencoded",
				},

				body:
					"FirstName= " +
					FirstName +
					"&MiddleName=" +
					MiddleName +
					"&LastName=" +
					LastName +
					"&Username=" +
					UserName +
					"&Password=" +
					Password +
					"&Address=" +
					Address +
					"&City=" +
					City +
					"&PostalCode=" +
					PostalCode +
					"&StateId=" +
					StateId +
					"&" +
					"StateName=" +
					StateName +
					"&CountryId=" +
					CountryId +
					"&CountryName=" +
					CountryName +
					"&Email=" +
					Email +
					"&PhoneNo=" +
					PhoneNo +
					"&" +
					"IsOtherTechniciansPerformingForYou=" +
					IsOtherTechniciansPerformingForYou +
					"&taxWorkFor=" +
					taxWorkFor +
					"&TaxCompanyBASID=" +
					TaxCompanyBASID +
					"&CompanyName=" +
					CompanyName +
					"&detail=" +
					detail +
					"&SSNNo=" +
					SSNNo,
			})
				.then(response => response.json())
				.then(responseJson => {
					if (responseJson.status == "Yes") {
						alert(
							"Registration was succesful. " +
								"Your username is " +
								this.state.UserName
						);
					} else {
						alert(responseJson.message);
					}
				})
				.catch(err => {
					console.log(err);
				})
				.then((json)=>{
					if(json){
						success(json);
					}
				})
		}
	}

	render() {
		let SSnno = this.state.ssn;
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}

		let ss = (
			<TextInput
				underlineColorAndroid="transparent"
				style={styles.textInput1}
				placeholder="SSNno"
				placeholderTextColor="#dbdbdb"
				onChangeText={this.handleSSNNo}
			/>
		);
		if (this.state.CountryPickerValueHolder == "USA") {
			SSnno = ss;
		}

		return (
			<KeyboardAvoidingView keyboardVerticalOffset={70} behavior="padding" enabled>
				<ScrollView style={styles.RegForm}>
					<Text
						onPress={() => this.props.navigation.navigate("Home")}
						style={styles.click}
					>
						Barrister
					</Text>
					<Text style={styles.header}>Sign Up</Text>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="First Name"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleFirstName}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Middle Name"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleMiddleName}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Last Name"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleLastName}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder={"UserName: " + this.state.UserName}
						placeholderTextColor="#dbdbdb"
						// onChangeText={this.handleUserName}
						editable={false}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Password"
						placeholderTextColor="#dbdbdb"
						secureTextEntry
						onChangeText={this.handlePassword}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Confirm Password"
						placeholderTextColor="#dbdbdb"
						secureTextEntry
						onChangeText={this.handleConfirmPassword}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Address"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleAddress}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="City"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleCity}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Postal Code"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handlePostalCode}
					/>
					<MyPicker
						selectedValue={this.state.CountryPickerValueHolder}
						onValueChange={itemValue =>
							this.setState({
								CountryPickerValueHolder: this.setCountryPickerValueHolder(itemValue),
								CountryId: this.findCountryId(itemValue),
								StatePickerValueHolder: "Select State",
								statesArray: this.getStates(this.findCountryId(itemValue)),
							})
						}
						textStyle={styles.pickerText}
						style={styles.dd}
						prompt="Select Country"
					>
						<Picker.Item label={""} value={""} key={""} />
						{this.state.countrydataSource.map(item => (
							<Picker.Item
								label={item.CountryName}
								value={item.CountryName}
								key={item.CountryId}
							/>
						))}
					</MyPicker>
					<MyPicker
						selectedValue={this.state.StatePickerValueHolder}
						onValueChange={itemValue =>
							this.setState({
								StatePickerValueHolder: this.setStatePickerValueHolder(itemValue),
							})
						}
						textStyle={styles.pickerText}
						style={styles.dd}
						mode="dropdown"
						prompt="Select State"
					>
						<Picker.Item label={""} value={""} key={""} />
						{this.state.statesArray.map(item => (
							<Picker.Item
								label={item.StateName}
								value={item.StateName}
								key={item.StateId}
							/>
						))}
					</MyPicker>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Email"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handleEmail}
					/>
					<TextInput
						underlineColorAndroid="transparent"
						style={styles.textInput1}
						placeholder="Phone Number"
						placeholderTextColor="#dbdbdb"
						onChangeText={this.handlePhoneNo}
					/>
					{SSnno}
					<View style={styles.CheckboxView}>
						<CheckBox
							label=""
							onChange={checked =>
								this.setState({
									IsOtherTechniciansPerformingForYou: checked,
								})
							}
						/>
						<Text style={styles.CheckboxText}>
							Will you have other technicians performing work for you?(If yes, please
							select)
						</Text>
					</View>
					<TouchableOpacity style={styles.buttonContainer1}>
						<Text
							style={styles.buttonText}
							onPress={() =>
								this.registerUser(
									this.state.FirstName,
									this.state.MiddleName,
									this.state.LastName,
									this.state.UserName,
									this.state.Password,
									this.state.ConfirmPassword,
									this.state.Address,
									this.state.StateId,
									this.state.City,
									this.state.PostalCode,
									this.state.CountryName,
									this.state.StateName,
									this.state.Email,
									this.state.PhoneNo,
									this.state.SSNNo,
									this.state.taxWorkFor,
									this.state.TaxCompanyBASID,
									this.state.CompanyName,
									this.state.detail,
									this.state.CountryId,
									this.state.IsOtherTechniciansPerformingForYou
								)
							}
						>
							Sign Up
						</Text>
					</TouchableOpacity>
					<Text style={styles.subtitle}>Powered by Barrister!</Text>
				</ScrollView>
			</KeyboardAvoidingView>
		);
	}
}

export default TabNavigator(
	{
		Company: {
			screen: Company,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon name="list" size={35} color={tintColor} />
				),
			},
		},

		Individual: {
			screen: Individual,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => (
					<Icon name="account-circle" size={35} color={tintColor} />
				),
			},
		},
	},

	{
		tabBarPosition: "top",
		swipeEnabled: true,
		tabBarOptions: {
			style: {
				marginTop: 24,
			},
		},
	}
);

const styles = StyleSheet.flatten({
	click: {
		textDecorationLine: "underline",
		color: "#30336b",
		textAlign: "center",
		marginBottom: 10,
		marginTop: 30,
		fontSize: 25,
	},
	CheckboxView: {
		flexDirection: "row",
		paddingHorizontal: 35,
		marginBottom: 50,
		marginTop: 30,
	},
	// headerView:{
	// flexDirection: 'row',
	// paddingHorizontal:35,
	// paddingHorizontal:35,
	// marginBottom: 50,
	// marginTop:30
	// },
	Checkbox: {
		backgroundColor: "#f2f2f2",
		color: "#fff",
		borderRadius: 50,
		// size: 30,
	},
	CheckboxText: {
		paddingHorizontal: 30,
		fontSize: 20,
	},
	subtitle: {
		top: 60,
		fontSize: 15,
		color: "#BFBBC9",
		fontWeight: "100",
		textAlign: "center",
		marginBottom: 110,
	},
	buttonContainer1: {
		backgroundColor: "#2980b9",
		paddingVertical: 15,
		marginBottom: 50,
		top: 30,
		width: 300,
		alignSelf: "center",
	},
	//  buttonContainer: {
	//    fontSize:12,
	//   backgroundColor: '#2980b9',
	//   paddingVertical: 15,
	//   marginBottom: 50,
	//   top: 30,
	//   width: 50,
	//   height: 50,
	//   alignSelf: 'left',
	// },
	buttonText: {
		textAlign: "center",
		color: "#BFBBC9",
		// fontWeight: "70",
	},
	// buttonText1: {
	//   fontSize:30,
	//   textAlign: 'left',
	//   color: '#fff',
	//   marginTop:10
	// },
	RegForm: {
		backgroundColor: "#3399ff",
	},

	header: {
		color: "#67687c",

		textAlign: "center",

		opacity: 0.9,
		fontSize: 30,
		padding: 40,
		paddingBottom: 20,
		marginBottom: 20,
	},
	dd: {
		alignSelf: "center",
		marginBottom: 30,
		marginTop: 30,
		width: 300,
		// height: 40,
		backgroundColor: "#3399ff",
		borderBottomColor: "#fff",
		borderBottomWidth: 1,
		borderTopWidth: 0,
	},
	textInput1: {
		fontSize: 17,
		alignSelf: "center",
		height: 40,
		color: "#fff",
		borderBottomColor: "#fff",
		borderBottomWidth: 1,
		width: 300,
		marginBottom: 30,
		marginTop: 30,
	},
	textInput: {
		fontSize: 17,
		alignSelf: "center",
		height: 40,
		color: "#fff",
		borderBottomColor: "#fff",
		borderBottomWidth: 1,
		width: 300,
		marginBottom: 50,
		marginTop: 30,
	},

	pickerText: {
		color: "#fff",
		fontSize: 17,
	},
});
