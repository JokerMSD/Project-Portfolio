//imports
import { projects } from './data/projects';
import { technologies } from './data/technologies';

function App() {
  //js

  return (
    <>
<header>
        <h1>Teste</h1>
        <button>Button</button>
      </header>

      <main>
        <section className="banner__section">
          <h2>Banner Section</h2>
          <button>Button</button>
        </section>

        <section>
          <h2>AboutMeSection</h2>
        </section>

        <section>
          <h2>TechSection</h2>
          <ul>
            {technologies.map((tech, index) => (
              <li key={index}>
                <img src={tech.img} alt={tech.name} />
                {tech.name}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>ProjectsSection</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  )
}

export default App
