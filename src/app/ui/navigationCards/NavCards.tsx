'use client';

import { useMenus } from '../../lib/dataContext';
import { NavCard } from './NavCard';

export const NavCards = () => {
  const { data } = useMenus();

  return data.map((nav) => {
    const { data, id } = nav;
    console.log('CARDS CARDS', data, id);
    return <NavCard menusData={data} id={id} key={id} />;
  });
};
