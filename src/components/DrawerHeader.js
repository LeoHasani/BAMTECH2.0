/* eslint-disable */
import React from "react";
import {
	View,
	Text,
	Image,
	StatusBar,
	Button,
	ActivityIndicator,
	ScrollView,
	StyleSheet,
	AsyncStorage,
} from "react-native";
import {TouchableOpacity,} from 'react-native' ;
import serviceOrder from "./serviceOrder";
import ForgotPassword from "./ForgotPassword";
// import viewAvailable from "./prove";
const LOGO_URL = "https://i.imgur.com/BbYaucd.png";
import webService from "./webService";
import GridView from "react-native-gridview";
import VAvailable from "./Components";
export default class DrawerHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: null,
			isLoading: true,
		};
	}
	
	naviagteHome() {
		AsyncStorage.removeItem("id_token"),
			AsyncStorage.removeItem("password"),
			this.props.navigation.navigate("Home");
	}


	render() {

		let mainData = this.props.navigation.getParam("data");
		let password = this.props.navigation.getParam("password");
		
        // this.navigation.setParam({name: mainData.TechnicianName});
		
		console.log(AsyncStorage.getItem('password'));


               
		return (
			<ScrollView>

				<View
					style={{
						flexDirection: "row",
						backgroundColor: "#d9d9d9",	
						paddingVertical: 40,
						paddingLeft: 25,
						paddingTop: StatusBar.currentHeight + 20,
						alignItems: "center",
					}}
				>

					<Image
						source={require("./Images/Technician.png")}
						style={{ width: 80, height: 80, borderRadius: 40 }}
					/>

					<View>
						<Text
							style={{
								color: "black",
								paddingLeft: 15,
								fontSize: 16,
							}}
						>
							{mainData.TechnicianName}
						</Text>
					</View>
				</View>

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>				

			<TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>				
				<View
					style={{
						flexDirection: "row",
						backgroundColor: "#ededed",
						paddingVertical: 15,
						paddingLeft: 10,

						alignItems: "center",
					}}
				>
					<Image
						source={require("./Images/Nottification.png")}
						style={{ width: 30, height: 30, borderRadius: 15 }}
					/>
					
					<Text
						style={{ color: "#666666", paddingLeft: 9, fontSize: 18 }}
					>
						Notification
					</Text>
				</View>
			</TouchableOpacity>		

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>							

					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#cccccc",
							paddingVertical: 4,
							paddingLeft: 4,
						}}
					>
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Assigned,Missing Set ETA
						</Text>
					</View>

					<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>		
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/TodaysWork.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								>
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Today's Work
						</Text>
						</View>
					</View>
				</TouchableOpacity>	

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>						
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/OpenWorkOrders.png")}
							style={{ width: 25, height: 25,borderRadius:15 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Open Work Orders
						</Text>
						</View>
					</View>
				</TouchableOpacity>		

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>	
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/ClosedWorkOrders.jpg")}
							style={{ width: 28, height: 28,borderRadius: 15 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Closed Work Orders
						</Text>
						</View>
					</View>
				</TouchableOpacity>		

					<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>				
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/ReassignedWorkOrders.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Reassigned Work Orders
						</Text>
						</View>
					</View>
				</TouchableOpacity>		

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#cccccc",
							paddingVertical: 4,
							paddingLeft: 4,
						}}
					>
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Available Work Orders
						</Text>
					</View>

						<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>				

					<TouchableOpacity onPress={() => this.props.navigation.navigate("ViewAvailable", { page: mainData,password: password })}>
						<View
								style={styles.items}
							>
								<Image
									source={require("./Images/ViewAvailable.png")}
									style={{ width: 25, height: 25 }}
								/>
							
								<Text
									
									style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}
								>
									ViewAvailable
								</Text>
							
						</View>
					</TouchableOpacity>

					<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			
					
				<TouchableOpacity onPress={() => this.props.navigation.navigate("AcceptedByYou", { page: mainData,password: password })}>
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/AcceptedByYou.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text 
						
						style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Accepted By You
						</Text>
						</View>
					</View>
				</TouchableOpacity>	

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>					
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/DeclinedByYou.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Declined By You
						</Text>
						</View>
					</View>
				</TouchableOpacity>		

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#cccccc",
							paddingVertical: 4,
							paddingLeft: 4,
						}}
					>
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Pending Your Response
						</Text>
					</View>

						<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>	
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/PendingYourResponse.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Manage RFS
						</Text>
						</View>
					</View>
				</TouchableOpacity>		

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>	
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/PendingYourResponse.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Returnable Parts
						</Text>
						</View>
					</View>
				</TouchableOpacity>		

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

							
					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#cccccc",
							paddingVertical: 4,
							paddingLeft: 4,
						}}
					>
					
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Payment Center
						</Text>
						
					</View>

					<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			
						
				<TouchableOpacity>				
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/PaymentCenter.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Payment Center
						</Text>
						</View>
					</View>
				</TouchableOpacity>	

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#cccccc",
							paddingVertical: 4,
							paddingLeft: 4,
						}}
					>
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Testing Center
						</Text>
					</View>

					<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity>		
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/TestingCenter.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Barrister Certification Tests
						</Text>
						</View>
					</View>
				</TouchableOpacity>	

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>				

				<TouchableOpacity>	
					<View
						style={styles.items}
					>
						<Image
							source={require("./Images/TestingCenter.png")}
							style={{ width: 25, height: 25 }}
						/>
						<View style={{
									width: 500, height: 20
								}}
								 >
						<Text style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}>
							Barrister Assignment Tests
						</Text>
						</View>
					</View>
				</TouchableOpacity>

				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 1,
					}}
				/>			

				<TouchableOpacity onPress={() => this.naviagteHome()}>					
					<View
						style={{
							flexDirection: "row",
							backgroundColor: "#ededed",
							paddingVertical: 10,
							paddingLeft: 80,

							alignItems: "center",
						}}
					>

						<Image
							source={require("./Images/LogOut.png")}
							style={{ width: 40, height: 40, paddingHorizontal: 10, borderRadius: 20 }}
						/>

					<View style={{
								 	width: 500, height: 20, paddingBottom: 40
								}}
								 >
							<Text style={{ color: "#666666", paddingLeft: 9, paddingVertical: 5, fontSize: 18 }}>
								Log Out
							</Text>
						</View>
					</View>
				</TouchableOpacity>		
				<View
					style={{
						borderBottomColor: '#cccccc',
						borderBottomWidth: 2,
					}}
				/>			
				</ScrollView>
			);
		}
	
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 0,
	},
	items:{
		flexDirection: "row",
		backgroundColor: "#ededed",
		paddingVertical: 15,
		paddingLeft: 10,
	
		alignItems: "center",
	},

	title1: {
		backgroundColor: "#00cc00",
	},
	title: {
		color: "#ffffff",

		paddingTop: -5,
		width: 400,
		textAlign: "center",
		paddingRight: 50,
		fontSize: 28,
		borderBottomColor: "#e6e6e6",
		borderBottomWidth: 1,
	},
	head: {
		color: "#00b300",
		paddingTop: 10,
		width: 400,
		fontSize: 18,
		paddingLeft: 10,
		margin: 50,
	},

	cc: {
		textAlign: "center",
		color: "#4d4d4d",
		marginTop: 9,
		width: 100,
		fontSize: 13,
		paddingLeft: 11,
	},
	c1: {
		textAlign: "center",
		color: "#333333",
		marginTop: -50,
		paddingRight: 55,
		width: 280,
		fontSize: 13,
		paddingLeft: 130,
	},
	red: {
		fontSize: 20,
		color: "red",
	},
	c2: {
		textAlign: "center",
		color: "#4d4d4d",
		marginTop: -49,
		width: 320,
		paddingLeft: 230,
		fontSize: 13,
	},
	header: {
		backgroundColor: "#ffffff",
		borderBottomColor: "#e6e6e6",
		borderBottomWidth: 1,
		margin: 0,
	},
});
