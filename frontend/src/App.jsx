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
import AdminHomePage from './Admin/AdminDashboardPages/AdminHomepage/AdminHomePage';
import AdminUserPage from './Admin/AdminDashboardPages/AdminUserPage/AdminUserPage';
import AdminAgentPage from './Admin/AdminDashboardPages/AdminAgentPage/AdminAgentPage';
import AdminPropertyPages from './Admin/AdminDashboardPages/AdminPropertyPages/AdminPropertyPages';
import AdminNotificationPages from './Admin/AdminDashboardPages/AdminNotificationPages/AdminNotificationPages';
import AdminSettingsPage from './Admin/AdminDashboardPages/AdminSettingsPage/AdminSettingsPage';
import AdminReportPages from './Admin/AdminDashboardPages/AdminReportPages/AdminReportPages';
import AdminPaymentPage from './Admin/AdminDashboardPages/AdminPaymentPage/AdminPaymentPage';
import AdminMessagePage from './Admin/AdminDashboardPages/AdminMessagePage/AdminMessagePage';

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
<<<<<<< HEAD:frontend/src/App.jsx
   const hiddenRoutes = ["/login", "/dashboard/home", 
    "/dashboard/Property", "/dashboard/RentalPage",
     "/dashboard/Request", "/dashboard/notification"];
=======
   const hiddenRoutes = ["/login", "/agentDashboard/Home", 
    "/agentDashboard/Property", "/agentDashboard/RentalPage",
     "/agentDashboard/Request", "/agentDashboard/notification",
      "/agentDashboard/Profile", "/agentDashboard/HelpSupport",
       "/agentDashboard/Messages", "/adminDashboard/Home",
      "/adminDashboard/UserManagement", "/adminDashboard/AdminManagement",
    "/adminDashboard/Properties", "/adminDashboard/Notification",
  "/adminDashboard/Settings", "/adminDashboard/Reports",
"/adminDashboard/Payment", "/adminDashboard/Messages"];
>>>>>>> 4e6adf59fb5bcb8cfc9d70ea56655225b05b023c:src/App.jsx
    const hideNavAndFooter = hiddenRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <Suspense fallback={<Loader />}>
        <ScrollToTop />

        {/* Only show NavBar when not on login */}
        {!hideNavAndFooter && <NavBar />}

        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/home" element={<Home />} />
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
<<<<<<< HEAD:frontend/src/App.jsx
          
=======
           <Route path="/userChats" element={<UserChats />} />
           <Route path="/referTenants" element={<ReferTenant />} />
          <Route path="/login" element={<LogInPage />} />
>>>>>>> 4e6adf59fb5bcb8cfc9d70ea56655225b05b023c:src/App.jsx

          {/* Agent Dashboard Routes */}
           <Route path="/agentDashboard/Home" element={<AgentDashboardHomePage />} />
            <Route path="/agentDashboard/Property" element={<AgentPropertiesPage />} />
            <Route path="/agentDashboard/RentalPage" element={<AgentRentalTourPage />} />
            <Route path="/agentDashboard/Request" element={<AgentRequestPage />} />
            <Route path="/agentDashboard/notification" element={<AgentNotificationPage />} />
            <Route path="/agentDashboard/Profile" element={<AgentProfilePage />} />
            <Route path="/agentDashboard/HelpSupport" element={<HelpSupportPage />} />
            <Route path="/agentDashboard/Messages" element={<AgentMessagesPages />} />
            {/* Admin Dashboard Routes */}
            
             <Route path="/adminDashboard/Home" element={<AdminHomePage />} />
             <Route path="/adminDashboard/UserManagement" element={<AdminUserPage />} />
              <Route path="/adminDashboard/AdminManagement" element={<AdminAgentPage />} />
               <Route path="/adminDashboard/Properties" element={<AdminPropertyPages />} />
               <Route path="/adminDashboard/Notification" element={<AdminNotificationPages />} />
             <Route path="/adminDashboard/Settings" element={<AdminSettingsPage />} /> 
              <Route path="/adminDashboard/Reports" element={<AdminReportPages />} /> 
              <Route path="/adminDashboard/Payment" element={<AdminPaymentPage />} />   
               <Route path="/adminDashboard/Messages" element={<AdminMessagePage />} /> 
        </Routes>

        {/* Only show Footer when not on login */}
        {!hideNavAndFooter && <Footer />}
      </Suspense>
    </div>
  );
}

export default App;
