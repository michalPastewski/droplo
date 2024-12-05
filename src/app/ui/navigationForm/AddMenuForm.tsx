'use client';

import { useRef, useState } from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { z } from 'zod';
import { useMenus } from '../../lib/dataContext';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';

interface AddMenuFormProps {
  onClose: (value: boolean) => void;
}
type Menu = z.infer<typeof menuSchema>;
type FormattedError = { name?: { _errors: string[] }; url?: { _errors: string[] };};

const menuSchema = z.object({
  id: z.string(),
  name: z.string().nonempty('Nazwa jest wymagana'),
  url: z.string().url('Wprowadź poprawny adress url'),
  menus: z.array(z.any()),
});

export const AddMenuForm: React.FC<AddMenuFormProps> = ({onClose}) => {
  const { dispatch } = useMenus();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMenu: Menu = {
      id: new Date().valueOf().toString(),
      name: nameInputRef.current!.value,
      url: urlInputRef.current!.value,
      menus: []
    }

    const result = menuSchema.safeParse(newMenu);

    if (!result.success) {
      const formatted: FormattedError  = result.error.format();
      setErrorMessage(formatted.name?._errors[0] || formatted.url?._errors[0]);
      return;
    }

    dispatch({type: 'ADD_MENU', payload: newMenu});
    onClose(false);
  }

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose(false);
  };

  const handleDelete = (id: string) => {
    if(id) dispatch({type: 'DELETE_MENU', payload: id});
    onClose(false);
  }

  return (
    <form onSubmit={handleSubmit} className='container mx-auto py-5 px-6 form_grid border_primary bg-bg-primary' style={{ gridTemplateColumns: '1fr auto 40px', gridTemplateRows: 'auto 1fr' }}>
      <section className='flex flex-col gap-2 col-span-2'>
        <FormInput 
          label='Nazwa' 
          placeholder='np. Promocja' 
          ref={nameInputRef}
        />
        <FormInput
          label='Link'
          placeholder='Wklej lub wyszukaj'
          isIcon='true'
          ref={urlInputRef}
        />
      </section>
      <div className="">
        <IoTrashOutline  className="size-10 p-2.5" onClick={() => handleDelete("")} />
      </div>
      <section className="col-span-1 row-span-1 flex gap-2">
        <FormButton label='Anuluj' onClick={(e)=> handleClose(e)} type="button" />
        <FormButton label='Dodaj' submit='true' type="submit" />
        { errorMessage &&
           <div className='w-1/2 border border-rose-500 rounded-lg px-4 py-2 ml-10 text-center bg-rose-100 text-rose-800 font-semibold text-sm'>{errorMessage}</div>
        }
      </section>
    </form>
  )
}