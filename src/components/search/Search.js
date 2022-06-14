import React, { useEffect, useState } from 'react'
import { Alert, AlertTitle, Box, Button, Grid, TextField } from '@mui/material'
import { useForm } from '../../hooks/useForm'
import { getHeroesBySearch } from '../../helpers/getHeroesBySearch';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { HeroCard } from '../hero/HeroCard';
import 'animate.css';


export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [formValues, setFormValues] = useForm({
    searchInput: q
  });
  const { searchInput } = formValues;
  const [heroesList, setheroesList] = useState([]);
  useEffect(() => {
    const heroesFileted = getHeroesBySearch(q);
    setheroesList(heroesFileted);
  }, [q])


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchInput}`);
  }
  return (
    <form onSubmit={handleSubmit} className="animate__animated animate__fadeInLeft">
      <Box sx={{ flexGrow: 1, margin: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <h1>Search a hero:</h1>
            <div style={{ width: '100%', textAlign: 'center', margin: 'auto', backgroundColor: '#BB86FC' }}>
              <TextField
                name='searchInput'
                value={searchInput}
                onChange={setFormValues}
                fullWidth label="Search Hero" variant="filled" color="primary"
                autoComplete="off"
              />
            </div>
            <Button type="submit" fullWidth style={{ marginTop: '10px', backgroundColor: '#BB86FC', color: '#FFFFFF' }}>Search</Button>
          </Grid>
          <Grid item xs={6}>
            <div style={{ width: '100%', margin: 'auto' }}>

              {
                (q === '')
                  ? <Alert severity="info" style={{ width: '100%', marginTop: 80 }}>
                    <AlertTitle>Hero</AlertTitle>
                    Looking for a hero — <strong>Search it out!</strong>
                  </Alert>
                  : (heroesList.length === 0)
                  && <Alert className="animate__animated animate__fadeInLeft" severity="error" style={{ width: '100%', marginTop: 80 }}>
                    <AlertTitle>Error</AlertTitle>
                    There are no heroes in the list — <strong>Look up for another hero</strong>
                  </Alert>
              }

              <div className="animate__animated animate__fadeInLeft">
                {
                  heroesList.map(hero => (
                    <HeroCard
                      key={hero.id}
                      {...hero}
                    />
                  ))
                }
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </form>
  )
}
