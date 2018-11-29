import React from 'react';

import { View,Text,ScrollView,Alert, Image,ImageBackground, Button,StyleSheet,ActivityIndicator,AsyncStorage  } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import webService from './webService';
import GridView from "react-native-gridview";
import CollapsingToolbar from 'react-native-collapse-view';
import CollapseView from "react-native-collapse-view";
import {TouchableOpacity,} from 'react-native' ;
import { Right } from 'native-base';
import Expand  from 'react-native-simple-expand';
export default class serviceOrder extends React.Component {
  

 
  

  
      // <Text style={{width: "1000%", fontSize:20}}>The technician ehfdegeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</Text>
     
      _onPressButton1() {
        Alert.alert('MONTGOMERY, Alabama- Get Directions ')
      }

      
      _onPressButton2() {
        Alert.alert('Technician will take direction from Onsi...')
      }

     
  

    render(){
      
      
     
    
      return(
        
        
     <View  style={{padding:5, height: "100%", width: "100%"}}>
<ImageBackground
        source={require("./Images/BG.png") }
        style={{
          height: 100,
          width: "100%",
          position: 'relative', // because it's parent
          top: 2,
          left: 2
        }}
      >
        <Text
          style={{
            alignSelf:"center", paddingTop:10, fontSize:30, color:"#c8fc97",fontStyle:"italic"
          }}
        >
          Work Order 
        </Text>
        <Text
          style={{
            alignSelf:"center", paddingTop:0, fontSize:25, color:"#c8fc97",fontStyle:"italic"
          }}
        >
          (5465464)
        </Text>
      </ImageBackground>

<ScrollView>

      
      <View>
               <TouchableOpacity onPress={() => this.setState({ open: !this.state.open })}>
                <Text>Toggle Menu</Text>
               </TouchableOpacity>
               <Expand value={this.state.open}>
                   <Text>
                    Some very very very very very very very very very very very very very very very very very very very very great content
                   </Text>
               </Expand>
           </View>


  
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
                          
                              <Text style={{marginLeft:10, fontSize:20, color:"black",fontWeight:"bold"}}>
                                Due Date :     
                              </Text>
                                
                                <Text style={{flexDirection:"column", marginLeft:10, fontSize:18, color:"black",fontWeight:"bold" }}>
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
                            <Text style={{fontSize:20, color:"black",fontWeight:"bold",marginLeft:50}}>
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
                          
                              <Text style={{marginLeft:10, fontSize:20, color:"black",fontWeight:"bold"}}>
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
                          Item Name:     MISCELLANEOUS
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
                              Site Location:
                            </Text>
                            <Text style={{fontSize:20, color:"black",fontWeight:"bold",marginLeft:50}}>
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
      
  

   