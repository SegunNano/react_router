import { createBrowserRouter, Route, Routes, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';


//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/help/Contact';
import Faq from './pages/help/Faq';
import NotFound from './pages/NotFound';
import Careers from './careers/Careers.jsx';
import CareerDetails from './careers/CareerDetails.jsx';

import CareersError from './careers/CareersError.jsx';
//layout
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';
import CareersLayout from './layout/CareersLayout';

//javascripts
import { careersLoader, CareerDetailsLoader, contactAction } from './assets/fetchAllCareers.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} action={contactAction} />
      </Route>
      <Route path='/careers' element={<CareersLayout />} errorElement={<CareersError />} >
        <Route index loader={careersLoader} element={<Careers />} />
        <Route path=':id' errorElement={<CareersError />} loader={CareerDetailsLoader} element={<CareerDetails />} />
      </Route>


      <Route path='*' element={<NotFound />} />
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
