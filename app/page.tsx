"use client";

import { useEffect, useState } from "react";

const GITHUB = "https://github.com/azamshaikhvvhs9022-hub";
const FOCUS_X = `${GITHUB}/FOCUS-X`;
const EMAIL = "abuzarrrrr.7@gmail.com";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&fm=jpg&q=85&w=1600";

const skills = [
  ["01", "Python", "Software & automation"],
  ["02", "AI / ML", "Intelligent systems"],
  ["03", "Web", "Modern interfaces"],
  ["04", "Git & GitHub", "Version control"],
  ["05", "Problem Solving", "Turning ideas into systems"],
  ["06", "Learning", "Always exploring"],
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

        {/* DESKTOP NAVIGATION */}

        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </div>

        {/* DESKTOP GITHUB */}

        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="nav-button"
        >
          GitHub ↗
        </a>

        {/* MOBILE MENU BUTTON */}

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
              I&apos;m a developer who enjoys turning random ideas into
              something real, useful and occasionally a little unexpected.
            </p>

            <p className="about-text">
              I&apos;m interested in software development, artificial
              intelligence and the systems that sit behind the things we use
              every day. I like understanding how things work, breaking them
              down and rebuilding them in a better way.
            </p>

            <p className="about-text">
              Right now, I&apos;m focused on improving my development skills,
              exploring AI and building projects that are more than just
              something that looks good on a screen.
            </p>

            <div className="about-details">
              <div className="detail">
                <span>WHAT I LIKE</span>
                <strong>Building unusual ideas</strong>
              </div>

              <div className="detail">
                <span>WHAT I BUILD</span>
                <strong>Software & intelligent systems</strong>
              </div>

              <div className="detail">
                <span>WHAT COMES NEXT</span>
                <strong>Something bigger</strong>
              </div>
            </div>

            <div className="mystery-box">
              <span>THERE IS MORE</span>

              <p>
                The interesting projects usually start as an idea that sounds
                slightly impossible.
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
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section className="section" id="skills">
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

        <div className="skills-grid">
          {skills.map(([number, title, description]) => (
            <div className="skill-card reveal" key={number}>
              <span className="skill-number">{number}</span>

              <span className="skill-arrow">↗</span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PROJECT
      ===================================================== */}

      <section className="section" id="projects">
        <div className="project-heading reveal">
          <p className="section-label">03 — FEATURED PROJECT</p>
        </div>

        <div className="project-card">
          <div className="project-info reveal">
            <div className="project-meta">
              <span>PROJECT / 001</span>
              <span>2026</span>
            </div>

            <h3>
              FOCUS-
              <br />
              X
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
              View project <span>↗</span>
            </a>
          </div>

          {/* =================================================
              FOCUS-X DASHBOARD MOCKUP
          ================================================= */}

          <div className="dashboard reveal">
            <div className="dashboard-header">
              <div className="window-buttons">
                <i />
                <i />
                <i />
              </div>

              <span>FOCUS-X / DASHBOARD</span>

              <strong>ACTIVE</strong>
            </div>

            <div className="dashboard-layout">
              <aside className="dashboard-sidebar">
                <div className="dashboard-logo">FX</div>

                <a className="active">Overview</a>
                <a>Focus</a>
                <a>Activity</a>
                <a>Insights</a>
                <a>Settings</a>
              </aside>

              <div className="dashboard-main">
                <div className="dashboard-title">
                  <div>
                    <small>GOOD EVENING</small>
                    <h4>Focus Overview</h4>
                  </div>

                  <strong>25:00</strong>
                </div>

                <div className="dashboard-grid">
                  <div className="dash-card score-card">
                    <small>FOCUS SCORE</small>

                    <div className="score-ring">
                      <strong>87</strong>
                      <span>/ 100</span>
                    </div>

                    <p>Excellent focus</p>
                  </div>

                  <div className="dash-card session-card">
                    <small>CURRENT SESSION</small>

                    <strong>18:42</strong>

                    <div className="progress">
                      <span />
                    </div>

                    <p>Deep work session</p>
                  </div>
                </div>

                <div className="dash-card activity-card">
                  <div className="activity-header">
                    <small>ACTIVITY</small>
                    <span>LAST 7 DAYS</span>
                  </div>

                  <div className="activity-bars">
                    <i style={{ height: "32%" }} />
                    <i style={{ height: "52%" }} />
                    <i style={{ height: "44%" }} />
                    <i style={{ height: "75%" }} />
                    <i style={{ height: "60%" }} />
                    <i style={{ height: "88%" }} />
                    <i style={{ height: "68%" }} />
                  </div>
                </div>

                <div className="blocked-card">
                  <span>DISTRACTIONS BLOCKED</span>
                  <strong>14</strong>
                </div>
              </div>
            </div>
          </div>
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

        {/* EMAIL ADDRESS */}

        <p className="contact-email reveal">{EMAIL}</p>

        {/* EMAIL BUTTON */}

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