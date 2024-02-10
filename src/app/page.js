import NavBar from './_Components/NavBar';
import Home from './_Components/Home';
import About from './_Components/About';
import Skills from './_Components/Skills';
import Services from './_Components/Services';

export default function page() {
  return (
    <main className='mx-auto md:w-9/12 w-full'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Services />
    </main>
  );
}
