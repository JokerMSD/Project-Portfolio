//imports
import { projects } from './data/projects';
import { technologies } from './data/technologies';
import { user , username } from './data/user.js';

function App() {
  //js

  return (
    <>
      <header className='Header__section'>
        <img className='Header__section--logo' src='../src/assets/portfolio.png' />
        <div className='Header__section__container'>
            <p className='Header__section--links'>Sobre</p>
            <p className='Header__section--links'>Stack</p>
            <p className='Header__section--links'>Projetos</p>
          </div>
        <button className='Header__button'>Contato</button>
      </header>

      <main>
        <section className="Banner__section">
          <div className='Banner__container'>
          <p className='Banner__user'>{username}</p>
          <h2 className='Banner__welcome'>Bem vindo ao meu portfólio</h2>
          <p className='Banner__description'>Uma frase interessante sobre mim</p>
          <button className='Banner__button'>Saiba mais</button>
          </div>
          <img className='Banner__section--img' src='../src/assets/banner-img.png' />
        </section>

        <section className='About__section'>
          <div className='About__container'>
          <h2 className='About__title'>
            Sobre mim
          </h2>
          </div>
          <p className='About__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
        </section>

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

        <section className='Projects__section'>
          <h2 className='Projects__title'>Projetos</h2>
          <ul className='Projects__list'>
            {projects.map((project, index) => (
              <li className='Projects__item' key={index}>
                <h3 className='Projects__item--name'>{project.name}</h3>
                <p className='Projects__item--description'>{project.description}</p>
                <a className='Projects__item--link' href="">Saiba mais</a>
                <img className='Projects__item--img' src="../src/assets/git-icon.png" alt="" />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className='Footer__container'>
        <h2 className='Footer__title'>Contato</h2>
        <p className='Footer__description'>Todos os direitos reservados - José da Silva</p>
        <div className='Footer__icons-container'>
        <img className='Footer__img whatsapp' src="../src/assets/whatsapp-icon.png" alt="" />
        <img className='Footer__img linkedin' src="../src/assets/linkedin-icon.png" alt="" />
        <img className='Footer__img github' src="../src/assets/github-icon.png" alt="" />
        </div>
      </footer>
    </>
  )
}

export default App
