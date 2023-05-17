import React from 'react'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import { Navbar } from './components/Navbar'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App