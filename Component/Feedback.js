import React, { Component } from "react";
import { View,Text,Image,TouchableOpacity, Alert,StyleSheet } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";

import axios from "axios";
import FeedbackComponent from "./FeedbackComponent";

class Feedback extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
      token:'',
      Filterdata:[],
      search:''
    }
  }
    
  

  renderComponent = ({item}) =>{
    return(

    <FeedbackComponent name={item.name} email={item.email} token={item.token}/>

    )
    }
componentDidMount(){
var config = {
  method: "post",
  url: "https://quiet-harbor-07900.herokuapp.com/GetAllRecievers",
  headers: {
      'accept':' */*',
       'Authorization': `Bearer ${this.props.token}`,
      'Content-Type': 'application/json', 

  },
  data:{'token':this.props.token},
};



 axios(config)
.then(response => {

  console.log(response.data);
  if (response.status === 200) {
      this.setState({
          data: response.data,
          Filterdata:response.data,
          search:""

          
      });
      console.log("after component did mounnt",this.state.data)

  }
  
  })
  .catch(function(error) {
  
      console.log(error);
      alert("There might me an network error")
      
      }

  )

  

}

search=(event)=>{
if(event.length!==0){
  const newdata = this.state.data.filter(function(item){
const itemdata = item._id?item.name.toUpperCase():"".toUpperCase()
const textdata = event.toUpperCase()
return itemdata.indexOf(textdata) > -1;



  }) 
this.setState({Filterdata:newdata})
this.setState({search:event})

}
else{
  this.setState({
    Filterdata:this.state.data
  })
  this.setState({search:event})
}
}





render(){
    return(
      <SafeAreaView>
      
      <TextInput
                      style={style.InputText}
                      onChangeText={(event) => this.search(event)}
                      value={this.state.search}
                      placeholder="Search Here"
                  />

          <FlatList keyExtractor={(item)=>item._id} data={this.state.Filterdata}  renderItem={this.renderComponent} >

          </FlatList>
       
        </SafeAreaView>

    )
}
}

const mapStateToProps = (state) => {
  return {
   
   token:state.data.token,
   
    
  };
};

const style = StyleSheet.create({

  InputText:{
    height:50,borderWidth:2,borderColor:'black',margin:10
  }

})


export default connect(mapStateToProps,null)(Feedback)