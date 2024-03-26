import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/footer/footer';
import AllJobs from './components/pages/allJobs/allJobs';
import DisplayNavbar from './components/navbar/displayNavbar';
import AccountBox from './components/loginForm';
import PartTime from './components/pages/partTime/partTime';
import FullTime from './components/pages/fullTime/fullTime';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DisplayNavbar>
      <Navbar />
    </DisplayNavbar>
    <Routes>
      <Route path="/" element={<AllJobs />} />
      <Route path="/fullTime" element={<FullTime/>} />
      <Route path="/partTime" element={<PartTime/>} />
      <Route path="/loginPage" element={<AccountBox />} />
    </Routes>
    <DisplayNavbar>
      <Footer />
    </DisplayNavbar>
  </BrowserRouter>
);


