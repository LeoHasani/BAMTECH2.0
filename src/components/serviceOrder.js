import React from 'react';
import { View,Text,ScrollView,Alert, Button,StyleSheet,ActivityIndicator  } from "react-native";
import webService from './webService';
export default class serviceOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: null,
      isLoading: true,
    };
  }
  serviceOrder(techId, UserName,password){
    let detail = "no";
    fetch(webService.serviceOrder, {
      method: "POST",
      headers: {
        Host: "testbam.barrister.com",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
      "techId=" + 
      techId +
      "&detail=" +
      detail +
      "&UserName=" +
      UserName +
      "&pssword=" +
      password,
    })

    .then(response => response.json())
    .then(responseJson => 
      this.setState({
        values:responseJson,
        isLoading: true,
      })
      )
      .catch(err => {
        console.log(err);
      })
      .then((json)=> {
        if(json) {
          success(json);
        }
      })
  }
    render(){
      let tnc=0;   
      let mainData = this.props.navigation.getParam("page");
      
      let password = this.props.navigation.getParam("password");
      this.serviceOrder(mainData.TechnicioanId, mainData.TechnicioanCode, password);
    
      if(this.state.isLoading){
        return(
          <View style={{ flex: 1, paddingTop: 20 }}>
					<ActivityIndicator />
				</View>
        );
      }
      else{
      return(
          <View style={styles.container}data={this.state.values}
          itemsPerRow={1}>
            <ScrollView>
               <View style={styles.cont}key={tnc++}> 
                      <Text style={styles.wk}onPress={() => this.props.navigation.navigate("serviceOrder")}>
                      </Text>
                      <Text style={styles.cc}  
                      onPress={() => this.props.navigation.navigate("serviceOrder")}
                      style={styles.fff}>
                      Current Distance: {item.CurrentDistance} 
                      </Text>
                      <Text style={styles.cc}onPress={() => this.props.navigation.navigate("serviceOrder")}
                      style={styles.fff}>
                      From base address: {item.Frombaseaddress} 
                      </Text>
               </View>
               <View style={styles.cont}> 
                      <Text style={styles.wk}onPress={() => this.props.navigation.navigate("serviceOrder")}
                      style={styles.wkk}>
                       Due Date : {item.DueDate} 
                     </Text>
               </View>
                      <View style={styles.cont}>
                      <Text style={styles.cc}
                       onPress={() => this.props.navigation.navigate("serviceOrder")}
                       style={styles.fff}>
                      Service Type: {item.ServiceType} 
                      </Text>
                      <Text style={styles.cc}
                      onPress={() => this.props.navigation.navigate("serviceOrder")}
                      style={styles.fff}>
                      Site Location: {item.SiteLocation} 
                      </Text>  
               </View>
               <View style={styles.cont}>
                      <Text style={styles.wk}onPress={() => this.props.navigation.navigate("serviceOrder")}>
                       Work Detail : {item.WorkDetail}</Text>
                      <Text style={styles.cc}
                       onPress={() => this.props.navigation.navigate("serviceOrder")}
                       style={styles.fff}>
                       Item Code: {item.ItemCode}
                      </Text>
                      <Text style={styles.cc}
                       onPress={() => this.props.navigation.navigate("serviceOrder")}
                       style={styles.fff}>
                       Item Name: {item.ItemName} 
                     </Text>
               <View style={styles.cont}>
                      <Text style={styles.wk}onPress={() => this.props.navigation.navigate("serviceOrder")}>
                       Work Detail : {item.WorkDetail}
                      </Text>
                      <Text style={styles.cc}
                       onPress={() => this.props.navigation.navigate("serviceOrder")}
                       style={styles.fff}>
                       Will Parts be On Site: {item.WillPartsbeOnSite} 
                      </Text>  
                      <Text style={styles.cc}
                       onPress={() => this.props.navigation.navigate("serviceOrder")}
                       style={styles.fff}>
                       Problem Desc: {item. ProblemDesc} </Text> 
               </View>
               <View style={styles.cont}>
                      <Text style={styles.wk}onPress={() => this.props.navigation.navigate("serviceOrder")}>
                       Work Detail : {item.WorkDetail}
                      </Text>                 
                      <Text style={styles.cc}
                       onPress={() => this.props.navigation.navigate("serviceOrder")}
                       style={styles.fff}>
                       Parts Ordered: {item.PartsOrdered}
                      </Text>  
               </View>
               <View style={styles.cont}>
               </View>
               </View>
               </ScrollView>
               <View style={styles.btt}>
               <View style={{flexDirection: 'row',marginTop:-37}}>
               <View style={{flex:1 , marginRight:7}} >
                      <Button title="Accept" color="#002b80" onPress={() => {
                          Alert.alert('You tapped the button!'); }}>
                      </Button>
               </View>
               <View style={{flex:1,marginRight:7}} >
                      <Button title="CounterRate" color="#002b80" onPress={() => {
                           Alert.alert('You tapped the button!'); }}>
                      </Button>
               </View>
               <View style={{flex:1,marginRight:2}} >
                      <Button title="Decline"  color="#002b80"   onPress={() => {
                           Alert.alert('You tapped the button!'); }}>
                      </Button>
               </View>
               </View>
            </View>
        </View>
      )
    }
  }
  } 
  const styles = StyleSheet.create({
    container:{
       backgroundColor: "#cceeff"
    },
    wk:{
      backgroundColor: "#66ccff",
      fontSize: 13,
      width:305,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft:10,
      paddingTop:13,
      height:50,
      marginTop:2,
      color:"#000000",
      borderRadius: 25
    },
    cc:{
      backgroundColor: "#99ddff",
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:15,
      paddingTop:13,
      height:50,
      marginTop:9,
      color: "#000033"
    },
    fff: {
      paddingLeft: 220,
      marginTop: -36
    },
    cont:{
      marginTop: 25
    },
    cc:{
      backgroundColor: "#99ddff",
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      marginTop:13,
      color: "#000033"
    },
    fff:{
      paddingLeft: 220,
      marginTop: -36
    },
    cont:{
      marginTop: 25
    },
    wk:{
      backgroundColor: "#66ccff",
      fontSize: 13,
      width:305,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      color:"#000000",
      borderRadius: 25
    },
    wkk: {
      paddingLeft: 165,
      marginTop: -36,
      color:"#000000"
    },
    cc:{
      backgroundColor: "#99ddff",
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      marginTop:13,
      color: "#000033"
    },
    fff:{
      paddingLeft: 200,
      marginTop: -36
    },
    cc:{
      backgroundColor: "#99ddff",
      fontSize: 13,
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      color: "#000033",
      marginTop:13,
    },
    fff:{
      paddingLeft: 195,
      marginTop: -36
    },
    cont:{
     marginTop: 25
    },
    wk:{
      backgroundColor: "#66ccff",
      fontSize: 13,
      width:305,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft:10,
      paddingTop:13,
      height:50,
      color:"#000000",
      borderRadius: 25
    },
    cc:{
      backgroundColor: "#99ddff",
      fontSize: 13,
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      color: "#000033",
      marginTop:13,
    },
    fff:{
      paddingLeft: 230,
      marginTop: -36
    },
    cc:{
      backgroundColor: "#99ddff",
      fontSize: 13,
      width:300, 
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      color: "#000033",
      marginTop:13,
    },
    fff:{
      paddingLeft: 230,
      marginTop: -36
    },
    cont:{
      marginTop: 25
     },
    wk:{
      backgroundColor: "#66ccff",
      fontSize: 13,
      width:305,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft:10,
      paddingTop:13,
      height:50,
      color:"#000000",
      borderRadius: 25
    },
    cc:{
      backgroundColor: "#99ddff",
      fontSize: 13,
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      color: "#000033",
      marginTop:13,
    },
    fff:{
      paddingLeft: 230,
      marginTop: -36
    },
    cc:{
      backgroundColor: "#99ddff",
      fontSize: 13,
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      color: "#000033",
      marginTop:13,
    },
    fff:{
      paddingLeft: 230,
      marginTop: -36
    },
    cont:{
      marginTop: 25
     },
    wk:{
      backgroundColor: "#66ccff",
      fontSize: 13,
      width:305,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft:10,
      paddingTop:13,
      height:50,
      color:"#000000",
      borderRadius: 25
    },
    cc:{
      backgroundColor: "#99ddff",
      fontSize: 13,
      width:300,
      marginLeft: 23,
      marginRight: 23,
      paddingLeft:13,
      paddingTop:13,
      height:50,
      color: "#000033",
      marginTop:13,
    },
    fff:{
      paddingLeft: 200,
      marginTop: -36
    },
    cont:{
      marginTop: 53
     },
  })
  
