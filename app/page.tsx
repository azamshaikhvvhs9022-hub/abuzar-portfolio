const githubUrl = "https://github.com/azamshaikhvvhs9022-hub";

const focusXUrl =
  "https://github.com/azamshaikhvvhs9022-hub/FOCUS-X";

const skills = [
  {
    number: "01",
    title: "Python",
    description: "Automation, AI, scripting and backend development.",
  },
  {
    number: "02",
    title: "C / C++",
    description: "Programming fundamentals, algorithms and problem solving.",
  },
  {
    number: "03",
    title: "JavaScript",
    description: "Interactive and modern web development.",
  },
  {
    number: "04",
    title: "React",
    description: "Building dynamic and reusable interfaces.",
  },
  {
    number: "05",
    title: "Next.js",
    description: "Modern full-stack web applications.",
  },
  {
    number: "06",
    title: "AI & APIs",
    description: "Intelligent systems, integrations and automation.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#" className="logo">
          THORFIN<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-github"
        >
          GitHub ↗
        </a>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <div className="status">
            <span className="status-dot" />
            Building something new
          </div>

          <p className="eyebrow">
            DEVELOPER • AI ENTHUSIAST • PROBLEM SOLVER
          </p>

          <h1>
            I build
            <br />
            <span>digital things.</span>
          </h1>

          <p className="hero-description">
            Turning ideas, code and creativity into useful,
            intelligent and meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore my work
              <span>↗</span>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>

          <div className="hero-line">
            <span />
          </div>

          <span>2026</span>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}

      <div className="marquee">
        <div className="marquee-track">
          <span>CODE</span>
          <i>✦</i>
          <span>CREATE</span>
          <i>✦</i>
          <span>BUILD</span>
          <i>✦</i>
          <span>INNOVATE</span>
          <i>✦</i>
          <span>CODE</span>
          <i>✦</i>
          <span>CREATE</span>
          <i>✦</i>
          <span>BUILD</span>
          <i>✦</i>
          <span>INNOVATE</span>
          <i>✦</i>
        </div>
      </div>

      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">
        <div className="section-label">
          <span>01</span>
          ABOUT
        </div>

        <div className="section-content">
          <p className="small-heading">A LITTLE ABOUT ME</p>

          <h2>
            Building with
            <br />
            <span>curiosity.</span>
          </h2>

          <p className="large-text">
            I’m Thorfinn — a developer who enjoys experimenting
            with technology, building projects and solving problems
            through code.
          </p>

          <p className="body-text">
            My interests span software development, artificial
            intelligence, automation and modern web technologies.
            I like taking an idea from a simple concept and turning
            it into something people can actually use.
          </p>

          <div className="about-stats">
            <div className="stat">
              <strong>∞</strong>
              <span>Ideas to build</span>
            </div>

            <div className="stat">
              <strong>24/7</strong>
              <span>Learning mindset</span>
            </div>

            <div className="stat">
              <strong>01</strong>
              <span>Goal — Build better</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section skills-section">
        <div className="section-label">
          <span>02</span>
          SKILLS
        </div>

        <div className="section-content">
          <p className="small-heading">MY TOOLBOX</p>

          <h2>
            Tools behind
            <br />
            <span>the ideas.</span>
          </h2>

          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.number}>
                <span className="skill-number">
                  {skill.number}
                </span>

                <div className="skill-main">
                  <h3>{skill.title}</h3>

                  <p>{skill.description}</p>
                </div>

                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">
        <div className="section-label">
          <span>03</span>
          PROJECT
        </div>

        <div className="section-content">
          <p className="small-heading">FEATURED WORK</p>

          <h2>
            One idea.
            <br />
            <span>One project.</span>
          </h2>

          <div className="projects-list">
            <article className="project-card-large">
              <div className="project-top">
                <span>01</span>
                <span>PRODUCTIVITY / AI</span>
              </div>

              <div className="project-middle">
                <h3>FOCUS-X</h3>

                <p>
                  An intelligent productivity and distraction-control
                  system designed to help users stay focused through
                  monitoring, app blocking, website protection and
                  adaptive recommendations.
                </p>
              </div>

              <div className="project-bottom">
                <div className="project-tech">
                  <span>Python</span>
                  <span>AI</span>
                  <span>Automation</span>
                  <span>Desktop</span>
                </div>

                <a
                  href={focusXUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View FOCUS-X
                  <span>↗</span>
                </a>
              </div>
            </article>
          </div>

          <div className="all-projects">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my GitHub
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}

      <section className="statement-section">
        <p>MY APPROACH</p>

        <h2>
          Don’t just
          <br />
          <span>write code.</span>
        </h2>

        <div className="statement-line" />

        <p className="statement-text">
          Understand the problem.
          <br />
          Design the solution.
          <br />
          Build something that matters.
        </p>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">
        <div className="contact-glow" />

        <p className="small-heading">04 — CONTACT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let’s build it.</span>
        </h2>

        <p className="contact-description">
          Great things usually start with a simple conversation.
        </p>

        <div className="contact-buttons">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Connect on GitHub
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <div className="footer-left">
          <span className="footer-logo">THORFIN.</span>

          <span>Developer • Builder • Creator</span>
        </div>

        <div className="footer-right">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}