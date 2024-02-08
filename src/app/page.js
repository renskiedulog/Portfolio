import NavBar from './../Components/NavBar';
import Home from './../Components/Home';
import About from './../Components/About';
import Skills from '@/Components/Skills';

export default function page() {
  return (
    <main className='mx-auto md:w-9/12 w-full'>
      <NavBar />
      <Home />
      <About />
      <Skills />
    </main>
  );
}
