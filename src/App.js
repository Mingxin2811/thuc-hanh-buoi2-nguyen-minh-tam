import './App.css';
import Home from './pages/Home/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop/index.js';
import Blogs from './pages/Blogs/index.js';
import Pages from './pages/Pages/index.js';
import Contact from './pages/Contact/index.js';
import Navbar from './components/NavBar/index.js';

function App() {
  return (
    <>
    <BrowserRouter>
     {/* <Navbar /> */}
      <div>
        {/* Khai báo các đường dẫn URL */}
        <Routes>
          {/* Khi URL là "/", hiển thị component Home */}
          <Route path="/" element={<Home />} />
          
          {/* Khi URL là "/about-us", hiển thị component AboutUs */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;
