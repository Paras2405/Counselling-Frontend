import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Counselors from './components/Counselors';
import AboutUs from './Pages/AboutUs';
import About from './components/About';
import Faq from './components/Faq';
import Articles from './Pages/Articles';
import OurCounselors from './Pages/OurCounselors';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { useState } from 'react';
import Alert from './components/Alert';
import Meetings from './Pages/Meetings';


function MobileComponents() {
  const location = useLocation();

  // Render only on the main page
  if (location.pathname === "/") {
    return (
      <div className="mobile-only">
        <Counselors />
        <About />
        <Faq />
      </div>
    );
  }

  return null; // Do not render on other pages
}

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: '', type: '' }); // Clear alert after 3 seconds
    }, 3000);
  };
  return (
    <Router>
      {/* Navbar */}
      <Navbar showAlert={showAlert} />
      <Alert alert={alert}></Alert>
      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Login" element={<Login showAlert={showAlert}  />} />
        <Route path="/Signup" element={<SignUp  showAlert={showAlert}/>} />
        <Route path="/OurCounselors" element={<OurCounselors />} />
        <Route path="/Meetings" element={<Meetings />} />
      </Routes>

      {/* Mobile-only components */}
      <MobileComponents />
    </Router>
  );
}

export default App;
