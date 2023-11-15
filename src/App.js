import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Home, Info, Contact, Testimonials, Works, Header, Navigation } from './Components'



function App() {
  return (
    <BrowserRouter basename='Portfolio'>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profile" exact element={<Info />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
