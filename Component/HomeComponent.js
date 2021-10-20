import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';


class HomeContainer extends Component {


  
render(){
  return (
        <View style={styles.conatiner}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Feedback</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.feedbackText}>"{this.props.Feedback}"</Text>
          </View>

          <View style={styles.sender}>
            <Text style={{color:"black"}}>Sent by- {this.props.name}</Text>
            <Text style={{color:"black"}}>Posted on- {this.props.date}</Text>
          </View>
        </View>
      )}
  }
 
 


export default HomeContainer;

const styles = StyleSheet.create({
  conatiner: {
    
    width:"95%",
    alignItems: 'center',
    backgroundColor: "#fff",
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius:10,
    backgroundColor:"skyblue",

    
  },
  heading:{
    width:"100%",
     borderBottomColor:"black",
     borderBottomWidth:0.5,
     alignItems:"center",
     paddingVertical:10,
     

  },
  headingText:{
    color:"black",
    fontSize:18,
    letterSpacing:1,
    fontWeight:"normal"
  },
  content:{
    paddingVertical:5,
    width:"100%",
    paddingHorizontal:10
  },
  feedbackText:{
    fontSize:16,
    color:"black"
  },
  sender:{
   width:"100%",
   alignItems:"flex-end",
   paddingRight:10,
   paddingVertical:10
  }
});