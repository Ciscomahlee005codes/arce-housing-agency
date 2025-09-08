import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Loader from './Components/Loader/Loader'; 
import DelayLoader from './Components/Loader/DelayLoader'; 
import ScrollToTop from './Components/ScrollTop/ScrollToTop';
import LogInPage from './Pages/LogInPage/LogInPage';


import ProfileSettings from './Components/ProfileSettings/ProfileSettings';
import Notification from './Components/Notification/Notification';
import SharedRoomDetails from './Components/SharedRoomDetails/SharedRoomDetails';
import HostelDetails from './Components/HostelDetails/HostelDetails';
import UserChats from './Components/UserChats/UserChats';
import ReferTenant from './Components/ReferTenant/ReferTenant';
import AgentDashboardHomePage from './AgentDashboardPages/AgentDashboardHomePage/AgentDashboardHomePage';
import AgentPropertiesPage from './AgentDashboardPages/AgentPropertiesPage/AgentPropertiesPage';
import AgentRentalTourPage from './AgentDashboardPages/AgentRentalTourPage/AgentRentalTourPage';
import AgentRequestPage from './AgentDashboardPages/AgentRequestPage/AgentRequestPage';
import AgentNotificationPage from './AgentDashboardPages/AgentNotificationPage/AgentNotificationPage';
import AgentProfilePage from './AgentDashboardPages/AgentProfilePage/AgentProfilePage';
import HelpSupportPage from './AgentDashboardPages/HelpSupportPage/HelpSupportPage';
import AgentMessagesPages from './AgentDashboardPages/AgentMessagesPages/AgentMessagesPages';

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
  const location = useLocation();
   const hiddenRoutes = ["/login", "/agentDashboard/Home", 
    "/agentDashboard/Property", "/agentDashboard/RentalPage",
     "/agentDashboard/Request", "/agentDashboard/notification",
      "/agentDashboard/Profile", "/agentDashboard/HelpSupport",
       "/agentDashboard/Messages"];
    const hideNavAndFooter = hiddenRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <Suspense fallback={<Loader />}>
        <ScrollToTop />

        {/* Only show NavBar when not on login */}
        {!hideNavAndFooter && <NavBar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viewHomes" element={<ViewHomes />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/rentalHistory" element={<RentHistory />} />
          <Route path="/viewHomes/:id" element={<HomeDetails />} />
          <Route path="/lodge/:id" element={<LodgeDetails />} />
          <Route path="/sharedroom/:id" element={<SharedRoomDetails />} />
          <Route path="/hostel/:id" element={<HostelDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/testimonials" element={<TestPage />} />
          <Route path="/profileSettings" element={<ProfileSettings />} />
          <Route path="/userNotification" element={<Notification />} />
           <Route path="/userChats" element={<UserChats />} />
           <Route path="/referTenants" element={<ReferTenant />} />
          <Route path="/login" element={<LogInPage />} />

          {/* Dashboard Routes */}
           <Route path="/agentDashboard/Home" element={<AgentDashboardHomePage />} />
            <Route path="/agentDashboard/Property" element={<AgentPropertiesPage />} />
            <Route path="/agentDashboard/RentalPage" element={<AgentRentalTourPage />} />
            <Route path="/agentDashboard/Request" element={<AgentRequestPage />} />
            <Route path="/agentDashboard/notification" element={<AgentNotificationPage />} />
            <Route path="/agentDashboard/Profile" element={<AgentProfilePage />} />
            <Route path="/agentDashboard/HelpSupport" element={<HelpSupportPage />} />
            <Route path="/agentDashboard/Messages" element={<AgentMessagesPages />} />
        </Routes>

        {/* Only show Footer when not on login */}
        {!hideNavAndFooter && <Footer />}
      </Suspense>
    </div>
  );
}

export default App;
