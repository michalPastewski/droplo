import { IoMdAddCircleOutline } from "react-icons/io";

export const NavigationMenu = () => {
   return (
     <header className="container mx-xl flex_center flex-col gap-6 px-4 py-6 bg-bg-secondary border_secondary">
       <section className="container mx-w-header flex_center flex-col gap-1">
         <h2 className="text-base font-semibold text-header-color">Menu jest puste</h2>
         <p className="text-sm font-normal text-primary-color">W tym menu nie ma jeszcze żadnych linków.</p>
       </section>
       <button className="flex_center gap-1 py-2.5 px-3.5 border border-primary-button-color rounded-lg bg-primary-button text-white shadow-base-shadow">
         <IoMdAddCircleOutline className="size-5"/><span className="px-0.5 text-sm font-semibold">Dodaj pozycję menu</span></button>
     </header>
   )
 }