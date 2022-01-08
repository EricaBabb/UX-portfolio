import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import ContactForm from '../Contact';
import Work from '../Work';
import About from '../About';

const Main = () => {
  return (
    <Switch>
    <Route exact path="/home" component={Home}>
      <Home />
    </Route>
    <Route exact path="/work" component={Work}>
      <Work />
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