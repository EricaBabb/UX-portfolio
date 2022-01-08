import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import ContactForm from '../Contact';
import Work from '../Work';
import About from '../About';

const Main = () => {
  return (
    <main>
    <Home></Home>
    <Work></Work>
    <About></About>
    <ContactForm></ContactForm>
    </main>
  );
}

export default Main;