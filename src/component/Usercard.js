import React from 'react'
import {AccordionDetails,IconButton} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment'


function Usercard ({userObj}) {
     return <>
      <AccordionDetails>
        <div className='user-details'>
        <div className='user-inner-container card-header'>
            <div className='inner-container-chlid'>Age</div>
            <div className='inner-container-chlid'>Gender</div>
            <div className='inner-container-chlid'>Country</div>
         
        
        </div>
        <div className='user-inner-container'>
             <div className='inner-container-chlid'>{`${moment().diff(userObj.dob, 'years')} Years`}</div>
            <div className='inner-container-chlid'>{userObj.gender}</div>
            <div className='inner-container-chlid'>{userObj.country}</div>
        </div>
        </div>
        <div className='discription-container'>
            <div className='d-flex'> <h4>Discription </h4></div>
            <div>
               <p>{userObj.description}</p>
            </div>
        </div>
        <div className='card-footer'>
             <IconButton>
             <EditIcon/>
            </IconButton>
            <IconButton
            onClick={()=>{console.log("hello")}}
            >
             <DeleteIcon style={{ fill: '#ff0000' }}/>
            </IconButton>
        </div>
            
        </AccordionDetails>
        </>

}

export default Usercard