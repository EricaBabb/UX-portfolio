import React from 'react';



const Work = () => {
  return (
<section className="work-background" idName="work">
      <h1 className="pg-title blue"><em>WORK</em></h1>

      <div className="works">
        <div className="left-works work-margin-btm">
          <div className="container">
            <a href="https://xd.adobe.com/view/82802e00-69b1-445a-8f9a-74c8ba024829-d7d3/"
              ><img
                className="work-margin"
                src="https://www.ijwhite.com/wp-content/uploads/2017/05/placeholder-800x400.jpeg"
                alt=""
            /></a>
            <div className="centered">Wreck-A-Room</div>
          </div>
          <div className="container">
            <a href="https://xd.adobe.com/view/c9fc9416-263d-4bb6-aa29-912fbbbce3fb-9caf/"
              ><img
                className="work-right-btm"
                src="https://www.ijwhite.com/wp-content/uploads/2017/05/placeholder-800x400.jpeg"
                alt=""
            /></a>
            <div className="centered">Indy Kiosk</div>
          </div>
        </div>

        <div className="right-works work-margin-btm">
          <div className="container">
            <a href="https://xd.adobe.com/view/22adb389-9d78-43e4-b68e-d84163a4130c-77fe/"
              ><img
                className="work-margin"
                src="https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png"
                alt=""
            /></a>
            <div className="centered">Book It</div>
          </div>

          <div className="container">
            <a href="https://ericababb.github.io/about"
              ><img
                className="work-right-btm"
                src="https://www.manncat.com/wp-content/uploads/2017/05/placeholder-400x400.png"
                alt=""
            /></a>
            <div className="centered">Web Development Portfolio</div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default Work;