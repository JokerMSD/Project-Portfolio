
import React from 'react';
import { technologies } from './technologies';

function Tech() {
  return (
    <section className='Tech__section'>
      <h2 className='Tech__title'>Tecnologias</h2>
      <div className='Tech__container'>
        <ul className='Tech__list'>
          {technologies.map((tech, index) => (
            <li className='Tech__item' key={index}>
              <img className='Tech__item--img' src={tech.img} alt={tech.name} />
              <p className='Tech__item--name'>{tech.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tech;
