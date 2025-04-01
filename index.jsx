
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from "react-router-dom";

//components

import Home from "./pages/Home";
import About from "./pages/About";
import Vans,{loader as vansLoader} from "./pages/vans/Vans";
import VanDetail,{loader as vanDetailLoader} from "./pages/vans/VanDetail"
import Layout from './components/Layout';
import Dashboard from './pages/hosts/Dahsboard';
import Income from './pages/hosts/Income';
import Reviews from './pages/hosts/Reviews';
import HostLayout from './components/HostLayout';
import HostVans,{loader as hostVansLoader} from './pages/hosts/hostVans/HostVans';
import HostVanDetails,{loader as hostVanDetailsLoader} from './pages/hosts/hostVans/HostVanDetails';
import HostVanInfo from './pages/hosts/hostVans/HostVanInfo';
import HostVanPhotos from './pages/hosts/hostVans/HostVanPhotos';
import HostVanPricing from './pages/hosts/hostVans/HostvanPricing';
import NotFound from './pages/NotFound';
import Login,{loader as loginLoader, action as loginAction} from './pages/Login';
import { requireAuth } from './functions/redirect';



const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route  errorElement={<h1>ooops something went wrong</h1>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route 
        path="login" 
        element={<Login 
        />} 
        loader={loginLoader}
        action={loginAction}
        />
        <Route 
          path="vans" 
          loader={vansLoader} 
          element={<Vans />} 
        />

        <Route 
          path="vans/:id" 
          loader={vanDetailLoader} 
          element={<VanDetail />} 
        />
        <Route path="host" element={<HostLayout />}>
            <Route
              index
              element={<Dashboard />}
              loader={async ({request}) => await requireAuth(request)}
            />
            <Route
              path="income"
              element={<Income />}
              loader={async ({request}) => await requireAuth(request)}
            />
            <Route
              path="reviews"
              element={<Reviews />}
              loader={async ({request}) => await requireAuth(request)}
            />
            <Route 
              path="vans"  
              loader={hostVansLoader}
              element={<HostVans />} 
            />
            <Route path="vans/:id"  loader={hostVanDetailsLoader} element={<HostVanDetails />}  >
                <Route
                  index
                  element={<HostVanInfo />}
                  loader={async ({request}) => await requireAuth(request)}
                />
                <Route
                  path="pricing"
                  element={<HostVanPricing />}
                  loader={async ({request}) => await requireAuth(request)}
                />
                <Route
                  path="photos"
                  element={<HostVanPhotos />}
                  loader={async ({request}) => await requireAuth(request)}
                />
            </Route>
        </Route>
        <Route path="*" element={<NotFound />}/>
    </Route>
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