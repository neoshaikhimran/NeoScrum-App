import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import React, { Component } from "react";
import { Text, View ,Image, _Text } from "react-native";
import { connect } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo';
import { logout } from "../redux/Action/Action";




class MyCustomDrawer extends Component{
constructor(props){
    super(props)
}


render(){


    

   return(
    <DrawerContentScrollView {...this.props}>
        <View style={{flexDirection:"column",justifyContent:"space-between"}}>
        <View>
            <View>
                   <View>
                       
                       <Image style={{alignSelf:"center",
                    height:200,
                    width:200,
                    borderRadius:50}} source={{uri:'https://cdn2.iconfinder.com/data/icons/avatars-2-7/128/16-512.png'}} />
                       
                   <Text style={{alignSelf:'center' ,fontWeight:'bold'}}>
                        {this.props.name}
                    </Text>
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}>
                        {this.props.email}
                    </Text>
                    </View>
            </View>

        </View>
        <DrawerItemList{...this.props}/>
        </View>
        <View style={{paddingTop:300}}>
            <Text style={{fontSize:22 ,alignSelf:"flex-start"}} onPress={()=>this.props.logout()}>{user} SignOut</Text>
        </View>
    </DrawerContentScrollView>
   )
}}

const user = <Entypo name={'log-out'} solid style={{fontSize:20}}/>;
const mapStateToProps = (state) => {
    return{
name:state.data.name,
email:state.data.email
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        logout: () => dispatch(logout()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCustomDrawer)