/* eslint-disable */
import React from "react";
import { Text, View, ActivityIndicator, Button, StyleSheet, AsyncStorage, } from "react-native";
import GridView from "react-native-gridview";
import webService from "./webService";
import serviceOrder from "./serviceOrder";
import {TouchableOpacity,} from 'react-native' ;

export default class ViewAvailable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: null,
			isLoading: true,
		};
	}


	goToServiceOrder(x,mainData,password){
		
		
		this.props.navigation.navigate("serviceOrder",{sorderId:x, mData: mainData,password:password} );
	
	}

	viewAvailable(techId, UserName, password) {
		let detail = "no";
		
		fetch(webService.ViewAvailable, {
			method: "POST",
			headers: {
				Host: "bam.barrister.com",
				"Content-Type": "application/x-www-form-urlencoded",
			},

			body:
				"techId=" +
				techId +
				"&detail=" +
				detail +
				"&UserName=" +
				UserName +
				"&Password=" +
				password,
		})
			.then(response => response.json())
			.then(responseJson =>
				this.setState({
					values: responseJson,
					isLoading: false,
				})
			)
			.catch(err => {
				console.log(err);
			})
			.then((json) => {
				if (json) {
					success(json);
				}
			})
	}
	render() {
		let cnt=0;
		
		let mainData = this.props.navigation.getParam("page");
		let password=this.props.navigation.getParam("password");
		this.viewAvailable(mainData.TechnicianId, mainData.TechnicianCode, password);
		
		
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}



else{


		return (
			
			<GridView
			data={this.state.values}
			itemsPerRow={1}
			renderItem={item => (
				<TouchableOpacity onPress={() => this.goToServiceOrder(item.WorkOrder, {mainData},{password})}>
				<View style={styles.header} key={cnt++}>
					<Text style={styles.head}
						style={styles.fheader}>
							{item.ServiceType+"("+ item.WorkOrder+")"}
					</Text>
						
					<Text
						style={styles.head}
						style={styles.cc}
					>
						Due Date: {item.DueDate}
					</Text>
					<Text
						style={styles.head}
						style={styles.c1}
					>
						Distance: {item.Distance}
					</Text>
					<Text
						style={styles.head}
						style={styles.c2}
					>
						Location: {item.LocationCity}
					</Text>
					<Text
						style={styles.head}
						style={styles.c3}
					/>
				</View>
				</TouchableOpacity>
			)}
		/>
	
		);
	}}
}
const styles = StyleSheet.create({
	head: {
		color: "#ffdccc",
		width: 350,
		fontSize: 18,
		margin: 15,
	},
	fheader:{
		marginTop:12,
		color:"green",
		fontSize: 18,
		marginLeft: 19,
	},
	cc: {
		color: "#4d4d4d",
		marginLeft: 19,
		margin: 11,
	},
	c1: {
		color: "#333333",
		fontSize: 13,
		margin: 11,
		width: 270,
		paddingLeft: 9,
	},
	c2: {
		color: "#4d4d4d",
		paddingLeft: 150,
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