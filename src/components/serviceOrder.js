import React from 'react';

import { View,Text,ScrollView,Alert, Image,ImageBackground, Button,StyleSheet,ActivityIndicator,AsyncStorage  } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import webService from './webService';
import GridView from "react-native-gridview";
import CollapsingToolbar from 'react-native-collapse-view';
import CollapseView from "react-native-collapse-view";
import {TouchableOpacity,} from 'react-native' ;
import { Right } from 'native-base';


export default class serviceOrder extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      respon:null,
      isLoading:true,
		};
	}

  serviceOrder(techId,sorderId, UserName, password) {
		let detail = "no";
		
		fetch(webService.serviceOrder, {
			method: "POST",
			headers: {
				Host: "bam.barrister.com",
				"Content-Type": "application/x-www-form-urlencoded",
			},

			body:
				"TechnicianId=" +
				techId +
        "&ServiceOrderId="+
        sorderId+
        "&DeviceTokenId="+
        "123"+
				"&UserName=" +
				UserName +
				"&Password=" +
				password,
		})
			.then(response => response.json())
			.then(responseJson =>
        this.setState({
					respon: responseJson.TechnicianName,
					isLoading: false,
				})
      
			)
			.catch(err => {
				console.log("error"+err);
			})
			.then((json) => {
				if (json) {
					success(json);
				}
			})
	}
 
  

  
      // <Text style={{width: "1000%", fontSize:20}}>The technician ehfdegeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text>
     
      _onPressButton1() {
        Alert.alert('MONTGOMERY, Alabama- Get Directions ')
      }

      
      _onPressButton2() {
        Alert.alert('Technician will take direction from Onsi...')
      }

     
  

    render(){
      
      let test=this.props.navigation.getParam("sorderId");
 
     let prove=this.props.navigation.getParam("mData");
     console.log("prove"+prove);
     let psw=this.props.navigation.getParam("password");
   
    
      this.serviceOrder(prove.mainData.TechnicianId,test,prove.mainData.TechnicianCode,psw.password);
    
      return(
        
        
     <View  style={{padding:5,height: "100%",width: "100%"}}>

      <View style={{
          height: 100,
          width: "100%",
          position: 'relative', // because it's parent
          backgroundColor: "#d9d9d9",
          flexDirection: "row",
          paddingHorizontal: "10%"
        }}>
        <Text
          style={{
            alignSelf:"center", paddingTop:0, fontSize:30, color:"black",fontStyle:"italic",fontWeight:"bold"
          }}
        >
          Work Order 
        </Text>
        <Text
          style={{
            alignSelf:"center", paddingTop:0, fontSize:30, color:"black",fontStyle:"italic",fontWeight:"bold"
          }}
        >
          ({test})
        </Text>
        </View>

<ScrollView>

      
                    <TouchableOpacity>
                    <View style={styles.c1}>

                            <Image
                                        source={require("./Images/Dot.jpg")}
                                        style={{ width: 15, height: 15,borderRadius:10 }}
                            /> 
                            <Text 
                            style={{marginLeft:10, fontSize:20, color:"black"}}>
                            Current Distance:     545454 miles
                            </Text>
                    </View>
                    </TouchableOpacity>
          

                    <TouchableOpacity>
                        <View style={styles.c1}>

                          <Image
                              source={require("./Images/Dot.jpg")}
                              style={{ width: 15, height: 15,borderRadius:10 }}
                          />
                          <Text
                          style={{marginLeft:10, fontSize:20, color:"black"}}>
                          From base address:     37.01 miles
                          </Text>
                        </View>
                    </TouchableOpacity>


      
                    <TouchableOpacity>
                            <View style={styles.c1}>

                                  <Image
                                      source={require("./Images/Dot1.png")}
                                      style={{ width: 15, height: 15,borderRadius:10 }}
                                  />
                            
                                <Text style={{marginLeft:10, fontSize:20, color:"black",fontWeight:"bold",fontStyle:"italic"}}>
                                  Due Date :     
                                </Text>
                                  
                                  <Text style={{flexDirection:"column", marginLeft:10, fontSize:18, color:"black",fontStyle:"italic",fontWeight:"bold" }}>
                                  11/29/2018  3:00:00 PM
                                  </Text>
                              </View>
                            
                    </TouchableOpacity>
        


                    <TouchableOpacity>
                    <View style={styles.c1}>

                            <Image
                                        source={require("./Images/Dot.jpg")}
                                        style={{ width: 15, height: 15,borderRadius:10 }}
                            /> 
                            <Text 
                            style={{marginLeft:10, fontSize:20, color:"black"}}>
                            Service Type:     Installation
                            </Text>
                    </View>
                    </TouchableOpacity>


                    <TouchableOpacity  onPress={this._onPressButton1}>
                    <View style={styles.c1}>
                            <Image
                                            source={require("./Images/Dot.jpg")}
                                            style={{ width: 15, height: 15,borderRadius:10 }}
                                /> 
                              <Text style={{marginLeft:10, fontSize:20, color:"black"}}>
                                Site Location:
                              </Text>
                              <Text style={{fontSize:20, color:"black",fontWeight:"bold",marginLeft:50,fontStyle:"italic"}}>
                                Show...
                              </Text>
                    </View>
                    </TouchableOpacity>



                    <TouchableOpacity>
                            <View style={styles.c1}>

                                  <Image
                                      source={require("./Images/Dot1.png")}
                                      style={{ width: 15, height: 15,borderRadius:10 }}
                                  />
                            
                                <Text style={{marginLeft:10, fontSize:20, color:"black",fontWeight:"bold",fontStyle:"italic"}}>
                                  Work Detail    
                                </Text>
                              </View>
                            
                    </TouchableOpacity>

    

                    <TouchableOpacity>
                    <View style={styles.c1}>

                            <Image
                                        source={require("./Images/Dot.jpg")}
                                        style={{ width: 15, height: 15,borderRadius:10 }}
                            /> 
                            <Text 
                            style={{marginLeft:10, fontSize:20, color:"black"}}>
                            Item Code:     MISCSVC
                            </Text>
                    </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                    <View style={styles.c1}>

                            <Image
                                        source={require("./Images/Dot.jpg")}
                                        style={{ width: 15, height: 15,borderRadius:10 }}
                            /> 
                            <Text 
                            style={{marginLeft:10, fontSize:20, color:"black"}}>
                            Item Name:    {this.state.respon}
                            </Text>
                    </View>
                    </TouchableOpacity>

      
                    <TouchableOpacity>
                    <View style={styles.c1}>

                            <Image
                                        source={require("./Images/Dot.jpg")}
                                        style={{ width: 15, height: 15,borderRadius:10 }}
                            /> 
                            <Text 
                            style={{marginLeft:10, fontSize:20, color:"black"}}>
                            Will Parts Be On Site:     Yes
                            </Text>
                    </View>
                    </TouchableOpacity>
      

                    <TouchableOpacity  onPress={this._onPressButton2}>
                    <View style={styles.c1}>
                            <Image
                                            source={require("./Images/Dot.jpg")}
                                            style={{ width: 15, height: 15,borderRadius:10 }}
                                /> 
                              <Text style={{marginLeft:10, fontSize:20, color:"black"}}>
                                Problem Desc. :
                              </Text>
                              <Text style={{fontSize:20, color:"black",fontWeight:"bold",marginLeft:50,fontStyle:"italic"}}>
                                Show...
                              </Text>
                    </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                    <View style={styles.c1}>

                            <Image
                                        source={require("./Images/Dot.jpg")}
                                        style={{ width: 15, height: 15,borderRadius:10 }}
                            /> 
                            <Text 
                            style={{marginLeft:10, fontSize:20, color:"black"}}>
                            Parts Ordered:     Printer
                            </Text>
                    </View>
                    </TouchableOpacity>
                  


      </ScrollView>

     </View>

        
      );
      
    }}


    const styles=StyleSheet.create({
      c1: {flexDirection: "row",
      backgroundColor: "#ededed",
      paddingVertical: 15,
      paddingLeft: 10,
      alignItems: "center"

      },
      
    }
    );
      
  

   