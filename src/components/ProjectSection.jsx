import React from 'react';
import { projects } from '../data/projectsScript';
import devs from '../assets/progammers.jpg';
import gitImg from '../assets/git-icon.png';

function Projects() {
  return (
    <section className='Projects__section'>
      <h2 className='Projects__title'>Projetos</h2>
      <ul className='Projects__list'>
        {projects.map((project, index) => (
          <li className='Projects__item' key={index}>
            <h3 className='Projects__item--name'>{project.name}</h3>
            <p className='Projects__item--description'>{project.description}</p>
            <a className='Projects__item--link' href={devs}>Saiba mais</a>
            <img className='Projects__item--img' src={gitImg} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
