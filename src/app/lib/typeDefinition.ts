// Data
export interface MenuData {
   id: string;
   data: NestedMenuData[];
 }
 
 export interface NestedMenuData {
   parentId: string;
   data: {
     menuId: string;
     name: string;
     url?: string;
     menus: NestedMenuData[];
   };
 }
 
 // Context Data Provider
 export interface DataContextProps {
   data: MenuData[];
   dispatch: React.Dispatch<Action>;
 }
 
 interface AddMenuAction {
   type: 'ADD_MENU';
   payload: { parentId: string; newMenu: MenuData };
 }
 
 export type Action = AddMenuAction | { type: 'DELETE_MENU'; payload: string } | { type: 'UPDATE_MENU'; payload: {id: string, updateMenu: {name: string, url: string} };

 // Navigation Cards
 export interface NavCardBodyProps {
  menuData: {
    menuId: string;
    name: string;
    url?: string;
    menus: NestedMenuData[];
  };
  borderTop?: boolean;
}