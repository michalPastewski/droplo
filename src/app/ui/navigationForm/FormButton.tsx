interface FormButtonProps { label: string; submit?: string;}

export const FormButton: React.FC<FormButtonProps> = ({label, submit}) => {
const textColor = submit ? 'text-submit-color' : 'text-secondary-color';

return (
   <button className={`px-3.5 py-2.5 border_primary shadow-base-shadow font-semibold text-sm ${textColor}`}>{label}</button>
)
}