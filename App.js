/* eslint-disable */
import React,{Component} from "react";
import { DrawerNavigator } from "react-navigation";
import { StackNavigator } from "react-navigation";
import LoginForm from "./src/components/Login";
import ForgotPassword from "./src/components/ForgotPassword";
import TabNavigator from "./src/components/SignUp";
import DefaultScreen from "./src/components/DefaultScreen";
import DrawerHeader from "./src/components/DrawerHeader";
import { Header } from "react-native-elements"; 
import  workorderdetails from "./src/components/workorderdetails";
import ViewAvailable from "./src/components/ViewAvailable";
import serviceOrder from "./src/components/serviceOrder";
import { SearchBar } from "react-native-elements";
import { HeaderBackButton } from 'react-navigation';
import AcceptedByYou from "./src/components/AcceptedByYou";
import BottomNavigation, {FullTab  } from "react-native-material-bottom-navigation";
const LOGO_URL = "https://i.imgur.com/BbYaucd.png";
import {
	Image,
	StatusBar,
	StyleSheet,
	Text,
	Button,
	TouchableOpacity,
	View,
	someMethod,
	Platform,
	ActivityIndicator,
} from "react-native"; 
import { Icon, Left } from "native-base";
class App extends React.Component{
	render(){
		return(
       <RootStack/>
		);
	}
  }
 
 

const Main= StackNavigator(
	
	{
		Main:{
			screen: serviceOrder
		},
		AcceptedByYou:{
			screen: AcceptedByYou
		},
		
		serviceOrder:{
			screen: serviceOrder
		},
	
		ViewAvailable: {
			screen: ViewAvailable
		}
	},
	
	{
		
		navigationOptions: ({ navigation }) => ({
		  drawerPosition: 'right',

		  initialRouteName: 'Main',
		  headerMode: 'screen',
		 headerStyle:{height:50},
		  drawerLabel: 'Main Screen',
		 headerRight:(
		 <HeaderBackButton name="chevron-left" onPress={() => navigation.goBack(null)}  size={35} color="white"/>),

		  headerTitle:(
			<View>
				
					
			<SearchBar 
				onChangeText={someMethod}
				inputStyle={{ backgroundColor: "#f2f2f2" }}
				containerStyle={{
					backgroundColor: "transparent",
					borderWidth: 0.2,
					borderBottomColor: "transparent",
					borderTopColor: "transparent",
					width:250,
					
				}}
				onClear={someMethod}
				placeholder="Type Here..."
			/>
			</View>
		  ),
		  headerLeft: (
			  <TouchableOpacity>
			<View>
			<StatusBar barStyle="dark-content" />
			<View style={{width:50}}>	
					<Icon name="md-menu" size={30} style={{marginLeft:20}}
						onPress={() => navigation.navigate('DrawerOpen')}
					/>				
			</View>
		  </View>
		  </TouchableOpacity>
		  ),
		}),
	}  
);
const MyDrawer = DrawerNavigator(
	{
		Main: {
			screen: Main,
		},
		
	},
	   

	{

		contentComponent: DrawerHeader, 
	},
	
);


const RootStack = StackNavigator(
	{
		Home: { screen: LoginForm }, 
	
		ForgotPassword: {
			screen: ForgotPassword,
		},
	
		SignUp: { screen: TabNavigator },

		Drawer: {
			screen: MyDrawer,
			navigationOptions: {
				header: null,
			},
		},
	},
	{
		headerMode: "none",
	}
);




export default App;