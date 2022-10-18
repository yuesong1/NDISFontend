import React from 'react';
import Box from '@mui/material/Box';
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DragDropFile from '../components/dropFile'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LinearProgress from '@mui/material/LinearProgress'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MultipleSelect from '../components/mutiSelect';
import { MultiSelectUnstyled } from '@mui/base';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import {getURLCreateBSPPage2} from '../utils/Url'
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";

export default function BSP_2 () {

  const inputArr = [
    {
      id: 0,
      character:'',
      consulted : ''
    }
  ];

  const [newConsultant, setNewConsultant] = React.useState(inputArr);
  const [behavioural, setBehavioural] = React.useState('');
  const [non, setNon] = React.useState('')
  const id = localStorage.getItem('id');
  const history = useNavigate();


  function submitBSP_2(id, newConsultant, behavioural, non, history){
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);
        if (cookie.load("Yes") == null) {
          alert('Add plan page 2 unsuccessfully, you will be lead to main page to restarted.')
          history('../')
        }
        var encrypted = encrypt.encrypt(cookie.load("Yes"))
        console.log(encrypted)
    const payload = JSON.stringify({
      consultant: newConsultant,
      behavioural: behavioural,
      non: non,
    });
    console.log(payload)
    const result = fetch(getURLCreateBSPPage2(), {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        id: (JSON.parse(localStorage.getItem("bsp")).page2_id),
        'encrypted':encrypted
      },
      body: payload,
    });
    result.then(data => {
      if (data.status === 200) {
        data.json().then(res => {
          alert('Add plan page 2 successfully')
          history('../BSP_3')
        })
      } else if (data.status === 400) {
        alert('Invalid Input')
      }
    })
  }

  const addRow = () => {
    setNewConsultant(s => {
      return [
        ...s,
        {
          id: newConsultant.length,
          character:'',
          consulted : ''
        }
      ];
    });
  };


  function removeRow(item){
    var removeIndex = newConsultant.findIndex(x => x.id ===item.id)
    const list = [...newConsultant]
    list.splice(removeIndex, 1);
    for(var i = removeIndex; i < list.length; i ++){
      list[i].id = list[i].id -1
    }
    setNewConsultant(list)
  }

  function saveCharacterRow(item, e){
    var foundIndex = newConsultant.findIndex(x => x.id === item.id);
    newConsultant[foundIndex].character = e;
    setNewConsultant(newConsultant);
  }

  function saveConsultedRow(item, e){
    var foundIndex = newConsultant.findIndex(x => x.id === item.id);
    newConsultant[foundIndex].consulted = e;
    setNewConsultant(newConsultant);
  }



  return (
    <div style={{ width: '100%' }}>
      <div>
        <h2>PAGE 2 : Assessments and Data Gathering</h2>
        <h3>Persons consulted to prepare this PBSP</h3>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button onClick={addRow}>add a new consultant</Button>
          {(newConsultant || []).map((item) => {
          return (
            <div style={{'alignItem' : 'center'}}>
            <TextField
            id="character" label="character" variant="outlined" placeholder="Who they are?"
            onChange={(e) => saveCharacterRow(item,e.target.value)}  /> 
            <TextField
            id="consulted" label="consulted" variant="outlined" placeholder="How were they consulted?"
            onChange={(e) => saveConsultedRow(item, e.target.value)}  />       
              <IconButton aria-label="delete" size='large'  onClick={() => removeRow(item)}>
              <DeleteIcon />
            </IconButton>
            </div>
          )
        })}
        </Box>
        <h4>1.Outline the behavioural assessment approaches implemented to develop this PBSP</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '70%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{'alignItem' : 'center'}}>
          <TextField
            id="behavioural" label="behavioural assessment" variant="outlined" placeholder="behavioural assessmentt"
            onChange={(e) => setBehavioural(e.target.value)} 
						multiline={true}
						rows={2}/>
          </div>
        </Box>
        <h4>2.Additional non-behavioural assessments undertaken or reviewed to inform the development of this PBSP</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '70%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{'alignItem' : 'center'}}>
          <TextField
            id="non_behavioural" label="non-behavioural assessment" variant="outlined" placeholder="non-behavioural assessmentt"
            onChange={(e) => setNon(e.target.value)} 
						multiline={true}
						rows={2}/>
          </div>
        </Box>
      </div>
        <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={() => submitBSP_2(id, newConsultant, behavioural, non, history)}> Submit</Button>
    </div>

  )
}