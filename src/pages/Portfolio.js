import React from 'react'
import Project from '../components/Project'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

function Portfolio() {
  return (
    <Card sx={{backgroundColor: 'white' }}>
      <CardContent>
        <Typography gutterBottom variant='h4'>Portfolio</Typography>
        <Grid container spacing={2}>
          <Project deployedLink="https://narratorium.herokuapp.com/" repoLink="https://github.com/Corasinth/narratorium" imgPath="" projName="Narratorium"/>
          <Project deployedLink="https://github.com/seannoh/coral" repoLink="https://github.com/seannoh/coral" imgPath="" projName="Coral (Productivity Mobile App)"/>
          <Project deployedLink="https://play.unity.com/en/games/d983cae9-9b8c-45c3-ba9a-351c7adde4b2/live-or-die-with-your-best-friend" repoLink="https://github.com/seannoh/project-pj09-liveordie" imgPath="" projName="Liveordie (Unity Survivors-like game)"/>
          <Project deployedLink="https://play.unity.com/en/games/2e96216c-161f-4320-9910-94412ae72630/unplugged" repoLink="https://github.com/seannoh/Unplugged" imgPath="" projName="Unplugged (Visual Novel)"/>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Portfolio