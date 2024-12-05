import { FormButton } from '../navigationForm/FormButton';
export const NavCardFooter = ({ handleOpenForm }) => {
  return (
    <section className="w-full py-5 px-6">
      <FormButton
        label="Dodaj pozycję menu"
        onClick={() => handleOpenForm(true)}
      />
    </section>
  );
};
