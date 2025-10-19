import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import DelayLoader from "./Components/Loader/DelayLoader";
import ScrollToTop from "./Components/ScrollTop/ScrollToTop";
import LogInPage from "./Pages/LogInPage/LogInPage";

// Regular Components
import ProfileSettings from "./Components/ProfileSettings/ProfileSettings";
import Notification from "./Components/Notification/Notification";
import SharedRoomDetails from "./Components/SharedRoomDetails/SharedRoomDetails";
import HostelDetails from "./Components/HostelDetails/HostelDetails";
import UserChats from "./Components/UserChats/UserChats";
import ReferTenant from "./Components/ReferTenant/ReferTenant";

// Lazy-loaded Public Pages
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

// 🧑‍💼 Lazy-loaded Agent Dashboard Pages
const AgentDashboardHomePage = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/AgentDashboardHomePage/AgentDashboardHomePage")
);
const AgentPropertiesPage = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/AgentPropertiesPage/AgentPropertiesPage")
);
const AgentRentalTourPage = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/AgentRentalTourPage/AgentRentalTourPage")
);
const AgentRequestPage = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/AgentRequestPage/AgentRequestPage")
);
const AgentNotificationPage = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/AgentNotificationPage/AgentNotificationPage")
);
const AgentProfilePage = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/AgentProfilePage/AgentProfilePage")
);
const HelpSupportPage = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/HelpSupportPage/HelpSupportPage")
);
const AgentMessagesPages = DelayLoader(() =>
  import("./Agent/AgentDashboardPages/AgentMessagesPages/AgentMessagesPages")
);

// 👑 Lazy-loaded Admin Dashboard Pages
const AdminHomePage = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminHomepage/AdminHomePage")
);
const AdminUserPage = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminUserPage/AdminUserPage")
);
const AdminAgentPage = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminAgentPage/AdminAgentPage")
);
const AdminPropertyPages = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminPropertyPages/AdminPropertyPages")
);
const AdminNotificationPages = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminNotificationPages/AdminNotificationPages")
);
const AdminSettingsPage = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminSettingsPage/AdminSettingsPage")
);
const AdminReportPages = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminReportPages/AdminReportPages")
);
const AdminPaymentPage = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminPaymentPage/AdminPaymentPage")
);
const AdminMessagePage = DelayLoader(() =>
  import("./Admin/AdminDashboardPages/AdminMessagePage/AdminMessagePage")
);
const AdminLogin = DelayLoader(() =>
  import("./Admin/AdminDashboard/AdminLogin/AdminLogin")
);

function App() {
  const location = useLocation();

  // Define all routes where NavBar & Footer should be hidden
  const hiddenRoutes = [
    "/login", "/agentdashboard/home","/agentdashboard/property",
    "/agentdashboard/rentalpage","/agentdashboard/request",
    "/agentdashboard/notification", "/agentdashboard/profile",
    "/agentdashboard/helpsupport","/agentdashboard/messages",
    // Admin Routes
     "/admin/login",
    "/admindashboard/home", "/admindashboard/usermanagement",
    "/admindashboard/adminmanagement","/admindashboard/properties",
    "/admindashboard/notification",
    "/admindashboard/settings", "/admindashboard/reports",
    "/admindashboard/payment","/admindashboard/messages",
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
