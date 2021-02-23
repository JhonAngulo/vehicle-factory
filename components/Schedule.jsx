import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Schedule = ({ schedule }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {
        schedule.map(({ day, id, data }) => (
          <Accordion key={id} expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${id}bh-content`}
              id={`panel${id}bh-header`}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {day}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Automoviles a fabricar: 0, horas estimadas: 12</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                data.map((item, index) => (
                  <Typography key={index}>
                    {
                      `Vehiculos marca ${item.mark} cantidad ${item.count} horas estimadas${item.hours}`
                    }
                  </Typography>
                ))
              }
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  );
}

export default Schedule