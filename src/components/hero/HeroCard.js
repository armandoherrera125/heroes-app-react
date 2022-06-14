import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        <Card className="animate__animated animate__fadeInLeft" sx={{
            maxWidth: 400,
            margin: '3em',
            backgroundColor: '#1F1B24',
            color: '#FFFFFF',
            borderRadius: '10px',

        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
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
                <Button component={Link} to={`/hero/${id}`} style={{backgroundColor:'#6200EE',color:'#FFFFFF',borderRadius:'10px'}}>
                    More...
                </Button>
            </CardActions>
        </Card>

    )
}
