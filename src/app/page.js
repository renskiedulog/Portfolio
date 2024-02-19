import { About, NavBar, Home, Skills, Services, Works, Contact, BackToTopButton, Footer } from "./_Components";

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
      <BackToTopButton />
      <Footer />
    </main>
  );
}
