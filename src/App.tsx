import { useState } from 'react'
import React from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom";
import {NavBar} from '../components/NavBar';
import {SideBar} from '../components/SideBar';
import {MainHeader} from '../components/MainHeader';
import {MainPart} from '../components/MainPart'
import './App.css'
function App() {

  return (
    <div className="App">

        < NavBar />
        < SideBar/>
      <main>
       < MainHeader />
       < MainPart />
      </main>
    </div>
  )
}

export default App
