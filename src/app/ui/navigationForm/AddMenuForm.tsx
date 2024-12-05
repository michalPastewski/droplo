'use client';

import { useRef } from 'react';
import { IoTrashOutline } from "react-icons/io5";
import { useMenus } from '../../lib/dataContext';
import { FormButton } from './FormButton';
import { FormInput } from './FormInput';

interface AddMenuFormProps {
  onClose: (value: boolean) => void;
}

export const AddMenuForm: React.FC<AddMenuFormProps> = ({onClose}) => {
  const { dispatch } = useMenus();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMenu = {
      id: new Date().valueOf().toString(),
      name: nameInputRef.current!.value,
      url: urlInputRef.current!.value,
      menus: []
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
      </section>
    </form>
  )
}