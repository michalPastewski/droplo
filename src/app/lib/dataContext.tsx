'use client'
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface MenuData { id: string; name: string; url: string; menus: MenuData[]; }

const initialState: MenuData[] = [
   {
      id: '001',
      name: 'TEST MENU',
      url: 'https://example/menu/mpastewski',
      menus: []
   }
];

interface DataContextProps {data: MenuData[]; setData: Dispatch<SetStateAction<MenuData[]>>;}
const DataContext = createContext<DataContextProps | undefined>(undefined);

const DataContextProvider = ({children}: {children: ReactNode}) => {
   const [data, setData] = useState<MenuData[]>(initialState);

   return (
      <DataContext.Provider value={{data, setData}}>{children}</DataContext.Provider>
   );
};

export { DataContext, DataContextProvider };