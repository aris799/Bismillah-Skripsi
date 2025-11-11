import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop
import { 
  Dashboard, 
  HomeLayout, 
  Landing, 
  Login, 
  Logout, 
  Register, 
  Terms,
  PrivacyPolicy, 
  ContactUs,
  Guide,
  Explore,
  Bookmark,
  ForgotPassword
} from "./pages"; 
import { ToastContainer } from "react-toastify";

// Konfigurasi Router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />  {/* Tambahkan ScrollToTop di sini */}
        <HomeLayout />
      </>
    ),
    children: [
      {
        index: true, 
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard", 
        element: <Dashboard />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "terms-and-conditions",
        element: <Terms />, 
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />, 
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "guide",
        element: <Guide />,
      },
      {  
        path: "explore",  
        element: <Explore />,  
      }, 
      {  
        path: "bookmark", 
        element: <Bookmark />,  
      },
       {  
        path: "forgot-password",  
        element: <ForgotPassword />,  
      }, 
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' />
    </>
  );
}

export default App;
