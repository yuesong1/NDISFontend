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
import MultipleSelect from '../components/mutiSelect';
import { MultiSelectUnstyled } from '@mui/base';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import {getURLCreateBSPPage6} from '../utils/Url'
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";

export default function BSP_6 () {

  const peopleArray=[
    {
      id: 0,
      personResponse: ''
    }
  ]
  const trainArray = [
    {
      id: 0,
      personResponse:'',
      strategy : ''
    }
  ];

  const communicateArray = [
    {
      id: 0,
      personResponse:'',
      strategy : ''
    }
  ];

  const outlineArray = [
    {
      id: 0,
      personResponse:'',
      action : ''
    }
  ];
  
  const reviewArray = [
    {
      id: 0,
      personResponse:'',
      strategy : ''
    }
  ];

  const [people, setPeople] = React.useState(peopleArray);
  const [peopleList, setPeopleList] = React.useState([]);
  const [trainList, setTrainList] = React.useState(trainArray);
  const [communicateList, setCommunicateList] = React.useState(communicateArray);
  const [outlineList, setOutlineList] = React.useState(outlineArray);
  const [reviewList, setReviewList] = React.useState(reviewArray);
  const [timeline, setTimeline] = React.useState('');
  const [assess, setAssess] = React.useState('')
  const [consultant, setConsultant] = React.useState('')
  const id = localStorage.getItem('id');
  const history = useNavigate();


  function submitBSP_6(id, peopleList, trainList, communicateList, outlineList, reviewList,consultant, timeline, assess, history){
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    if (cookie.load("Yes") == null) {
    alert('Add plan page 6 unsuccessfully, you will be lead to main page to restarted.')
    history('../')
    }
    var encrypted = encrypt.encrypt(cookie.load("Yes"))
    console.log(encrypted)
    const payload = JSON.stringify({
      peopleInvolved:peopleList,
      trainMethods:trainList, 
      communications: communicateList, 
      outlines: outlineList, 
      reviewMethods: reviewList,
      consult: consultant,
      timeframe: timeline,
      socialValidity: assess,
    });
    console.log(payload)
    const result = fetch(getURLCreateBSPPage6(), {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        id: (JSON.parse(localStorage.getItem("bsp")).page6_id),
        'encrypted':encrypted
      },
      body: payload,
    });
    result.then(data => {
      if (data.status === 200) {
        data.json().then(res => {
          alert('Add plan page 6 successfully')
          history('../BSP')
        })
      } else if (data.status === 400) {
        alert('Invalid Input')
      }
    })
  }

  const addNew= () => {
    setPeople(s => {
      return [
        ...s,
        {
          id: people.length,
          personResponse:'',
        }
      ];
    });
  };

  const addTrainRow = () => {
    setTrainList(s => {
      return [
        ...s,
        {
          id: trainList.length,
          personResponse:'',
          strategy: ''
        }
      ];
    });
  };

  const addCommRow = () => {
    setCommunicateList(s => {
      return [
        ...s,
        {
          id: communicateList.length,
          personResponse:'',
          strategy: ''
        }
      ];
    });
  };

  const addOutlineRow = () => {
    setOutlineList(s => {
      return [
        ...s,
        {
          id: outlineList.length,
          personResponse:'',
          strategy: ''
        }
      ];
    });
  };

  const addReviewRow = () => {
    setReviewList(s => {
      return [
        ...s,
        {
          id: reviewList.length,
          personResponse:'',
          strategy: ''
        }
      ];
    });
  };


  function removeTrainRow(item){
    var removeIndex = trainList.findIndex(x => x.id ===item.id)
    const list = [...trainList]
    list.splice(removeIndex, 1);
    for(var i = removeIndex; i < list.length; i ++){
      list[i].id = list[i].id -1
    }
    setTrainList(list)
  }

  function removeOutlineRow(item){
    var removeIndex = outlineList.findIndex(x => x.id ===item.id)
    const list = [...outlineList]
    list.splice(removeIndex, 1);
    for(var i = removeIndex; i < list.length; i ++){
      list[i].id = list[i].id -1
    }
    setOutlineList(list)
  }

  function removeCommRow(item){
    var removeIndex = communicateList.findIndex(x => x.id ===item.id)
    const list = [...communicateList]
    list.splice(removeIndex, 1);
    for(var i = removeIndex; i < list.length; i ++){
      list[i].id = list[i].id -1
    }
    setCommunicateList(list)
  }

  function removeReviewRow(item){
    var removeIndex = reviewList.findIndex(x => x.id ===item.id)
    const list = [...reviewList]
    list.splice(removeIndex, 1);
    for(var i = removeIndex; i < list.length; i ++){
      list[i].id = list[i].id -1
    }
    setReviewList(list)
  }

  function removeRow(item){
    var removeIndex = people.findIndex(x => x.id ===item.id)
    const list = [...people]
    list.splice(removeIndex, 1);
    for(var i = removeIndex; i < list.length; i ++){
      list[i].id = list[i].id -1
    }
    setPeople(list)
    getPeopleFromList()
    
  }

  function savepersonResponseRow(item, e){
    var foundIndex = people.findIndex(x => x.id === item.id);
    people[foundIndex].personResponse = e;
    setPeople(people);
    getPeopleFromList();
  }

  function saveTrainRow(item, e){
    var foundIndex = trainList.findIndex(x => x.id === item.id);
    trainList[foundIndex].strategy = e;
    setTrainList(trainList);
  }

  function saveCommRow(item, e){
    var foundIndex = communicateList.findIndex(x => x.id === item.id);
    communicateList[foundIndex].strategy = e;
    setCommunicateList(communicateList);
  }

  function saveOutlineRow(item, e){
    var foundIndex = outlineList.findIndex(x => x.id === item.id);
    outlineList[foundIndex].strategy = e;
    setOutlineList(outlineList);
  }

  function saveReviewRow(item, e){
    var foundIndex = reviewList.findIndex(x => x.id === item.id);
    reviewList[foundIndex].strategy = e;
    setTrainList(reviewList);
  }

  function saveCommPersonResponse(item, e){
    var foundIndex = communicateList.findIndex(x => x.id === item.id);
    communicateList[foundIndex].personResponse = e;
    setCommunicateList(communicateList);
    getPeopleFromList();
  }

  function saveOutlinePersonResponse(item, e){
    var foundIndex = outlineList.findIndex(x => x.id === item.id);
    outlineList[foundIndex].personResponse = e;
    setOutlineList(outlineList);
    getPeopleFromList();
  }

  function saveReviewPersonResponse(item, e){
    var foundIndex = reviewList.findIndex(x => x.id === item.id);
    reviewList[foundIndex].personResponse = e;
    setTrainList(reviewList);
    getPeopleFromList();
  }

  function getPeopleFromList() {
    const list = []
    for (let index = 0; index < people.length; index++) {
      list.push(people[index].personResponse)
    }
    setPeopleList(list);
  }

  function saveTrainPersonResponse(item, e) {
    var foundIndex = trainList.findIndex(x => x.id === item.id);
    trainList[foundIndex].personResponse = e;
    setTrainList(trainList);
    getPeopleFromList();
  }

  



  return (
    <div style={{ width: '100%' }}>
      <div>
        <h2>PAGE 6 :  PBSP Implementation</h2>
        <h4>1.People involved in the implementation of this PBSP</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button onClick={addNew}>Add a new person</Button>
          {/* <Button onClick={getPeopleFromList}>save list</Button> */}
          {(people || []).map((item) => {
          return (
            <div style={{'alignItem' : 'center'}} key={item.id}>
            <TextField
            id="personResponse" label="personResponse" variant="filled" placeholder="Who they are?"
            onChange={(e) => savepersonResponseRow(item,e.target.value)}  />       
            <IconButton aria-label="delete" size='large' onClick={() => removeRow(item)}>
              <DeleteIcon  />
            </IconButton>
            </div>
          )
        })}
        </Box>
        <h4>2.How will implementers of this PBSP be trained to implement the proposed interventions?</h4>
        <Button onClick={addTrainRow}>Add a new strategy</Button><br/>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          display={'flex'}
        >
          
          {(trainList || []).map((item) => {
          return (
            <div style={{ width: '100%'}} key={item.id}>
            <TextField
            id="strategy_train" label="strategy" variant="filled" placeholder="How will implementers of this PBSP be trained"
            onChange={(e) => saveTrainRow(item,e.target.value)}/>  
            <FormControl sx={{ m: 1, width: '20%'}}>
            <InputLabel id="demo-multiple-name-label">personResponse</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-label"
                    value={item.personResponse}
                    onChange={(e)=>saveTrainPersonResponse(item, e.target.value)}
                >
                    {(peopleList || []).map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>     
            <IconButton aria-label="delete" size='large' onClick={() => removeRow(item)}>
              <DeleteIcon  />
            </IconButton>
            </div>
          )
        })}
        </Box>
        <h4>3.Outline the implementation plan</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button onClick={addOutlineRow}>Add a new strategy</Button>
          {(outlineList || []).map((item) => {
          return (
            <div style={{ width: '100%'}} key={item.id}>
            <TextField
            id="action_outline" label="Action" variant="filled" placeholder="Action"
            onChange={(e) => saveOutlineRow(item,e.target.value)}/>  
            <FormControl sx={{ m: 1, width: '20%'}}>
            <InputLabel id="demo-name-label">Person responsibile</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-label"
                    value={item.personResponse}
                    onChange={(e)=>saveOutlinePersonResponse(item, e.target.value)}
                >
                    {(peopleList || []).map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>     
            <IconButton aria-label="delete" size='large' onClick={() => removeRow(item)}>
              <DeleteIcon />
            </IconButton>
            </div>
          )
        })}
        </Box>

        <h4>4.How will implementers of this PBSP communicate with one another to discuss implementation?</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button onClick={addCommRow}>Add a new strategy</Button>
          {(communicateList || []).map((item) => {
          return (
            <div style={{ width: '100%'}} key={item.id}>
            <TextField
            id="strategy_comm" label="Action" variant="filled" placeholder="Strategy"
            onChange={(e) => saveCommRow(item,e.target.value)}/>  
            <FormControl sx={{ m: 1, width: '20%'}}>
            <InputLabel id="demo-name-label">Person responsibile</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-label"
                    value={item.personResponse}
                    onChange={(e)=>saveCommPersonResponse(item, e.target.value)}
                >
                    {(peopleList || []).map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>     
            <IconButton aria-label="delete" size='large'  onClick={() => removeRow(item)}>
              <DeleteIcon />
            </IconButton>
            </div>
          )
        })}
        </Box>

        <h4>5.How will PBSP implementation and goal achievement be reviewed and monitored?</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Button onClick={addReviewRow}>Add a new strategy</Button>
          {(reviewList || []).map((item) => {
          return (
            <div style={{ width: '100%'}} key={item.id}>
            <TextField
            id="strategy_review" label="Action" variant="filled" placeholder="Strategy"
            onChange={(e) => saveReviewRow(item,e.target.value)}/>  
            <FormControl sx={{ m: 1, width: '20%'}}>
            <InputLabel id="demo-name-label">Person responsibile</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-label"
                    value={item.personResponse}
                    onChange={(e)=>saveReviewPersonResponse(item, e.target.value)}
                >
                    {(peopleList || []).map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>     
            <IconButton aria-label="delete" size='large'  onClick={() => removeRow(item)}>
              <DeleteIcon />
            </IconButton>
            </div>
          )
        })}
        </Box>
        <h4>6.Timeframe for plan review</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{'alignItem' : 'center'}}>
          <TextField
            id="timeline" label="timeline assessment" variant="outlined" placeholder="timeline assessmentt"
            onChange={(e) => setTimeline(e.target.value)}/>
          </div>
        </Box>
        <h4>7.How did you assess the acceptability of the interventions proposed in this PBSP?</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{'alignItem' : 'center'}}>
          <TextField
            id="assess" label="assess assessment" variant="outlined" placeholder="assess"
            onChange={(e) => setAssess(e.target.value)} 
						multiline={true}
						rows={2}/>
          </div>
        </Box>
        <h4>8.Who did you consult with?</h4>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60%' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{'alignItem' : 'center'}}>
          <TextField
            id="consult" label="consult assessment" variant="outlined" placeholder="people"
            onChange={(e) => setConsultant(e.target.value)} 
						multiline={true}
						rows={2}/>
          </div>
        </Box>
      </div>
        <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={() => submitBSP_6(id, peopleList, trainList, communicateList, outlineList, reviewList, consultant, timeline, assess, history)}> Submit</Button>
    </div>

  )
}