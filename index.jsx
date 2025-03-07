import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail"
import Layout from './components/Layout';
import Dashboard from './pages/hosts/Dahsboard';
import Income from './pages/hosts/Income';
import Reviews from './pages/hosts/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/hosts/hostVans/HostVans';
import HostVanDetails from './pages/hosts/hostVans/HostVanDetails';
import HostVanInfo from './pages/hosts/hostVans/HostVanInfo';
import HostVanPhotos from './pages/hosts/hostVans/HostVanPhotos';
import HostVanPricing from './pages/hosts/hostVans/HostvanPricing';
import NotFound from './pages/NotFound';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} />
        <Route path="vans/:id" element={<VanDetail />} />
        
        <Route path="host" element={<HostLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} />
          <Route path="vans/:id" element={<HostVanDetails />} >
              <Route index element={<HostVanInfo />} />
              <Route path="photos" element={<HostVanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);