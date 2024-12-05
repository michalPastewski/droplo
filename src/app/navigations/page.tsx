'use client'
import { useState } from 'react';
import { NavigationMenu } from '../../ui/NavigationMenu';
import { NavCards } from '../ui/navigationCards/NavCards';
import { AddMenuForm } from '../ui/navigationForm/AddMenuForm';


export default function NavigationsList() {
  const [addMenu, setAddMenu] = useState(false);

   return (
       <main className="md:container md:mx-auto my-8 flex_center flex-col gap-4">
        <NavigationMenu  isAddForm={setAddMenu} />
        {addMenu && <AddMenuForm onClose={setAddMenu} />}
        <NavCards />
       </main>
   );
 }