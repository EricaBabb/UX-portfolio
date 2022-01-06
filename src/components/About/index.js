import React from 'react';
// import color from '../../assets/images/color.jpg';



const About = () => {
  return (
<section className="about-background" idName="about">
      <h1 className="pg-title purple"><em>ABOUT</em></h1>
      <div className="works">
        <div>
          <img className="abt-img-margin" src="/400x600.png" alt="" />
          <div className="resume-circle"></div>
        </div>
        <p className="abt-p">
          I am Erica Babb. Butler full stack web developer bootcamp student,
          while also attending IUPUI full-time pursuing a major in web
          development and minors in informatics and biology. A baker, aspiring
          bodybuilder, and a love for fashion and cats.
        </p>
      </div>

      <div></div>
    </section>
  );
}

export default About;