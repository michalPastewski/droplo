'use client';

import { createContext, ReactNode, useContext, useReducer } from 'react';

interface DataContextProps {data: MenuData[]; dispatch: React.Dispatch<Action> };
interface MenuData { id: string; name: string; url: string; menus: MenuData[] };
type Action = { type: 'ADD_MENU'; payload: MenuData } | { type: 'DELETE_MENU'; payload: string };

const DataContext = createContext<DataContextProps | undefined>(undefined);

const menuReducer = (data: MenuData[], action: Action): MenuData[] => {
   switch (action.type) { 
      case 'ADD_MENU': 
         return [...data, action.payload];
      case 'DELETE_MENU':
         return data.filter(menu => menu.id !== action.payload);
      default: 
         throw new Error('Unhandled action type');
   };
};

const DataContextProvider = ({children}: {children: ReactNode}) => {
   const [data, dispatch] = useReducer(menuReducer, []);

   return (
      <DataContext.Provider value={{data, dispatch}}>{children}</DataContext.Provider>
   );
};

const useMenus = () => { 
   const context = useContext(DataContext);
   if (!context) throw new Error('useMenu must be used within a MenuProvider');
   return context;
};

export { DataContextProvider, useMenus };
