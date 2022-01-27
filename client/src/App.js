import React from "react";

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

function App() {
  return (
   <div>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div> 
  );
}

export default App; 
