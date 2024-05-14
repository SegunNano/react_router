import { createBrowserRouter, Route, Routes, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';


//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/help/Contact';
import Faq from './pages/help/Faq';
import NotFound from './pages/NotFound';

//layout
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
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
