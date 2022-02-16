import axios from 'axios'
import { baseUrl } from '../../constants/baseUrl'
import { GET_CRYPTO_DETAILS_START,
    GET_CRYPTO_DETAILS_SUCCESS,
    GET_CRYPTO_DETAILS_FAILED
 } from '../../constants/action.type'
 


export const getCryptoDetails = () => {
  return  async (dispatch) => {
    dispatch({type:GET_CRYPTO_DETAILS_START})
    try{
          const response = await axios.get(`${baseUrl}/products`)
          dispatch({type:GET_CRYPTO_DETAILS_SUCCESS,payload:response.data.result})
    }catch(err){
          dispatch({type:GET_CRYPTO_DETAILS_FAILED,payload:err.response.data})
    }
  }
}