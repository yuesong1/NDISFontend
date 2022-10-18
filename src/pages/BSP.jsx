import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {useNavigate, useParams} from 'react-router-dom';
import MultipleSelect from '../components/mutiSelect';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextRating from '../components/rating';
import PropTypes from 'prop-types';
import {getURLBSPWithFeedback} from '../utils/Url'
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'; 
import cookie from "react-cookies";
import {token} from "../utils/Credentials";
import { publicKey } from '../utils/Credentials';
import JSEncrypt from 'jsencrypt';
const steps = ['Summary of patient', 'Consultant of BSP', 'Behaviour', 'Goals and strateies', 'Restrictive intervention','Implementation' ];



const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="warning" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="inherit" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="secondary" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

// function _renderStepContent(step) {
//     switch (step) {
//       case 0:
//         return <patientForm formField={formField} />;
//       case 1:
//         return <consultForm formField={formField} />;
//       case 2:
//         return <behaviourForm formField={formField} />;
//       case 4:
//         return <goalForm formField={formField} />;
//       case 5:
//         return <restrictiveForm formField={formField} />;
//       case 6:
//         return <implementationForm formField={formField} />;
//       default:
//         return <div>Not Found</div>;
//     }
//   }

const feedbackList = {
  "flag": true,
  "data": {
      "id": "631ee9f3f397f4025701e609",
      "pages": [
          {
              "id": "6319708c2ee3b95a6ab66502",
              "patientSummary": "Eddie is 15 years old and lives at home with his parents.  Eddie’s brother \nJack and sister Jill live locally however do not visit often due to Eddie’s challenging behaviours. \nEddie has a diagnosis of moderate intellectual disability and insulin dependent type 1 diabetes."
          },
          {
              "id": "631eee224d2f6820eebd19c2",
              "consultants": [
                  {
                      "id": 1,
                      "character": "Father",
                      "consulted": "Face to face"
                  },
                  {
                      "id": 2,
                      "character": "Mother",
                      "consulted": "Face to face"
                  }
              ],
              "assessmentApproaches": "Test assessment",
              "additionalAssessments": "None"
          },
          {
              "id": "631ee9cf0e914e6201ba715f",
              "functions": [
                  {
                      "id": 2,
                      "type": "test desc",
                      "description": "avoidence/escape",
                      "events": [
                          {
                              "id": 1,
                              "settingEvent": "complete work",
                              "trigger": "suffer",
                              "consequence": "no break"
                          },
                          {
                              "id": 1,
                              "settingEvent": "complete work",
                              "trigger": "suffer",
                              "consequence": "no break"
                          }
                      ],
                      "summary": "test summary",
                      "alternative": "test alt"
                  },
                  {
                      "id": 2,
                      "type": "test desc",
                      "description": "avoidence/escape",
                      "events": [
                          {
                              "id": 1,
                              "settingEvent": "complete work",
                              "trigger": "suffer",
                              "consequence": "no break"
                          },
                          {
                              "id": 1,
                              "settingEvent": "complete work",
                              "trigger": "suffer",
                              "consequence": "no break"
                          }
                      ],
                      "summary": "test summary",
                      "alternative": "test alt"
                  }
              ]
          },
          {
              "id": "631d5a6e0945a71ce02aea9f",
              "goalsSpecification": "spec",
              "goalsEnhance": "enhance",
              "strategyEnvironmentChanges": "env",
              "strategyReplacementBehaviors": "rep",
              "strategyOthers": "ste",
              "reinforcementProposed": "reinf",
              "reinforcementSchedule": "reinfs",
              "reinforcementIdentification": "reinfi",
              "desEscalationPrompt": "des promt",
              "deEscalationSafetyEnsure": "sef",
              "deEscalationDebrief": "des"
          },
          {
              "id": "631c29a3be275c4a0cfc0836",
              "useRestrictives": true,
              "restrictives": [
                  {
                      "id": 1,
                      "type": "Chemical",
                      "positiveStrategies": null,
                      "circumstance": null,
                      "procedure": null,
                      "reduceMethod": null,
                      "reasonOfUse": null,
                      "socialValidities": null,
                      "authorisations": null
                  },
                  {
                      "id": 2,
                      "type": "Physical",
                      "positiveStrategies": null,
                      "circumstance": null,
                      "procedure": null,
                      "reduceMethod": null,
                      "reasonOfUse": null,
                      "socialValidities": null,
                      "authorisations": null
                  },
                  {
                      "id": 3,
                      "type": "Mechanical",
                      "positiveStrategies": null,
                      "circumstance": null,
                      "procedure": null,
                      "reduceMethod": null,
                      "reasonOfUse": null,
                      "socialValidities": null,
                      "authorisations": null
                  },
                  {
                      "id": 4,
                      "type": "Seclusion",
                      "positiveStrategies": null,
                      "circumstance": null,
                      "procedure": null,
                      "reduceMethod": null,
                      "reasonOfUse": null,
                      "socialValidities": null,
                      "authorisations": null
                  },
                  {
                      "id": 5,
                      "type": "Environmental",
                      "positiveStrategies": null,
                      "circumstance": null,
                      "procedure": null,
                      "reduceMethod": null,
                      "reasonOfUse": null,
                      "socialValidities": null,
                      "authorisations": null
                  }
              ]
          },
          {
              "id": "6325420f74fb6b6b09a67109",
              "peopleInvolved": [
                  "Backend Test2"
              ],
              "trainMethods": [
                  {
                      "id": 0,
                      "strategy": "Backend Test2",
                      "personResponse": "Backend Test2"
                  }
              ],
              "outlines": [
                  {
                      "id": 0,
                      "strategy": "Backend Test2",
                      "personResponse": "Backend Test2"
                  }
              ],
              "communications": [
                  {
                      "id": 0,
                      "strategy": "Backend Test2",
                      "personResponse": "Backend Test2"
                  }
              ],
              "reviewMethods": [
                  {
                      "id": 0,
                      "strategy": "Backend Test2",
                      "personResponse": "Backend Test2"
                  }
              ],
              "timeframe": "Backend Test2",
              "socialValidity": "Backend Test2",
              "consultants": null
          }
      ],
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
                        "id":0,
                          "functionsSc": "10",
                          "function": "comments on functions"
                      },
                      {
                        "id":1,
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
          "id": "6325d44c9ea2dc47de56a5aa"
      }
  }
}
export default function BSP() {
//page1
  const [newSummary, setNewSummary] = React.useState('All good');

//page2
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

  //page 3
     const settingArray = [
         {
           id: 0,
           settingEvent:'',
           trigger : '',
           consequence : ''
         }

       ];

     const informationArray = [
        {
          id: 0,
          type:"",
          description:"",
          events:settingArray,
          summary:"",
          alternative:""

        }
      ];
    const seAy = []
    const trAy = []
    const conAy = []
    const [se,setAy]= React.useState(seAy)
    const [tr,setTR]= React.useState(trAy)
    const [con,setCon]= React.useState(conAy)
    const [theInformation,setTheInformation] = React.useState(informationArray)
    const [thePage3Q1,setNewPage3Q1] = React.useState("")
    const [thePage3Q2,setNewPage3Q2] = React.useState("")
    const [thePage3Q3,setNewPage3Q3] = React.useState(settingArray)
    const [thePage3Q4,setNewPage3Q4] = React.useState("")
    const [thePage3Q5,setNewPage3Q5] = React.useState("")

  //page4
    const [thePage4Q1,setNewPage4Q1] = React.useState("")
    const [thePage4Q2,setNewPage4Q2] = React.useState("")
    const [thePage4Q3,setNewPage4Q3] = React.useState("")
    const [thePage4Q4,setNewPage4Q4] = React.useState("")
    const [thePage4Q5,setNewPage4Q5] = React.useState("")
    const [thePage4Q6,setNewPage4Q6] = React.useState("")
    const [thePage4Q7,setNewPage4Q7] = React.useState("")
    const [thePage4Q8,setNewPage4Q8] = React.useState("")
    const [thePage4Q9,setNewPage4Q9] = React.useState("")
    const [thePage4Q10,setNewPage4Q10] = React.useState("")
    const [thePage4Q11,setNewPage4Q11] = React.useState("")

//page5
    const [thePage5Q0,setNewPage5Q0] = React.useState("")
    const [thePage5Q1,setNewPage5Q1] = React.useState("")
    const [thePage5Q2,setNewPage5Q2] = React.useState("")
    const [thePage5Q3,setNewPage5Q3] = React.useState("")
    const [thePage5Q4,setNewPage5Q4] = React.useState("")
    const [thePage5Q5,setNewPage5Q5] = React.useState("")
    const [thePage5Q6,setNewPage5Q6] = React.useState("")
    const [thePage5Q7,setNewPage5Q7] = React.useState("")
    const [thePage5Q8,setNewPage5Q8] = React.useState("")


  //page6

  //feedback
  const [newPractitionerName, setNewPractitionerName] = React.useState('Jan');
  const [expanded, setExpanded] = React.useState(false);
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
  const [consultant_6, setConsultant_6] = React.useState('');


  const trainArray = [
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

  const communicateArray = [
    {
      id: 0,
      personResponse:'',
      strategy : ''
    }
  ];

  const reviewArray = [
    {
      id: 0,
      personResponse:'',
      strategy : ''
    }
  ];

  const [peopleList, setPeopleList] = React.useState([]);
  const [trainList, setTrainList] = React.useState(trainArray);
  const [outlineList, setOutlineList] = React.useState(outlineArray);
  const [communicateList, setCommunicateList] = React.useState(communicateArray);
  const [reviewList, setReviewList] = React.useState(reviewArray);
  const [timeline, setTimeline] = React.useState('');
  const [assess, setAssess] = React.useState('')
  const [consultant, setConsultant] = React.useState('')
  //id used when test pass
  // const id = JSON.parse(localStorage.getItem("bsp")).id;
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  React.useEffect(() => {
    // change to ${id} after test
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var encrypted = encrypt.encrypt(cookie.load("Yes"))
     const res = fetch(getURLBSPWithFeedback(JSON.parse(localStorage.getItem("bsp")).id), {
       method: 'GET', // *GET, POST, PUT, DELETE, etc.
       headers: {
         accept: 'application/json',
         'Content-Type': 'application/json',
         'encrypted':encrypted
       }
     });
     res.then(data => {
       if (data.status === 200) {
         data.json().then(result => {
           console.log(result.data.feedback)
  //  const result = feedbackList
    //page1
    setNewSummary(result.data.pages[0].patientSummary);
    //page2
    //for multiple inputs
    const consultantList = result.data.pages[1].consultants;
    console.log(consultantList)
     for (let index = 0; index < consultantList.length; index++) {
       setNewConsultant(oldArray => {
         return [...oldArray, consultantList[index]]
       })
     }
     setBehavioural( result.data.pages[1].assessmentApproaches);
     setNon( result.data.pages[1].additionalAssessments);
     //page3

     const theInformationList = result.data.pages[2].functions
     setNewPage3Q1(theInformationList[0].type)
     setNewPage3Q2(theInformationList[0].description)
     setNewPage3Q4(theInformationList[0].summary)
     setNewPage3Q5(theInformationList[0].alternative)
     for (let i = 0; i < theInformationList.length; i++) {
//      const list1 = result.data.pages[2].functions[i].type
//      const list2 = result.data.pages[2].functions[i].description
//      const list3 = result.data.pages[2].functions[i].summary
//      const list4 = result.data.pages[2].functions[i].alternative
      const eventList = result.data.pages[2].functions[i].events
         for (let index = 0; index <= eventList.length; index++) {
//          console.log(eventList[index].find("settingEvent"))
//           const aList = eventList[index]["settingEvent"]
//           console.log(aList)
//           const bList = eventList[index]["trigger"]
//           const cList = eventList[index]["consequence"]
//             setNewPage3Q1(oldArray => {
//                 return [...oldArray, list1[index]]
//             })
//             setNewPage3Q2(oldArray => {
//                 return [...oldArray, list2[index]]
//             })
//             setNewPage3Q4(oldArray => {
//                 return [...oldArray, list3[index]]
//             })
//             setNewPage3Q5(oldArray => {
//             console.log(list4)
//                 return [...oldArray, list4[index]]
//             })
//             setAy(oldArray => {
//
//             console.log(aList)
//               return [...oldArray, aList[index]]
//             })
//             setTR(oldArray => {
//               return [...oldArray, bList[index]]
//             })
//             setCon(oldArray => {
//               return [...oldArray, cList[index]]
//             })
         }


     }
     //page4
     setNewPage4Q1(result.data.pages[3].goalsSpecification)
     setNewPage4Q2(result.data.pages[3].goalsEnhance)
     setNewPage4Q3(result.data.pages[3].strategyEnvironmentChanges)
     setNewPage4Q4(result.data.pages[3].strategyReplacementBehaviors)
     setNewPage4Q5(result.data.pages[3].strategyOthers)
     setNewPage4Q6(result.data.pages[3].reinforcementProposed)
     setNewPage4Q7(result.data.pages[3].reinforcementSchedule)
     setNewPage4Q8(result.data.pages[3].reinforcementIdentification)
     setNewPage4Q9(result.data.pages[3].desEscalationPrompt)
     setNewPage4Q10(result.data.pages[3].deEscalationSafetyEnsure)
     setNewPage4Q11(result.data.pages[3].deEscalationDebrief)

     //page5
    setNewPage5Q0(result.data.pages[4].useRestrictives)
    // setNewPage5Q1(result.data.pages[4].restrictives[0].type)
    // setNewPage5Q2(result.data.pages[4].restrictives[0].positiveStrategies)
    // setNewPage5Q3(result.data.pages[4].restrictives[0].circumstance)
    // setNewPage5Q4(result.data.pages[4].restrictives[0].procedure)
    // setNewPage5Q5(result.data.pages[4].restrictives[0].reduceMethod)
    // setNewPage5Q6(result.data.pages[4].restrictives[0].reasonOfUse)
    // setNewPage5Q7(result.data.pages[4].restrictives[0].socialValidities)
    // setNewPage5Q8(result.data.pages[4].restrictives[0].authorisations)
    // setNewPage5Q10(result.data.pages[4].restrictives[1].restrictiveAttribute.authorisations[0].body)
    // setNewPage5Q11(result.data.pages[4].restrictives[1].restrictiveAttribute.authorisations[0].period)
     //page6
    const peopleList = result.data.pages[5].peopleInvolved;
    console.log(peopleList)
    for (let index = 0; index < peopleList.length; index++) {
      setPeopleList(oldArray => {
        return [...oldArray, peopleList[index]]
      })
    }

    const trainList = result.data.pages[5].trainMethods;
    console.log(trainList)
    for (let index = 0; index < trainList.length; index++) {
      setTrainList(oldArray => {
        return [...oldArray, trainList[index]]
      })
    }

    const outlineList = result.data.pages[5].outlines;
    console.log(outlineList)
    for (let index = 0; index < outlineList.length; index++) {
      setOutlineList(oldArray => {
        return [...oldArray, outlineList[index]]
      })
    }

    const communicateList = result.data.pages[5].communications;
    console.log(communicateList)
    for (let index = 0; index < communicateList.length; index++) {
      setCommunicateList(oldArray => {
        return [...oldArray, communicateList[index]]
      })
    }

    const reviewList = result.data.pages[5].reviewMethods;
    console.log(reviewList)
    for (let index = 0; index < reviewList.length; index++) {
      setReviewList(oldArray => {
        return [...oldArray, reviewList[index]]
      })
    }
    setTimeline(result.data.pages[5].timeframe);
    setAssess(result.data.pages[5].socialValidity);
    setConsultant(result.data.pages[5].consultant);
    console.log(result.data.feedback.feedbackBody.page1.patientSummary)
    setPatientSummary(result.data.feedback.feedbackBody.page1.patientSummary);
    setPatientSummarySc(result.data.feedback.feedbackBody.page1.patientSummarySc);
    setConsultants(result.data.feedback.feedbackBody.page2.consultants);
    setConsultantsSc(result.data.feedback.feedbackBody.page2.consultantsSc);
    setAssessmentApproaches(result.data.feedback.feedbackBody.page2.assessmentApproaches);
    setAssessmentApproachesSc(result.data.feedback.feedbackBody.page2.assessmentApproachesSc);
    setAdditionalAssessment(result.data.feedback.feedbackBody.page2.additionalAssessments);
    setAdditionalAssessmentSc(result.data.feedback.feedbackBody.page2.additionalAssessmentsSc);
    const funcList = result.data.feedback.feedbackBody.page3.functions;
    console.log(funcList)
    for (let index = 0; index < funcList.length; index++) {
      setFunctions(oldArray => {
        return [...oldArray, funcList[index]]
      }) 
    }
    setGoals(result.data.feedback.feedbackBody.page4.goals);
    setGoalsSc(result.data.feedback.feedbackBody.page4.goalsSc);
    setStrategyEnvironmentChanges(result.data.feedback.feedbackBody.page4.strategyEnvironmentChanges);
    setStrategyEnvironmentChangesSc(result.data.feedback.feedbackBody.page4.strategyEnvironmentChangesSc);
    setStrategyReplacementBehaviors(result.data.feedback.feedbackBody.page4.strategyReplacementBehaviors);
    setStrategyReplacementBehaviorsSc(result.data.feedback.feedbackBody.page4.strategyReplacementBehaviorsSc);
    setStrategyOthers(result.data.feedback.feedbackBody.page4.strategyOthers);
    setStrategyOthersSc(result.data.feedback.feedbackBody.page4.strategyOthersSc);
    setReinforcement(result.data.feedback.feedbackBody.page4.reinforcement);
    setReinforcementSc(result.data.feedback.feedbackBody.page4.reinforcementSc);
    setDeEscalation(result.data.feedback.feedbackBody.page4.deEscalation);
    setDeEscalationSc(result.data.feedback.feedbackBody.page4.deEscalationSc);
    const restrList = result.data.feedback.feedbackBody.page5.restrictives;
    for (let i = 0; i < restrList.length; i++) {
      setRestrictives(oldArray => {
        return [...oldArray, restrList[i]]
      }) 
    }

    setPeopleInvolved(result.data.feedback.feedbackBody.page6.peopleInvolved);
    setPeopleInvolvedSc(result.data.feedback.feedbackBody.page6.peopleInvolvedSc);
    setOutlines(result.data.feedback.feedbackBody.page6.outlines);
    setOutlinesSc(result.data.feedback.feedbackBody.page6.outlinesSc);
    setCommunications(result.data.feedback.feedbackBody.page6.communication);
    setCommunicationsSc(result.data.feedback.feedbackBody.page6.communicationsSc);
    setReviewMethods(result.data.feedback.feedbackBody.page6.reviewMethods);
    setReviewMethodsSc(result.data.feedback.feedbackBody.page6.reviewMethodsSc);
    setTimeframe(result.data.feedback.feedbackBody.page6.timeframe);
    setTimeframeSc(result.data.feedback.feedbackBody.page6.timeframeSc);
    setSocialValidity(result.data.feedback.feedbackBody.page6.socialValidity);
    setSocialValiditySc(result.data.feedback.feedbackBody.page6.socialValiditySc);
    setConsultant_6(result.data.feedback.feedbackBody.page6.consultants);
    setConsultantSc(result.data.feedback.feedbackBody.page6.consultantsSc)
   })
  }
 })
  }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const isStepOptional = (step) => {
    return step === 8;
  };

  const page1 = (step) => {
  return step === 0;
  };

  const page2 = (step) => {
    return step === 1;
  };

    const page3 = (step) => {
      return step === 2;
    };

    const page4 = (step) => {
    return step === 3;
    };

    const page5 = (step) => {
    return step === 4;
    };

    const page6 = (step) => {
      return step === 5;
    };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getElement(array) {
    for (let i = 1; i <= array.length;i++) {
        return
    }
  }
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '50%'}}>
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
          <Typography sx={{ width: '50%', flexShrink: 0 }}>
          Patient Summary
          </Typography>
          <StyledRating
              name="highlight-selected-only"
              value={patientSummarySc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
        </AccordionSummary>
        <AccordionDetails>
          <TextRating mark = {patientSummarySc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Consultants
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={consultantsSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {consultantsSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>Assessment Approaches</Typography>
            <StyledRating
              name="highlight-selected-only"
              value={assessmentApproachesSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {assessmentApproachesSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Additional Assessment
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={additionalAssessmentSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {additionalAssessmentSc}/>
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
                          {console.log(item.id)}
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1bh-content"
             id="panel1bh-header"
           >
             <Typography sx={{ width: '50%', flexShrink: 0 }}>
             Function {1+item.id}
             </Typography>
             <StyledRating
              name="highlight-selected-only"
              value={item.functionsSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
           </AccordionSummary>
           <AccordionDetails>
           <TextRating mark = {item.functionsSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Goals
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={goalsSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {goalsSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>Strategy of Environment Changes</Typography>
            <StyledRating
              name="highlight-selected-only"
              value={strategyEnvironmentChangesSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            <TextRating mark = {strategyEnvironmentChangesSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Strategy of Replacement Behaviors
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={strategyReplacementBehaviorsSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {strategyReplacementBehaviorsSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Other strategies
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={strategyOthersSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
          <TextRating mark = {strategyOthersSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Rein Forcements
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={reinforcementSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {reinforcementSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            deEscalation
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={deEscalationSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {deEscalationSc}/>
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
           <Accordion key={item.id} expanded={expanded === `panel${11+item.id+functions.length}`} onChange={handleChange(`panel${11+item.id+functions.length}`)}>
             {console.log(item.id)}
           <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1bh-content"
             id="panel1bh-header"
           >
             <Typography sx={{ width: '50%', flexShrink: 0 }}>
             Restrictive {1+item.id}
             </Typography>
             <StyledRating
              name="highlight-selected-only"
              value={item.restrictiveSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
           </AccordionSummary>
           <AccordionDetails>
             <TextRating mark = {item.restrictiveSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            People involved
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={peopleInvolvedSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {peopleInvolvedSc}/>
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
            <Typography sx={{ width: '50%', flexShrink: 0 }}>outlines</Typography>
            <StyledRating
              name="highlight-selected-only"
              value={outlinesSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
          <TextRating mark = {outlinesSc}/>
            <Typography>
            {outlines}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === `panel${13+functions.length+restrictives.length}`} onChange={handleChange(`panel${13+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Communication
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={communicationsSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {communicationsSc}/>
            <Typography>
            {communications}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${14+functions.length+restrictives.length}`} onChange={handleChange(`panel${14+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Review Methods
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={reviewMethodsSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails><TextRating mark = {reviewMethodsSc}/>
            <Typography>
            {reviewMethods}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${15+functions.length+restrictives.length}`} onChange={handleChange(`panel${15+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Timeframe
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={timeframeSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {timeframeSc}/>
            <Typography>
            {timeframe}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${16+functions.length+restrictives.length}`} onChange={handleChange(`panel${16+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Social Validity
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={socialValiditySc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {socialValiditySc}/>
            <Typography>
            {socialValidity}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === `panel${17+functions.length+restrictives.length}`} onChange={handleChange(`panel${17+functions.length+restrictives.length}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Consultants
            </Typography>
            <StyledRating
              name="highlight-selected-only"
              value={consultantSc/2}
              IconContainerComponent={IconContainer}
              readOnly
              highlightSelectedOnly
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextRating mark = {consultantSc}/>
            <Typography>
            {consultant_6}
            </Typography>
          </AccordionDetails>
        </Accordion>
        </div>
    <Box sx={{ width: '50%' , m: 2, display: 'inline-block'}}>
      <Typography component="h1" variant="h4" align="center">
        BSP Preview
      </Typography>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
              {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Go back</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            {page1(activeStep) && (
                <div style={{'alignItem' : 'justify'}} component={'h4'}>
                    {/* <Typography sx={{ fontSize: 20}} color="text.secondary" gutterBottom> */}
                      <h4> Summary of participant </h4>
                          {newSummary}<br/>
                    {/* </Typography> */}
                 </div>
            )}
            {page2(activeStep) && (
                <div>
                    
                      <h4>Persons consulted to prepare this PBSP</h4>
                      <h4>Who are they?</h4>
                      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                      {newConsultant[1].character}
                      </Typography>
                      <h4>How were they consulted?</h4>
                      {newConsultant[1].consulted}
                      <h4>Outline the behavioural assessment approaches implemented to develop this PBSP</h4>
                      {behavioural}
                      <h4>Additional non-behavioural assessments undertaken or reviewed to inform the development of this PBSP</h4>
                      {non}
                    
                 </div>
            )}

            {page3(activeStep) && (
                <div>
                {/* <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom> */}
                  <h4>One of the five functions of behaviour</h4>
                  {thePage3Q1}<br/>
                  <h4>Description of behaviours</h4>
                  {thePage3Q2}<br/>
                  <h4> Setting events, triggers and consequences related to these behaviours</h4>
                  {JSON.stringify(se)}<br/>
                  <h4>A summary statement outlining the functional hypothesis</h4>
                  {thePage3Q4}<br/>
                  <h4>Proposed alternative or functionally equivalent replacement behaviour</h4>
                  {thePage3Q5}<br/>
                {/* </Typography> */}
            </div>
            )}

            {page4(activeStep) && (
            <div>
                {/* <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom> */}
                  <h4>Goal(s) specific to the behaviours described</h4>
                  {thePage4Q1}<br/>
                  <h4>Goals specific to enhancing the person’s quality of life</h4>
                  {thePage4Q2}<br/>
                  <h4>Environmental changes to address setting events and triggers (changes to reduce and/or eliminate their influence</h4>
                  {thePage4Q3}<br/>
                  <h4>Teaching of the alternative or functionally equivalent replacement behaviours</h4>
                  {thePage4Q4}<br/>
                  <h4>Other strategies</h4>
                  {thePage4Q5}<br/>
                  <h4>Proposed reinforcers</h4>
                  {thePage4Q6}<br/>
                  <h4>Schedule of reinforcement</h4>
                  {thePage4Q7}<br/>
                  <h4>How were these reinforcers identified</h4>
                  {thePage4Q8}<br/>
                  <h4>How to prompt the alternative or functionally replacement behaviour</h4>
                  {thePage4Q9}<br/>
                  <h4>Strategies to ensure the safety of the person and/or others</h4>
                  {thePage4Q10}<br/>
                  <h4>Post-incident debriefing with the person with disability and/or parents, support staff, etc</h4>
                  {thePage4Q11}
                {/* </Typography> */}
            </div>
            )}

            {page5(activeStep) && (
                <div>
                    {/* <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom> */}
                      <h4>Are you proposed to use restrictive interventions?</h4>
                      {JSON.stringify(thePage5Q0)}<br/>
                      { thePage5Q0? <>
                      <h4>Type of restrictive intervention</h4>
                      {thePage5Q1}<br/>
                      <h4>Positive behavioural support strategies to be used before the use of the restraint</h4>
                      {thePage5Q2}<br/>
                      <h4>Circumstance(s) in which the restraint will be used</h4>
                      {thePage5Q3}<br/>
                      <h4>Procedure for using the restraint, including observation, monitoring and maximum time period</h4>
                      {thePage5Q4}<br/>
                      <h4>How will the restraint be gradually reduced as behavioural goals are achieved by the person?</h4>
                      {thePage5Q5}<br/>
                      <h4>Why is the use of this restraint the least restrictive way of ensuring the safety of the person and/or others?</h4>
                      {thePage5Q6}<br/>
                      <h4>How did you assess the acceptability of this practice?</h4>
                      {thePage5Q7}<br/>
                      <h4>Authorisation for the use of restrictive practices</h4>
                      {thePage5Q8}
                      </>:null}


                    {/* </Typography> */}
                 </div>
            )}

            {page6(activeStep) && (
                <div style={{'alignItem' : 'center'}}>
                    {/* <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom> */}
                      <h4>People involved in the implementation of this PBSP</h4>
                      {peopleList[0]+ "," +peopleList[1]}
                      <h4>How will implementers of this PBSP be trained to implement the proposed interventions?</h4>
                      {"Strategy:"+ trainList[1].strategy}<br/>
                      {"Person responsible:"+trainList[1].personResponse}<br/>
                      <h4>How will implementers of this PBSP communicate with one another to discuss implementation?</h4>
                      {"Strategy:" + communicateList[1].strategy}<br/>
                      {"Person responsible:"+communicateList[1].personResponse}<br/>
                      <h4>Outline the implementation plan</h4>
                      {"Strategy:" + outlineList[1].strategy}<br/>
                      {"Person responsible:"+outlineList[1].personResponse}<br/>
                      <h4>How will PBSP implementation and goal achievement be reviewed and monitored?</h4>
                      {"Strategy:" + reviewList[1].strategy}<br/>
                      {"Person responsible:"+reviewList[1].personResponse}<br/>
                      <h4>Timeframe for plan review</h4>
                      {timeline}<br/>
                      <h4>How did you assess the acceptability of the interventions proposed in this PBSP?</h4>
                      {assess}
                      <h4>Who did you consult with?</h4>
                      {consultant}<br/>
                    {/* </Typography>*/}
                 </div>
            )}
          </Box>

            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}


            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    
      </div>
    );}
