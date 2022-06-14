import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Marvel } from '../components/marvel/Marvel';
import { Dc } from '../components/dc/Dc';
import { Search } from '../components/search/Search';
import { NavBar } from '../components/ui/NavBar';
// import { Hero } from '../components/hero/Hero';
import { DetailedHeroInfo } from '../components/hero/DetailedHeroInfo';

export const Dashboard = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='marvel' element={<Marvel />} />
                <Route path='dc' element={<Dc />} />
                <Route path='search' element={<Search />} />
                <Route path='/hero/:idHeroe' element={<DetailedHeroInfo />} />
                <Route path='/' element={<Marvel />} />
            </Routes>
        </>
    )
}
