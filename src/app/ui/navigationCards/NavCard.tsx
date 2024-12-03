import { LiaArrowsAltSolid } from "react-icons/lia";
import { NavCardButton } from './NavCardButton';
import { NavCardFooter } from './NavCardFooter';

interface NavCardProps {
   name: string;
   url: string;
}

export const NavCard: React.FC<NavCardProps> = ({name, url}) => {
 return (
   <section className='container mx-auto border_primary'>
       <div className='w-full flex items-center justify-between py-4 px-6 gap-1 bg-bg-primary border-b border-card-border-color rounded-t-lg w-full'>
        <div className="flex">
          <LiaArrowsAltSolid className='size-10 p-2.5 rounded-lg'/>
          <div>
            <h2 className='text-sm font-semibold text-header-color'>{name}</h2>
            <p className='text-sm font-normal text-primary-color'>{url}</p>
          </div>
        </div>
         <div className='border_primary shadow-base-shadow justify-end'>
           <NavCardButton label="Usuń" border />
           <NavCardButton label="Edytuj" border />
           <NavCardButton label="Dodaj pozycję menu" />
         </div>
       </div>
      <NavCardFooter />
   </section>
 )
}
