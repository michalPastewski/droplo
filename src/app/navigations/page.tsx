'use client'
import { useContext } from 'react';
import { NavigationMenu } from '../../ui/NavigationMenu';
import { DataContext } from '../lib/dataContext';
import { AddMenuForm } from '../ui/navigationForm/AddMenuForm';

export default function NavigationsList() {
  const {data, setData} = useContext(DataContext);

console.log(data)

   return (
       <main className="md:container md:mx-auto my-8 flex_center flex-col gap-4">
        <NavigationMenu />
        <AddMenuForm />
       </main>
   );
 }