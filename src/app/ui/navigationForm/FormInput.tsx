import { IoSearchOutline } from "react-icons/io5";


interface FormInputProps {label: string, placeholder: string, isIcon?: string};

export const FormInput: React.FC<FormInputProps> = ({label, placeholder, isIcon}) => {
 return (
   <div className="relative">
     <label className="text-sm text-primary-color">{label}</label>
     <div className="flex items-center">
       {isIcon 
       ? 
         <>
           <IoSearchOutline className="absolute left-3 text-gray-400" />
           <input type="text" className="border_primary py-2 px-3 pl-8 shadow-base-shadow placeholder-placeholder-color w-full" placeholder={placeholder}/>
         </>
       :
         <input type="text" className="border_primary py-2 px-3 shadow-base-shadow placeholder-placeholder-color w-full" placeholder={placeholder}/>
       }
     </div>
   </div>
 )
}