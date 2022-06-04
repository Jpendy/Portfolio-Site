/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Card = ({ cardImage, modalImage, totalLike, category, url, title, description }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // if(modal) {
  //   document.body.classList.add('active-modal');
  // } else {
  //   document.body.classList.remove('active-modal');
  // }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <img src={cardImage} alt='' onClick={toggleModal} style={{ width: '200px' }} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{category}</span>
          <label>
            <i className='far fa-heart'></i> {totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left' >
              <img 
                src={modalImage || cardImage} 
                alt='Application Image' 
                style={{ boxShadow: '1px 1px 5px 1px lightgray' }} 
                onClick={() => window.open(url, '_blank')}
              />
            </div>
            <div className='modal-text right'>
              <span>Featured - Design</span>
              <h1>{title}</h1>
              <p>{description}</p>
              <div className='button f_flex mtop'>
                <button className='btn_shadow'>
                  LIKE THIS <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <button 
                  className='btn_shadow'
                  onClick={() => window.open(url, '_blank')}
                >
                  VIEW PROJECT<FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <FontAwesomeIcon icon={faTimes} style={{ transform: 'translateY(1px)' }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
