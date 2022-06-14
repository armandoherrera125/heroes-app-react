// import { Grid } from '@mui/material'
// import { Box, Grid } from '@mui/material';
import React from 'react'
import { HeroesList } from '../hero/HeroesList';
// import { ShowingListHeroes } from './ShowingListHeroes'
export const Marvel = () => {
  //sconsole.log(getHeroesByPublisher('Marvel Comics'));
  return (
    <div className="animate__animated animate__fadeInLeft">
            <HeroesList publisher='Marvel Comics' />    
    </div>
  )
}
