'use client';

import { useMenus } from '../../lib/dataContext';
import { NavCard } from './NavCard';

export const NavCards = () => {
  const { data } = useMenus();

  return data.map((nav) => {
    const { data, id } = nav;

    return <NavCard menusData={data} id={id} key={id} />;
  });
};
