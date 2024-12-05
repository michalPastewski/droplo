import { MenuData} from './typeDefinition';

export const initialData: MenuData[] = [
   {
     id: '1',
     data: [
       {
         parentId: '1',
         data: {
           menuId: '11',
           name: 'Main Menu',
           url: 'https://example.com',
           menus: [
             {
               parentId: '11',
               data: {
                 menuId: '112',
                 name: 'Sub Menu 1',
                 url: 'https://example.com/sub1',
                 menus: [],
               },
             },
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
   {
     id: '2',
     data: [
       {
         parentId: '2',
         data: {
           menuId: '22',
           name: 'NOT Main Menu',
           url: 'https://example.com',
           menus: [],
         },
       },
     ],
   },
 ];