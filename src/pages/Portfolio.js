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
          <Project deployedLink="" repoLink="" imgPath="" projName="Narratorium"/>
          <Project deployedLink="" repoLink="" imgPath="" projName=""/>
          <Project deployedLink="" repoLink="" imgPath="" projName=""/>
          <Project deployedLink="" repoLink="" imgPath="" projName=""/>
          <Project deployedLink="" repoLink="" imgPath="" projName=""/>
          <Project deployedLink="" repoLink="" imgPath="" projName=""/>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Portfolio