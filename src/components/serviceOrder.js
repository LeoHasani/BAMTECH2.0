import React from 'react';
import Panel from 'react-native-panel';
import Triangle from 'react-native-triangle';
import { View,Text,ScrollView,Alert,Image,ImageBackground, Button,StyleSheet,ActivityIndicator,AsyncStorage  } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import webService from './webService';
import GridView from "react-native-gridview";
import CollapsingToolbar from 'react-native-collapse-view';
import CollapseView from "react-native-collapse-view";
import {TouchableOpacity,} from 'react-native' ;
import { Right } from 'native-base';


export default class serviceOrder extends React.Component {

  renderFirstHeader() {
    return (
      
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
                  <Triangle
                   width={20}
                   height={15}
                   color={'#000000'}
                   direction={'down'}
                    />
        </View>
      
    );
  }

  renderSecondHeader() {
    return (
      
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
                  <Triangle
                      width={20}
                      height={15}
                      color={'#000000'}
                      direction={'down'}
                      />
        </View>
      
    );
  }



  constructor(props) {
		super(props);
		this.state = {
      respon:null,
      isLoading:true,
      techId:null,
		};
	}

  componentDidMount() {
    let sorderId=this.props.navigation.getParam("sorderId");
    let mData=this.props.navigation.getParam("mData");
    let pass=this.props.navigation.getParam("password");
    let techId=mData.mainData.TechnicianId;
    let UserName=mData.mainData.TechnicianCode;
    let password=pass.password;
    this.setState({
      techId:sorderId
    })
	
		
		fetch(webService.serviceOrder, {
			method: "POST",
			headers: {
				Host: "bam.barrister.com",
				"Content-Type": "application/x-www-form-urlencoded",
			},

			body:
				"techId=" +
				techId +
        "&workOrderId="+
        sorderId+
        "&detail="+
        "no"+
				"&UserName=" +
				UserName +
				"&Password=" +
				password,
		})
			.then(response => response.json())
			.then(responseJson =>{
        this.setState({
					respon: responseJson[0] ,
					isLoading: false,
        });
        console.log(responseJson);
      }
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
 
  

    render(){
     console.log(this.state.respon)

    
     if (this.state.isLoading) {
			return (
				<View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
			);
    }   
    
    else{
      return(
        
        
<View  style={{padding:5,height: "100%",width: "100%"}}>

    <View style={{
          height: 80,
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
          ({this.state.techId})
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
                            Current Distance:     X
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
                          From base address:     {this.state.respon.Distance
                          }
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
                                  {this.state.respon.DueDate}
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
                            Service Type:     {this.state.respon.ServiceType}
                            </Text>
                    </View>
                    </TouchableOpacity>


                    <Panel
                          style={styles.firstHeaderContainer}
                          header={this.renderFirstHeader}
                        >
                          <Text style={styles.myDescription}>
                          {this.state.respon.LocationCity}, {this.state.respon.LocationState}

                          
                          </Text>
                          
                    </Panel>



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
                            Item Code:     {this.state.respon.ItemCode}
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
                            Item Name:    {this.state.respon.ItemName}
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
                            Will Parts Be On Site:     {this.state.respon.WillPartOnSite}
                            </Text>
                    </View>
                    </TouchableOpacity>


                    <Panel
                          style={styles.firstHeaderContainer}
                          header={this.renderSecondHeader}
                        >
                          <Text style={styles.myDescription}>
                          {this.state.respon.ProblemDescription}
                          </Text>
                    </Panel>
        

                    <TouchableOpacity>
                    <View style={styles.c1}>

                            <Image
                                        source={require("./Images/Dot.jpg")}
                                        style={{ width: 15, height: 15,borderRadius:10 }}
                            /> 
                            <Text 
                            style={{marginLeft:10, fontSize:20, color:"black"}}>
                            Parts Ordered:     X
                            </Text>
                    </View>
                    </TouchableOpacity>


      </ScrollView>

      <View style={{flexDirection: "row",
                    backgroundColor: "#d9d9d9",
                    paddingHorizontal: "10%",
                    height: 50,
                    width: "100%",
                    position: 'relative',
                    alignItems:"center",
                    justifyContent: 'space-between'}}>
                    
                    <TouchableOpacity>
                     
                        <Text style={{fontSize: 18,fontStyle:"italic",fontWeight:"bold"}}>Accept</Text>
                      
                        </TouchableOpacity>
                    
                    <TouchableOpacity>
                      
                        <Text style={{alignItems: "center",fontSize: 18,fontStyle:"italic",fontWeight:"bold"}}>Counter Rate</Text>
                        
                        </TouchableOpacity>
                        
                    <TouchableOpacity>
                      
                        <Text style={{fontSize: 18,fontStyle:"italic",fontWeight:"bold"}}>Decline</Text>
                        
                        </TouchableOpacity>
      

      </View>                      


</View>

        
      );}
      
    }}


    const styles=StyleSheet.create({
      c1: {flexDirection: "row",
      backgroundColor: "#ededed",
      paddingVertical: 15,
      paddingLeft: 10,
      alignItems: "center"

      },
      firstHeaderContainer: {
        backgroundColor: '#ededed',
      },
    
      myDescription: {
        paddingHorizontal:35,
        flexDirection: "row",
        alignItems: "center",
        fontSize:20,
      },
    }
    );
      
  

   