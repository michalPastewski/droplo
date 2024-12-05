interface FormButtonProps {
   label: string;
   submit?: string;
   type?: 'button' | 'submit';
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const FormButton: React.FC<FormButtonProps> = ({ label, submit, type = 'button', onClick }) =>  {
   const textColor = submit ? 'text-submit-color' : 'text-secondary-color';

   return (
      <button
         type={type}
         onClick={onClick}
         className={`px-3.5 py-2.5 border_primary shadow-base-shadow font-semibold text-sm ${textColor}`}
      >
         {label}
      </button>
   )
}