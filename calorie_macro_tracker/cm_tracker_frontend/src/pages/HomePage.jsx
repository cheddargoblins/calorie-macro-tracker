// import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomePage.css';

export const HomePage = () => {
  return (
    <div className='home-container'>
      <h1>Take control of YOUR life</h1>
      <p>What are you waiting for?</p>
      <div className='home-btns'>
        <Button to='/signup/'
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

