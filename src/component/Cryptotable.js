import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {getCryptoDetails} from '../redux/actions/crypto.action'



export default function  CryptoTable () {
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getCryptoDetails())
  },[])
  return <>
       <div>hello</div> 
          
  </>
}
