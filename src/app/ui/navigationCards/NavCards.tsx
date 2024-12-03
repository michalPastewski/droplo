'use client'

import { useContext } from 'react';
import { DataContext } from '../../lib/dataContext';
import { NavCard } from './NavCard';

export const NavCards = () => {
   const {data} = useContext(DataContext);

   return (
     data.map((nav) => {
       return (
         <NavCard name={nav.name} key={nav.id} url={nav.url} />
       )
     })
   )
  }