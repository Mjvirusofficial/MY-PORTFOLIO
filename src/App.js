import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Project from './Pages/Project';
import Footer from './Component/Footer';
import Study from './Pages/Study';
import DSA from './Pages/Study/DSA';
import C from './Pages/Study/C';
import Queue from './Pages/Study/Queue';
import LinkedList from './Pages/Study/LinkedList';
import Graph from './Pages/Study/Graph';
import Energy from './Pages/Study/Energy';
import Leetcode from './Pages/Study/Leetcode';
import Oops from './Pages/Study/Oops';
import Tree from './Pages/Study/Tree';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/project' element={<Project/>}/>
       <Route path='/study' element={<Study/>}/>
       <Route path='/DSA' element={<DSA/>}/>
       <Route path='/c' element={<C/>}/>
       <Route path='/queue' element={<Queue/>}/>
       <Route path='/linkedlist' element={<LinkedList/>}/>
       <Route path='/graph' element={<Graph/>}/>
       <Route path='/energy' element={<Energy/>}/>
       <Route path='/leetcode' element={<Leetcode/>}/>
       <Route path='/oops' element={<Oops/>}/>
       <Route path='/tree' element={<Tree/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App