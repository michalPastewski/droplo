'use client'
interface NavCardButtonProps {
   label: string;
   border?: boolean;
}

export const NavCardButton: React.FC<NavCardButtonProps> = ({label, border}) => {
 const innerBorder = border ? "border-r border-primary-color" : null;
 
   return (
       <button className={`min-h-10 py-2 px-4 ${innerBorder} text-sm font-semibold text-secondary-color`}>{label}</button>
   )
}