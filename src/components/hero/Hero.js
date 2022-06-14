// import { Box, Grid } from '@mui/material';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { getHeroesById } from '../../helpers/getHeroesById';
// import {HeroCard} from './HeroCard';
export const Hero = ({ idHeroe }) => {
  const { id, superhero, first_appearance } = useMemo(  () =>getHeroesById(idHeroe),[idHeroe]);
  const navigate = useNavigate();
  return (

    <Card sx={{
      maxWidth: 400,
      borderRadius: '15px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10px auto 10px auto',  
      backgroundColor: '#332940',
      color: '#FFFFFF',
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={`/assets/${id}.jpg`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {superhero}
          </Typography>
          <Typography variant="body2">
            {first_appearance}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> navigate(-1)} style={{borderRadius:'10px',backgroundColor:'#6200EE',color:'#FFFFFF'}}>
            Regresar          
        </Button>
      </CardActions>
    </Card>

  )
}
