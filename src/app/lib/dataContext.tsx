'use client'
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface MenuData { id: string; name: string; url: string; menus: MenuData[] };

const initialState: MenuData[] = [
   {
      id: '001',
      name: 'Test Mike Menu',
      url: 'https://example/menu/mpastewski',
      menus: []
   },
   {
      id: '002',
      name: 'Promocje',
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