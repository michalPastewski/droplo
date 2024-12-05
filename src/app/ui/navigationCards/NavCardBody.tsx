import { LiaArrowsAltSolid } from 'react-icons/lia';
import { NestedMenuData } from '../../lib/dataContext';
import { NavCardButton } from './NavCardButton';

interface NavCardBodyProps {
  menuData: {
    menuId: string;
    name: string;
    url?: string;
    menus: NestedMenuData[];
  };
  borderTop?: boolean;
}

export const NavCardBody: React.FC<NavCardBodyProps> = ({
  menuData,
  borderTop,
}) => {
  const { name, url, menus } = menuData;
  const borderRadius = borderTop ? '-t-lg' : '-bl-lg';

  return (
    <div className="flex flex-col items-end">
      <div
        className={`w-full flex items-center justify-between py-4 px-6 gap-1 bg-bg-primary border border-card-border-color rounded${borderRadius} w-full`}>
        <div className="flex">
          <LiaArrowsAltSolid className="size-10 p-2.5 rounded-lg" />
          <div>
            <h3 className="text-sm font-semibold text-header-color">{name}</h3>
            <p className="text-sm font-normal text-primary-color">{url}</p>
          </div>
        </div>
        <div className="border_primary shadow-base-shadow justify-end">
          <NavCardButton label="Usuń" border />
          <NavCardButton label="Edytuj" border />
          <NavCardButton label="Dodaj pozycję menu" />
        </div>
      </div>
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
