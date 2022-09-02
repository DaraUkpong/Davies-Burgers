import React from 'react';
import './styles.css';
import bannerImg from './banner.png';
import Logo from '../../common/Logo';

const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1>Davies Burger</h1>
        <p>Making a good burger is an art. Making a great burger is a passion. At Davies Burgers,
          it’s the intersection of these two components—the passion to serve great burgers and
          the artistry to make each burger better than the last — that makes us proud to serve up one of the best burgers around.
          We’re proud of each and every Davies Burger we serve to our guests,
          because our goal is to help other people live their best lives through the experience of eating our burgers.</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </header>
);

export default Banner;
