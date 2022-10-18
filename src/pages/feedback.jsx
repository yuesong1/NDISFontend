import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextRating from '../components/rating';
import PropTypes from 'prop-types';
import{getURLBSPWithFeedback} from'../utils/Url'
import { getRequest } from '../utils/Request';
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";

  const feedbackList = {
    "feedback": {
      "feedbackBody": {
          "page1": {
              "patientSummarySc": "9",
              "patientSummary": "feedbacks"
          },
          "page2": {
              "consultantsSc": "9",
              "consultants": "not missing",
              "assessmentApproachesSc": "8",
              "assessmentApproaches": "approaches",
              "additionalAssessmentsSc": "7",
              "additionalAssessments": "none"
          },
          "page3": {
              "functions": [
                  {     
                      "id": 0,
                      "functionsSc": "10",
                      "function": "comments on functions"
                  },
                  {    
                      "id": 1,
                      "functionsSc": "8",
                      "function": "comments on functions"
                  }
              ]
          },
          "page4": {
              "goalsSc": "10",
              "goals": "comments",
              "strategyEnvironmentChangesSc": "8",
              "strategyEnvironmentChanges": "comments",
              "strategyReplacementBehaviorsSc": "8",
              "strategyReplacementBehaviors": "comments",
              "strategyOthersSc": "7",
              "strategyOthers": "comments",
              "reinforcementSc": "5",
              "reinforcement": "comments",
              "deEscalationSc": "1",
              "deEscalation": "comments"
          },
          "page5": {
              "restrictives": [
                  {   
                      "id":0,
                      "restrictiveSc": "4",
                      "restrictive": "comment"
                  },
                  {    
                      "id":1, 
                      "restrictiveSc": "10",
                      "restrictive": "comment"
                  }
              ]
          },
          "page6": {
              "peopleInvolvedSc": "10",
              "peopleInvolved": "comments",
              "outlinesSc": "5",
              "outlines": "comment",
              "communicationsSc": "8",
              "communication": "comment",
              "reviewMethodsSc": "3",
              "reviewMethods": "comment",
              "timeframeSc": "2",
              "timeframe": "comments",
              "socialValiditySc": "10",
              "socialValidity": "comments",
              "consultantsSc": "3",
              "consultants": "comments"
          }
      },
      "id": "631efb02c43e525528e8b4d1"
  }
}

const func = [
    {   
        "id": 0,
        "functionsSc": "5",
        "function": "good"
    }
]


export default function Feedback() {
  const [expanded, setExpanded] = React.useState(false);
  const Id = useParams().Id;
  const [newPractitionerName, setNewPractitionerName] = React.useState('Jan');
  const [newParticipantName, setNewParticipantName] = React.useState('Yue');
  const [newFamilyName, setNewFamilyName] = React.useState('Han');
  const [email, setEmail] = React.useState('Jan@jan.com');
  const [disability, setDisability] = React.useState('No disability');
  const [description, setDescription] = React.useState('All good');
  const [predictors, setPredictors] = React.useState('All good');
  const [analysis, setAnalysis] = React.useState('All good');
  const [patientSummarySc, setPatientSummarySc] = React.useState('');
  const [patientSummary, setPatientSummary] = React.useState('');
  const [consultantsSc, setConsultantsSc] = React.useState('');
  const [consultants, setConsultants] = React.useState('');
  const [assessmentApproachesSc, setAssessmentApproachesSc] = React.useState('');
  const [assessmentApproaches, setAssessmentApproaches] = React.useState('');
  const [additionalAssessmentSc, setAdditionalAssessmentSc] = React.useState('');
  const [additionalAssessment, setAdditionalAssessment] = React.useState('');
  const [functions, setFunctions] = React.useState([]);
  const [goalsSc, setGoalsSc] = React.useState('');
  const [goals, setGoals] = React.useState('');
  const [strategyEnvironmentChangesSc, setStrategyEnvironmentChangesSc] = React.useState('');
  const [strategyEnvironmentChanges, setStrategyEnvironmentChanges] = React.useState('');
  const [strategyReplacementBehaviorsSc, setStrategyReplacementBehaviorsSc] = React.useState('');
  const [strategyReplacementBehaviors, setStrategyReplacementBehaviors] = React.useState('');
  const [strategyOthersSc, setStrategyOthersSc] = React.useState('');
  const [strategyOthers, setStrategyOthers] = React.useState('');
  const [reinforcementSc, setReinforcementSc] = React.useState('');
  const [reinforcement, setReinforcement] = React.useState('');
  const [deEscalationSc, setDeEscalationSc] = React.useState('');
  const [deEscalation, setDeEscalation] = React.useState('');
  const [restrictives, setRestrictives] = React.useState([]);
  const [peopleInvolved, setPeopleInvolved] = React.useState('');
  const [peopleInvolvedSc, setPeopleInvolvedSc] = React.useState('');
  const [outlinesSc, setOutlinesSc] = React.useState('');
  const [outlines, setOutlines] = React.useState('');
  const [communicationsSc, setCommunicationsSc] = React.useState('');
  const [communications, setCommunications] = React.useState('');
  const [reviewMethodsSc, setReviewMethodsSc] = React.useState('');
  const [reviewMethods, setReviewMethods] = React.useState('');
  const [timeframeSc, setTimeframeSc] = React.useState('');
  const [timeframe, setTimeframe] = React.useState('');
  const [socialValiditySc, setSocialValiditySc] = React.useState('');
  const [socialValidity, setSocialValidity] = React.useState('');
  const [consultantSc, setConsultantSc] = React.useState('');
  const [consultant, setConsultant] = React.useState('');

  const [result,setResult]=React.useState(feedbackList);

  

  const history = useNavigate();
  React.useEffect(() => {

    var targetURL=getURLBSPWithFeedback(JSON.parse(localStorage.getItem("bsp")).id)

    getRequest(targetURL, setResult)
    console.log(result)

    
    //const result = feedbackList
    setPatientSummary(result.feedback.feedbackBody.page1.patientSummary);
    setPatientSummarySc(result.feedback.feedbackBody.page1.patientSummarySc);
    setConsultants(result.feedback.feedbackBody.page2.consultants);
    setConsultantsSc(result.feedback.feedbackBody.page2.consultantsSc);
    setAssessmentApproaches(result.feedback.feedbackBody.page2.assessmentApproaches);
    setAssessmentApproachesSc(result.feedback.feedbackBody.page2.assessmentApproachesSc);
    setAdditionalAssessment(result.feedback.feedbackBody.page2.additionalAssessments);
    setAdditionalAssessmentSc(result.feedback.feedbackBody.page2.additionalAssessmentsSc);
    const funcList = result.feedback.feedbackBody.page3.functions;
    console.log(funcList)
    for (let index = 0; index < funcList.length; index++) {
      setFunctions(oldArray => {
        return [...oldArray, funcList[index]]
      }) 
    }
    setGoals(result.feedback.feedbackBody.page4.goals);
    setGoalsSc(result.feedback.feedbackBody.page4.goalsSc);
    setStrategyEnvironmentChanges(result.feedback.feedbackBody.page4.strategyEnvironmentChanges);
    setStrategyEnvironmentChangesSc(result.feedback.feedbackBody.page4.strategyEnvironmentChangesSc);
    setStrategyReplacementBehaviors(result.feedback.feedbackBody.page4.strategyReplacementBehaviors);
    setStrategyReplacementBehaviorsSc(result.feedback.feedbackBody.page4.strategyReplacementBehaviorsSc);
    setStrategyOthers(result.feedback.feedbackBody.page4.strategyOthers);
    setStrategyOthersSc(result.feedback.feedbackBody.page4.strategyOthersSc);
    setReinforcement(result.feedback.feedbackBody.page4.reinforcement);
    setReinforcementSc(result.feedback.feedbackBody.page4.reinforcementSc);
    setDeEscalation(result.feedback.feedbackBody.page4.deEscalation);
    setDeEscalationSc(result.feedback.feedbackBody.page4.deEscalationSc);
    const restrList = result.feedback.feedbackBody.page5.restrictives;
    for (let i = 0; i < restrList.length; i++) {
      setRestrictives(oldArray => {
        return [...oldArray, restrList[i]]
      }) 
    }

    setPeopleInvolved(result.feedback.feedbackBody.page6.peopleInvolved);
    setPeopleInvolvedSc(result.feedback.feedbackBody.page6.peopleInvolvedSc);
    setOutlines(result.feedback.feedbackBody.page6.outlines);
    setOutlinesSc(result.feedback.feedbackBody.page6.outlinesSc);
    setCommunications(result.feedback.feedbackBody.page6.communication);
    setCommunicationsSc(result.feedback.feedbackBody.page6.communicationsSc);
    setReviewMethods(result.feedback.feedbackBody.page6.reviewMethods);
    setReviewMethodsSc(result.feedback.feedbackBody.page6.reviewMethodsSc);
    setTimeframe(result.feedback.feedbackBody.page6.timeframe);
    setTimeframeSc(result.feedback.feedbackBody.page6.timeframeSc);
    setSocialValidity(result.feedback.feedbackBody.page6.socialValidity);
    setSocialValiditySc(result.feedback.feedbackBody.page6.socialValiditySc);
    setConsultant(result.feedback.feedbackBody.page6.consultants);
    setConsultantSc(result.feedback.feedbackBody.page6.consultantsSc)

    // console.log(functions)



    // result.then(ret => {
    //   ret.json().then(data => {
    //     // setNewPractitionerName(data.newPractitionerName);
    //     // setNewParticipantName(data.newParticipantName);
    //     // setNewFamilyName(data.newFamilyName);
    //     // setEmail(data.email);
    //     // setDisability(data.disability);
    //     // setDescription(data.description);
    //     // setPredictors(data.predictors);
    //     // setAnalysis(data.analysis);
    //     // setBd_score(data.bd_score);
    //     // setBp_score(data.bp_score);
    //     // setEc_score(data.ec_score);
    //     // setPa_score(data.pa_score);
    //     // setBd(data.bd);
    //     // setBp(data.bp);
    //     // setEc(data.ec);
    //     // setPa(data.pa);
    //   })
    // })
  }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    

    <div>
      <div style={{ width: '100%' }}>
      <div>
        <h2>Preview of the plan</h2>
        <Box 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{'alignItem' : 'center'}}>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Partictipant Name: {newParticipantName}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Practitioner Name: {newPractitionerName}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Family Name: {newFamilyName}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Email: {email}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Description:{description}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Predictors: {predictors}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Analysis: {analysis}
          </Typography>
            </div>
          </Box> 
          </div>
    </div>
      <div>
        <h2>
            Feedback of {newPractitionerName} Page 1
        </h2>
      </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Patient Summary
          </Typography>
          <TextRating mark = {patientSummarySc}/>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>     
          {patientSummary}
          </Typography>
        </AccordionDetails>
      </Accordion>
        <div>
          <h2>
              Feedback of {newPractitionerName} Page 2
          </h2>
        </div>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Consultants
            </Typography>
            <TextRating mark = {consultantsSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>     
            {consultants}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Assessment Approaches</Typography>
            <TextRating mark = {assessmentApproachesSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {assessmentApproaches}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Additional Assessment
            </Typography>
            <TextRating mark = {additionalAssessmentSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {additionalAssessment}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <div>
          <h2>
              Feedback of {newPractitionerName} Page 3
          </h2>
        </div>
        {(functions || []).map((item)=>{
          return(
           <Accordion key = {item.id} expanded={expanded === `panel${5+item.id}`} onChange={handleChange(`panel${5+item.id}`)}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1bh-content"
             id="panel1bh-header"
           >
             <Typography sx={{ width: '33%', flexShrink: 0 }}>
             Function {1+item.id}
             </Typography>
             <TextRating mark = {item.functionsSc}/>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>     
             {item.function}
             </Typography>
           </AccordionDetails>
         </Accordion>
          )
        })}

        <div>
          <h2>
              Feedback of {newPractitionerName} Page 4
          </h2>
        </div>
        <Accordion expanded={expanded === `panel${5+functions.length}`} onChange={handleChange(`panel${5+functions.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Goals
            </Typography>
            <TextRating mark = {goalsSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>     
            {goals}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === `panel${6+functions.length}`} onChange={handleChange(`panel${6+functions.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Strategy of Environment Changes</Typography>
            <TextRating mark = {strategyEnvironmentChangesSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {strategyEnvironmentChanges}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === `panel${7+functions.length}`} onChange={handleChange(`panel${7+functions.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Strategy of Replacement Behaviors
            </Typography>
            <TextRating mark = {strategyReplacementBehaviorsSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {strategyReplacementBehaviors}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${8+functions.length}`} onChange={handleChange(`panel${8+functions.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Other strategies
            </Typography>
            <TextRating mark = {strategyOthersSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {strategyOthers}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${9+functions.length}`} onChange={handleChange(`panel${9+functions.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Rein Forcements
            </Typography>
            <TextRating mark = {reinforcementSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {reinforcement}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${10+functions.length}`} onChange={handleChange(`panel${10+functions.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            deEscalation
            </Typography>
            <TextRating mark = {deEscalationSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {deEscalation}
            </Typography>
          </AccordionDetails>
        </Accordion>
       <div>
          <h2>
              Feedback of {newPractitionerName} Page 5
          </h2>
        </div>
        {(restrictives || []).map((item)=>{
          return(
           <Accordion key = {item.id} expanded={expanded === `panel${11+item.id+functions.length}`} onChange={handleChange(`panel${11+item.id+functions.length}`)}>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1bh-content"
             id="panel1bh-header"
           >
             <Typography sx={{ width: '33%', flexShrink: 0 }}>
             Restrictive {1+item.id}
             </Typography>
             <TextRating mark = {item.restrictiveSc}/>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>     
             {item.restrictive}
             </Typography>
           </AccordionDetails>
         </Accordion>
          )
        })}
                <div>
          <h2>
              Feedback of {newPractitionerName} Page 6
          </h2>
        </div>
        <Accordion expanded={expanded === `panel${11+functions.length+restrictives.length}`} onChange={handleChange(`panel${11+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            People involved
            </Typography>
            <TextRating mark = {peopleInvolvedSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>     
            {peopleInvolved}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === `panel${12+functions.length+restrictives.length}`} onChange={handleChange(`panel${12+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>outlines</Typography>
            <TextRating mark = {outlinesSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {outlines}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === `panel${12+functions.length+restrictives.length}`} onChange={handleChange(`panel${12+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Communication
            </Typography>
            <TextRating mark = {communicationsSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {communications}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${13+functions.length+restrictives.length}`} onChange={handleChange(`panel${13+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Review Methods
            </Typography>
            <TextRating mark = {reviewMethodsSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {reviewMethods}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${14+functions.length+restrictives.length}`} onChange={handleChange(`panel${12+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Timeframe
            </Typography>
            <TextRating mark = {timeframeSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {timeframe}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${15+functions.length+restrictives.length}`} onChange={handleChange(`panel${15+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Social Validity
            </Typography>
            <TextRating mark = {socialValiditySc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {socialValidity}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${16+functions.length+restrictives.length}`} onChange={handleChange(`panel${15+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Consultants
            </Typography>
            <TextRating mark = {consultantSc}/>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {consultant}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
  );
}
