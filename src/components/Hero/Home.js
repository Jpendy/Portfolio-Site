import React from 'react';
import './Home.css';
import hero from '../pic/jake-transparent.png';
// import skill1 from '../pic/skill1.png';
// import skill2 from '../pic/skill2.png';
// import skill3 from '../pic/skill3.png';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            {/* <h3>WELCOME TO MY WORLD</h3> */}
            <h1>
              Hi, I’m <span>Jake Pendergraft,</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[' Professional Coder.', ' Developer.', ' Problem Solver.']} 
                // loop
                  // cursor 
                  // cursorStyle='|' 
                  typeSpeed={80}
                  deleteSpeed={50} 
                  delaySpeed={1000} 
                />
              </span>
            </h2>

            <p >I have dedicated thousands of hours of my life learning how to build performant, scalable applications. 
              Software is Amazing! It has allowed us to connect, create, and evolve as a species. 
              That&apos;s why I have made it my never-ending mission to learn and understand this incredible technology. If you share my passion, contact me! Let&apos;s build the future together!
            </p>

            {/* <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i className='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div> */}
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
