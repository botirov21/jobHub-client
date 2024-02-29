import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/footer/footer';
import AllJobs from './components/pages/allJobs/allJobs';
import DisplayNavbar from './components/navbar/displayNavbar';
import AccountBox from './components/loginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DisplayNavbar>
      <Navbar />
    </DisplayNavbar>
    <Routes>
      <Route path="/" element={<AllJobs />} />
      <Route path="/loginPage" element={<AccountBox />} />
    </Routes>
    <DisplayNavbar>
      <Footer />
    </DisplayNavbar>
  </BrowserRouter>
);


