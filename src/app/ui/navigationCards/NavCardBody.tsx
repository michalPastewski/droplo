import { useState } from 'react';
import { LiaArrowsAltSolid } from 'react-icons/lia';
import { useMenus } from '../../lib/dataContext';
import { NavCardBodyProps } from '../../lib/typeDefinition';
import { NavCardButton } from './NavCardButton';
import { AddMenuForm } from '../navigationForm/AddMenuForm';

export const NavCardBody: React.FC<NavCardBodyProps> = ({
  menuData,
  borderTop,
}) => {
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useMenus();
  const { menuId, name, url, menus } = menuData;
  const borderRadius = borderTop ? '-t-lg' : '-bl-lg';

  const handleDelete = () => {
    dispatch({ type: 'DELETE_MENU', payload: menuId });
    console.log(`Usunięto menu o numerze ${menuId}`);
  };

  const handleEditMode = () => {
    setEditMode(true);
  };

  return (
    <div className="flex flex-col items-end" id={menuId}>
      <div
        className={`w-full flex items-center justify-between py-4 px-6 gap-1 bg-bg-primary border border-card-border-color rounded${borderRadius} w-full`}>
        <div className="flex">
          <LiaArrowsAltSolid className="size-10 p-2.5 rounded-lg" />
          <div>
            <h3 className="text-sm font-semibold text-header-color">{name}</h3>
            <a href={url} className="text-sm font-normal text-primary-color">{url}</a>
          </div>
        </div>
        <div className="border_primary shadow-base-shadow justify-end">
          <NavCardButton label="Usuń" border onClick={handleDelete} />
          <NavCardButton label="Edytuj" border onClick={handleEditMode} />
          <NavCardButton label="Dodaj pozycję menu" />
        </div>
      </div>

      {editMode &&
        <div className="w-10/12 py-4 self-center">
          <AddMenuForm onClose={setEditMode} editData={menuData}/>
        </div>
      }

      {menus.map((menu) => {
        return (
          <div key={menu.data.menuId} className="w-11/12">
            <NavCardBody menuData={menu.data} />
          </div>
        );
      })}
    </div>
  );
};
