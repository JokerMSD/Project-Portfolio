
import React from 'react';
import gitHub from '../../assets/github-icon.png';
import whatsImg from '../../assets/whatsapp-icon.png';
import linkdImg from '../../assets/linkedin-icon.png';
import { user } from '../../data/user.js';

function Footer() {
  return (
    <footer className='Footer__container'>
      <h2 className='Footer__title'>Contato</h2>
      <p className='Footer__description'>&copy; {user} 2023 - Todos os direitos reservados.</p>
      <div className='Footer__icons-container'>
        <img className='Footer__img whatsapp' src={whatsImg} alt="WhatsApp" />
        <img className='Footer__img linkedin' src={linkdImg} alt="LinkedIn" />
        <img className='Footer__img github' src={gitHub} alt="GitHub" />
      </div>
    </footer>
  );
}

export default Footer;
