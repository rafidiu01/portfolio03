
import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import ScrollToTop from "./ScrollTop";
import ProjectDetails from "./rafipages/ProjectDetails";
import Projects from "./rafipages/Projects";
import Main from "./rafi/Main";
import WebProjects from "./rafipages/WebProjects";
import IOSProjects from "./rafipages/IOSProjects";
import IOSProjectDetails from "./rafipages/IOSProjectDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element:  (     <>
    <ScrollToTop /> 
    <App />
  </>), 
    children: [



     { path: "/", element: <Main /> },
      
      // Projects main page (choose category)
      { path: "/project", element: <Projects /> },

      // Web Projects page
      { path: "/project/web", element: <WebProjects /> },

      // iOS Projects page
      { path: "/project/ios", element: <IOSProjects /> },
      { path: "/ios-projects/:id", element: <IOSProjectDetails /> },


      // Web Project detail page (can detect type from id if needed)
      { path: "/project/:id", element: <ProjectDetails /> },







    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
);




