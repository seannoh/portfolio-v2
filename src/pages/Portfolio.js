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
          <Project deployedLink="https://protected-harbor-12759.herokuapp.com/" repoLink="https://github.com/seannoh/tech-blog" imgPath="" projName="Tech Blog"/>
          <Project deployedLink="https://pure-lake-33607.herokuapp.com/" repoLink="https://github.com/seannoh/text-editor-PWA" imgPath="" projName="Text Editor"/>
          <Project deployedLink="https://pbarkley.github.io/Helping-Hand/" repoLink="https://github.com/pbarkley/Helping-Hand" imgPath="" projName="Helping Hand"/>
          <Project deployedLink="https://github.com/seannoh/readme-generator" repoLink="https://github.com/seannoh/readme-generator" imgPath="" projName="Readme Generator"/>
          <Project deployedLink="https://seannoh.github.io/weather-dashboard/" repoLink="" imgPath="" projName="Weather Dashboard"/>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Portfolio