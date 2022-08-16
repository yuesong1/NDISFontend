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

function submitPlan(history){
  history('../feedback')
}

export default function NewPlan () {

  const [newPractitionerName, setNewPractitionerName] = React.useState('');
  const [newParticipantName, setNewParticipantName] = React.useState('');
  const [newFamilyName, setNewFamilyName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [disability, setDisability] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [predictors, setPredictors] = React.useState('');
  const [analysis, setAnalysis] = React.useState('');
  const history = useNavigate();
  const handleChange = (event) => {
    setDisability(event.target.value);
  };


  return (
    <div style={{ width: '100%' }}>
      <div>
        <h2>Basic Information of the plan</h2>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{'align-item' : 'center'}}>
          <TextField
            id="participantName" label="Partictipant Name" variant="outlined" placeholder="Name of participant"
            onChange={(e) => setNewParticipantName(e.target.value)} />
          <TextField
            id="practitionerName" label="Practitioner Name" variant="outlined" placeholder="Name of practitioner"
            onChange={(e) => setNewPractitionerName(e.target.value)} />
          </div>
          <div>
          <TextField
            id="familyName" label="Family Name" variant="outlined" placeholder="Name of Family"
            onChange={(e) => setNewFamilyName(e.target.value)} />
          <TextField
            id="email" label="Email" variant="outlined" placeholder="Email contact"
            onChange={(e) => setEmail(e.target.value)} />
          </div>
        </Box>
      </div>
      <h2>Plan details</h2>
      <div align="center">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 3, width: '80%',  },
              
            }}
            noValidate
            autoComplete="off"      
          >
            Select all disibilites
            <br/>
            <MultipleSelect/>

          <br/>
          Please provide some observable and measurable terms on describing the behaviour(s) of concern:
            <TextField
              fullWidth
              id="description"
              label="Insert comments here..."
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br/>
            Please provide a broad statement on What are the predictors for the behaviour?
            <TextField
              id="predictors"
              label="Insert comments here..."
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => setPredictors(e.target.value)}
            />
                        <br/>
            Please provide comments on Why does the predictor prompt the problem behaviour?
            <TextField
              id="analysis"
              label="Insert comments here..."
              variant="outlined"
              multiline
              rows={4}
              onChange={(e) => setAnalysis(e.target.value)}
            />
          </Box></div >  
        <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={() => submitPlan(history)}> Submit</Button>
    </div>

  )
}