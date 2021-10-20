import React, { Component } from "react";

import { View,Image,Text,TouchableOpacity,TextInput,StyleSheet } from "react-native";
import { connect } from "react-redux";
import axios from "axios";



class FeedbackComponent extends Component{
   

    constructor(props) {
        super(props);
    
        this.state = {
          feedback: '',
          email: this.props.email,
          name: this.props.name,
          disabled:true,
          token:"",
         
        };
      }
    
     
    
      onAddFeebackClick = async () => {
        const data = {
           token: this.props.token,
          email: this.props.email,
           feadback: this.state.feedback,
           name:this.props.name,
         };
         console.log(data)
        const config={
          method: "post",
          url: "https://quiet-harbor-07900.herokuapp.com/addFeadback",
          headers: {
            'accept':' */*',
                     'Authorization': `Bearer ${this.props.token}`,
                    'Content-Type': 'application/json',
          },
          data:data,
        };
        await axios(config)
              .then(response => {
                console.log(response);
                  if (response.status == 200) {
                    alert('Feedback Submitted');
                    this.setState({feedback:""})
                   
                    
                  }
                else{
                    alert('Feedback not submitted!!')
                    
                }
                
                
              
              } )
                .catch((error) => {
                
                    console.log(error);
                    alert("Your feedback is not submitted or there might be network issue!!")
                   
                    }
                    
                    
                )
    
      };
      changedTextCount =(event) => {
        this.setState({feedback:event})
        if(this.state.feedback.length > 1 ||this.state.feedback.length <=100){
          this.setState({disabled:false})
          
          console.log(this.state.email)
        }
      }
           render(){
        return(
            <View>
                     <View style={style.mainView}>
            <View style={style.secondView}>
                        <View style={style.thirdView} > 
                        <Image style={style.imagestyle} source={{uri:'https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/16-512.png'}} />
                       </View>
                       <View>
                        <Text style={style.nameText}>{this.state.name}</Text>
                        </View>
                        <View
                            style={{
                                 borderBottomColor: 'black',
                                         borderBottomWidth: 1, paddingTop:10   }}/>
                            
                        <View style={{padding:10,}}>
                          <TextInput 
                          value={this.state.Charac}
                          style={{fontSize:20,borderColor:'grey',borderWidth:2,height:120,borderRadius:10,textAlignVertical:"top"}} placeholder="Write Your Feedback Here"
                          onChangeText={(event)=>this.changedTextCount(event)}
                          />  
                        </View>        
                        <View style={{paddingLeft:10,paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{fontSize:15}}> Max 100 Character </Text>
                        <Text style={{fontSize:15}}>{this.state.feedback.length}/100</Text>
                         </View>   
                         <TouchableOpacity style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                        <View style={{
                        backgroundColor: '#6495ed',
                         alignItems: 'center', 
                        borderRadius: 5,
                        height:60,
                        width:200,
                        alignSelf:'flex-end'
                            }}
                                    >
                             <Text style={{ color: 'white',fontWeight:'bold',fontSize:22,paddingTop:10 }} onPress={()=>this.onAddFeebackClick()}>Submit Feedback</Text>
                                </View>
                                </TouchableOpacity>
                                </View>

        </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
     
     token:state.data.token,
     
      
    };
  };


  const style = StyleSheet.create({
    mainView:{
      padding:10, backgroundColor:'white', borderWidth:1
    },
    secondView:{
      padding:10, backgroundColor:'white', borderWidth:1
    },
    thirdView:{
      padding:10,
    },
    imagestyle:{
      alignSelf:"center",width:120,height:120,borderRadius:120/2
    },
    nameText:{
      fontSize:22,fontWeight:"bold",alignSelf:"center"
    }

  })

  export default connect(mapStateToProps,null)(FeedbackComponent)