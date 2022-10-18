import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { backendURL,getURLCreateBSPPage1 } from '../utils/Url';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";

export default function BSP_1 () {


  const [gender, setGender] = React.useState('female');
  const [newSummary, setNewSummary] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [newFirstname, setNewFirstname] = React.useState('');
  const [newFamilyName, setNewFamilyName] = React.useState('');
  const [email, setEmail] = React.useState('');
  
	const [id, setID] = React.useState('1');
  const history = useNavigate();




	React.useEffect(() => {
    console.log(localStorage.getItem("bsp"))
    console.log((JSON.parse(localStorage.getItem("bsp")).page1_id))




  })


    function submitBSP_1(newSummary, address, newFirstname, newFamilyName, gender, email, history){
      var encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      if (cookie.load("Yes") == null) {
        alert('Add plan page 1 unsuccessfully, you will be lead to main page to restarted.')
        history('../')
      }
      var encrypted = encrypt.encrypt(cookie.load("Yes"))
      console.log(encrypted)

      const payload = JSON.stringify({
        firstName: newFirstname,
        lastName: newFamilyName,
        address: address,
        email: email,
        summary: newSummary,
        gender: gender,
     
      })
      console.log(payload)
      const result = fetch(getURLCreateBSPPage1(), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          id: (JSON.parse(localStorage.getItem("bsp")).page1_id),
          bspId: (JSON.parse(localStorage.getItem("bsp")).id),
          canvasId: (localStorage.getItem("canvasId")),
          'encrypted':encrypted
        },
        body: payload
      })
      result.then(data => {
        if (data.status === 200) {
          data.json().then(res => {
            alert('Add plan page 1 successfully')
            history('../BSP_2')
          })
        } else if (data.status === 400) {
          alert('Invalid Input')
        }
      })
    }
  

  return (
    <div style={{ width: '100%' }}>
      <div>
        <h2>PAGE 1 : About the Person with Disability </h2>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '80%' },
            'alignItem' : 'centre'
          }}
          noValidate
          autoComplete="off"
        >
           <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Please select gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              row
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <div >
            <FormLabel id="demo-controlled-radio-buttons-group">Please fill in personal information</FormLabel>
          <div style={{ display: 'flex', width: 'auto', 'justifyContent': 'center'}}>
          <TextField
            id="patientName" label="Patient Name" variant="outlined" placeholder="First name"
            style={{ width: '20%'}}
            onChange={(e) => setNewFirstname(e.target.value)} />
          <TextField
            id="familyName" label="Family Name" variant="outlined" placeholder="Last name"
            style={{ width: '20%'}}
            onChange={(e) => setNewFamilyName(e.target.value)} />
          </div>
          <div style={{ display: 'flex', width: 'auto', 'justifyContent': 'center'}}>
          <TextField
            id="Address" label="Address" variant="outlined" placeholder="address of patient"
            style={{ width: '20%'}}
            onChange={(e) => setAddress(e.target.value)} />
          <TextField
            id="email" label="Email" variant="outlined" placeholder="Email contact"
            style={{ width: '20%'}}
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          </div>
          <FormLabel id="demo-controlled-radio-buttons-group">Please provide a short summary about the person with disability</FormLabel>
          <div style={{'alignItem' : 'center'}}>
          <TextField
            id="summary" label="Summary of patient" variant="outlined" placeholder="Summary of patient"
            style={{ width: '60%'}}
            onChange={(e) => setNewSummary(e.target.value)} 
						multiline={true}
						rows={5}/>
          </div>
        </Box>
      </div>
        <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={() => submitBSP_1(newSummary, address, newFirstname, newFamilyName, gender, email, history)}> Submit</Button>
    </div>

  )
}