import {DEMO_TYPE,LOGIN_TYPE,LOGOUT} from '../Type/Type'
import axios from 'axios';


 export function fetchData(data){
  console.log("Payload data " , data) 
  return{
    type: DEMO_TYPE,
    payload:UserData
  }
  }

  export function rawdata(data){
    console.log("Payload data " , data)
    return{
      type:LOGIN_TYPE,
      payload:data
    }
  }


  export function logout(){
    return{
      type: LOGOUT
    }
  }

 








  export const mainFeedback = (UserData,Feedback) => {
    return async (dispatch)=> {
        const Feedbackemail={
            email:UserData.email,
            token:UserData.token
        }
        const Feed ={
          Feedba: Feedback
        }
        const Feedbackdata={
          Feedbackemail,Feed
        }
        let headers = {
          'accept': '*/*' ,
  'Authorization': `Bearer ${UserData.token}` , 
  'Content-Type': 'application/json' 
      };
      console.log("HEADER",headers)


        console.log("FEedback main data",Feedbackdata)
        await axios.post('https://quiet-harbor-07900.herokuapp.com/addFeadback',Feedbackdata,{
        'Header':{
            headers
        }}
        
        )
        .then((res) => {
            const response = res;
            
            console.log("Feedback response" , response); 
            
           
            
          })
    
          .catch((error) => {
            console.log(error);
           
          });
    }
  }