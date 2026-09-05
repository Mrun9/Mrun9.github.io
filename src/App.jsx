import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { createContext, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import {
  education,
  experiences,
  hackathons,
  posters,
  profile,
  projectDomains,
  projects,
  publications,
  skills,
  stats,
} from "./data/portfolio";

const homeSections = [
  { id: "selected-work", label: "Selected Work" },
  { id: "about", label: "About" },
  { id: "experience-highlights", label: "Experience" },
  { id: "research-highlights", label: "Research" },
  { id: "skills-snapshot", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const cvSections = [
  { id: "cv-overview", label: "Overview" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
];

const ImageModalContext = createContext(() => {});

function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.caption}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button className="image-lightbox__close" type="button" onClick={onClose} aria-label="Close image" autoFocus>
        <X size={22} />
      </button>
      <figure className="image-lightbox__figure">
        <img src={image.src} alt={image.alt} />
        <figcaption>{image.caption}</figcaption>
      </figure>
    </div>
  );
}

function OpenableImage({ alt, caption, className = "", onError, src }) {
  const openImage = useContext(ImageModalContext);

  return (
    <button
      className={`image-trigger ${className}`.trim()}
      type="button"
      onClick={() => openImage({ src, alt, caption })}
      aria-label={`Open image: ${caption}`}
    >
      <img src={src} alt={alt} onError={onError} />
      <span className="image-trigger__hint">View image</span>
    </button>
  );
}

function useScrollNavigation(sectionIds) {
  const [scrollState, setScrollState] = useState({
    activeSection: sectionIds[0],
    progress: 0,
    isScrolled: false,
  });

  useEffect(() => {
    let frameId;

    const updateNavigation = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);
      const marker = window.scrollY + window.innerHeight * 0.38;
      const activeSection = sections.reduce(
        (current, section) => (section.offsetTop <= marker ? section.id : current),
        sections[0]?.id || sectionIds[0]
      );
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0
        ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
        : 0;

      setScrollState({
        activeSection,
        progress,
        isScrolled: window.scrollY > 24,
      });
    };

    const handleScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return scrollState;
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

function SidebarNav({ activeSection, currentPage, isScrolled, navigateTo, scrollProgress }) {
  const [isOpen, setIsOpen] = useState(false);
  const pageSections = currentPage === "cv"
    ? cvSections
    : [{ id: "hero", label: "Home" }, ...homeSections];
  const archivePages = [
    { id: "cv", label: "Full CV", type: "page", href: "/cv" },
    { id: "projects", label: "Projects", type: "page", href: "/projects" },
    { id: "hackathons", label: "Hackathons", type: "page", href: "/hackathons" },
    { id: "posters", label: "Research Posters", type: "page", href: "/posters" },
  ];

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

      <aside
        className={`sidebar ${isOpen ? "sidebar--open" : ""} ${isScrolled ? "sidebar--scrolled" : ""}`}
        style={{ "--scroll-progress": `${scrollProgress}%` }}
      >
        <div className="sidebar__progress" aria-hidden="true" />
        <a
          className="brand hover-grow"
          href="/"
          onClick={(event) => handleNavigation(event, "/")}
        >
          <span>MV</span>
          <small>AI/ML Portfolio</small>
        </a>

        <nav className="side-nav" aria-label="Main navigation">
          <div className="side-nav__group">
            <p className="side-nav__heading">On this page</p>
            {pageSections.map((item, index) => {
            const isSectionPage = currentPage === "home" || currentPage === "cv";
            const href = isSectionPage
              ? `#${item.id}`
              : `/#${item.id}`;
            const isActive = isSectionPage && activeSection === item.id;

            return (
              <a
                className={`side-nav__link hover-grow ${isActive ? "side-nav__link--active" : ""}`}
                href={href}
                key={item.id}
                onClick={(event) => handleNavigation(event, href)}
                aria-current={isActive ? "location" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            );
            })}
          </div>

          <div className="side-nav__group side-nav__group--archive">
            <p className="side-nav__heading">Explore archives</p>
            {archivePages.map((item, index) => {
              const isActive = currentPage === item.id;

              return (
                <a
                  className={`side-nav__link side-nav__link--page hover-grow ${isActive ? "side-nav__link--active" : ""}`}
                  href={item.href}
                  key={item.id}
                  onClick={(event) => handleNavigation(event, item.href)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {item.label}
                  <ArrowUpRight className="side-nav__page-icon" size={14} />
                </a>
              );
            })}
          </div>
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
          I build AI systems that move research into practice—from language and
          multimodal models to evaluation, observability, and trustworthy product behavior.
        </p>
        <p className="hero__availability">
          Expected graduation: May 2027 <span>·</span> Seeking full-time opportunities
        </p>
        <div className="hero__actions">
          <a className="button button--primary hover-grow" href="/projects">
            View Work
          </a>
          <a className="button button--ghost hover-grow" href="/cv">
            Full CV <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      <figure className="portrait-panel">
        <OpenableImage
          src={profile.photo}
          alt="Portrait of Mrunal Vibhute"
          caption="Mrunal Vibhute · AI researcher and software engineer"
        />
        <figcaption className="portrait-panel__caption">
          Mrunal Vibhute · AI researcher and software engineer
        </figcaption>
      </figure>
    </section>
  );
}

function About() {
  return (
    <section className="section-shell two-column" id="about">
      <div>
        <SectionLabel number="02">About Me</SectionLabel>
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
          I expect to complete my M.S. in Artificial Intelligence Systems in May
          2027 and am seeking full-time opportunities where I can bring that
          research-to-reality mindset to useful, measurable, responsible AI products.
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

function SkillsSnapshot() {
  const focusAreas = [
    {
      title: "Language intelligence",
      description: "Designing LLM, RAG, and NLP systems that can reason across text, tools, and context.",
      tags: ["LLMs", "RAG", "Transformers", "NLP"],
    },
    {
      title: "Trustworthy behavior",
      description: "Evaluating explanations, guardrails, hallucinations, and adversarial behavior before deployment.",
      tags: ["Explainable AI", "Chain-of-thought", "Data Visualization"],
    },
    {
      title: "Applied AI systems",
      description: "Turning model ideas into observable products, APIs, and workflows that hold up in use.",
      tags: ["PyTorch", "Docker", "REST APIs", "Prometheus"],
    },
  ];

  return (
    <section className="section-shell" id="skills-snapshot">
      <SectionLabel number="05">Skills Snapshot</SectionLabel>
      <h2>The toolkit behind the work.</h2>
      <div className="focus-grid">
        {focusAreas.map((area) => (
          <article className="focus-card" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <div className="tag-list">
              {area.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>
      <a className="text-link hover-grow section-action" href="/cv#skills">
        View the complete skills inventory <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

function Skills({ number = "03" }) {
  return (
    <section className="section-shell" id="skills">
      <SectionLabel number={number}>Technical Skills</SectionLabel>
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

function Education({ number = "01" }) {
  return (
    <section className="section-shell" id="education">
      <SectionLabel number={number}>Education</SectionLabel>
      <h2>Academic foundation.</h2>
      <Timeline items={education} />
    </section>
  );
}

function Experience({ number = "02" }) {
  return (
    <section className="section-shell" id="experience">
      <SectionLabel number={number}>Experience</SectionLabel>
      <h2>Research and applied work.</h2>
      <Timeline items={experiences} />
    </section>
  );
}

function ProjectCard({ project, index }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  const openDetails = () => {
    dialogRef.current.showModal();
    setIsOpen(true);
  };

  return (
    <article
      className={`project-card ${project.featured ? "project-card--featured" : ""}`}
      key={project.title}
    >
      <p className="project-card__number">{String(index + 1).padStart(2, "0")}</p>
      <h3>
        <button className="project-card__trigger" type="button" onClick={openDetails} aria-haspopup="dialog">
          {project.title}
        </button>
      </h3>
      {project.timeframe ? <p className="project-card__meta">{project.timeframe}</p> : null}
      <span className="project-card__hint">View project details <ArrowUpRight size={16} /></span>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a className="text-link hover-grow" href={project.github} rel="noreferrer" target="_blank">
          GitHub <ArrowUpRight size={16} />
        </a>
        {project.demo ? (
          <a className="text-link hover-grow" href={project.demo} rel="noreferrer" target="_blank">
            Demo <ArrowUpRight size={16} />
          </a>
        ) : null}
      </div>
      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
            dialogRef.current.close();
          }
        }}
      >
        <button className="project-dialog__close" type="button" onClick={() => dialogRef.current.close()} aria-label="Close project details" autoFocus>
          <X size={22} />
        </button>
        <p className="eyebrow">Project details</p>
        <h3 id={titleId}>{project.title}</h3>
        {project.timeframe ? <p className="project-card__meta">{project.timeframe}</p> : null}
        <ul className="project-dialog__bullets">
          {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
        </ul>
      </dialog>
    </article>
  );
}

function SelectedWork() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="section-shell" id="selected-work">
      <SectionLabel number="01">Selected Work</SectionLabel>
      <div className="selected-work__heading">
        <h2>A few signals of how I think and build.</h2>
        <p>
          My recent work connects model evaluation, multimodal systems, and the
          engineering needed to make AI useful in practice.
        </p>
      </div>
      <div className="project-grid project-grid--selected">
        {featuredProjects.map((project, index) => (
          <ProjectCard index={index} key={project.title} project={project} />
        ))}
      </div>
      <div className="section-links">
        <a className="button button--primary hover-grow" href="/projects">Explore all projects</a>
      </div>
    </section>
  );
}

function ExperienceHighlights() {
  const recentRoles = experiences.slice(0, 3);

  return (
    <section className="section-shell" id="experience-highlights">
      <SectionLabel number="03">Experience Highlights</SectionLabel>
      <div className="home-snapshot">
        <div>
          <p className="eyebrow">Recent trajectory</p>
          <h2>Research depth, product instincts.</h2>
          <p className="home-snapshot__copy">
            I have worked across enterprise AI, a student-founded GenAI product,
            and academic research—learning how to evaluate ideas and carry them
            into systems people can use.
          </p>
        </div>
        <div className="snapshot-list">
          {recentRoles.map((role) => (
            <article className="snapshot-item" key={`${role.date}-${role.title}`}>
              <p>{role.date}</p>
              <h3>{role.title}</h3>
              <span>{role.organization}</span>
            </article>
          ))}
        </div>
      </div>
      <a className="text-link hover-grow section-action" href="/cv#experience">
        Read complete experience details <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

function ResearchHighlights() {
  const selectedPublications = publications.slice(0, 2);

  return (
    <section className="section-shell" id="research-highlights">
      <SectionLabel number="04">Research Highlights</SectionLabel>
      <div className="selected-work__heading">
        <h2>Research that explains, navigates, and holds up.</h2>
        <p>
          My published work spans autonomous web agents and interpretable machine
          learning, with an emphasis on systems that remain understandable in use.
        </p>
      </div>
      <div className="research-highlight-grid">
        {selectedPublications.map((publication) => (
          <article className="publication-item research-highlight" key={publication.title}>
            <span>{publication.year}</span>
            <div>
              <h3>{publication.title}</h3>
              <p className="publication-item__venue">{publication.venue}</p>
              <p>{publication.description}</p>
              <a className="text-link hover-grow" href={publication.read} rel="noreferrer" target="_blank">
                Read paper <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link hover-grow section-action" href="/cv#publications">
        View all publications <ArrowUpRight size={16} />
      </a>
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
          A reverse-chronological timeline of hackathons and research competitions,
          from medical data analysis to dark web enumeration, assistive technology,
          forecasting, and IoT systems.
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
                {hackathon.members && hackathon.members.length > 0 ? (
                  <div>
                    <span>Members</span>
                    <p>{hackathon.members.join(" • ")}</p>
                  </div>
                ) : null}
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
                        <OpenableImage
                          src={item.src}
                          alt={item.alt || hackathon.title}
                          caption={item.caption || item.alt || hackathon.title}
                        />
                      ) : (
                        <a className="text-link hover-grow" href={item.src} rel="noreferrer" target="_blank">
                          Open media <ArrowUpRight size={16} />
                        </a>
                      )}
                      {item.type === "image" ? (
                        <p>{item.caption || item.alt || hackathon.title}</p>
                      ) : item.caption ? <p>{item.caption}</p> : null}
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
      <div className="project-domains">
        {projectDomains.map((domain) => {
          const domainProjects = projects.filter((project) => project.domain === domain.id);

          return (
            <section className="project-domain" key={domain.id} aria-labelledby={`${domain.id}-title`}>
              <div className="project-domain__header">
                <img src={domain.image} alt={domain.imageAlt} loading="lazy" />
                <div className="project-domain__copy">
                  <p className="project-domain__count">
                    {String(domainProjects.length).padStart(2, "0")} projects
                  </p>
                  <h2 id={`${domain.id}-title`}>{domain.title}</h2>
                  <p>{domain.description}</p>
                </div>
              </div>
              <div className="project-grid project-grid--archive">
                {domainProjects.map((project) => (
                  <ProjectCard index={projects.indexOf(project)} key={project.title} project={project} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <button className="button button--ghost hover-grow section-action" onClick={() => navigateTo("/")} type="button">
        Back Home
      </button>
    </section>
  );
}

function PosterImage({ image }) {
  const [isMissing, setIsMissing] = useState(false);

  if (isMissing) {
    return (
      <div className="poster-gallery__placeholder">
        <span>Image coming soon</span>
        <small>{image.src}</small>
      </div>
    );
  }

  return (
    <OpenableImage
      src={image.src}
      alt={image.alt}
      caption={image.caption}
      onError={() => setIsMissing(true)}
    />
  );
}

function PostersPage({ navigateTo }) {
  return (
    <section className="section-shell projects-page">
      <SectionLabel number="01">Research Posters</SectionLabel>
      <div className="page-heading">
        <h1>
          Poster
          <span>Presentations.</span>
        </h1>
        <p>
          Research and course symposium posters from projects where I turned
          model ideas into explainable systems, demos, and presented work.
        </p>
      </div>
      <div className="poster-list">
        {posters.map((poster, index) => (
          <article className="poster-card" key={poster.title}>
            <div className="poster-card__content">
              <p className="project-card__number">{String(index + 1).padStart(2, "0")}</p>
              <h3>{poster.title}</h3>
              <p className="poster-card__meta">
                {poster.symposium} · {poster.date} · {poster.location}
              </p>
              <p>{poster.description}</p>
            </div>
            <div className="poster-gallery">
              {poster.images.map((image) => (
                <figure className="poster-gallery__item" key={image.src}>
                  <PosterImage image={image} />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
      <button className="button button--ghost hover-grow section-action" onClick={() => navigateTo("/")} type="button">
        Back Home
      </button>
    </section>
  );
}

function Publications({ number = "04" }) {
  return (
    <section className="section-shell" id="publications">
      <SectionLabel number={number}>Publications</SectionLabel>
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

function CVPage() {
  return (
    <div className="cv-page">
      <section className="section-shell cv-hero" id="cv-overview">
        <SectionLabel number="00">Curriculum Vitae</SectionLabel>
        <div className="cv-hero__grid">
          <div>
            <h1>
              Full
              <span>CV.</span>
            </h1>
            <p className="hero__text">
              The complete record of my education, research and engineering
              experience, technical toolkit, and publications.
            </p>
          </div>
          <div className="cv-hero__summary">
            <p>
              I work where AI research meets software engineering, with a focus
              on multimodal systems, language intelligence, trustworthy model
              behavior, and measurable product performance.
            </p>
            <div className="cv-hero__meta">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <a className="button button--primary hover-grow" href={profile.resume} rel="noreferrer" target="_blank">
              Download PDF <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <Education number="01" />
      <Experience number="02" />
      <Skills number="03" />
      <Publications number="04" />
    </div>
  );
}

function Contact() {
  const [copyLabel, setCopyLabel] = useState("Copy Email");

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopyLabel("Email Copied");
    window.setTimeout(() => setCopyLabel("Copy Email"), 1800);
  };

  return (
    <section className="section-shell contact-section" id="contact">
      <SectionLabel number="06">Contact</SectionLabel>
      <h2>Let&apos;s connect.</h2>
      <p>
        Whether it is research collaboration, internships, or a conversation
        about explainable AI, my inbox is open.
      </p>
      <p className="contact-email">{profile.email}</p>
      <div className="contact-actions">
        <button className="button button--primary hover-grow" onClick={copyEmail} type="button">
          <Mail size={17} />
          {copyLabel}
        </button>
        <a className="button button--ghost hover-grow" href={profile.linkedin} rel="noreferrer" target="_blank">
          LinkedIn <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selectedImage, setSelectedImage] = useState(null);
  const normalizedPath = currentPath.replace(/\/$/, "") || "/";
  const currentPage = normalizedPath === "/projects"
    ? "projects"
    : normalizedPath === "/hackathons"
      ? "hackathons"
      : normalizedPath === "/posters"
        ? "posters"
        : normalizedPath === "/cv"
          ? "cv"
          : "home";
  const sectionIds = useMemo(
    () => currentPage === "cv"
      ? cvSections.map((item) => item.id)
      : ["hero", ...homeSections.map((item) => item.id)],
    [currentPage]
  );
  const { activeSection, progress, isScrolled } = useScrollNavigation(sectionIds);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = currentPage === "cv"
      ? `${profile.name} | Curriculum Vitae`
      : `${profile.name} | AI/ML Researcher`;
  }, [currentPage]);

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
    <ImageModalContext.Provider value={setSelectedImage}>
      <CustomCursor />
      <SidebarNav
        activeSection={activeSection}
        currentPage={currentPage}
        isScrolled={isScrolled}
        navigateTo={navigateTo}
        scrollProgress={progress}
      />
      <main>
        {currentPage === "projects" ? (
          <ProjectsPage navigateTo={navigateTo} />
        ) : currentPage === "hackathons" ? (
          <HackathonsPage navigateTo={navigateTo} />
        ) : currentPage === "posters" ? (
          <PostersPage navigateTo={navigateTo} />
        ) : currentPage === "cv" ? (
          <CVPage />
        ) : (
          <>
            <Hero />
            <SelectedWork />
            <About />
            <ExperienceHighlights />
            <ResearchHighlights />
            <SkillsSnapshot />
            <Contact />
          </>
        )}
        <footer>Designed and built by Mrunal Vibhute · 2026</footer>
      </main>
      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </ImageModalContext.Provider>
  );
}
