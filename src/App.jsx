import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  experiences,
  navItems,
  profile,
  projects,
  publications,
  skills,
  stats,
} from "./data/portfolio";

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function CustomCursor() {
  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId;

    const moveDot = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      frameId = requestAnimationFrame(animateRing);
    };

    const enlarge = () => ring.classList.add("cursor-ring--active");
    const shrink = () => ring.classList.remove("cursor-ring--active");
    const interactiveElements = document.querySelectorAll("a, button");

    document.addEventListener("mousemove", moveDot);
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", enlarge);
      element.addEventListener("mouseleave", shrink);
    });
    animateRing();

    return () => {
      document.removeEventListener("mousemove", moveDot);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", enlarge);
        element.removeEventListener("mouseleave", shrink);
      });
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
}

function SidebarNav({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-button"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <a className="brand hover-grow" href="#hero" onClick={() => setIsOpen(false)}>
          <span>MV</span>
          <small>AI/ML Portfolio</small>
        </a>

        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map((item, index) => (
            <a
              className={`side-nav__link hover-grow ${
                activeSection === item.id ? "side-nav__link--active" : ""
              }`}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setIsOpen(false)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sidebar__footer">
          <a className="icon-link hover-grow" href={profile.github} target="_blank">
            <Github size={18} />
            GitHub
          </a>
          <a className="icon-link hover-grow" href={profile.linkedin} target="_blank">
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </aside>
    </>
  );
}

function SectionLabel({ number, children }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % profile.roleWords.length);
    }, 1800);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero section-shell" id="hero">
      <div className="hero__content">
        <p className="eyebrow">Based in {profile.location}</p>
        <h1>
          Mrunal
          <span>Vibhute.</span>
        </h1>
        <p className="hero__role">{profile.roleWords[wordIndex]}</p>
        <p className="hero__text">
          AI/ML researcher building trustworthy, explainable systems. MS in AI
          Systems at the University of Florida, previously research intern at
          Notre Dame CRC.
        </p>
        <div className="hero__actions">
          <a className="button button--primary hover-grow" href="#projects">
            View Work
          </a>
          <a className="button button--ghost hover-grow" href={profile.resume} target="_blank">
            Resume <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <div className="portrait-panel" aria-label="Portrait of Mrunal Vibhute">
        <img src={profile.photo} alt="Mrunal Vibhute" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell two-column" id="about">
      <div>
        <SectionLabel number="01">About Me</SectionLabel>
        <h2>Building AI that is trustworthy and real.</h2>
      </div>
      <div className="copy-block">
        <p>
          I am an AI researcher and engineer who loves building systems at the
          intersection of deep learning, computer vision, and NLP.
        </p>
        <p>
          My research at the University of Notre Dame's Center for Research
          Computing focused on multimodal LLMs for web navigation, including
          CAPTCHA-solving evaluation tools and papers accepted in LNAI and
          ICAART 2025.
        </p>
        <p>
          I am especially interested in AI that explains itself, from
          interpretable fake news detectors to adversarial jailbreak defenses.
        </p>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionLabel number="02">Technical Skills</SectionLabel>
      <h2>What I work with.</h2>
      <div className="card-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((skill) => (
                <span className="tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell" id="experience">
      <SectionLabel number="03">Experience & Education</SectionLabel>
      <h2>The journey so far.</h2>
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={`${item.date}-${item.title}`}>
            <p className="timeline-item__date">{item.date}</p>
            <h3>{item.title}</h3>
            <p className="timeline-item__org">
              {item.organization}
              {item.detail ? ` · ${item.detail}` : ""}
            </p>
            {item.description ? <p>{item.description}</p> : null}
            {item.bullets ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section-shell" id="projects">
      <SectionLabel number="04">Projects</SectionLabel>
      <h2>Things I have built.</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            className={`project-card ${project.featured ? "project-card--featured" : ""}`}
            key={project.title}
          >
            <p className="project-card__number">0{index + 1}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a className="text-link hover-grow" href={project.github} target="_blank">
              GitHub <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section className="section-shell" id="publications">
      <SectionLabel number="05">Research</SectionLabel>
      <h2>Published work.</h2>
      <div className="publication-list">
        {publications.map((publication) => (
          <article className="publication-item" key={publication.title}>
            <span>{publication.year}</span>
            <div>
              <h3>{publication.title}</h3>
              <p className="publication-item__venue">{publication.venue}</p>
              <p>{publication.description}</p>
              <a className="text-link hover-grow" href={publication.doi} target="_blank">
                DOI <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <SectionLabel number="06">Contact</SectionLabel>
      <h2>Let&apos;s connect.</h2>
      <p>
        Whether it is research collaboration, internships, or a conversation
        about explainable AI, my inbox is open.
      </p>
      <div className="contact-actions">
        <a className="button button--primary hover-grow" href={`mailto:${profile.email}`}>
          <Mail size={17} />
          Email Me
        </a>
        <a className="button button--ghost hover-grow" href={profile.linkedin} target="_blank">
          LinkedIn <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <CustomCursor />
      <SidebarNav activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
        <footer>Designed and built by Mrunal Vibhute · 2026</footer>
      </main>
    </>
  );
}
