import React from 'react';

import Home from '../Home';
import ContactForm from '../Contact';
import Work from '../Work';
import About from '../About';
import Footer from '../Footer'
const Main = () => {
  return (
    <main>
    <Home></Home>
    <Work></Work>
    <About></About>
    <ContactForm></ContactForm>
    <Footer/>
    </main>
  );
}

export default Main;