import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Home, Info, Contact, Testimonials, Works, Header, Navigation } from './Components'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Info />} />
        <Route path="/works" exact element={<Works />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
