import logo from './logo.svg';
import './App.css';
import Browse from './components/browse.jsx';
import Home from './components/home.jsx';
import Adopt from './components/adopt.jsx';
import FAQ from './components/faq.jsx';
import Release from './components/release.jsx';
import Footer from './components/footer.jsx';
import Login from './components/login.jsx';
import SignUp from './components/signup.jsx';
import Logout from './components/logout.jsx';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <nav>
            <ul>
              <li><img id='logo' width={50} height={50} src="/logo.png" alt="" /></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse">Find Pets</Link></li>
              <li><Link to="/adopt">Adopt</Link></li>
              <li><Link to="/release">Release</Link></li>
                {localStorage.getItem('username') ? 
                <li id='login'><Link to="/logout">{localStorage.getItem('username')}</Link></li>
              :
              <li id='login'><Link to="/login">Login</Link></li>
              }
            </ul>
          </nav>
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/browse' element={<Browse />} />
              <Route path='/adopt' element={<Adopt />} />
              <Route path='/release' element={<Release />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/logout' element={<Logout />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
