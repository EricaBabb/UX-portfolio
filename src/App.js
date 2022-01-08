import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Nav from './components/Nav';
import Main from './components/Main';
// import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div>
      <Nav></Nav>
      <Main></Main>
      {/* <Footer></Footer> */}
    </div> 
  );
}

export default App; 
