import React from 'react';
import headerImg from '../../assets/portfolio.png';

function Header() {
  return (
    <header className='Header__section'>
      <img className='Header__section--logo' src={headerImg} />
      <div className='Header__section__container'>
        <p className='Header__section--links'>Sobre</p>
        <p className='Header__section--links'>Stack</p>
        <p className='Header__section--links'>Projetos</p>
      </div>
      <button className='Header__button'>Contato</button>
    </header>
  );
}

export default Header;
