import React from 'react';
import pic from '../../assets/image/BodagaBay.jpg';



const About = () => {
  return (
<section className="about-background" idName="about">
      <h1 className="pg-title purple"><em>ABOUT</em></h1>
      <div className="works">
        <div>
          <img className="abt-img-margin" src={pic} alt="" />
          <a href="/EricaResume.pdf" download>
          <div className="resume-circle">
          </div>
          </a>
        </div>
        <p className="abt-p">
Hello!
<br></br>
<br></br>
I'm Erica Babb:
<br></br>
<br></br>
Passionate UX Designer working on my degree in Media Arts and Science with a triple minor in graphic design, biology, and informatics. 
<br></br>
<br></br>
A zealous baker, amateur bodybuilder, and a love for fashion and cats. 
        </p>
      </div>

      <div></div>
    </section>
  );
}

export default About;