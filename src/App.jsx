import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import Gallery from './Pages/Gallery';
import OurStories from './Pages/Stories';
import AdminDashboard from './Pages/AdminDashboard';
import { CateringBookingForm, DecorationBookingForm, EventPlanningForm } from './Pages/ServicesEvents';

const Layout = ({ children }) => {
    const location = useLocation();
    const isAdminRoute = location.pathname === '/admin';

    return (
        <>
            {!isAdminRoute && <Navbar />}
            {children}
            {!isAdminRoute && <Footer />}
        </>
    );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/stories' element={<OurStories />} />
          <Route path='/eventplan' element={<EventPlanningForm />} />
          <Route path='/catering' element={<CateringBookingForm />} />
          <Route path='/decoration' element={<DecorationBookingForm/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/admin' element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
