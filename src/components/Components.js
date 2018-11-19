/* eslint-disable */
import React from "react";
import {
	View,
	Text,
	Image,
	StatusBar,
	ActivityIndicator,
	ScrollView,
	StyleSheet,
	Button,
	AsyncStorage,
} from "react-native";
import ViewAvailable from "./ViewAvailable";
import ForgotPassword from "./ForgotPassword";
// import viewAvailable from "./prove";
const LOGO_URL = "https://i.imgur.com/BbYaucd.png";
import webService from "./webService";
import GridView from "react-native-gridview";

class Components extends React.Component {
	_onPress() {}
	viewAvailableComponent(x) {
		let cnt = 0;
		return (
			<GridView
				data={x}
				itemsPerRow={1}
				renderItem={item => (
					<View style={styles.header} key={cnt++}>
						<View style={styles.button}>
							<Button
								icon={{ name: "filter-list", style: { marginRight: 0 } }}
								title={item.ServiceType+"("+ item.WorkOrder+")"}
								backgroundColor="#cccccc"
								color="#cccccc"
								onPress={this._onPress}
							/>
						</View>

						<Text
							style={styles.head}
							onPress={() => this.props.navigation.navigate("Home")}
							style={styles.cc}
						>
							Due Date: {item.DueDate}
						</Text>
						<Text
							style={styles.head}
							onPress={() => this.props.navigation.navigate("log")}
							style={styles.c1}
						>
							Distance: {item.Distance}
						</Text>
						<Text
							style={styles.head}
							onPress={() => this.props.navigation.navigate("Home")}
							style={styles.c2}
						>
							Location: {item.LocationCity}
						</Text>
						<Text
							style={styles.head}
							onPress={() => this.props.navigation.navigate("Home")}
							style={styles.c3}
						/>
					</View>
				)}
			/>
		);
	}
}

const VAvailable = new Components();
export default VAvailable;

const styles = StyleSheet.create({
	head: {
		color: "#00b300",
		width: 350,
		fontSize: 18,
		margin: 15,
	},

	cc: {
		color: "#4d4d4d",
		marginLeft: 59,
		margin: 11,
	},
	c1: {
		color: "#333333",
		fontSize: 13,
		margin: 11,
		width: 270,
		paddingLeft: 25,
	},
	red: {
		fontSize: 20,
		color: "red",
	},
	c2: {
		color: "#4d4d4d",
		paddingLeft: 180,
		width: 300,
		marginTop: -29,
		margin: 11,
		fontSize: 13,
	},
	button: {
		marginTop: 0.5,
		backgroundColor: "#cccccc",
		borderRadius: 1,
		shadowRadius: 10,
		shadowOpacity: 0.25,
	},

	header: {
		backgroundColor: "#ffffff",
		borderBottomColor: "#e6e6e6",
		borderBottomWidth: 1,
		margin: 0,
	},
});
