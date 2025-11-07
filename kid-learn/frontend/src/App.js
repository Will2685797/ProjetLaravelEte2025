/* eslint-disable */
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// layouts
import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";

// views
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Home from "./views/Home";
import CategoryPage from "./views/CategoryPage";
import GameShow from "./views/GameShow";

export default function App() {
  return (
    <>
      
      <Routes>
        {/* routes de ton projet */}
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/games/:id" element={<GameShow />} />

        {/* add routes with layouts */}
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/auth/*" element={<Auth />} />

        {/* add routes without layouts */}
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />

        {/* redirect all other paths to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
