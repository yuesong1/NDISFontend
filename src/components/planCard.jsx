import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getBSPById ,deletePatientById} from '../utils/Url';
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";

function PlanCard(props) {
  const item = props.item;
  const history = useNavigate();

  function feedback(bspId, history) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    if (cookie.load("Yes") == null) {
        alert('Missing token, you will be lead to main page to restarted.')
        history('../')
    }
    var encrypted = encrypt.encrypt(cookie.load("Yes"))
   
    const result = fetch(getBSPById(bspId), {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'encrypted':encrypted
      }
 
    });
    result.then(ret => {
      ret.json().then(data => {
      console.log(data)
      localStorage.setItem("bsp",JSON.stringify(data))
      console.log(localStorage.getItem("bsp"))
      history('../BSP')
       })
   })
    
  }
// Delete Patient with BSP
  var pracId=localStorage.getItem("pracId")
  function deleteFunc(patientId, history){
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    if (cookie.load("Yes") == null) {
        alert('Missing token, you will be lead to main page to restarted.')
        history('../')
    }
    var encrypted = encrypt.encrypt(cookie.load("Yes"))
    const result = fetch(deletePatientById(pracId,patientId), {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'encrypted':encrypted
      }
    });
    result.then(data => {
      if (data.status === 200) {
          alert('delete BSP successfully')
          window.location.reload(false)
      } else if (data.status === 400) {
        alert('Can not delete BSP')
      }
    })
  }

  
  function preview(bspId, history) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    if (cookie.load("Yes") == null) {
        alert('Missing token, you will be lead to main page to restarted.')
        history('../')
    }
    var encrypted = encrypt.encrypt(cookie.load("Yes"))
    const result = fetch(getBSPById(bspId), {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'encrypted':encrypted
      }
  
    });
    result.then(ret => {
      ret.json().then(data => {
      console.log(data)
      localStorage.setItem("bsp",JSON.stringify(data))
      console.log(localStorage.getItem("bsp"))
      history('../preview')
        })
    })
    
  }

  return (
    <Card key={item.id} sx={{ width: 800, p: 1, m: 2 , alignItem: 'inline-block', flexwarp: 'nowarp', boxShadow: '0 1px 8px #aa00ff'}}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Plan of {item.firstName} {item.lastName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.gender}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          address:{item.address}
        </Typography>
      </CardContent>
      <CardActions sx={{alignItem: 'inline-block'}}>
        <Button size="large" color="secondary" onClick={()=>preview(item.bsp,history)}>Preview</Button>
        <Button size="large" color="secondary"sx={{'paddingLeft': 30}} onClick={()=>feedback(item.bsp,history)}>Feedback</Button>
        <Button size="large" color="error"sx={{'paddingLeft': 30}} onClick={()=>deleteFunc(item.id,history)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

PlanCard.propTypes = {
  item: PropTypes.object,
}

export default PlanCard;
