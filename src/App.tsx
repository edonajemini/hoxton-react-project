import { useState } from 'react'
import React from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom";
import {NavBar} from '../components/NavBar';
import {SideBar} from '../components/SideBar';
import {MainHeader} from '../components/MainHeader';
import {Home} from "../pages/Home";
import {Explore} from "../pages/Explore";
import {Notifications} from "../pages/Notifications";
import {Messages} from "../pages/Messages";
import {Bookmarks} from "../pages/Bookmarks";
import {Lists} from "../pages/Lists";
import {Profile} from "../pages/Profile";
import './App.css'
function App() {

  return (
    <div className="App">
      < NavBar />
      <Routes>
  <Route index element={<Navigate to="/home" />} />
  <Route path="home" element= {<Home />} />
  <Route path="explore" element={<Explore />} />
  <Route path="notifications" element={<Notifications />} />
  <Route path="messages" element={<Messages />} />
  <Route path="bookmarks" element={<Bookmarks />} />
  <Route path="lists" element={<Lists />} />
  <Route path="profile" element={<Profile />} />
  </Routes>
      <main>
      </main>
    </div>
  )
}

export default App
