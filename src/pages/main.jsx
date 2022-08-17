import React from 'react';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


export default function Home () {

  const history = useNavigate();
  
  function addNewPlan(history) {
    const payload = JSON.stringify({
      name: 'Jan',
    });
    //change the port as you want
    const result = fetch('http://localhost:80/forms', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      }
    });
    result.then(ret => {
      ret.json().then(data => {
        console.log(data)
      })
    })
    
  }
  
  return (
    <div style={{ width: '100%' }}>
      <div style={{display : 'inline-block', flexWrap : 'nowrap'}}>
        <h2>Want to add new plan?</h2>
        <Button id="newPlan" variant="contained" color="secondary" onClick={() => addNewPlan(history)}>Add new Plan</Button>
      </div>
      <h2>Plans</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,

          //   maxWidth: 300,
        }}
      >
      </Box>
    </div>

  )
}
