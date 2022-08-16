import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Feedback() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (


    <div>
      <div>
        <h2>
            Jan Zhang
        </h2>
      </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Behaviour Description
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>4/10</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>     
          This could be further simplified to focus on observable behaviors – there is a lot of information included here that is more relevant to background information. It seems that there have been no direct observations of BOC from plan developer – this should be explicitly stated here (in addition to disclaimer at beginning of plan)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Behaviour Predictors</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            2/10
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There are uses of very broad statements, rather than having specific examples - e.g. how is one to determine if he is ‘having his needs met’, ‘is bored’, ‘mental health has deteriorated’, ‘is stressed or experiencing anxiety’, ‘is unable to obtain tangible objects/outcomes’. The plan needs to have collated information about such observables so that useful information can be accessed by the staff and the family members to re-identify patterns and observations to present specific stimuli that reliably predict occurrence of behavior.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          Predictor Analysis
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            6/10
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          There seems to be no evidence in the plan that suggests that a thorough analysis of the link between the predictors and the behavior was performed. This type of analysis is crucial because it explains why the predictor triggers the problematic behavior.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Environmental Changes</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            3/10
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>      
          Instructions regarding the change of environment of the participant, of his/her curriculum or how he/she should be treated are not clear.
          More specific details are required such as the intended techniques that could be used or the specific change in environment that would make both the participant and the people around the participant feel safe.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
