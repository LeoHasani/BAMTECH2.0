/* eslint-disable */
import React from "react";
import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	someMethod,
	Platform,
	ActivityIndicator,
} from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import { Button } from "native-base";
import {Login} from "./Login";
import ViewAvailable from "./ViewAvailable";
import { SearchBar } from "react-native-elements";
import {DrawerHeader} from './DrawerHeader';
import BottomNavigation, {
	FullTab,
} from "react-native-material-bottom-navigation";
import LoginForm from "./Login";
const LOGO_URL = "https://i.imgur.com/BbYaucd.png";

const styles = StyleSheet.create({
	container1: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
		backgroundColor: "#FFF",
	},
	innerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
	header: { paddingTop: Platform.OS === "ios" ? 13 : 7 },
});


export default class DefaultScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "Andres Iniesta",
		};
		`	1`;
	}

	tabs = [
		{
			key: "SAVED",
			label: "SAVED",
			alignItems: "center",
			barColor: "#666666",
		},

		{
			key: "FEED",
			alignItems: "center",
			label: "FEED",
			barColor: "#E64A19",
		},
	];

	renderIcon = icon => ({ notActive }) => (
		<Icon size={24} color="white" name={icon} />
	);

	renderTab = ({ tab, isActive }) => (
		<FullTab
			isActive={isActive}
			key={tab.key}
			label={tab.label}
			renderIcon={this.renderIcon(tab.icon)}
		/>
	);
	
	
	render() {

		let screenDisplay = this.props.navigation.getParam("page");
		let values = this.props.navigation.getParam("data");
         
		if (screenDisplay == null) {
			screenDisplay = (
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					
				</View>
			);
		}
		return (
			<View style={styles.container1}>
				<StatusBar barStyle="dark-content" />
				<View style={styles.header}>
					<BottomNavigation style={{marginTop:-26}}
						onTabPress={newTab => this.setState({ activeTab: newTab.key })}
						renderTab={this.renderTab}
						tabs={this.tabs}
					/>
				</View> 
				{screenDisplay}
			</View>
			
			
		);
	}
}
