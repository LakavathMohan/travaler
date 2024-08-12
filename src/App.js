// App.js

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Newpage from './components/newpage/Newpage';
import Temple from './components/newpage/Temple';
import Nature from './components/newpage/Nature';


function AppContent() {
  const location = useLocation();
  const isRegisterOrLoginPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <div className="App">
      {!isRegisterOrLoginPage && <Navbar />}
      <main>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/temple' element={<Temple/>}/>
          <Route path='/goa' element={<Newpage/>}/>
          <Route path='/nature' element={<Nature/>}/>
         
        </Routes>
      </main>
      {!isRegisterOrLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
