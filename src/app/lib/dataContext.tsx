'use client';

import { createContext, ReactNode, useContext, useReducer } from 'react';

export interface MenuData {
  id: string;
  data: NestedMenuData[];
}

export interface NestedMenuData {
  menuId: string;
  name: string;
  url?: string;
  menus: NestedMenuData[];
}

interface DataContextProps {
  data: MenuData[];
  dispatch: React.Dispatch<Action>;
}
type Action =
  | { type: 'ADD_MENU'; payload: MenuData }
  | { type: 'DELETE_MENU'; payload: string };

const initialData: MenuData[] = [
  {
    id: '1',
    data: [
      {
        menuId: '11',
        name: 'Main Menu',
        url: 'https://example.com',
        menus: [
          {
            menuId: '112',
            name: 'Sub Menu 1',
            url: 'https://example.com/sub1',
            menus: [],
          },
          {
            menuId: '113',
            name: 'Sub Menu 2',
            url: 'https://example.com/sub2',
            menus: [
              {
                menuId: '1131',
                name: 'Sub Menu 1',
                url: 'https://example.com/sub1',
                menus: [],
              },
            ],
          },
        ],
      },
      {
        menuId: '12',
        name: 'Main Menu 2',
        url: 'https://example.com/sub1',
        menus: [],
      },
    ],
  },
  {
    id: '2',
    data: [
      {
        menuId: '22',
        name: 'NOT Main Menu',
        url: 'https://example.com',
        menus: [],
      },
    ],
  },
];

const DataContext = createContext<DataContextProps | undefined>(undefined);

const menuReducer = (data: MenuData[], action: Action): MenuData[] => {
  switch (action.type) {
    case 'ADD_MENU':
      return [...data, action.payload];
    case 'DELETE_MENU':
      return data.filter((menu) => menu.id !== action.payload);
    default:
      throw new Error('Unhandled action type');
  }
};

const DataContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, dispatch] = useReducer(menuReducer, initialData);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useMenus = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useMenu must be used within a MenuProvider');
  return context;
};

export { DataContextProvider, useMenus };
