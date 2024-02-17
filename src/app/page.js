import NavBar from './_Components/NavBar';
import Home from './_Components/Home';
import About from './_Components/About';
import Skills from './_Components/Skills';
import Services from './_Components/Services';
import Works from './_Components/Works';
import Contact from './_Components/Contact';

export default function page() {
  return (
    <main className='mx-auto md:w-9/12 w-full'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Works />
      <Contact />
    </main>
  );
}
