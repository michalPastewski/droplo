'use client';

import { forwardRef} from 'react';
import { IoSearchOutline } from "react-icons/io5";


interface FormInputProps {label: string, placeholder: string, isIcon?: string};

export const FormInput= forwardRef<HTMLInputElement, FormInputProps>(function FormInput(props, ref) {
  const {label, isIcon, ...otherProps} = props;

 return (
   <div className="relative">
     <label htmlFor={label} className="text-sm text-primary-color">{label}</label>
     <div className="flex items-center">
       {isIcon 
       ? 
         <>
           <IoSearchOutline className="absolute left-3 text-gray-400" />
           <input
              id={label}
              className="border_primary py-2 px-3 pl-8 shadow-base-shadow placeholder-placeholder-color w-full"
              type="text"
              ref={ref}
              {...otherProps}
            />
         </>
       :
         <input
          id={label}
          className="border_primary py-2 px-3 shadow-base-shadow placeholder-placeholder-color w-full" 
          type="text"
          ref={ref}
          {...otherProps}
         />
       }
     </div>
   </div>
 )
});