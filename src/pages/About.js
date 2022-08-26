import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography';
import ProfilePic from '../images/profile-pic.jpg'

function About() {
  return (
    <Card sx={{backgroundColor: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant='h4'>About</Typography>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Typography variant='body1'>
              Hi! I'm currently a UC Santa Barbara Class of 2022 student studying Computer Science. 
              I have a background in C++ and web development. Check out some of my stuff or reach out!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Avatar src={ProfilePic} sx={{width: '75%', height: '100%', margin: 'auto'}}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default About