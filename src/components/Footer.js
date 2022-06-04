import React from 'react';
import logo from './pic/jake-transparent.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div style={{ 
            width: '70px',
            height: '70px',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            border: '3px solid rgba(50, 50, 93, 0.23)',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: 'auto'
          }}>
            <img src={logo} width="80" alt='' />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
