import { useState } from 'react'
import React from "react"
import { Link, Navigate, Route, Routes } from "react-router-dom";
import {NavBar} from '../components/NavBar';
import {SideBar} from '../components/SideBar';
import {MainHeader} from '../components/MainHeader';
import {MainPart} from '../components/MainPart'
export function Home() {

  return (
    <div className="App">
      <main>
      < MainPart />
      < SideBar/>
      </main>
    </div>
  )
}
