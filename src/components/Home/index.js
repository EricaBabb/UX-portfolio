import React from 'react';
import color from '../../assets/image/color.jpg';



const Home = () => {
  return (
<section className="home-main" idName="home">
 <img className="home-pic" src={color} alt="pic"/>
    <div>
    <div className="Erica-Babb">
        <h1>Erica Babb</h1>
    </div>

    <div className="UX-Design">
        <h1><span>UX</span> Design</h1>
    </div>
    </div>
</section>
    
  );
}

export default Home;
