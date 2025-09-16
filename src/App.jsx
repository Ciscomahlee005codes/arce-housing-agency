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

// Agent Dashboard
import AgentDashboardHomePage from './AgentDashboardPages/AgentDashboardHomePage/AgentDashboardHomePage';
import AgentPropertiesPage from './AgentDashboardPages/AgentPropertiesPage/AgentPropertiesPage';
import AgentRentalTourPage from './AgentDashboardPages/AgentRentalTourPage/AgentRentalTourPage';
import AgentRequestPage from './AgentDashboardPages/AgentRequestPage/AgentRequestPage';
import AgentNotificationPage from './AgentDashboardPages/AgentNotificationPage/AgentNotificationPage';
import AgentProfilePage from './AgentDashboardPages/AgentProfilePage/AgentProfilePage';
import HelpSupportPage from './AgentDashboardPages/HelpSupportPage/HelpSupportPage';
import AgentMessagesPages from './AgentDashboardPages/AgentMessagesPages/AgentMessagesPages';

// Admin Dashboard
import AdminHomePage from './Admin/AdminDashboardPages/AdminHomepage/AdminHomePage';
import AdminUserPage from './Admin/AdminDashboardPages/AdminUserPage/AdminUserPage';
import AdminAgentPage from './Admin/AdminDashboardPages/AdminAgentPage/AdminAgentPage';
import AdminPropertyPages from './Admin/AdminDashboardPages/AdminPropertyPages/AdminPropertyPages';
import AdminNotificationPages from './Admin/AdminDashboardPages/AdminNotificationPages/AdminNotificationPages';
import AdminSettingsPage from './Admin/AdminDashboardPages/AdminSettingsPage/AdminSettingsPage';
import AdminReportPages from './Admin/AdminDashboardPages/AdminReportPages/AdminReportPages';
import AdminPaymentPage from './Admin/AdminDashboardPages/AdminPaymentPage/AdminPaymentPage';
import AdminMessagePage from './Admin/AdminDashboardPages/AdminMessagePage/AdminMessagePage';
import AdminLogin from './Admin/AdminDashboard/AdminLogin/AdminLogin';

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

  // Define all routes where NavBar & Footer should be hidden
  const hiddenRoutes = [
    "/login",
    "/agentdashboard/home", "/agentdashboard/property", "/agentdashboard/rentalpage",
    "/agentdashboard/request", "/agentdashboard/notification", "/agentdashboard/profile",
    "/agentdashboard/helpsupport", "/agentdashboard/messages", "/admin/login",
    "/admindashboard/home", "/admindashboard/usermanagement", "/admindashboard/adminmanagement",
    "/admindashboard/properties", "/admindashboard/notification", "/admindashboard/settings",
    "/admindashboard/reports", "/admindashboard/payment", "/admindashboard/messages"
  ];

  const hideNavAndFooter = hiddenRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="app-container">
      <Suspense fallback={<Loader />}>
        <ScrollToTop />

        {/* Only show NavBar when not in hidden routes */}
        {!hideNavAndFooter && <NavBar />}

        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LogInPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/viewhomes" element={<ViewHomes />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/rentalhistory" element={<RentHistory />} />
          <Route path="/viewhomes/:id" element={<HomeDetails />} />
          <Route path="/lodge/:id" element={<LodgeDetails />} />
          <Route path="/sharedroom/:id" element={<SharedRoomDetails />} />
          <Route path="/hostel/:id" element={<HostelDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/testimonials" element={<TestPage />} />
          <Route path="/profilesettings" element={<ProfileSettings />} />
          <Route path="/usernotification" element={<Notification />} />
          <Route path="/userchats" element={<UserChats />} />
          <Route path="/referTenants" element={<ReferTenant />} />

          {/* Agent Dashboard Routes */}
          <Route path="/agentdashboard/home" element={<AgentDashboardHomePage />} />
          <Route path="/agentdashboard/property" element={<AgentPropertiesPage />} />
          <Route path="/agentdashboard/rentalpage" element={<AgentRentalTourPage />} />
          <Route path="/agentdashboard/request" element={<AgentRequestPage />} />
          <Route path="/agentdashboard/notification" element={<AgentNotificationPage />} />
          <Route path="/agentdashboard/profile" element={<AgentProfilePage />} />
          <Route path="/agentdashboard/helpsupport" element={<HelpSupportPage />} />
          <Route path="/agentdashboard/messages" element={<AgentMessagesPages />} />

          {/* Admin Dashboard Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admindashboard/home" element={<AdminHomePage />} />
          <Route path="/admindashboard/usermanagement" element={<AdminUserPage />} />
          <Route path="/admindashboard/adminmanagement" element={<AdminAgentPage />} />
          <Route path="/admindashboard/properties" element={<AdminPropertyPages />} />
          <Route path="/admindashboard/notification" element={<AdminNotificationPages />} />
          <Route path="/admindashboard/settings" element={<AdminSettingsPage />} />
          <Route path="/admindashboard/reports" element={<AdminReportPages />} />
          <Route path="/admindashboard/payment" element={<AdminPaymentPage />} />
          <Route path="/admindashboard/messages" element={<AdminMessagePage />} />
        </Routes>

        {/* Only show Footer when not in hidden routes */}
        {!hideNavAndFooter && <Footer />}
      </Suspense>
    </div>
  );
}

export default App;
