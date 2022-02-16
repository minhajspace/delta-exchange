import { GET_CRYPTO_DETAILS_START,
    GET_CRYPTO_DETAILS_SUCCESS,
    GET_CRYPTO_DETAILS_FAILED
 } from '../../constants/action.type'


 const initailState = {
    coins : [],
    isLoading:false,
    error:[]
 }

 export default (state = initailState ,action) => {
  switch(action.type){
        case GET_CRYPTO_DETAILS_START :
          return {
              ...state ,
              isLoading : true
          }
        case GET_CRYPTO_DETAILS_SUCCESS : 
          return {
              ...state,
              coins : action.payload,
              isLoading:false
          }
        case GET_CRYPTO_DETAILS_FAILED : 
           return {
               ...state,
               isLoading:false,
               error : action.payload
           }
        default :
           return state
      
  }
 }