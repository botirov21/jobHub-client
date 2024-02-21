import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeReviewCard from './components/pages/allJobs/allJobs';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<RecipeReviewCard/>} />
  </Routes>
  <Footer/>
</BrowserRouter>

);


