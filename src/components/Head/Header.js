import React, { useState } from 'react';
import './header.css';
import logo from '../pic/jake-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  // fixed Header
  // window.addEventListener('scroll', function() {
  //   const header = document.querySelector('.header');
  //   header.classList.toggle('active', window.scrollY > 100);
  // });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className='header active'>
        <div className='container' >
          <div className='logo'>
            <img src={logo} width="80" alt='' />
          </div>

          <div className='navlink'>
            <ul className={
              Mobile ? 
                'nav-links-mobile' : 
                'link f_flex uppercase'
            } 
            onClick={() => setMobile(false)}
            >
              <li>
                <a href='#home'>home</a>
              </li>
              {/* <li>
                <a href='#features'>features</a>
              </li> */}
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              {/* <li>
                <a href='#clients'>clients</a>
              </li> */}
              {/* <li>
                <a href='#blog'>blog</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li> */}
              {/* <li>
                <button className='home-btn'>BUY NOW</button>
              </li> */}
            </ul>

            <button className='toggle' onClick={() => setMobile(prev => !prev)}>
              {Mobile 
                ? <FontAwesomeIcon icon={faTimes} className='close home-btn'/>
                : <FontAwesomeIcon icon={faBars} className='open'/>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
