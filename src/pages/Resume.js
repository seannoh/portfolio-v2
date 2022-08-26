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
        <Typography variant='body1'>Check out my <Link href='/#resume'>resume</Link> (coming soon)</Typography>
      </CardContent>
    </Card>
  )
}

export default Resume