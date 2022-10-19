import React from 'react';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import PlanCard from '../components/planCard';
import { backendURL, createNewBsp, getURLCreateNewBsp ,getAllPatient,getCanvasUserId} from '../utils/Url';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import cookie from "react-cookies";
import {token} from "../utils/Credentials";
import { publicKey } from '../utils/Credentials';
import JSEncrypt from 'jsencrypt';

const sampleList = [
  {
    fname:'jan',
    lname:'Zhang',
    address:'address',
    gender: 'fem',
    id: 1,
    email: 'a@a.com'
  },
  {
    fname:'Yue',
    lname:'Zhang',
    address:'address',
    gender: 'fem',
    id: 2,
    email: 'b@b.com'
  },
  {
    fname:'Yolo',
    lname:'Zhang',
    address:'address',
    gender: 'fem',
    id: 3,
    email: 'c@c.com'
  },
]


export default function Home () {

  const history = useNavigate();
  const [planList, setPlanList] = React.useState([]);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    alert(`sorted by ${event.target.value}`)

  };
  var encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);

  //!!patient ID
  localStorage.setItem("patientId", "631011582e8caa47169f3bb9");
  //!! practitioner ID
  localStorage.setItem("pracId", "63101d20dc949520271f97af");
  // !! canvasId
  localStorage.setItem("canvasId","1")
  React.useEffect(() => {
    //get CanvasLMS user Id
    //   const result = fetch(getCanvasUserId()), {
    //   method: 'GET', // *GET, POST, PUT, DELETE, etc.

    // });
    // result.then(ret => {
    //   ret.json().then(data => {
    //     localStorage.setItem("canvasId",data.uid)

    //   })
    // })
    if (cookie.load("token") == null){
    	     cookie.save("Yes", token)
    	     console.log(cookie.load("Yes"))
    	     //let cookieTime = new Date(new Date().getTime + 5 * 1000);
    }
    // if (cookie.load("Yes") == null) {
    //   alert('Token is missing, you have no access')
    //   history('../')
    // }
    var encrypted = encrypt.encrypt(cookie.load("Yes"))
     const result = fetch(getAllPatient((localStorage.getItem("pracId"))), {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'encrypted':encrypted
      }
    });
    result.then(ret => {
      ret.json().then(data => {
        setPlanList(data)

      })
    })

  }, [])


  //Create New BSP of a Patient
  function addNewPlan() {

    if (cookie.load("Yes") == null) {
      alert('Token is missing, you have no access')
      history('../')
    }
    var encrypted = encrypt.encrypt(cookie.load("Yes"))
    const result = fetch(getURLCreateNewBsp(), {
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
        history(`/BSP_1`)
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
          display: 'inline-block',
          flexWrap: 'nowrap',
          p: 1,
          m: 1,

          //   maxWidth: 300,
        }}
      >
        <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={'time'}>time</MenuItem>
          <MenuItem value={'patient'}>patient</MenuItem>
        </Select>
      </FormControl>
    </Box>
         {(planList || []).map((item) => {
          return (
            <PlanCard key={item.id} item={item} />
          )
        })}
      </Box>
    </div>

  )
}
