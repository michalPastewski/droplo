import { IoTrashOutline } from "react-icons/io5";
import { FormInput } from './FormInput';
import { FormButton } from './FormButton';

export const AddMenuForm = () => {
   return (
       <form action="" className='container mx-auto py-5 px-6 form_grid border_primary bg-bg-primary' style={{ gridTemplateColumns: '1fr auto 40px', gridTemplateRows: 'auto 1fr' }}>
         <section className='flex flex-col gap-2 col-span-2'>
           <FormInput label='Nazwa' placeholder='np. Promocja' />
           <FormInput label='Link' placeholder='Wklej lub wyszukaj' isIcon='true'/>
         </section>
         <div className="">
           <IoTrashOutline  className="size-10 p-2.5"/>
         </div>
         <section className="col-span-1 row-span-1 flex gap-2">
           <FormButton label='Anuluj' />
           <FormButton label='Dodaj' submit='true' />
         </section>
       </form>
   )
  }