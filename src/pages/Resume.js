import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Resume() {
  return (
    <Card sx={{backgroundColor: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant='h4'>Resume</Typography>
        <Typography variant='body1'>Check out my <Link to='/Sean_Oh_Resume.pdf' target='_blank' download>resume</Link></Typography>
      </CardContent>
    </Card>
  )
}

export default Resume