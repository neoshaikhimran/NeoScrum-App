import React,{Component} from "react";
import { Text, TextInput, View,StyleSheet,Dimensions,TouchableOpacity, Alert,Image,KeyboardAvoidingView } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";


class SignUp extends Component{ 
    constructor( ) {
        super();
        this.state = {
          img:{},
          checkEmail: '',
          email:"",
          only:'',
          name:'',
          checkname:'',
          higt:0,
          wid:0,
          imguri:null
        };
      }

      cameraImage=()=>{
        ImagePicker.openCamera({
          cropping: true,
        }).then(image => {
          console.log(image);
          this.setState({higt:100})
          this.setState({wid:100})
          this.setState({img:image.path})
          this.setState({imguri:image.path})
        
          var name = image.path;
             this.setState({only : name.replace(/^.*[\\\/]/, '')})
        }).catch(e=>console.log(e));
      }


      validEmailid(event) {
        let regx =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        this.setState({checkEmail: ''});
        if (event == '') {
          this.setState({checkEmail: 'Please enter Email'});
          this.setState({email:event})
          return false 
        } else if (!regx.test(event)) {
          this.setState({checkEmail: 'Please Enter A valid Email'});
          this.setState({email:event})
          return false                 
        } else {
          this.setState({checkEmail: ''});
          this.setState({email:event})
          return true
        }
      }
    
      userNamevalid(f) {
        let reggexp = /^[a-zA-Z]{3,12}$/;
        this.setState({checkname: ''});
        if (f == '') {
          this.setState({checkname: 'Please enter Name'});
          this.setState({name:f})
          return false
        } else if (!reggexp.test(f)) {
          this.setState({checkname: 'Name Should of 3 character'});
          this.setState({name:f})
          return false
        } else {
          this.setState({checkname: ''});
          this.setState({name:f})
          return true
        }
      }
      
      log  ()  {
         if (this.state.email!="" && this.state.name!=""){
                  this.onDatapost()
           }
           else{
            Alert.alert("Please Enter Correct Details")
          }
        
        }
        
      


        onDatapost = async () => {
          var data = new FormData();
          let headers = {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        };
              let imgdata ={uri:this.state.img,
                    name:this.state.only,
                    type:'image/jpg'}
             console.log("image data",imgdata)
                   data.append('name',this.state.name);
               data.append('email',this.state.email);
                      data.append('profileImage',imgdata);
               console.log(" form data", data)
  
  
         return await axios.post('https://quiet-harbor-07900.herokuapp.com/register',data
              ,{
      
              "headers": {headers},})
          
              .then(function(response) {
                  if (response.status==200){
                    console.log("Register")
                    console.log(response.data)
                    Alert.alert("Password", response.data.password, "Please Take A screenShot of It And Login")
                    return response
                  }
                else{
                  console.log("User is already register")
                  Alert.alert("user is already register")
                }
  
                  
                  })
              
              
              .catch(function(error) {
              
              console.log(error);
              Alert.alert("User is already register")
              
              });
              
              
        }






  

    render()
    {
        return(
                
          <KeyboardAvoidingView style={{flex:1}} >
            <ScrollView contentContainerStyle={{flex:1}}>
             <View style={{flex:1,backgroundColor:'white'}} >
             
              <View style={styles.container1}>
                  <View style={{flexDirection: 'row', alignSelf:"center"}}>
                  
                  <Text style={{fontSize:50 , color:'black',fontWeight:"bold"   }}>Neo</Text>
                  
                
                  <Text style={{fontSize:50 , color:'red',fontWeight:"bold"   }}>Scrum</Text>
                  
                  </View>
              </View>  
              
                  <View style={{paddingTop:30,}} >
                  <Text style={{fontSize:30 , color:'black', alignSelf:"center",fontWeight:"bold"   }}>Register</Text>
                  </View>
                 
                  
                  <View>
                 <View style={{paddingTop:25}}>
                 <Text style={styles.Username}>Full Name</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput value={this.state.name} style={{height: 40,fontSize:20,margin: 12, borderBottomWidth: 2,paddingLeft: 10,}} placeholder="Username" onChangeText={(f)=>{this.userNamevalid(f)}} />
                 <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:7}}>{user}</TouchableOpacity> 
                 <Text style={{paddingLeft: 10, color: 'red'}}>{this.state.checkname}</Text>   
                 </View>
                 <View stle={{paddingTop:20}}>
                 <Text style={styles.Username}>Email</Text>
                 </View>
                 <View style={{ width:Dimensions.get('window').width}}>
                 <TextInput value={this.state.email} style={{height: 40,fontSize:20,margin: 12, borderBottomWidth: 2,paddingLeft: 12,}} placeholder="Test@gmail.com"  onChangeText={(event)=>{this.validEmailid(event)}} />
                <TouchableOpacity style={{alignSelf:"flex-end",position:"absolute", top:15,right:7}}>{eyeSlash}</TouchableOpacity>
                <Text style={{paddingLeft: 10, color: 'red'}}>{this.state.checkEmail}</Text>  
                 </View>
                 <View style={{paddingTop:15}}>
                     <Text onPress={this.cameraImage} style={{alignSelf:"center",fontSize:18}}>{ADDICON} Add a Picture</Text>
                     <View style={{borderRadius:15,justifyContent:'center',alignItems:'center',  }}>
                  <Image source={{uri:this.state.imguri}} style={{justifyContent:'center',alignItems:'center'}} height={this.state.higt} width={this.state.wid}/>
                  </View>
                 </View>
                 
            </View>  

            <View style={{width: Dimensions.get('window').width, padding: 10,paddingTop:20,borderRadius:20}}>
          <TouchableOpacity onPress={() => {this.log()}}>
           <View style={{
              backgroundColor: '#6495ed',
             alignItems: 'center', 
                justifyContent: 'center',
               borderRadius: 25,
               height:50
                }}
  >
             <Text style={{ color: 'black',fontWeight:'bold',fontSize:20 }}>Register</Text>
           </View>
             </TouchableOpacity>
          </View>
           
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')} >
                    <Text style={{fontWeight:"bold",alignSelf:"center"}}> Already have an Account? Sign up</Text>
                    </TouchableOpacity>
                   
            
        </View>   
        </ScrollView>
        </KeyboardAvoidingView>  
        
        )
    }

}


const ADDICON = <FontAwesome5 name={'plus'} solid style={{fontSize:15}} />;
const eyeSlash = <FontAwesome5 name={'user-plus'} solid style={{fontSize:20}} />;
const user = <FontAwesome5 name={'user'} solid style={{fontSize:20}} />;




const styles = StyleSheet.create({
    container1:{
        maxWidth: 500,
       justifyContent:"center",
       paddingTop:100,
    },
    Username:{
        fontWeight:"bold",
        fontSize:18,
        paddingLeft:10
    },
    
    })


export default SignUp