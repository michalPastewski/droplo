import { MenuData} from './typeDefinition';

export const initialData: MenuData[] = [
   {
     id: '1',
     data: [
       {
         parentId: '1',
         data: {
           menuId: '11',
           name: 'Michał Pastewski',
           url: 'https://www.linkedin.com/in/michal-pastewski/?locale=en_US',
           menus: [
             {
               parentId: '11',
               data: {
                 menuId: '113',
                 name: 'Sub Menu 2',
                 url: 'https://example.com/sub2',
                 menus: [
                   {
                     parentId: '113',
                     data: {
                       menuId: '1131',
                       name: 'Sub Menu 1',
                       url: 'https://example.com/sub1',
                       menus: [],
                     },
                   },
                 ],
               },
             },
           ],
         },
       },
       {
         parentId: '1',
         data: {
           menuId: '12',
           name: 'Main Menu 2',
           url: 'https://example.com/sub1',
           menus: [],
         },
       },
     ],
   },
   
 ];