import { useState } from 'react';
import { NestedMenuData } from '../../lib/dataContext';
import { AddMenuForm } from '../navigationForm/AddMenuForm';
import { NavCardBody } from './NavCardBody';
import { NavCardFooter } from './NavCardFooter';

interface NavCardProps {
  menusData: NestedMenuData[];
}

export const NavCard: React.FC<NavCardProps> = ({ menusData }) => {
  const [addMenu, setAddMenu] = useState(false);

  return (
    <article className="container mx-auto border_primary">
      <section className="bg-bg-secondary rounded-t-lg">
        {menusData.map((menu) => {
          return <NavCardBody menuData={menu} key={menu.menuId} borderTop />;
        })}
      </section>

      {addMenu && (
        <section className="w-full py-4 px-6 border-b bg-bg-secondary">
          <AddMenuForm onClose={setAddMenu} />
        </section>
      )}
      <NavCardFooter handleOpenForm={setAddMenu} />
    </article>
  );
};
