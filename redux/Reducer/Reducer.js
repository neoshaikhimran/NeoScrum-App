import DEMO_TYPE, { LOGIN_TYPE,LOGOUT } from '../Type/Type';

const initialState = {
  name:'',
  email:'',
  token:'',
  Feedback:'',
  isLogged:false
 };

const mainReducer = (state = initialState, action) => {
  console.log("reducer", action)
  switch (action.type) {
    case DEMO_TYPE: {
      console.log("email", action.payload)
      return {
        ...state,
        email:action.payload.email,
        isLogged : true,
        token :action.payload.token,
       
        
        
      }; 
    }
    case LOGIN_TYPE:{
      console.log("FEEDBACK IN STORE", action.payload)
      return{
      ...state,
      name:action.payload.name,
    email:action.payload.email,
    isLogged : true,
    token :action.payload.token,
    Feedback:action.payload.Fee

      }
    }
   
    case LOGOUT:{
      return{
        name:'',
  email:'',
  token:'',
  Feedback:'',
    isLogged:false
      }
    } 


    default:{
      return state;
    }

  }
};

export default mainReducer;