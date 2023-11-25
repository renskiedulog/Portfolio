import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Info, Contact, Testimonials, Works, Header, Navigation } from './Components'



function App() {
  return (
    <BrowserRouter basename='/Portfolio' >
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Info />} />
        <Route path="/works" exact element={<Works />} />
        <Route path="/testimonials" exact element={<Testimonials />} />
        <Route path="/contacts" exact element={<Contact />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
