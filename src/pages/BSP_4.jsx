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
import {getURLCreateBSPPage4} from '../utils/Url'
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";

export default function Positive_Behavioural_Support_Interventions () {

  const [goalToBehaviours, setGoalToBehaviours] = React.useState('');
  const [goalToEnhancing, setGoalToEnhancing] = React.useState('');;
  const [environmentalChanges, setEnvironmentalChanges] = React.useState('');
  const [teachingOfTheAlternative, setTeachingOfTheAlternative] = React.useState('');
  const [otherStrategies, setOtherStrategies] = React.useState('');
  const [proposedReinforcer, setProposedReinforcer] = React.useState('');
  const [scheduleOfReinforcement , setScheduleOfReinforcement] = React.useState('');
  const [reinforcersIdentified , setReinforcersIdentified] = React.useState('');
  const [prompt, setPrompt] = React.useState('');
  const [strategies, setStrategies] = React.useState('');
  const [postIncident, setPostIncident] = React.useState('');
  const id = localStorage.getItem('id');
  const history = useNavigate();


  function submitEverything(id, goalToBehaviours, goalToEnhancing, environmentalChanges,
   teachingOfTheAlternative,otherStrategies,proposedReinforcer,scheduleOfReinforcement,reinforcersIdentified,prompt,strategies,postIncident,history){
       var encrypt = new JSEncrypt();
       encrypt.setPublicKey(publicKey);
       if (cookie.load("Yes") == null) {
         alert('Add plan page 4 unsuccessfully, you will be lead to main page to restarted.')
         history('../')
       }
       var encrypted = encrypt.encrypt(cookie.load("Yes"))
       console.log(encrypted)
    const payload = JSON.stringify({
	    goalsSpecification: goalToBehaviours,
        goalsEnhance: goalToEnhancing,
        strategyEnvironmentChanges: environmentalChanges,
        strategyReplacementBehaviors:teachingOfTheAlternative,
        strategyOthers:otherStrategies,
        reinforcementProposed:proposedReinforcer,
        reinforcementSchedule:scheduleOfReinforcement,
        reinforcementIdentification:reinforcersIdentified,
        desEscalationPrompt:prompt,
        deEscalationSafetyEnsure:strategies,
        deEscalationDebrief:postIncident
    });
    //alert(payload)
    console.log(payload)
    const result = fetch(getURLCreateBSPPage4(), {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        id: (JSON.parse(localStorage.getItem("bsp")).page4_id),
        'encrypted':encrypted
      },
      body: payload,
    });
    result.then(data => {
      if (data.status === 200) {
        data.json().then(res => {
          alert('Add plan page 4 successfully')
          history('../BSP_5')
        })
      } else if (data.status === 400) {
        alert('Invalid Input')
      }
    })
  }

  return (
    <div style={{ width: '100%' }}>
      <div>
        <h2>PAGE 4 : Positive Behavioural Support Interventions</h2>
        <h3 style={{color:"purple"}}>Goal</h3>

        <h4>1.Goals specific to the behaviours described</h4>

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
                    id="goalToBehaviours" label="eg. Eddie will ask the teacher or the Aide for help by putting his hand up every time he needs help or a break. He will achieve this by the end of June, 2021." variant="outlined" placeholder="Goal(s) specific to the behaviours described"
                    onChange={(e) => setGoalToBehaviours(e.target.value)}
                                multiline={true}
                                rows={3}/>
            </div>
        </Box>

        <h4>2. Goals specific to enhancing the person’s quality of life </h4>

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
                            id="goalToEnhancing" label="eg. None specified" variant="outlined" placeholder="Goals specific to enhancing the person’s quality of life"
                            onChange={(e) => setGoalToEnhancing(e.target.value)}
                                        multiline={true}
                                        rows={3}/>
                    </div>
                </Box>



         <h3 style={{color:"purple"}}>Strategies</h3>

                <h4>1.Environmental changes to address setting events and triggers</h4>

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
                            id="environmentalChanges" label="eg. To manage the triggers of Eddie’s behaviour:......" variant="outlined" placeholder="Environmental changes to address setting events and triggers (changes to reduce and/or eliminate their influence) "
                            onChange={(e) => setEnvironmentalChanges(e.target.value)}
                                        multiline={true}
                                        rows={3}/>
                    </div>
                </Box>


                 <h4>2.Teaching of the alternative or functionally equivalent replacement behaviours </h4>

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
                                id="teachingOfTheAlternative" label="eg. Description of the teaching strategy and materials needed" variant="outlined" placeholder="Teaching of the alternative or functionally equivalent replacement behaviour(s) "
                                onChange={(e) => setTeachingOfTheAlternative(e.target.value)}
                                            multiline={true}
                                            rows={3}/>
                        </div>
                    </Box>


                    <h4>3.Other strategies</h4>

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
                                id="otherStrategies" label="eg. Social, independence, coping, tolerance, etc" variant="outlined" placeholder="Other strategies"
                                onChange={(e) => setOtherStrategies(e.target.value)}
                                            multiline={true}
                                            rows={3}/>
                        </div>
                    </Box>








                    <h3 style={{color:"purple"}}>Reinforcement for Skill Development</h3>

                    <h4>1.Proposed reinforcers </h4>

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
                                id="proposedReinforcer" label="eg. Attention, praise and tokens" variant="outlined" placeholder="Proposed reinforcers"
                                onChange={(e) => setProposedReinforcer(e.target.value)}
                                            multiline={true}
                                            rows={3}/>
                        </div>
                    </Box>


                     <h4>2.Schedule of reinforcement  </h4>

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
                                    id="scheduleOfReinforcement" label="eg. Always provide Eddie with attention when he begins to attempt the work and make." variant="outlined" placeholder="Schedule of reinforcement "
                                    onChange={(e) => setScheduleOfReinforcement(e.target.value)}
                                                multiline={true}
                                                rows={3}/>
                            </div>
                        </Box>


                        <h4>3.How were these reinforcers identified? </h4>

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
                                    id="reinforcersIdentified" label="eg. A preference assessment was undertaken by the behaviour support practitioner to ascertain what Eddie’s preferred activities are. " variant="outlined" placeholder="How were these reinforcers identified? "
                                    onChange={(e) => setReinforcersIdentified(e.target.value)}
                                                multiline={true}
                                                rows={3}/>
                            </div>
                        </Box>







                        <h3 style={{color:"purple"}}>De-Escalation - Reactive strategies for challenging behaviours</h3>

                        <h4>1.How to prompt the alternative or functionally replacement behaviours </h4>

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
                                    id="prompt" label="eg. If Eddie begins to demonstrate the precursor behaviours to him hitting or engaging in property damage (getting out of his chair, pacing, refusing to make eye contact) go over to him, get his attention and ask him if he would like some help. If Eddie nods his head sit down at the table with him and provide him with the assistance he needs."
                                    variant="outlined" placeholder="How to prompt the alternative or functionally replacement behaviour(s) "
                                    onChange={(e) => setPrompt(e.target.value)}
                                                multiline={true}
                                                rows={3}/>
                            </div>
                        </Box>


                         <h4>2.Strategies to ensure the safety of the person and/or others </h4>

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
                                        id="strategies" label="eg. If Eddie escalates and begins to engage in property damage such as throwing objects and ripping worksheets move away from Eddie. " variant="outlined" placeholder="Strategies to ensure the safety of the person and/or others "
                                        onChange={(e) => setStrategies(e.target.value)}
                                                    multiline={true}
                                                    rows={3}/>
                                </div>
                            </Box>


                            <h4>3.Post-incident debriefing with the person with disability and/or parents, support staff, etc.</h4>

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
                                        id="postIncident" label="eg. When Eddie has stopped the behaviour and has de-escalated, at the appropriate time speak to him alone to remind him of the ways he can ask for help or a break from the work he is doing."
                                         variant="outlined" placeholder="Post-incident debriefing with the person with disability and/or parents, support staff, etc. "
                                        onChange={(e) => setPostIncident(e.target.value)}
                                                    multiline={true}
                                                    rows={3}/>
                                </div>
                            </Box>






      </div>
        <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={() =>
        submitEverything(id, goalToBehaviours, goalToEnhancing, environmentalChanges,
                        teachingOfTheAlternative,otherStrategies,proposedReinforcer,
                        scheduleOfReinforcement,reinforcersIdentified,prompt,strategies,
                        postIncident,history)}> Submit</Button>
      </div>

  )
}