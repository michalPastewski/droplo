import Link from 'next/link';
export default function Home() {
  return (
      <main className='flex_center flex-col py-12 px-12 gap-4 text-lg'>
        HELLO DROPLO
        <section>
          <p>Cześć,</p>
          <p>jeśli tu jesteś to świetnie. Któś zerknie na ten kod a to juz coś.</p>
          <p>Cieszę się ze mogłem uczestniczyć w Waszej rekrutacji, przysporzyło mi to duzo frajdy.</p>
          <p>Pisanie kodu od zera to zawsze fajna zabawa, a jeśli w DROPLO mozecie robić to często to wielkie zazdro :D</p>
          <p>Niestety miałem cizęki tydzień i nie mogłem przeznaczyć na projekt tyle czasu ile bym chciał...
            Dlatego nie wszytko zostało zrealizowane :(
          </p>
          <p>Niemniej będzie mi miło jeśli zerkniesz na kod i stwierdzisz ze jest całkiem spoko (oby).</p>
          <p>Było mi bardzo miło! </p>
          <p>Być moze do zobaczenia na kolejnej rekrutacji. Liczę na jakieś fajne zadanko :D</p>
        </section>
        <Link href="/navigations" className='border_primary bg-blue-100 py-4 px-5 w-1/2 text-center text-blue-800'>Przejdź do zadania</Link>
      </main>
  );
}
