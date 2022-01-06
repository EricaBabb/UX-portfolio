import React from 'react';
import github from '../../assets/css/github.svg';
import linkedin from '../../assets/css/linkedin.svg';
import instagram from '../../assets/css/instagram.svg';

const Footer = () => {

  return (
    <footer>
        <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/EricaBabb"><img className= "icon" src={github} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/erica-b-2a8b33209/"><img className= "icon" src={linkedin} alt=""/></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.instagram.com/erica_camile/?hl=en"><img className= "icon" src={instagram} alt=""/></a>
            </li>
          </ul>
    </footer>
  );
};

export default Footer;