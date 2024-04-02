import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Enrollment from "./pages/Enroll";
import CourseManagement from './pages/CourseManagement';
import CourseList from "./components/CourseList";

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/course" element={<Course />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/course-management" element={<CourseManagement />} />
      <Route path="/courselist" element={<CourseList />} />
      
      
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
