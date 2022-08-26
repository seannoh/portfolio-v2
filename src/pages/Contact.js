import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Contact() {
  return (
    <Card sx={{backgroundColor: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant='h4'>Contact</Typography>
        <Typography variant='body1'>Reach out to me at my <Link href='mailto:seanoh@ucsb.edu'>email</Link>.</Typography>
      </CardContent>
    </Card>
  )
}

export default Contact