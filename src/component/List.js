import  React,{useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import celebrites from '../constants/celebrities.json'
import {Avatar,AccordionSummary,Accordion} from '@mui/material';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Usercard from './Usercard';


const useStyles = makeStyles((theme) =>
  createStyles({
    accordionRoot: {
      width:"100%"
    }
  })
);


 function UsersList() {
  const [expanded, setExpanded] = React.useState(false);
  const [celebritesList,setCelebritesList] = useState(celebrites)
   const classes = useStyles();
  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


   

  return (
    <div id="celebritieslist">
        <div className='celebrites-inner-container'>
            {celebritesList.map((userObj)=>{
        return   <>
      <Accordion expanded={expanded === userObj.id} onChange={handleChange(userObj.id)} classes={{ root: classes.accordionRoot }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <Avatar alt="Remy Sharp" src={userObj.picture} />
          <div className='name-container '>
            {`${userObj.first} ${userObj.last}`}
          </div>
         
        </AccordionSummary>
        <Usercard userObj={userObj}/>
      </Accordion>      
    </>
    })}

        </div>
    </div>
    
   
  );
}

export default UsersList
