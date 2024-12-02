import { NavigationMenu } from '../../ui/NavigationMenu';
import { AddMenuForm } from '../ui/navigationForm/AddMenuForm';

export default function NavigationsList() {
   return (
       <main className="md:container md:mx-auto my-8 flex_center flex-col gap-4">
        <NavigationMenu />
        <AddMenuForm />
       </main>
   );
 }