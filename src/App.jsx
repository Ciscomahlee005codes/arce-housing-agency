import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader'; // Your custom loader
import DelayLoader from './Components/Loader/DelayLoader'; 

// Lazy-loaded pages
const Home = DelayLoader(() => import("./Pages/Home/Home"));
const ViewHomes = DelayLoader(() => import("./Pages/VHomes/ViewHomes"));
const About = DelayLoader(() => import("./Pages/AboutUs/About"));
const Contact = DelayLoader(() => import("./Pages/Contact/Contact"));
const RentHistory = DelayLoader(() => import("./Pages/RentHistory/RentHistory"));
const ProfilePage = DelayLoader(() => import("./Pages/Home/ProfilePage/ProfilePage"));
const HomeDetails = DelayLoader(() => import("./Components/HomeDetails/HomeDetails"));
const LodgeDetails = DelayLoader(() => import("./Components/LodgeDetails/LodgeDetails"));
const FaqPage = DelayLoader(() => import("./Pages/FaqPage/FaqPage"));
const TestPage = DelayLoader(() => import("./Pages/TestPage/TestPage"));

function App() {
  return (
    <div className='app-container'>
      <Suspense fallback={<Loader />}>
       <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewHomes' element={<ViewHomes />} />
          <Route path='/aboutUs' element={<About />} />
          <Route path='/contactUs' element={<Contact />} />
          <Route path='/rentalHistory' element={<RentHistory />} />
          <Route path="/viewHomes/:id" element={<HomeDetails />} />
          <Route path="/lodge/:id" element={<LodgeDetails />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/faq' element={<FaqPage />} />
          <Route path='/testimonials' element={<TestPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
