import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Home from "./Pages/Home/Home"
import ViewHomes from './Pages/VHomes/ViewHomes'
import About from './Pages/AboutUs/About'
import { Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import RentHistory from './Pages/RentHistory/RentHistory'
import ProfilePage from './Pages/Home/ProfilePage/ProfilePage'
import HomeDetails from './Components/HomeDetails/HomeDetails'
import LodgeDetails from './Components/LodgeDetails/LodgeDetails'
import FaqPage from './Pages/FaqPage/FaqPage'
import TestPage from './Pages/TestPage/TestPage'

function App() {


  return (
    <div className='app-container'>
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
    </div>
  )
}

export default App
