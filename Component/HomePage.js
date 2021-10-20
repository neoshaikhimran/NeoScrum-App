import React,{Component} from 'react';
import {connect} from 'react-redux'
import { FlatList } from 'react-native';
import HomeContainer from './HomeComponent'

class HomePage extends Component{

constructor(props){
super(props)
this.state={
Feedback:[],

}
}

renderComponent = ({item}) =>{
  return(

  <HomeContainer name={item.name} Feedback={item.feadback } date={item.date} />

  )
  }



componentDidMount(){
  this.setState({
    Feedback:this.props.user.Feedback
  })
  console.log("In home screen",this.state.Feedback)
}


    render(){
        return(
          <FlatList keyExtractor={(item)=>item._id} data={this.state.Feedback} renderItem={this.renderComponent} />
            )
    }
  }
            



const mapStateToProps = (state) =>{
  return{
  user:state.data,

  }
}
          
            
export default connect (mapStateToProps,null)(HomePage)