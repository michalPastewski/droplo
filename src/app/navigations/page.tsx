'use client'
import { useContext } from 'react';
import { DataContext } from '../lib/dataContext';
import { NavigationMenu } from '../../ui/NavigationMenu';
import { AddMenuForm } from '../ui/navigationForm/AddMenuForm';
import { NavCards } from '../ui/navigationCards/NavCards';


export default function NavigationsList() {
  const {data, setData} = useContext(DataContext);

   return (
       <main className="md:container md:mx-auto my-8 flex_center flex-col gap-4">
        <NavigationMenu />
        <AddMenuForm />
        <NavCards />
       </main>
   );
 }