import React from 'react'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import CardDetailt from './CardDetailt'

const Schedule = ({ schedule }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const getTime = ({ data }) => {
    if (data.length > 0) {
      const time = data.reduce((acc, item) => acc + parseInt(item.manufacturing_time), 0)
      return time
    } else {
      return 0
    }
  }

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
              <Typography sx={{ color: 'text.secondary' }}>
                {`Automoviles a fabricar: ${data.length}, horas estimadas: ${getTime({ data })}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3} justifyContent='space-around'>
                {
                  data.map((item, index) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                      <CardDetailt data={item} />
                    </Grid>
                  ))
                }
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  )
}

export default Schedule
