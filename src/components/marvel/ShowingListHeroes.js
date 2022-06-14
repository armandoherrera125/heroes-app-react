import React from 'react'
import { heroes } from '../../data/HeroesList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
export const ShowingListHeroes = () => {

    return (
        <>
            <ul>
                {
                    heroes.map((hero) => (
                        <li key={hero.id}>
                            <Card sx={{ maxWidth: 300 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={`/assets/${hero.id}.jpg`}
                                        alt={hero.superhero}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {hero.superhero}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`The first appearance was: ${hero.first_appearance}`}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        More...
                                    </Button>
                                </CardActions>
                            </Card>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
