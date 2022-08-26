import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer>
        <Container maxWidth='100%' sx={{position:'relative', bottom: '0px',margin: '75px 0 0 0'}}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Box sx={{textAlign:'center', margin: '5px 0'}}>
                <Link href='https://github.com/seannoh/portfolio-v2' target={'_blank'}><Typography variant='body2' sx={{color: 'white'}}>Created by Sean Oh </Typography></Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{textAlign:'center', margin: '5px 0'}}>
                <Link href='https://github.com/seannoh/' target={'_blank'} sx={{color:'white', padding:'2px'}}><GitHubIcon></GitHubIcon></Link>
                <Link href='https://www.linkedin.com/in/sean-oh-bb9781241/' target={'_blank'} sx={{color:'white', padding:'2px'}}><LinkedInIcon></LinkedInIcon></Link>
                <Link href='mailto:seanoh@ucsb.edu' target={'_blank'} sx={{color:'white', padding:'2px'}}><EmailIcon></EmailIcon></Link>
              </Box>
            </Grid>

          </Grid>
        </Container>
    
    </footer>
  )
}

export default Footer