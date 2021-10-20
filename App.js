
import React, { Component } from 'react';

import Navigation from './Navigation/StackNavigation';
import { store } from './redux/Store/StorePractice';
import {Provider} from 'react-redux';
//import SignUp from './Component/SignUP';




class App extends Component{
  render(){
  

  return(
    
      <Provider store={store}>
        <Navigation/>

      </Provider>
      

      
      
 
    );
  

  }
}

export default App









































































/*import React, {Component} from "react";
import { AppRegistry,
  StyleSheet,
  Text,
  View
 } from "react-native";


export default class Forscreen extends Component {
  render(){

    return(

      <View style={styles.container}> 
          <View style={styles.logo}>
              <Text style={styles.logoText}>
                  <Text>Neo</Text>
                  <Text style={{color:'red'}}>Scrum</Text>

              </Text>

          </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor:'white'
  },

  logo : {
    alignItems:'center',   
    flex:1,
    justifyContent:'center'
  },
  logoText:{
    color:'#3b363a',
    fontSize:50,
    fontWeight:'bold'
  }
});

AppRegistry.registerComponent('Forscreen',() => Forscreen)*/