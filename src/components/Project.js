import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


function Project({deployedLink, repoLink, imgPath, projName}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
        <Card sx={{position:'relative'}}>
            <CardContent sx={{position:'absolute', top:'0px', left:'0px', zIndex:'10', padding: '8px 16px'}}>
                <Typography variant='h6'>{projName}</Typography>
            </CardContent>
            <CardActions sx={{position:'absolute', top:'0px', right:'0px', zIndex:'10', padding: '4px'}}>
                <Button href={repoLink} sx={{minWidth: '0px', color: 'black'}}><GitHubIcon></GitHubIcon></Button>
            </CardActions>
            <CardActionArea onClick={() => window.open(deployedLink)}>
                <CardMedia component='img' height={130} image={imgPath}/>
            </CardActionArea>

        </Card>
    </Grid>
  )
}

export default Project