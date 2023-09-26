import React from 'react';
import bannerImg from '../assets/banner-img.png';
import { username } from './user.js';

function Banner() {
  return (
    <section className="Banner__section">
      <div className='Banner__container'>
        <p className='Banner__user'>{username}</p>
        <h2 className='Banner__welcome'>Bem vindo ao meu portfólio</h2>
        <p className='Banner__description'>Uma frase interessante sobre mim</p>
        <button className='Banner__button'>Saiba mais</button>
      </div>
      <img className='Banner__section--img' src={bannerImg} alt="Banner" />
    </section>
  );
}

export default Banner;
