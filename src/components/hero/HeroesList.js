import { Grid } from '@mui/material';
import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
    const listaByPublisher = useMemo( ()=>getHeroesByPublisher(publisher),[publisher]);
    return (
        <Grid container direction="row"
        justifyContent="center"
        alignItems="flex-start"
        >
            {
                listaByPublisher.map(heroes => (
                    <HeroCard key={heroes.id} {...heroes} />
                ))

            }
        </Grid>
    )
}
