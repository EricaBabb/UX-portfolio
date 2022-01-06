import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import ContactForm from './components/Contact';
import Work from './components/Work';
import About from './components/About';

const Main = () => {
  return (
    <Switch>
    <Route exact path="/home" component={Home}>
      <Home />
    </Route>
    <Route exact path="/work" component={Work}>
      <Works />
    </Route>
    <Route exact path="/about" component={About}>
      <About />
    </Route>
    <Route exact path="/contact" component={ContactForm}>
      <ContactForm />
    </Route>
  </Switch>
  );
}

export default Main;