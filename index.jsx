import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/vans/Vans"
import VanDetail from "./pages/vans/VanDetail"
import Layout from './components/Layout';
import Dashboard from './pages/hosts/Dahsboard';
import Income from './pages/hosts/Income';
import Reviews from './pages/hosts/Reviews';
import HostLayout from './components/HostLayout';
function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route element ={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
        
        <Route path ="/host" element ={<HostLayout/>}>
        <Route index element ={<Dashboard/>}/>
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);