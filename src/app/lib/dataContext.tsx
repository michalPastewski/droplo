'use client';

import { createContext, ReactNode, useContext, useReducer } from 'react';
import { initialData } from './exampleData';
import { Action, DataContextProps, MenuData } from './typeDefinition';

const DataContext = createContext<DataContextProps | undefined>(undefined);

const menuReducer = (data: MenuData[], action: Action): MenuData[] => {
  switch (action.type) {
    case 'ADD_MENU':
      return [...data, action.payload.newMenu];
    case 'DELETE_MENU':
      return data.filter((menu) => menu.id !== action.payload);
    case 'UPDATE_MENU':
      return data.map((menus) => {
        const updatedMenusData = menus.data.map((menu) => {
          if (menu.data.menuId === action.payload.id) {
            const newMenuData = { ...menu.data, ...action.payload.updateMenu };
            const prepareNewData = menu;
            prepareNewData.data = newMenuData;
            return prepareNewData;
          }
          return menu;
        });
        return {
          ...menus,
          data: updatedMenusData,
        };
      });
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
