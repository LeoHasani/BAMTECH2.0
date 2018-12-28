import React from "react";
import { Text,TextInput, View,Alert, ActivityIndicator, Button, StyleSheet, AsyncStorage,Image,ScrollView, } from "react-native";
import GridView from "react-native-gridview";
import webService from "./webService";
import {TouchableOpacity,} from 'react-native' ;
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import { Item,List } from "native-base";
import { MultiPickerMaterialDialog } from 'react-native-material-dialog';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

export default class TechnicianProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			values: null,
            isLoading: true,
            text: '' ,
        };
    }

    render(){

       
        
        return(

            <ScrollView style={styles.container}>
                <View style={styles.header}>
                      <View style={styles.headerContent}>
                          <Image style={styles.avatar}
                            source={require("./Images/Technician.png")}/>
          
                          <Text style={styles.name}>Technician Name </Text>
                          <Text style={styles.userInfo}>Bas Code: BAS69421 </Text>
                          <Text style={styles.userInfo}>Tech. E-mail: </Text>
                          <TouchableOpacity><Text style={styles.userInfo}>Edit Photo </Text></TouchableOpacity>
                          <TouchableOpacity><Text style={styles.userInfo}>Change Password </Text></TouchableOpacity>
                      </View>
                </View>
  
                <View style={styles.body}>
                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Contact Information</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Other Personal Information</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Insurance</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Skills</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Available Hours</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>  
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Base Address</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity  onPress={() => { Alert.alert('English,Italian');}}>                    
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Language</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Pay Rates</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Item Serviced</Text>
                        </View>
                      </View>
                      </TouchableOpacity>

                      <TouchableOpacity>
                      <View style={styles.item}>
                        
                        <View style={styles.infoContent}>
                          <Text style={styles.info}>Review</Text>
                        </View>
                      </View>
                      </TouchableOpacity>


      
                </View>
        </ScrollView>
            


        );

    }

}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#DCDCDC",
      position: 'relative',
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:20,
      color:"#778899",
      fontWeight:'600',
      padding:5,
    },
    body:{
      backgroundColor: "#778899",
      height:510,
      // alignItems:'center',
      paddingLeft:10,
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:22,
      marginTop:20,
      color: "#FFFFFF",
    }
  });