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
import MultipleSelect8 from '../components/mutiSelect8';
import {getURLCreateBSPPage3} from '../utils/Url'
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";

export default function Functional_Behavioural_Assessment () {

  const settingArray = [
    {
      id: 0,
      settingEvent:'',
      trigger : '',
      consequence : ''
    }

  ];

const pageSettingArray = [
    {
        id: 0,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 1,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 2,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 3,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 4,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 5,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 6,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 7,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 8,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 9,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 10,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 11,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 12,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 13,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 14,
        settingEvent:'',
        trigger : '',
        consequence : ''
    },
    {
        id: 15,
        settingEvent:'',
        trigger : '',
        consequence : ''
    }

 ];

  const [theFunction, setFunction] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [setting, setSetting] = React.useState(settingArray);
  const [summary, setSummary] = React.useState('');
  const [alternative, setAlternative] = React.useState('');
  const id = localStorage.getItem('id');
  const history = useNavigate();

  const informationArray = [
    {
      id: 0,
      type:theFunction,
      description:description,
      events:pageSettingArray,
      summary:summary,
      alternative:alternative

    }
  ];


  const [theInformation, setTheInformation] = React.useState(informationArray);




  function submitEverything(theInformation){
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);
        if (cookie.load("Yes") == null) {
          alert('Add plan page 3 unsuccessfully, you will be lead to main page to restarted.')
          history('../')
        }
        var encrypted = encrypt.encrypt(cookie.load("Yes"))
        console.log(encrypted)
      for(var i = 0; i < theInformation.length; i ++){
              const newEvents = theInformation[i].events.filter(v=>v.trigger!='')
              theInformation[i].events = newEvents
      }

    const payload = JSON.stringify({
            functions:theInformation,
    });
    console.log(payload)
    const result = fetch(getURLCreateBSPPage3(), {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        id: (JSON.parse(localStorage.getItem("bsp")).page3_id),
        'encrypted':encrypted
      },
      body: payload,
    });
    result.then(data => {
      if (data.status === 200) {
        data.json().then(res => {
          alert('Add plan page 3 successfully')
          history('../BSP_4')
        })
      } else if (data.status === 400) {
        alert('Invalid Input')
      }
    })
  }



   const addRow = () => {
      setSetting(e => {
        return [
          ...e,
          {
            id: setting.length,
            settingEvent:'',
            trigger : '',
            consequence : ''
          },
        ];
      });
    };



      const addNewOne = () => {
          setTheInformation(e => {
            return [
              ...e,
              {
                 id: theInformation.length,
                 type:'',
                 description : '',
                 events : pageSettingArray,
                 summary : '',
                 alternative : ''
              }
            ];
          });
        };


    function removeRow(item){
      var removeIndex = setting.findIndex(x => x.id ===item.id)
      const list = [...setting]
      list.splice(removeIndex, 1);
      for(var i = removeIndex; i < list.length; i ++){
        list[i].id = list[i].id -1
      }
      setSetting(list)
    }

    function removeThePlan(page){
          var removeIndex = theInformation.findIndex(x => x.id ===page.id)
          const list = [...theInformation]
          list.splice(removeIndex, 1);
          for(var i = removeIndex; i < list.length; i ++){
            list[i].id = list[i].id -1
          }
          setTheInformation(list)
        }



    function saveFunctionRow(page, e){
      var foundIndex = theInformation.findIndex(x => x.id === page.id);
      theInformation[foundIndex].type=e;
      setFunction(e);
      setTheInformation(theInformation);
    }

    function saveDescriptionRow(page, e){
        var foundIndex = theInformation.findIndex(x => x.id === page.id);
        theInformation[foundIndex].description=e;
        setDescription(e);
        setTheInformation(theInformation);
    }


    function saveSettingEventRow(page,item, e){
        var foundIndex = setting.findIndex(x => x.id === item.id);
        var foundIndex2 = theInformation.findIndex(x => x.id === page.id);
        theInformation[foundIndex2].events[foundIndex].settingEvent=e;
        setSetting(setting);
        setTheInformation(theInformation);
    }

    function saveTriggersRow(page,item, e){
        var foundIndex = setting.findIndex(x => x.id === item.id);
        var foundIndex2 = theInformation.findIndex(x => x.id === page.id);
        //setting[foundIndex].trigger = e;
        theInformation[foundIndex2].events[foundIndex].trigger=e;
        setSetting(setting);
        setTheInformation(theInformation);
    }

    function saveConsequencesRow(page,item, e){
      var foundIndex = setting.findIndex(x => x.id === item.id);
      var foundIndex2 = theInformation.findIndex(x => x.id === page.id);
      //setting[foundIndex].consequence = e;
      theInformation[foundIndex2].events[foundIndex].consequence=e;
      setSetting(setting);
      setTheInformation(theInformation);
    }

    function saveSummaryRow(page, e){
      var foundIndex = theInformation.findIndex(x => x.id === page.id);
      theInformation[foundIndex].summary=e;
      setSummary(e);
      setTheInformation(theInformation);

    }


    function saveAlternativeRow(page, e){
    var foundIndex = theInformation.findIndex(x => x.id === page.id);
    theInformation[foundIndex].alternative=e;
    setAlternative(e);
    setTheInformation(theInformation);

    }


  return (
    <div style={{ width: '100%' }}>



           {(theInformation || []).map((page) => {
                             return (
                               <div style={{ width: '100%' }}>
                                     <div>


                                       <h2>PAGE 3 : Functional Behavioural Assessment</h2>

                                       <label>Choose one of the five functions of behaviour(you can add more when you finished):</label>

                                       <MultipleSelect8 valueChange={(e) => saveFunctionRow(page, e.target.value)}/>

                                       <h4>1. Description of behaviours (include frequency, duration and severity)  that align with this function</h4>

                                       <Box
                                         component="form"
                                         sx={{
                                           '& .MuiTextField-root': { m: 3, width: '65%' },
                                         }}
                                         noValidate
                                         autoComplete="off"
                                       >

                                           <div style={{'alignItem' : 'center'}}>
                                               <TextField
                                                   id="description" label="eg. Eddie hits staff and other students with his open hand or pushes them forcefully, daily, on average 2.5 incidents per day." variant="outlined" placeholder="Description of behaviours"
                                                   onChange={(e) => saveDescriptionRow(page,e.target.value)}
                                                               multiline={true}
                                                               rows={3}/>
                                           </div>
                                       </Box>

                                       <h4>2. Setting events, triggers and consequences related to these behaviours</h4>


                                       <Box
                                                 component="form"
                                                 sx={{
                                                   '& .MuiTextField-root': { m: 1, width: '25ch' },
                                                 }}
                                                 noValidate
                                                 autoComplete="off"
                                               >
                                               <Button onClick={addRow}>Add a new one</Button>
                                                 {(setting || []).map((item) => {
                                                 return (
                                                   <div style={{'alignItem' : 'center'}}>
                                                   <TextField
                                                   id="settingEvent" label="Setting events " variant="outlined" placeholder="eg.No breakfast"
                                                   onChange={(e) => saveSettingEventRow(page,item,e.target.value)}  />
                                                   <TextField
                                                   id="triggers" label="Triggers" variant="outlined" placeholder="eg.Asked to complete work in class"
                                                   onChange={(e) => saveTriggersRow(page,item, e.target.value)}  />
                                                   <TextField
                                                   id="consequendces" label="Consequences" variant="outlined" placeholder="eg.Teacher goes to Eddie to calm him down. He is often removed from the classroom."
                                                   onChange={(e) => saveConsequencesRow(page,item, e.target.value)}  />
                                                       <IconButton aria-label="delete" size='large'  onClick={() => removeRow(item)}>
                                                           <DeleteIcon />
                                                       </IconButton>
                                                   </div>
                                                 )
                                               })}
                                               </Box>




                                       <h4>3.A summary statement outlining the functional hypothesis</h4>
                                       <Box
                                         component="form"
                                         sx={{
                                           '& .MuiTextField-root': { m: 3, width: '65%' },
                                         }}
                                         noValidate
                                         autoComplete="off"
                                       >
                                         <div style={{'alignItem' : 'center'}}>
                                         <TextField
                                           id="summary" label="eg. When Eddie is asked to complete work in class that he finds difficult or needs to complete independently he uses physical aggression or property damage, resulting in the teacher attending to him and him not completing the required work."
                                           variant="outlined" placeholder="A summary statement outlining the functional hypothesis"
                                           onChange={(e) => saveSummaryRow(page,e.target.value)}
                                                       multiline={true}
                                                       rows={3}/>
                                         </div>
                                       </Box>

                                       <h4>4. Proposed alternative or functionally equivalent replacement behaviour(s) </h4>

                                       <Box
                                         component="form"
                                         sx={{
                                           '& .MuiTextField-root': { m: 3, width: '65%' },
                                         }}
                                         noValidate
                                         autoComplete="off"
                                       >
                                         <div style={{'alignItem' : 'center'}}>
                                             <TextField
                                               id="alternative" label="eg. Ask teacher for help" variant="outlined" placeholder="Proposed alternative or functionally equivalent replacement behaviour(s) "
                                               onChange={(e) => saveAlternativeRow(page,e.target.value)}
                                                           multiline={true}
                                                           rows={3}/>
                                         </div>
                                       </Box>

                                     </div>
                                   <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={addNewOne}> Add another one</Button>
                                   <IconButton aria-label="delete" size='large'  onClick={() => removeThePlan(page)}>
                                       <DeleteIcon />
                                   </IconButton>
                                     </div>
                             )
                           })}


        <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={() => submitEverything(theInformation)}> Submit </Button>
      </div>

  )
}