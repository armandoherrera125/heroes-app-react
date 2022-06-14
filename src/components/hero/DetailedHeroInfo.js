import React from 'react'
import { useParams } from 'react-router-dom'
import { Hero } from './Hero';

export const DetailedHeroInfo = () => {
    const {idHeroe} = useParams();

  return (
      <div className="animate__animated animate__fadeInLeft">
          <Hero idHeroe={idHeroe}/>
      </div>
  )
}
