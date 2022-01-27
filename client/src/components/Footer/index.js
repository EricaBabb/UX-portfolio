import React from 'react';
import github from '../../assets/image/github.svg';
import linkedin from '../../assets/image/linkedin.svg';
import instagram from '../../assets/image/instagram.svg';

const Footer = () => {

  return (
    <section className="yellow">
    <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/EricaBabb"><img src={github} className= "icon"  alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/erica-b-2a8b33209/"><img src={linkedin} className= "icon" alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/erica_camile/?hl=en"><img src={instagram} className= "icon"  alt=""/></a>
            </li>
          </ul>
    </footer>
    </section>
  );
};

export default Footer;