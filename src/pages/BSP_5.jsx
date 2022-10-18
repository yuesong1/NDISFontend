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
import MultipleSelect1 from '../components/mutiSelect1';
import MultipleSelect2 from '../components/mutiSelect2';
import MultipleSelect3 from '../components/mutiSelect3';
import MultipleSelect4 from '../components/mutiSelect4';
import MultipleSelect5 from '../components/mutiSelect5';
import MultipleSelect6 from '../components/mutiSelect6';
import MultipleSelect7 from '../components/mutiSelect7';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {getURLCreateBSPPage5} from '../utils/Url'
import MultipleSelect9 from '../components/mutiSelect9';
import FormLabel from "@mui/material/FormLabel";
import { JSEncrypt } from 'jsencrypt'
import cookie from "react-cookies";
import {publicKey} from "../utils/Credentials";
export default function BSP_5 () {


    const medicationsArr = [
        {
            id: 0,
            Name : '',
            Dosage :'',
            frequency: '',
            administration : '',
            route : '',
            prescriber:''
        }
    ];

    const authorisationsArr = [
        {
            id: 1,
            Body : '',
            Period :''
        }
    ];


    const[MutiSelect1, setMutiSelect1] = React.useState('');
    const[MutiSelect2, setMutiSelect2] = React.useState('');
    const[MutiSelect3, setMutiSelect3] = React.useState('');
    const[MutiSelect4, setMutiSelect4] = React.useState('');
    const[MutiSelect5, setMutiSelect5] = React.useState('');
    const[MutiSelect6, setMutiSelect6] = React.useState('');
    const[MutiSelect7, setMutiSelect7] = React.useState('');
    const[MutiSelect9, setMutiSelect9] = React.useState('');


    const [newConsultant, setNewConsultant] = React.useState('');
    const [newConsultant1, setNewConsultant1] = React.useState(medicationsArr);
    const [newConsultant2, setNewConsultant2] = React.useState(authorisationsArr);
    const [newConsultant3, setNewConsultant3] = React.useState('');

    const [ChemicalPositiveSupportStrategies, setChemicalPositiveSupportStrategies] = React.useState('');
    const [ChemicalCircumstance, setChemicalCircumstance] = React.useState('');
    const [ChemicalProcedure, setChemicalProcedure] = React.useState('');
    const [ChemicalBehaviouralGoals, setChemicalBehaviouralGoals] = React.useState('');
    const [ChemicalSafety, setChemicalSafety] = React.useState('');

    const [PhysicalDescription, setPhysicalDescription] = React.useState('');
    const [PhysicalPositiveSupportStrategies, setPhysicalPositiveSupportStrategies] = React.useState('');
    const [PhysicalCircumstance, setPhysicalCircumstance] = React.useState('');
    const [PhysicalProcedure, setPhysicalProcedure] = React.useState('');
    const [PhysicalRestraintReduced, setPhysicalRestraintReduced] = React.useState('');
    const [PhysicalSafety, setPhysicalSafety] = React.useState('');

    const [MechanicalDescription, setMechanicalDescription] = React.useState('');
    const [MechanicalPositiveSupportStrategies, setMechanicalPositiveSupportStrategies] = React.useState('');
    const [MechanicalCircumstance, setMechanicalCircumstance] = React.useState('');
    const [MechanicalProcedure, setMechanicalProcedure] = React.useState('');
    const [MechanicalSafety, setMechanicalSafety] = React.useState('');
    const [MechanicalBehaviouralGoals, setMechanicalBehaviouralGoals] = React.useState('');
    const [MechanicalLimitedSafety, setMechanicalLimitedSafety] = React.useState('');

    const [EnvironmentalDescription, setEnvironmentalDescription] = React.useState('');
    const [EnvironmentalSupportStrategies, setEnvironmentalSupportStrategies] = React.useState('');
    const [EnvironmentalCircumstance, setEnvironmentalCircumstance] = React.useState('');
    const [EnvironmentalPrevent, setEnvironmentalPrevent] = React.useState('');
    const [EnvironmentalProcedure, setEnvironmentalProcedure] = React.useState('');
    const [EnvironmentalMinimised, setEnvironmentalMinimised] = React.useState('');
    const [EnvironmentalBehaviouralGoals, setEnvironmentalBehaviouralGoals] = React.useState('');
    const [EnvironmentalSafety, setEnvironmentalSafety] = React.useState('');

    const [SeclusionSupportStrategies, setSeclusionSupportStrategies] = React.useState('');
    const [SeclusionCircumstance, setSeclusionCircumstance] = React.useState('');
    const [SeclusionMaximumFrequency, setSeclusionMaximumFrequency] = React.useState('');
    const [SeclusionProcedure, setSeclusionProcedure] = React.useState('');
    const [SeclusionBehaviouralGoals, setSeclusionBehaviouralGoals] = React.useState('');
    const [SeclusionSafety, setSeclusionSafety] = React.useState('');

    const [theType1, setTheType1] = React.useState('');
    const [theType2, setTheType2] = React.useState('');
    const [theType3, setTheType3] = React.useState('');
    const [theType4, setTheType4] = React.useState('');
    const [theType5, setTheType5] = React.useState('');

    const id = localStorage.getItem('id');
    const history = useNavigate();
    const valueChange = (event, name, type, index) => {
        console.log("index", index)
        if (type === 'multiSelect1') {
            if (event.target.value === "Chemical") {
                setTheType2("")
                setTheType3("")
                setTheType4("")
                setTheType5("")
                console.log("Chemical")
                setTheType1("Chemical")
            } else if (event.target.value === "Physical") {
               setTheType1("")
               setTheType3("")
               setTheType4("")
               setTheType5("")
               setTheType2("Physical")
           } else if (event.target.value === "Mechanical") {
              setTheType1("")
              setTheType2("")
              setTheType4("")
              setTheType5("")
              setTheType3("Mechanical")
          }
          else if (event.target.value === "Environmental") {
             setTheType1("")
             setTheType2("")
             setTheType3("")
             setTheType5("")
             setTheType4("Environmental")
         }
         else if (event.target.value === "Seclusion") {
            setTheType1("")
            setTheType2("")
            setTheType3("")
            setTheType4("")
            setTheType5("Seclusion")
        }
            setMutiSelect1(event.target.value)
        }
        else if (type === 'multiSelect2') {
            setMutiSelect2(event.target.value)
            newConsultant1[index].frequency = event.target.value;
            setNewConsultant1(newConsultant1);
        }
        else if (type === 'multiSelect3') {
            setMutiSelect3(event.target.value)
            newConsultant1[index].administration = event.target.value;
            setNewConsultant1(newConsultant1);
        }
        else if (type === 'multiSelect4') {
            setMutiSelect4(event.target.value)
            newConsultant1[index].route = event.target.value;
            setNewConsultant1(newConsultant1);
        }
        else if (type === 'multiSelect5') {
            setMutiSelect5(event.target.value)
            newConsultant1[index].prescriber = event.target.value;
            setNewConsultant1(newConsultant1);
        }
        else if (type === 'multiSelect6') {
            setMutiSelect6(event.target.value)
        }
        else if (type === 'multiSelect7') {
            setMutiSelect7(event.target.value)
        }else {

        }
    };

    function submitBSP_5(id, theType1,theType2,theType3,theType4,theType5,newConsultant, newConsultant1,newConsultant2,newConsultant3,type,ChemicalPositiveSupportStrategies,ChemicalCircumstance,ChemicalProcedure, ChemicalBehaviouralGoals,ChemicalSafety,
                         PhysicalDescription, PhysicalPositiveSupportStrategies,PhysicalCircumstance, PhysicalProcedure,PhysicalRestraintReduced,PhysicalSafety,
                         MechanicalDescription,MechanicalPositiveSupportStrategies,MechanicalCircumstance,MechanicalProcedure,MechanicalSafety,MechanicalBehaviouralGoals,MechanicalLimitedSafety,
                         EnvironmentalDescription,EnvironmentalSupportStrategies,EnvironmentalCircumstance,EnvironmentalPrevent,EnvironmentalProcedure,EnvironmentalMinimised,EnvironmentalBehaviouralGoals,EnvironmentalSafety,
                         SeclusionSupportStrategies,SeclusionCircumstance,SeclusionMaximumFrequency,SeclusionProcedure, SeclusionBehaviouralGoals,SeclusionSafety){
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);
        if (cookie.load("Yes") == null) {
          alert('Add plan page 5 unsuccessfully, you will be lead to main page to restarted.')
          history('../')
        }
       var encrypted = encrypt.encrypt(cookie.load("Yes"))
       console.log(encrypted)
        var useR=false;
        if(newConsultant=='Yes'){
            useR=true;
        }else{
            useR=false;
        }
        var payload=JSON.stringify({
            useRestrictives: useR,
            restrictives:[]
        })
        if(newConsultant=='Yes'){
         payload = JSON.stringify({
            useRestrictives: useR,
            restrictives : [
                {
                    id : 1,
                    type: theType1,
                    medications: newConsultant1,
                    positiveStrategies : ChemicalPositiveSupportStrategies,
                    circumstance : ChemicalCircumstance,
                    procedure : ChemicalProcedure,
                    reduceMethod : ChemicalBehaviouralGoals,
                    reasonOfUse : ChemicalSafety,
                    socialValidities : [
                        {
                            accessMethod: MutiSelect6,
                            consultant : MutiSelect7,
                        }
                    ],
                    authorisations: newConsultant2,
                },
                {
                    id: 2,
                    type :theType2,
                    description : PhysicalDescription,
                    positiveStrategies : PhysicalPositiveSupportStrategies,
                    circumstance : PhysicalCircumstance,
                    procedure : PhysicalProcedure,
                    reduceMethod : PhysicalRestraintReduced,
                    reasonOfUse : PhysicalSafety,
                    socialValidities : [
                        {
                            accessMethod: MutiSelect6,
                            consultant : MutiSelect7,
                        }
                    ],
                    authorisations: newConsultant2,
                },
                {
                    id: 3,
                    type : theType3,
                    description : MechanicalDescription,
                    frequencyType : MutiSelect2,
                    safetyToUse : MechanicalSafety,
                    positiveStrategies : MechanicalPositiveSupportStrategies,
                    circumstance : MechanicalCircumstance,
                    procedure : MechanicalProcedure,
                    reduceMethod : MechanicalBehaviouralGoals,
                    reasonOfUse : MechanicalLimitedSafety,
                    socialValidities : [
                        {
                            accessMethod: MutiSelect6,
                            consultant : MutiSelect7,
                        }
                    ],
                    authorisations: newConsultant2,
                },
                {
                    id: 4,
                    type : theType4,
                    frequencyType : MutiSelect2,
                    maximumFrequency : SeclusionMaximumFrequency,
                    positiveStrategies : SeclusionSupportStrategies,
                    circumstance : SeclusionCircumstance,
                    procedure : SeclusionProcedure,
                    reduceMethod : SeclusionBehaviouralGoals,
                    reasonOfUse : SeclusionSafety,
                    socialValidities : [
                        {
                            accessMethod: MutiSelect6,
                            consultant : MutiSelect7,
                        }
                    ],
                    authorisations: newConsultant2,
                },
                {
                    id: 5,
                    type : theType5,
                    description : EnvironmentalDescription,
                    frequencyType : MutiSelect2,
                    impactType : EnvironmentalPrevent,
                    impactMinimizeMethod : EnvironmentalMinimised,
                    positiveStrategies : EnvironmentalSupportStrategies,
                    circumstance : EnvironmentalCircumstance,
                    procedure : EnvironmentalProcedure,
                    reduceMethod : EnvironmentalBehaviouralGoals,
                    reasonOfUse : EnvironmentalSafety,
                    socialValidities : [
                        {
                            accessMethod: MutiSelect6,
                            consultant : MutiSelect7,
                        }
                    ],
                    authorisations: newConsultant2,
                },
            ].filter(v=>v.type!='')
        });}

        console.log(payload)
        const result = fetch(getURLCreateBSPPage5(), {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                id: (JSON.parse(localStorage.getItem("bsp")).page5_id),
                'encrypted':encrypted
            },
             body: payload,

        });
        result.then(data => {

             if (data.status === 200) {
                 data.json().then(res => {
                    alert('Add plan page 5 successfully')
                    history('../BSP_6')
                })
             } else  {
                 alert('Invalid Input')
             }
        })
    }

    const addRow = () => {
        setNewConsultant1(s => {
            return [
                ...s,
                {
                    id: newConsultant1.length,
                    Name : '',
                    Dosage :'',
                    frequency: '',
                    administration : '',
                    route : '',
                    prescriber:''
                }
            ];
        });
    };

    function removeRow(item){
        var removeIndex = newConsultant1.findIndex(x => x.id ===item.id)
        const list = [...newConsultant1]
        list.splice(removeIndex, 1);
        for(var i = removeIndex; i < list.length; i ++){
            list[i].id = list[i].id -1
        }
        setNewConsultant1(list)
    }

    function saveContent_M1(item, e){
        var foundIndex = newConsultant1.findIndex(x => x.id === item.id);
        newConsultant1[foundIndex].Name = e;
        setNewConsultant1(newConsultant1);
    }

    function saveContent_M2(item,e){
        var foundIndex = newConsultant1.findIndex(x => x.id === item.id);
        newConsultant1[foundIndex].Dosage = e;
        setNewConsultant1(newConsultant1);
    }

    function saveContent_A1(item, e){
        var foundIndex = newConsultant2.findIndex(x => x.id === item.id);
        newConsultant2[foundIndex].Body = e;
        setNewConsultant2(newConsultant2);
    }

    function saveContent_A2(item, e){
        var foundIndex = newConsultant2.findIndex(x => x.id === item.id);
        newConsultant2[foundIndex].Period = e;
        setNewConsultant2(newConsultant2);
    }




    function test () {
        if (MutiSelect1 === 'Chemical' && newConsultant === 'Yes'){
            return (
                <div>
                    <h2>Chemical Restraint</h2>
                    1.Medication(s) that will be used
                    <Box  component="form"
                          sx={{
                              '& .MuiTextField-root': { m: 1, width: '25ch' },
                          }}
                          noValidate
                          autoComplete="off"
                    >
                        <Button onClick={addRow}>Add a new information</Button>
                        <div style={{'alignItem' : 'center'}}>
                            {(newConsultant1 || []).map((item, index) => {
                                return (
                                    <div style={{'alignItem' : 'center'}}>
                                        <TextField
                                            id="Name" label="Name" variant="outlined" placeholder="Name"
                                            onChange={(e) => saveContent_M1(item,e.target.value)}  />
                                        <TextField
                                            id="Dosage" label="Dosage" variant="outlined" placeholder="Dosage"
                                            onChange={(e) => saveContent_M2(item,e.target.value)}  />
                                           <MultipleSelect2 index={index} item={item} valueChange={valueChange}/>
                                           <MultipleSelect3 index={index} item={item} valueChange={valueChange}/>
                                           <MultipleSelect4 index={index} item={item} valueChange={valueChange}/>
                                           <MultipleSelect5 index={index} item={item} valueChange={valueChange}/>
                                        <IconButton aria-label="delete" size='large'  onClick={() => removeRow(item)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                )
                            })}
                        </div>
                    </Box>
                    <Box component="form"
                         sx={{
                             '& > :not(style)': { m: 3, width: '80%',  },
                         }}
                         noValidate
                         autoComplete="off"
                    >
                        <FormLabel id="demo-controlled-radio-buttons-group">If As Needed is chosen in Frequency of Use above</FormLabel>
                    <div/>
                        2.Please finish positive behavioural support strategies to be used before the PRN use of the medication
                    <TextField
                        id="ChemicalPositiveSupportStrategies "
                        label="Insert comments here..."
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={(e) =>setChemicalPositiveSupportStrategies(e.target.value)}
                    />
                    <div/>
                    3.Circumstance(s) in which the medication(s) will be used
                    <TextField
                        id="ChemicalCircumstance"
                        label="Insert comments here..."
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={(e) => setChemicalCircumstance(e.target.value)}
                    />
                    <div/>
                    4.Procedure for administering the medication(s), including observation and monitoring of side-effects
                    <TextField
                        id="ChemicalProcedure"
                        label="Insert comments here..."
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={(e) => setChemicalProcedure(e.target.value)}
                    />
                    <div/>
                    5.How will chemical restraint be gradually reduced as behavioural goals are achieved by the person?
                    <TextField
                        id="ChemicalBehaviouralGoals"
                        label="Insert comments here about consultation with a GP or psychiatrist to review medication use, etc"
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={(e) => setChemicalBehaviouralGoals(e.target.value)}
                    />

                    <div/>
                    6.Why is the use of this medication the least restrictive way of ensuring the safety of the person and/or others?
                    <TextField
                        id="ChemicalSafety"
                        label="Insert comments here..."
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={(e) => setChemicalSafety(e.target.value)}
                    />
                    </Box>
                    <div/>
                    7.Social validity of the restrictive practice
                    <MultipleSelect6 valueChange={valueChange}/>
                    <MultipleSelect7 valueChange={valueChange}/>

                   8.Authorisation for the use of restrictive practices
                    {(newConsultant2 || []).map((item) => {
                        return (
                            <div style={{'alignItem' : 'center'}}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                <TextField
                                    id="Body" label="Authorising body" variant="outlined" placeholder=" "
                                    onChange={(e) => saveContent_A1(item,e.target.value)}  />
                                <TextField
                                    id="Period" label="Authorising period" variant="outlined" placeholder=" "
                                    onChange={(e) => saveContent_A2(item,e.target.value)}  />
                                </Box>
                            </div>
                        )
                    })}
                </div>
            )
        }
        else if(MutiSelect1 === 'Physical'  && newConsultant === 'Yes') {
            return (
                <div>
                    <div align="center">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 3, width: '80%',  },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <h2>Physical</h2>
                            <div/>
                            1.Description of the restraint(s) to be used
                            <TextField
                                id="PhysicalDescription "
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) =>setPhysicalDescription(e.target.value)}
                            />
                            <div/>
                            <div/>
                            2.Positive behavioural support strategies to be used before the use of the restraint
                            <TextField
                                id="PhysicalPositiveSupportStrategies "
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setPhysicalPositiveSupportStrategies(e.target.value)}
                            />
                            <div/>
                            3.Circumstance(s) in which the restraint will be used
                            <TextField
                                id="PhysicalCircumstance"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setPhysicalCircumstance(e.target.value)}
                            />
                            <div/>
                            4.Procedure for using the restraint, including observation, monitoring and maximum time period
                            <TextField
                                id="PhysicalProcedure"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setPhysicalProcedure(e.target.value)}
                            />
                            <div/>
                            5.How will the restraint be gradually reduced as behavioural goals are achieved by the person?
                            <TextField
                                id="PhysicalRestraintReduced"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setPhysicalRestraintReduced(e.target.value)}
                            />
                            <div/>
                            6.Why is the use of this restraint the least restrictive way of ensuring the safety of the person and/or others?
                            <TextField
                                id="PhysicalSafety"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setPhysicalSafety(e.target.value)}
                            />
                            <div/>
                            7.Social validity of the restrictive practice
                            <MultipleSelect6 valueChange={valueChange}/>
                            <MultipleSelect7 valueChange={valueChange}/>

                            8.Authorisation for the use of restrictive practices
                            {(newConsultant2 || []).map((item) => {
                                return (
                                    <div style={{'alignItem' : 'center'}}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                        <TextField
                                            id="Body" label="Authorising body" variant="outlined" placeholder=" "
                                            onChange={(e) => saveContent_A1(item,e.target.value)}  />
                                        <TextField
                                            id="Period" label="Authorising period" variant="outlined" placeholder=" "
                                            onChange={(e) => saveContent_A2(item,e.target.value)}  />
                                       </Box>
                                    </div>
                                )
                            })}
                        </Box></div >
                </div>)
        }
        else if(MutiSelect1 === 'Mechanical' && newConsultant === 'Yes') {
            return (
                <div>
                    <div align="center">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 3, width: '80%',  },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <h2>Mechanical</h2>
                            <div/>
                            1.Description of the restraint(s) to be used
                            <TextField
                                id="MechanicalDescription "
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) =>setMechanicalDescription(e.target.value)}
                            />

                            <div/>
                            2.Frequency of use
                            <MultipleSelect2 valueChange={valueChange}/>
                            <div/>
                            <FormLabel id="demo-controlled-radio-buttons-group">If As Needed is chosen in Frequency of Use above</FormLabel>
                            <div/>
                            3.Please finish positive behavioural support strategies to be used before the as needed use of the restraint
                            <TextField
                                id="MechanicalPositiveSupportStrategies "
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setMechanicalPositiveSupportStrategies(e.target.value)}
                            />

                            <div/>
                            4.Circumstance(s) in which the restraint will be used
                            <TextField
                                id="MechanicalPhysicalCircumstance"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setMechanicalCircumstance(e.target.value)}
                            />

                            <div/>
                            5.Procedure for using the restraint, including observation, monitoring and maximum time period
                            <TextField
                                id="MechanicalPhysicalProcedure"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setMechanicalProcedure(e.target.value)}
                            />

                            <div/>
                            6.How do you know this restraint is safe to use?
                            <TextField
                                id="MechanicalSafety"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setMechanicalSafety(e.target.value)}
                            />

                            <div/>
                            7.How will the restraint be gradually reduced as behavioural goals are achieved by the person?
                            <TextField
                                id="MechanicalBehaviouralGoals"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setMechanicalBehaviouralGoals(e.target.value)}
                            />

                            <div/>
                            8.Why is the use of this practice the least restrictive way of ensuring the safety of the person and/or others?
                            <TextField
                                id="MechanicalLimitedSafety"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setMechanicalLimitedSafety(e.target.value)}
                            />
                            <div/>
                            9.Social validity of the practice
                            <MultipleSelect6 valueChange={valueChange}/>
                            <MultipleSelect7 valueChange={valueChange}/>

                            10.Authorisation for the use of restrictive practices
                            {(newConsultant2 || []).map((item) => {
                                return (
                                    <div style={{'alignItem' : 'center'}}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                        <TextField
                                            id="Body" label="Authorising body" variant="outlined" placeholder=" "
                                            onChange={(e) => saveContent_A1(item,e.target.value)}  />
                                        <TextField
                                            id="Period" label="Authorising period" variant="outlined" placeholder=" "
                                            onChange={(e) => saveContent_A2(item,e.target.value)}  />
                                         </Box>
                                    </div>
                                )
                            })}
                        </Box></div >
                </div>)
        }
        else if(MutiSelect1 === 'Environmental' && newConsultant === 'Yes') {
            return (
                <div>
                    <div align="center">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 3, width: '80%',  },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <h2>Environmental</h2>
                            <div/>
                            1.Description of the restraint(s) to be used
                            <TextField
                                id="EnvironmentalDescription "
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) =>setEnvironmentalDescription(e.target.value)}
                            />
                            <div/>
                            2.Frequency of use
                            <MultipleSelect2 valueChange={valueChange}/>
                            <FormLabel id="demo-controlled-radio-buttons-group">If As Needed is chosen in Frequency of Use above</FormLabel>
                            <div/>
                            3.Please finish positive behavioural support strategies to be used before the as needed use of the restraint
                            <TextField
                                id="EnvironmentalPositiveSupportStrategies "
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setEnvironmentalSupportStrategies(e.target.value)}
                            />
                            <div/>
                            4.Circumstance(s) in which the restraint will be used
                            <TextField
                                id="EnvironmentalCircumstance"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setEnvironmentalCircumstance(e.target.value)}
                            />

                            <div/>
                            5.What is the person with disability prevented from accessing?
                            <TextField
                                id="EnvironmentalPrevent"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setEnvironmentalPrevent(e.target.value)}
                            />

                            <div/>
                            6.Procedure for using the restraint, including observation and monitoring
                            <TextField
                                id="EnvironmentalProcedure"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setEnvironmentalProcedure(e.target.value)}
                            />


                                    <div style={{'alignItem' : 'center'}}>
                                        <h4>7.Will other people be impacted by the use of this restraint?</h4>
                                        <TextField
                                            id="YES/NO" label="YES/NO" variant="outlined" placeholder=" "
                                            onChange={(e) => setNewConsultant3(e.target.value)}  />
                                    </div>
                            <div/>
                            If YES, how will impact on others be minimised?
                            <TextField
                                id="EnvironmentalMinimised"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setEnvironmentalMinimised(e.target.value)}
                            />

                            <div/>
                            8.How will the restraint be gradually reduced as behavioural goals are achieved by the person?
                            <TextField
                                id="EnvironmentalBehaviouralGoals"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setEnvironmentalBehaviouralGoals(e.target.value)}
                            />

                            <div/>
                            9.Why is the use of this practice the least restrictive way of ensuring the safety of the person and/or others?
                            <TextField
                                id="EnvironmentalSafety"
                                label="Insert comments here..."
                                variant="outlined"
                                multiline
                                rows={3}
                                onChange={(e) => setEnvironmentalSafety(e.target.value)}
                            />
                            <div/>
                            10.Social validity of the restrictive practice
                            <MultipleSelect6 valueChange={valueChange}/>
                            <MultipleSelect7 valueChange={valueChange}/>

                            11.Authorisation for the use of restrictive practices
                            {(newConsultant2 || []).map((item) => {
                                return (
                                    <div style={{'alignItem' : 'center'}}>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                        <TextField
                                            id="Body" label="Authorising body" variant="outlined" placeholder=" "
                                            onChange={(e) => saveContent_A1(item,e.target.value)}  />
                                        <TextField
                                            id="Period" label="Authorising period" variant="outlined" placeholder=" "
                                            onChange={(e) => saveContent_A2(item,e.target.value)}  />
                                        </Box>
                                    </div>
                                )
                            })}
                        </Box></div >
                </div>
            )
        }else if(MutiSelect1 === 'Seclusion' && newConsultant === 'Yes'){
            return (
                <div> <div align="center">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 3, width: '80%',  },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h2>Seclusion</h2>

                        <div/>
                        1.Frequency of use
                        <MultipleSelect2 valueChange={valueChange}/>
                        <FormLabel id="demo-controlled-radio-buttons-group"> If As Needed is chosen in Frequency of Use above</FormLabel>
                        <div/>
                        2.Please finish positive behavioural support strategies to be used before the as needed use of the restraint
                        <TextField
                            id="SeclusionPositiveSupportStrategies "
                            label="Insert comments here..."
                            variant="outlined"
                            multiline
                            rows={3}
                            onChange={(e) => setSeclusionSupportStrategies(e.target.value)}
                        />
                        <div/>
                        3.Circumstance(s) in which seclusion will be used
                        <TextField
                            id="SeclusionCircumstance"
                            label="Insert comments here..."
                            variant="outlined"
                            multiline
                            rows={3}
                            onChange={(e) => setSeclusionCircumstance(e.target.value)}
                        />

                        <div/>
                        4.The maximum frequency of seclusion per day, week and/or month; and for how long (minutes/hours)
                        <TextField
                            id="SeclusionMaximumFrequency"
                            label="Insert comments here..."
                            variant="outlined"
                            multiline
                            rows={3}
                            onChange={(e) => setSeclusionMaximumFrequency(e.target.value)}
                        />

                        <div/>
                        5.Procedure for using seclusion, including observation and monitoring
                        <TextField
                            id="SeclusionProcedure"
                            label="Insert comments here..."
                            variant="outlined"
                            multiline
                            rows={3}
                            onChange={(e) => setSeclusionProcedure(e.target.value)}
                        />

                        <div/>
                        6.How will seclusion be gradually reduced as behavioural goals are achieved by the person?
                        <TextField
                            id="SeclusionBehaviouralGoals"
                            label="Insert comments here..."
                            variant="outlined"
                            multiline
                            rows={3}
                            onChange={(e) => setSeclusionBehaviouralGoals(e.target.value)}
                        />

                        <div/>
                        7.Why is the use seclusion the least restrictive way of ensuring the safety of the person and/or others?
                        <TextField
                            id="SeclusionSafety"
                            label="Insert comments here..."
                            variant="outlined"
                            multiline
                            rows={3}
                            onChange={(e) => setSeclusionSafety(e.target.value)}
                        />


                        <div/>
                        8.Social validity of the restrictive practice
                        <MultipleSelect6 valueChange={valueChange}/>
                        <MultipleSelect7 valueChange={valueChange}/>

                        9.Authorisation for the use of restrictive practices
                        {(newConsultant2 || []).map((item) => {
                            return (
                                <div style={{'alignItem' : 'center'}}>
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                    <TextField
                                        id="Body" label="Authorising body" variant="outlined" placeholder=" "
                                        onChange={(e) => saveContent_A1(item,e.target.value)}  />
                                    <TextField
                                        id="Period" label="Authorising period" variant="outlined" placeholder=" "
                                        onChange={(e) => saveContent_A2(item,e.target.value)}  />
                                   </Box>
                                </div>
                            )
                        })}
                    </Box></div >
                </div>)
        }
    }

    return (
        <div style={{ width: '100%' }}>
            <div>
                <h2>PAGE 5 : Restrictive Intervention </h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }} noValidate
                    autoComplete="off"
                >
                            <div style={{'alignItem' : 'center'}}>
                                <h3> Are you proposed to use restrictive interventions? </h3>
                                <MultipleSelect9 valueChange={(e) => setNewConsultant(e.target.value)}/>


                            </div>

                </Box>
                {newConsultant=='Yes'? 
                            <div align="center">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 3, width: '80%',  },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <h3>Please select type of restrictive intervention</h3>
                        <div/>
                        <MultipleSelect1 valueChange={valueChange}/>
                        <div/>
                        {console.log("success")}
                        {test()}
                        </Box>
                </div>
                
                :null}
    
            </div>
            <Button style={{ background: '#9c27b0', color: '#fff', margin: '3'}} onClick={() => submitBSP_5(id, theType1,theType2,theType3,theType4,theType5,newConsultant, newConsultant1,newConsultant2,ChemicalPositiveSupportStrategies,ChemicalCircumstance,ChemicalProcedure, ChemicalBehaviouralGoals,ChemicalSafety,
                PhysicalDescription, PhysicalPositiveSupportStrategies,PhysicalCircumstance, PhysicalProcedure,PhysicalRestraintReduced,PhysicalSafety,
                MechanicalDescription,MechanicalPositiveSupportStrategies,MechanicalCircumstance,MechanicalProcedure,MechanicalSafety,MechanicalBehaviouralGoals,MechanicalLimitedSafety,
                EnvironmentalDescription,EnvironmentalSupportStrategies,EnvironmentalCircumstance,EnvironmentalPrevent,EnvironmentalProcedure,EnvironmentalMinimised,EnvironmentalBehaviouralGoals,EnvironmentalSafety,
                SeclusionSupportStrategies,SeclusionCircumstance,SeclusionMaximumFrequency,SeclusionProcedure, SeclusionBehaviouralGoals,SeclusionSafety)}> Submit</Button>
            </div>

    )
}