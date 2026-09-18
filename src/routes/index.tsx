import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Braces,
  Bug,
  CheckCircle2,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TestTube2,
  Users,
} from "lucide-react";
import portraitAsset from "../assets/john-raphael-de-castro.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "John Raphael C. De Castro | QA Engineer & Test Analyst" },
      {
        name: "description",
        content:
          "Portfolio of John Raphael C. De Castro, a Test Analyst and QA Engineer specializing in manual, automation, API, and workflow testing.",
      },
      { property: "og:title", content: "John Raphael C. De Castro | QA Engineer" },
      {
        property: "og:description",
        content: "QA engineering, test automation, enterprise delivery, and selected projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const services = [
  {
    icon: TestTube2,
    number: "01",
    title: "Manual & Functional Testing",
    text: "Thorough exploratory, functional, regression, and integration testing for complex enterprise workflows.",
  },
  {
    icon: Braces,
    number: "02",
    title: "Test Automation",
    text: "Maintainable automated coverage with Jest, WebDriverIO, Appium, JavaScript, and TypeScript.",
  },
  {
    icon: TerminalSquare,
    number: "03",
    title: "API Validation",
    text: "Reliable API and data validation using Postman and MongoDB, from happy paths to boundary conditions.",
  },
  {
    icon: Bot,
    number: "04",
    title: "Workflow & AI Automation",
    text: "Practical n8n and AI-assisted workflows that remove repetitive tasks and improve delivery speed.",
  },
];

const experience = [
  {
    dates: "OCT 2022 — AUG 2026",
    role: "Test Analyst",
    company: "Cognizant Technology Solutions",
    details: [
      "Supported 20+ Agile releases annually with strong test coverage and deployment readiness.",
      "Advanced Jest automation initiatives and identified functional and integration defects before production.",
      "Mentored five junior QA engineers and coordinated offshore and onshore testing efforts.",
    ],
  },
  {
    dates: "MAY 2021 — SEP 2022",
    role: "Test Associate",
    company: "Cognizant Technology Solutions",
    details: [
      "Executed functional and regression testing for CLA tax applications, including 1040 Exchange.",
      "Partnered with cross-functional teams to deliver high-quality sprint releases.",
    ],
  },
  {
    dates: "DEC 2019 — APR 2021",
    role: "Associate Software Engineer",
    company: "Accenture · Identity & Access Management",
    details: [
      "Developed Windows Hello for Business solutions using PowerShell and Azure DevOps.",
      "Produced technical documentation and supported enterprise deployments.",
    ],
  },
  {
    dates: "JUN 2017 — DEC 2019",
    role: "Associate Software Engineer",
    company: "Accenture · Marketing & Communications",
    details: [
      "Developed and maintained Sitecore web applications, including work supporting Accenture.com.",
      "Supported Agile releases through debugging, pipeline monitoring, and production regression testing.",
    ],
  },
];

const projects = [
  {
    index: "01",
    icon: ShieldCheck,
    category: "ENTERPRISE IDENTITY",
    title: "Windows Hello for Business",
    text: "Pioneered an enterprise authentication solution, collaborating with stakeholders from development through testing, pipelines, and deployment support.",
    tags: ["PowerShell", "Azure DevOps", "IAM"],
  },
  {
    index: "02",
    icon: BadgeCheck,
    category: "FINANCIAL PLATFORM",
    title: "1040 Exchange",
    text: "Performed end-to-end validation of tax application workflows spanning functional, regression, integration, and release testing.",
    tags: ["Functional QA", "Regression", "API"],
  },
  {
    index: "03",
    icon: Sparkles,
    category: "ENTERPRISE WEB",
    title: "Accenture.com",
    text: "Developed and maintained enterprise web solutions using Sitecore, with hands-on testing, debugging, and production release support.",
    tags: ["Sitecore", "Web Development", "Agile"],
  },
];

const skills = [
  "Manual Testing",
  "Regression Testing",
  "API Testing",
  "Jest",
  "WebDriverIO",
  "Appium",
  "n8n",
  "Azure DevOps",
  "Postman",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "PowerShell",
  "Sitecore",
  "SAFe",
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <Sparkles aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="John Raphael C. De Castro, home">
          <span>JOHN</span> RAPHAEL <strong>DE CASTRO</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="mailto:jraph5295@gmail.com">
          <span /> Open to opportunities
        </a>
      </header>

      <main id="top" className="page-frame">
        <section className="hero glass-panel">
          <div className="hero-copy">
            <p className="eyebrow"><span /> QA ENGINEER · TEST ANALYST</p>
            <h1>QUALITY<br />BEFORE<br /><em>RELEASE.</em></h1>
            <p className="intro">
              I test enterprise software, automate repeatable checks, and build dependable workflows that help teams ship with confidence.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">View my work <ArrowDown aria-hidden="true" /></a>
              <a className="secondary-action" href="mailto:jraph5295@gmail.com">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-halo" />
            <img src={portraitAsset.url} alt="John Raphael C. De Castro" />
            <span className="portrait-caption">BASED IN THE PHILIPPINES · AVAILABLE WORLDWIDE</span>
          </div>
        </section>

        <section className="stats glass-panel" aria-label="Career highlights">
          <div><strong>6+</strong><span>Years in QA</span></div>
          <div><strong>3+</strong><span>Years in development</span></div>
          <div><strong>20+</strong><span>Agile releases yearly</span></div>
          <div><strong>5</strong><span>QA engineers mentored</span></div>
          <blockquote>“Quality is never an accident. It is always the result of intelligent effort.”</blockquote>
        </section>

        <section id="services" className="content-section">
          <div className="section-heading">
            <div><SectionLabel>SERVICES & EXPERTISE</SectionLabel><h2>How I strengthen<br />every release.</h2></div>
            <p>End-to-end quality support grounded in careful analysis, useful automation, and clear collaboration.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, ...service }) => (
              <article className="service-card glass-panel" key={service.title}>
                <div className="card-top"><Icon aria-hidden="true" /><span>{service.number}</span></div>
                <h3>{service.title}</h3><p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionLabel>WORK EXPERIENCE</SectionLabel>
          <div className="experience-layout">
            <div className="experience-intro">
              <h2>Built across<br />quality & code.</h2>
              <p>A career spanning quality assurance, identity systems, enterprise websites, and release delivery.</p>
              <div className="education glass-panel">
                <span>EDUCATION</span>
                <strong>BS Information Technology</strong>
                <p>University of Santo Tomas</p>
              </div>
            </div>
            <ol className="timeline">
              {experience.map((job, index) => (
                <li key={`${job.role}-${job.dates}`}>
                  <span className={index === 0 ? "timeline-dot active" : "timeline-dot"} />
                  <p className="job-date">{job.dates}</p>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="content-section">
          <div className="section-heading compact">
            <div><SectionLabel>PREVIOUS WORKS</SectionLabel><h2>Selected projects.</h2></div>
            <p>Enterprise work where accuracy, security, and dependable delivery mattered.</p>
          </div>
          <div className="project-grid">
            {projects.map(({ icon: Icon, ...project }) => (
              <article className="project-card glass-panel" key={project.title}>
                <div className="project-visual">
                  <span>{project.index}</span><Icon aria-hidden="true" />
                  <div className="signal-lines"><i /><i /><i /></div>
                </div>
                <div className="project-body">
                  <p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.text}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section glass-panel">
          <div><SectionLabel>CORE SKILLS</SectionLabel><h2>Tools I trust.<br />Standards I keep.</h2></div>
          <div className="skill-cloud">{skills.map((skill) => <span key={skill}><CheckCircle2 aria-hidden="true" />{skill}</span>)}</div>
          <div className="certs">
            <strong><Users aria-hidden="true" /> Certified & qualified</strong>
            <p>Scrum Foundation Professional Certificate · SAFe 4 Practitioner · Civil Service Professional Eligibility</p>
          </div>
        </section>
      </main>

      <footer id="contact" className="contact-wrap">
        <div className="contact-inner">
          <div>
            <SectionLabel>CONTACT</SectionLabel>
            <h2>LET&apos;S BUILD<br />SOMETHING<br /><em>DEPENDABLE.</em></h2>
            <p>Need careful testing, useful automation, or a quality partner for your next release? Let&apos;s connect.</p>
          </div>
          <div className="contact-card glass-panel">
            <span>GET IN TOUCH</span>
            <a href="mailto:jraph5295@gmail.com"><Mail aria-hidden="true" /><span><small>EMAIL</small>jraph5295@gmail.com</span><ArrowUpRight /></a>
            <a href="tel:+639162306072"><Phone aria-hidden="true" /><span><small>PHONE</small>0916-230-6072</span><ArrowUpRight /></a>
            <a href="https://linkedin.com/in/john-raphael-de-castro" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /><span><small>LINKEDIN</small>john-raphael-de-castro</span><ArrowUpRight /></a>
          </div>
        </div>
        <div className="footer-line"><span className="wordmark"><span>JOHN</span> RAPHAEL <strong>DE CASTRO</strong></span><p>© 2026 · TESTING WHAT MATTERS.</p></div>
      </footer>
    </div>
  );
}