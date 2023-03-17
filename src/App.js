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
import Javascript from './Pages/Study/Javascript';
import Heap from './Pages/Study/Heap';
import Algoritham from './Pages/Study/Algoritham';
import Discreate from './Pages/Study/Discrete';
import FourthSem from './Pages/Study/B.tech_4thSem/FourthSem';
import Se from './Pages/Study/B.tech_4thSem/Se';
import Computer from './Pages/Study/Compter.jsx';
import ReactJS from './Pages/Study/ReactJS';

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
       <Route path='/js' element={<Javascript/>}/>
       <Route path='/heap' element={<Heap/>}/>
       <Route path='/algoritham' element={<Algoritham/>}/>
       <Route path='/discrete' element={<Discreate/>}/>
       <Route path='/4thSem' element={<FourthSem/>}/>
       <Route path='/se' element={<Se/>}/>
       <Route path='/computer' element={<Computer/>}/>
       <Route path='/react' element={<ReactJS/>}/>


       
      </Routes>
      <Footer/>
    </>
  )
}

export default App