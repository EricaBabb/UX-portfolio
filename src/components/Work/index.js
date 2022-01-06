import React from 'react';
// import color from '../../assets/images/color.jpg';



const Work = () => {
  return (
<section className="work-background" idName="work">
      <h1 className="pg-title"><em>WORK</em></h1>

      <div className="works">
        <div className="left-works work-margin-btm">
          <div className="container">
            <a href=""
              ><img
                className="work-margin"
                src="https://www.ijwhite.com/wp-content/uploads/2017/05/placeholder-800x400.jpeg"
                alt=""
            /></a>
            <div className="centered">Centered</div>
          </div>
          <div className="container">
            <a href=""
              ><img
                className="work-right-btm"
                src="https://www.ijwhite.com/wp-content/uploads/2017/05/placeholder-800x400.jpeg"
                alt=""
            /></a>
            <div className="centered">Centered</div>
          </div>
        </div>

        <div className="right-works work-margin-btm">
          <div className="container">
            <a href=""
              ><img
                className="work-margin"
                src="https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png"
                alt=""
            /></a>
            <div className="centered">Centered</div>
          </div>

          <div className="container">
            <a href=""
              ><img
                className="work-right-btm"
                src="https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png"
                alt=""
            /></a>
            <div className="centered">Centered</div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Work;