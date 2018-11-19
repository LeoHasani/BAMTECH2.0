/* eslint-disable */
import React from "react";
import { Text, View, ActivityIndicator, Button, StyleSheet } from "react-native";
import GridView from "react-native-gridview";
import webService from "./webService";

export default class AcceptedByYou extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: null,
			isLoading: true,
		};
	}

	AcceptedByYou(techId, UserName, password) {
		let detail = "no";
		fetch(webService.AcceptedByYou, {
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
				if (json){
					success(json);
				}
			})
	}
	render() {
        let cnt=0;
		let Data = this.props.navigation.getParam("page");
		
		let password=this.props.navigation.getParam("password");
		this.AcceptedByYou(Data.TechnicianId, Data.TechnicianCode, password);
		if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
		}
else{
	if (this.state.values[0].status=="No"){
		return (<Text>There are no accpted work orders by you!</Text>)
	}
	else{
    return (
			<GridView
			data={this.state.values}
			itemsPerRow={1}
			renderItem={item => (
				<View style={styles.header} key={cnt++}>
					
						
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
	
		);}
	}}
}
const styles = StyleSheet.create({
	component: {
		color: "#ffdccc",
		width: 350,
		fontSize: 18,
		margin: 15,
	},

});