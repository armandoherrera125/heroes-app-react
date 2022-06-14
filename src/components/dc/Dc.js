import React from 'react'
// import { Box } from '@mui/material'
import { HeroesList } from '../hero/HeroesList';
import 'animate.css';
export const Dc = () => {
  //console.log(getHeroesByPublisher('DC Comics'));
  return (
    <div className="animate__animated animate__fadeInLeft">
    <HeroesList publisher='DC Comics'/>
  </div>
  )
}
