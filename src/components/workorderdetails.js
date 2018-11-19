import React, {Component} from 'react';

import {
	View,
	Text,
	Image,
	StatusBar,
	ActivityIndicator,
	ScrollView,
	StyleSheet,
	AsyncStorage,
} from "react-native";

class workorderdetails extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View
            style={{
                flexDirection: "row",
                backgroundColor: "#80bfff",
                paddingVertical: 15,
                paddingLeft: 10,

                alignItems: "center",
            }}
        >
            <Image
                source={require("./Images/im.png")}
                style={{ width: 20, height: 20 }}
            />
            <Text
                onPress={() => this.props.navigation.navigate("workorderdetails")}
                style={{ color: "#666666", paddingLeft: 9, fontSize: 16 }}
            >
                Notification
            </Text>
        </View>
        );
    }
                       
}
export default workorderdetails;