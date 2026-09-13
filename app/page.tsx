"use client";

import { useEffect, useState } from "react";

const GITHUB = "https://github.com/azamshaikhvvhs9022-hub";
const FOCUS_X = `${GITHUB}/FOCUS-X`;
const EMAIL = "abuzarrrrr.7@gmail.com";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&fm=jpg&q=85&w=1600";

const skillGroups = [
  {
    number: "01",
    title: "Core Development",
    description:
      "Languages and fundamentals I use to understand, build and structure software.",
    skills: [
      ["Python", "Software · Automation", "82"],
      ["C / C++", "Programming · Fundamentals", "68"],
      ["JavaScript", "Web · Interaction", "72"],
      ["TypeScript", "Modern Web", "64"],
    ],
  },
  {
    number: "02",
    title: "Web & Interfaces",
    description:
      "Tools for creating modern interfaces and turning ideas into usable experiences.",
    skills: [
      ["React", "UI · Components", "68"],
      ["Next.js", "Full-stack Web", "61"],
      ["HTML / CSS", "Interfaces · Layout", "82"],
      ["Responsive Design", "Mobile · UX", "74"],
    ],
  },
  {
    number: "03",
    title: "AI & Systems",
    description:
      "Exploring intelligent systems, automation and the ideas behind adaptive software.",
    skills: [
      ["AI / ML", "Intelligent Systems", "62"],
      ["Automation", "Workflows · Tools", "76"],
      ["System Design", "Architecture · Logic", "66"],
      ["Data & Insights", "Analysis · Behaviour", "58"],
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description:
      "The tools that help me build, manage, debug and continuously improve projects.",
    skills: [
      ["Git", "Version Control", "78"],
      ["GitHub", "Collaboration · Code", "82"],
      ["SQLite", "Local Databases", "64"],
      ["VS Code", "Development Environment", "88"],
    ],
  },
];

const stats = [
  ["∞", "Ideas"],
  ["24/7", "Learning"],
  ["01", "Featured Project"],
  ["?", "What's next"],
];

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const dashboardStats = [
  ["87", "Focus score", "Excellent"],
  ["18:42", "Current session", "Deep work"],
  ["14", "Blocked", "Distractions"],
];

const principles = [
  {
    number: "01",
    title: "Curiosity",
    text: "I like understanding why something works before deciding how to improve it.",
  },
  {
    number: "02",
    title: "Experimentation",
    text: "Ideas become interesting when you actually build, test and break them.",
  },
  {
    number: "03",
    title: "Iteration",
    text: "The first version is rarely the final version. Good systems evolve.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <a href="#home" className="logo" onClick={closeMenu}>
          ABUZAR<span>.</span>
        </a>

        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </div>

        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="nav-button"
        >
          GitHub ↗
        </a>

        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <span>NAVIGATION</span>
            <span>ABUZAR / 2026</span>
          </div>

          <div className="mobile-menu-links">
            {navItems.map(([label, href], index) => (
              <a
                href={href}
                key={label}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen
                    ? `${index * 70}ms`
                    : "0ms",
                }}
              >
                <span>0{index + 1}</span>
                {label}
                <strong>↗</strong>
              </a>
            ))}
          </div>

          <div className="mobile-menu-bottom">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              GitHub ↗
            </a>

            <span>CODE · CREATE · BUILD</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow-one" />
        <div className="hero-glow-two" />

        <div className="hero-content reveal">
          <div className="status">
            <span />
            Building something new
          </div>

          <p className="eyebrow">
            DEVELOPER · BUILDER · AI ENTHUSIAST
          </p>

          <h1>
            Building
            <br />
            <span>digital things.</span>
          </h1>

          <p className="hero-description">
            Code, curiosity and a little bit of mystery. I build software,
            intelligent systems and ideas that deserve to exist.
          </p>

          <p className="hero-quote">
            01 &nbsp; Not everything needs to be explained.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-light">
              Explore my work ↗
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="button button-dark"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="hero-footer">
          <span>SCROLL TO EXPLORE</span>
          <span>INDIA · 2026</span>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="section" id="about">
        <p className="section-label reveal">01 — ABOUT ME</p>

        <div className="about-grid">
          <div className="about-image reveal">
            <img
              src={ABOUT_IMAGE}
              alt="Dark developer workspace"
            />

            <div className="image-overlay" />

            <div className="image-caption">
              THE WORKSPACE
              <br />
              WHERE IDEAS BECOME CODE.
            </div>

            <div className="image-info">
              <span>ABUZAR</span>
              <span>UNKNOWN / 2026</span>
            </div>
          </div>

          <div className="about-content reveal">
            <p className="label">A LITTLE ABOUT ME</p>

            <h2>
              More than
              <br />
              <span>just code.</span>
            </h2>

            <p className="about-lead">
              I&apos;m ABUZAR — a developer who likes turning ideas into
              things that actually work.
            </p>

            <p className="about-text">
              I&apos;m interested in software development, artificial
              intelligence and the systems that sit behind the products we
              use every day. I enjoy taking complicated ideas, breaking them
              into smaller pieces and figuring out how everything connects.
            </p>

            <p className="about-text">
              I don&apos;t want to build projects just to say that I built
              them. I want to understand them, improve them and eventually
              create systems that solve problems in ways people didn&apos;t
              expect.
            </p>

            <p className="about-text">
              Right now, I&apos;m exploring AI, software engineering and
              modern web development while constantly experimenting with new
              ideas.
            </p>

            <div className="about-details">
              <div className="detail">
                <span>IDENTITY</span>
                <strong>Developer · Builder</strong>
              </div>

              <div className="detail">
                <span>INTERESTS</span>
                <strong>AI · Software · Systems</strong>
              </div>

              <div className="detail">
                <span>CURRENT MODE</span>
                <strong>Learning & building</strong>
              </div>

              <div className="detail">
                <span>LONG TERM</span>
                <strong>Build something meaningful</strong>
              </div>
            </div>

            <div className="mystery-box">
              <span>THERE IS MORE</span>

              <p>
                The interesting projects usually start as an idea that sounds
                slightly impossible.
                <br />
                <br />
                Maybe that&apos;s exactly why they&apos;re worth building.
                <br />
                <br />
                — ABUZAR
              </p>
            </div>

            <div className="stats">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            PRINCIPLES
        ================================================= */}

        <div className="principles">
          <div className="principles-heading reveal">
            <p className="section-label">HOW I THINK</p>

            <p>
              The approach matters just as much as the technology behind the
              final result.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((principle) => (
              <div
                className="principle-card reveal"
                key={principle.number}
              >
                <span>{principle.number}</span>

                <h3>{principle.title}</h3>

                <p>{principle.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section className="section skills-section" id="skills">
        <div className="section-heading reveal">
          <div>
            <p className="section-label">02 — SKILLS</p>

            <h2>
              Tools for
              <br />
              <span>building.</span>
            </h2>
          </div>

          <p>
            A growing collection of technologies, concepts and skills I use
            while turning ideas into working systems.
          </p>
        </div>

        <div className="skills-intro reveal">
          <div>
            <span>THE STACK</span>
            <strong>Still learning. Still evolving.</strong>
          </div>

          <p>
            I don&apos;t believe in knowing everything. I believe in knowing
            enough to build — and being curious enough to learn what comes
            next.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div className="skill-group reveal" key={group.number}>
              <div className="skill-group-header">
                <div className="skill-group-number">
                  {group.number}
                </div>

                <div className="skill-group-title">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skill-list">
                {group.skills.map(
                  ([name, description, level]) => (
                    <div className="skill-item" key={name}>
                      <div className="skill-item-top">
                        <div>
                          <strong>{name}</strong>
                          <span>{description}</span>
                        </div>

                        <small>{level}%</small>
                      </div>

                      <div className="skill-progress">
                        <span
                          style={{
                            width: `${level}%`,
                          }}
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-footer reveal">
          <span>LEARNING NEVER STOPS</span>

          <div>
            <i />
            <span>OPEN TO NEW TECHNOLOGIES</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}

      <section className="section" id="projects">
        <div className="project-heading reveal">
          <div>
            <p className="section-label">03 — FEATURED PROJECT</p>

            <h2>
              Built to
              <br />
              <span>protect focus.</span>
            </h2>
          </div>

          <p>
            A desktop system designed around one simple idea:
            <br />
            your attention is worth protecting.
          </p>
        </div>

        <div className="project-card">
          <div className="project-info reveal">
            <div className="project-meta">
              <span>PROJECT / 001</span>
              <span>2026</span>
            </div>

            <div className="project-status">
              <span />
              ACTIVE DEVELOPMENT
            </div>

            <h3>
              FOCUS-
              <br />
              <span>X</span>
            </h3>

            <p>
              A study focus and distraction control system designed to help
              users protect their attention. It combines focus sessions,
              activity monitoring, app and website blocking, behavioural
              insights and adaptive recommendations.
            </p>

            <div className="tech-stack">
              <span>Python</span>
              <span>Tkinter</span>
              <span>AI</span>
              <span>SQLite</span>
              <span>Automation</span>
            </div>

            <a
              href={FOCUS_X}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View project
              <span>↗</span>
            </a>
          </div>

          <div className="dashboard reveal">
            <div className="dashboard-header">
              <div className="window-buttons">
                <i />
                <i />
                <i />
              </div>

              <span>FOCUS-X / DASHBOARD</span>

              <strong>
                <i />
                ACTIVE
              </strong>
            </div>

            <div className="dashboard-layout">
              <aside className="dashboard-sidebar">
                <div className="dashboard-logo">FX</div>

                <a className="active">Overview</a>
                <a>Focus</a>
                <a>Activity</a>
                <a>Insights</a>
                <a>Settings</a>

                <div className="sidebar-bottom">
                  <span>SESSION</span>
                  <strong>01 / 01</strong>
                </div>
              </aside>

              <div className="dashboard-main">
                <div className="dashboard-title">
                  <div>
                    <small>GOOD EVENING</small>
                    <h4>Focus Overview</h4>
                  </div>

                  <div className="dashboard-timer">
                    <small>TIME LEFT</small>
                    <strong>25:00</strong>
                  </div>
                </div>

                <div className="dashboard-grid">
                  {dashboardStats.map(([value, title, subtitle]) => (
                    <div
                      className="dash-card metric-card"
                      key={title}
                    >
                      <small>{title}</small>

                      <strong>{value}</strong>

                      <p>
                        <span />
                        {subtitle}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="dash-card activity-card">
                  <div className="activity-header">
                    <div>
                      <small>FOCUS ACTIVITY</small>
                      <strong>Weekly performance</strong>
                    </div>

                    <span>LAST 7 DAYS</span>
                  </div>

                  <div className="activity-chart">
                    <div className="chart-labels">
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>

                    <div className="chart-area">
                      <div className="chart-lines">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="activity-bars">
                        <div>
                          <i style={{ height: "34%" }} />
                          <span>MON</span>
                        </div>

                        <div>
                          <i style={{ height: "54%" }} />
                          <span>TUE</span>
                        </div>

                        <div>
                          <i style={{ height: "46%" }} />
                          <span>WED</span>
                        </div>

                        <div>
                          <i style={{ height: "76%" }} />
                          <span>THU</span>
                        </div>

                        <div>
                          <i style={{ height: "61%" }} />
                          <span>FRI</span>
                        </div>

                        <div>
                          <i style={{ height: "89%" }} />
                          <span>SAT</span>
                        </div>

                        <div>
                          <i style={{ height: "69%" }} />
                          <span>SUN</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dashboard-bottom">
                  <div className="blocked-card">
                    <div>
                      <span>DISTRACTIONS BLOCKED</span>
                      <small>Today</small>
                    </div>

                    <strong>14</strong>
                  </div>

                  <div className="insight-card">
                    <div className="insight-icon">↗</div>

                    <div>
                      <span>AI INSIGHT</span>

                      <p>
                        Your focus is strongest during deep-work sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-footer reveal">
          <span>FOCUS-X / STUDY FOCUS SYSTEM</span>

          <span>DESIGNED · BUILT · ITERATED</span>

          <a
            href={FOCUS_X}
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository ↗
          </a>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="statement">
        <p className="section-label reveal">04 — PHILOSOPHY</p>

        <h2 className="reveal">
          Stay curious.
          <br />
          <span>Stay dangerous.</span>
        </h2>

        <div className="reveal" />

        <p className="reveal">
          Learn something. Break something. Build something better.
          <br />
          The goal is not to know everything — it&apos;s to keep discovering
          what&apos;s possible.
        </p>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="contact" id="contact">
        <p className="label reveal">05 — CONTACT</p>

        <h2 className="reveal">
          Have an idea?
          <br />
          <span>Let&apos;s build it.</span>
        </h2>

        <p className="reveal">
          Maybe your idea is the next interesting thing hiding in the dark.
        </p>

        <p className="contact-email reveal">
          {EMAIL}
        </p>

        <a
          href={`mailto:${EMAIL}?subject=Hello%20Abuzar`}
          className="button button-light reveal"
        >
          Start a conversation ↗
        </a>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <strong>ABUZAR.</strong>

        <span>Developer · Builder · AI Enthusiast</span>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}