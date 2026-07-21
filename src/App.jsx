import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  education,
  experiences,
  hackathons,
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

    const enlarge = (event) => {
      if (event.target.closest("a, button")) {
        ring.classList.add("cursor-ring--active");
      }
    };
    const shrink = (event) => {
      if (event.target.closest("a, button")) {
        ring.classList.remove("cursor-ring--active");
      }
    };

    document.addEventListener("mousemove", moveDot);
    document.addEventListener("mouseover", enlarge);
    document.addEventListener("mouseout", shrink);
    animateRing();

    return () => {
      document.removeEventListener("mousemove", moveDot);
      document.removeEventListener("mouseover", enlarge);
      document.removeEventListener("mouseout", shrink);
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

function SidebarNav({ activeSection, currentPage, navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (event, href) => {
    setIsOpen(false);
    if (!href.startsWith("/")) return;

    event.preventDefault();
    navigateTo(href);
  };

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
        <a
          className="brand hover-grow"
          href="/"
          onClick={(event) => handleNavigation(event, "/")}
        >
          <span>MV</span>
          <small>AI/ML Portfolio</small>
        </a>

        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map((item, index) => {
            const href = currentPage === "home" ? `#${item.id}` : `/#${item.id}`;

            return (
              <a
                className={`side-nav__link hover-grow ${
                  currentPage === "home" && activeSection === item.id
                    ? "side-nav__link--active"
                    : ""
                }`}
                href={href}
                key={item.id}
                onClick={(event) => handleNavigation(event, href)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            );
          })}
          <a
            className={`side-nav__link hover-grow ${
              currentPage === "projects" ? "side-nav__link--active" : ""
            }`}
            href="/projects"
            onClick={(event) => handleNavigation(event, "/projects")}
          >
            <span>{String(navItems.length + 1).padStart(2, "0")}</span>
            All Projects
          </a>
          <a
            className={`side-nav__link hover-grow ${
              currentPage === "hackathons" ? "side-nav__link--active" : ""
            }`}
            href="/hackathons"
            onClick={(event) => handleNavigation(event, "/hackathons")}
          >
            <span>{String(navItems.length + 2).padStart(2, "0")}</span>
            Hackathons
          </a>
        </nav>

        <div className="sidebar__footer">
          <a className="icon-link hover-grow" href={profile.github} rel="noreferrer" target="_blank">
            <Github size={18} />
            GitHub
          </a>
          <a className="icon-link hover-grow" href={profile.linkedin} rel="noreferrer" target="_blank">
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
          I’m drawn to the space between AI research and real-world systems, where models need to work, explain themselves, and behave well under pressure.
        </p>
        <div className="hero__actions">
          <a className="button button--primary hover-grow" href="#featured-projects">
            View Work
          </a>
          <a className="button button--ghost hover-grow" href={profile.resume} rel="noreferrer" target="_blank">
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
        <h2>Building AI that works beyond the demo.</h2>
      </div>
      <div className="copy-block">
        <p>
          I am an AI researcher and engineer who likes the kind of work where
          research ideas have to survive real data, real users, and real product
          constraints.
        </p>
        <p>
          My path has moved across multimodal agents, NLP, computer vision,
          trustworthy ML, and GenAI software. I am especially interested in
          systems that can be tested, explained, and improved after they leave
          the notebook.
        </p>
        <p>
          As I finish my graduate program next year, I am looking to bring that
          research-to-reality mindset into industry, building AI products that
          are useful, measurable, and responsible.
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

function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
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
          {item.links ? (
            <div className="timeline-links">
              {item.links.map((link) => (
                <a className="text-link hover-grow" href={link.href} key={link.href} rel="noreferrer" target="_blank">
                  {link.label} <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function Education() {
  return (
    <section className="section-shell" id="education">
      <SectionLabel number="03">Education</SectionLabel>
      <h2>Academic foundation.</h2>
      <Timeline items={education} />
    </section>
  );
}

function Experience() {
  return (
    <section className="section-shell" id="experience">
      <SectionLabel number="04">Experience</SectionLabel>
      <h2>Research and applied work.</h2>
      <Timeline items={experiences} />
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      key={project.title}
    >
      <p className="project-card__number">{String(index + 1).padStart(2, "0")}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <a className="text-link hover-grow" href={project.github} rel="noreferrer" target="_blank">
        GitHub <ArrowUpRight size={16} />
      </a>
    </article>
  );
}

function FeaturedProjects({ navigateTo }) {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <section className="section-shell" id="featured-projects">
      <SectionLabel number="05">Projects</SectionLabel>
      <h2>Featured builds.</h2>
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
      <button
        className="button button--ghost hover-grow section-action"
        onClick={() => navigateTo("/projects")}
        type="button"
      >
        View All Projects <ArrowUpRight size={17} />
      </button>
    </section>
  );
}

function HackathonsPage({ navigateTo }) {
  return (
    <section className="section-shell projects-page">
      <SectionLabel number="01">Hackathons</SectionLabel>
      <div className="page-heading">
        <h1>
          Hackathon
          <span>Highlights.</span>
        </h1>
        <p>
          A focused record of standout hackathon experiences, including achievements,
          teammates, outcomes, and links to the work behind each build.
        </p>
      </div>
      <div className="hackathon-list">
        {hackathons.map((hackathon, index) => (
          <article className="hackathon-card" key={hackathon.title}>
            <div className="hackathon-card__header">
              <div>
                <p className="project-card__number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{hackathon.title}</h3>
                <p className="hackathon-badge">{hackathon.achievement}</p>
              </div>
              <div className="hackathon-meta">
                <div>
                  <span>Timeframe</span>
                  <p>{hackathon.timeframe}</p>
                </div>
                <div>
                  <span>Members</span>
                  <p>{hackathon.members.join(" • ")}</p>
                </div>
              </div>
            </div>
            <div className="hackathon-card__body">
              <ul className="hackathon-details-list">
                {hackathon.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {hackathon.media && hackathon.media.length > 0 ? (
                <div className="hackathon-media-grid">
                  {hackathon.media.map((item) => (
                    <div className="hackathon-media-item" key={item.src + item.caption}>
                      {item.type === "image" ? (
                        <img src={item.src} alt={item.alt || hackathon.title} />
                      ) : (
                        <a className="text-link hover-grow" href={item.src} rel="noreferrer" target="_blank">
                          Open media <ArrowUpRight size={16} />
                        </a>
                      )}
                      {item.caption ? <p>{item.caption}</p> : null}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            {(hackathon.links || hackathon.certificates) ? (
              <div className="hackathon-links">
                {hackathon.links?.map((link) => (
                  <a className="text-link hover-grow" href={link.href} key={link.label} rel="noreferrer" target="_blank">
                    {link.label} <ArrowUpRight size={16} />
                  </a>
                ))}
                {hackathon.certificates?.map((certificate) => (
                  <a className="text-link hover-grow" href={certificate.href} key={certificate.label} rel="noreferrer" target="_blank">
                    {certificate.label} <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
      <button className="button button--ghost hover-grow section-action" onClick={() => navigateTo("/")} type="button">
        Back Home
      </button>
    </section>
  );
}

function ProjectsPage({ navigateTo }) {
  return (
    <section className="section-shell projects-page">
      <SectionLabel number="01">All Projects</SectionLabel>
      <div className="page-heading">
        <h1>
          Project
          <span>Archive.</span>
        </h1>
        <p>
          A growing collection of research prototypes, AI systems, experiments,
          and software projects. I will keep adding to this page as the portfolio grows.
        </p>
      </div>
      <div className="project-grid project-grid--archive">
        {projects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
      <div className="project-coming-soon">
        <p>More projects coming soon.</p>
        <span>Drop new project details into the data file and they will render here automatically.</span>
      </div>
      <button className="button button--ghost hover-grow section-action" onClick={() => navigateTo("/")} type="button">
        Back Home
      </button>
    </section>
  );
}

function Publications() {
  return (
    <section className="section-shell" id="publications">
      <SectionLabel number="06">Research</SectionLabel>
      <h2>Published work.</h2>
      <div className="publication-list">
        {publications.map((publication) => (
          <article className="publication-item" key={publication.title}>
            <span>{publication.year}</span>
            <div>
              <h3>{publication.title}</h3>
              <p className="publication-item__venue">{publication.venue}</p>
              <p>{publication.description}</p>
              {publication.read || publication.doi ? (
                <a
                  className="text-link hover-grow"
                  href={publication.read || publication.doi}
                  rel="noreferrer"
                  target="_blank"
                >
                  {publication.read ? "Read Paper" : "DOI"} <ArrowUpRight size={16} />
                </a>
              ) : null}
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
      <SectionLabel number="07">Contact</SectionLabel>
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
        <a className="button button--ghost hover-grow" href={profile.linkedin} rel="noreferrer" target="_blank">
          LinkedIn <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const currentPage = currentPath.replace(/\/$/, "") === "/projects"
    ? "projects"
    : currentPath.replace(/\/$/, "") === "/hackathons"
      ? "hackathons"
      : "home";

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    const [pathname, hash] = path.split("#");
    window.history.pushState({}, "", path);
    setCurrentPath(pathname || "/");

    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <CustomCursor />
      <SidebarNav activeSection={activeSection} currentPage={currentPage} navigateTo={navigateTo} />
      <main>
        {currentPage === "projects" ? (
          <ProjectsPage navigateTo={navigateTo} />
        ) : currentPage === "hackathons" ? (
          <HackathonsPage navigateTo={navigateTo} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Experience />
            <FeaturedProjects navigateTo={navigateTo} />
            <Publications />
            <Contact />
          </>
        )}
        <footer>Designed and built by Mrunal Vibhute · 2026</footer>
      </main>
    </>
  );
}
