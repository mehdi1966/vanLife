
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";

//components

import Home from "./pages/Home";
import About from "./pages/About";
import Vans,{loader as vansLoader} from "./pages/vans/Vans";
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


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route  errorElement={<h1>ooops something went wrong</h1>}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="vans" loader={vansLoader} element={<Vans />} />
  <Route path="vans/:id" element={<VanDetail />} />
  </Route>
  <Route path="host" element={<HostLayout />}>
    <Route index element={<Dashboard />} />
    <Route path="income" element={<Income />} />
    <Route path="reviews" element={<Reviews />} />
    <Route path="vans"  element={<HostVans />} />
    <Route path="vans/:id" element={<HostVanDetails />} >
        <Route index element={<HostVanInfo />} />
        <Route path="photos" element={<HostVanPhotos />} />
        <Route path="pricing" element={<HostVanPricing />} />
      </Route>
  </Route>
  <Route path="*" element={<NotFound />}/>
</Route>
))

function App() {

  return (
  <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);