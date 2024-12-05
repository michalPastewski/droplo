'use client';

import { useMenus } from '../../lib/dataContext';
import { NavCard } from './NavCard';

export const NavCards = () => {
  const {data} = useMenus();

  return (
    data.map((nav) => {
      return (
        <NavCard
          name={nav.name}
          key={nav.id}
          url={nav.url}
        />
      )
    })
  )
}