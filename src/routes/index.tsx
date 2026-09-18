import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Briefcase,
  CheckCircle2,
  GitBranch,
  Linkedin,
  Mail,
  MessageSquareMore,
  Phone,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TestTube2,
  Users,
  Webhook,
} from "lucide-react";
import portrait from "../assets/john-raphael-transparent.png";
import customerInquiryOverview from "../assets/customer-inquiry-workflow-overview.pdf.asset.json";
import discordBotOverview from "../assets/granblue-relink-discord-build-bot-overview.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "John Raphael C. De Castro | n8n Workflow & AI Automation" },
      {
        name: "description",
        content:
          "Portfolio of John Raphael C. De Castro, an n8n workflow and AI automation specialist building practical systems, integrations, and reliable business processes.",
      },
      { property: "og:title", content: "John Raphael C. De Castro | n8n Automation Specialist" },
      {
        property: "og:description",
        content: "n8n workflow automation, AI-assisted systems, integrations, and selected projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const services = [
  {
    icon: Bot,
    number: "01",
    title: "Workflow & AI Automation",
    text: "End-to-end n8n systems that connect tools, route information, automate decisions, and keep repetitive work moving.",
  },
  {
    icon: GitBranch,
    number: "02",
    title: "Process Design & Optimization",
    text: "Clear, resilient workflows with branching logic, deduplication, escalation paths, retries, and error handling.",
  },
  {
    icon: Webhook,
    number: "03",
    title: "API & App Integrations",
    text: "Secure connections across webhooks, Google Workspace, Slack, Discord, email, and external services.",
  },
  {
    icon: TestTube2,
    number: "04",
    title: "Quality Assurance",
    text: "QA discipline applied to every automation through scenario testing, validation, monitoring, and dependable handoffs.",
  },
];

const experience = [
  {
    dates: "2026 — PRESENT",
    role: "Workflow & AI Automation Builder",
    company: "Independent Projects · n8n",
    details: [
      "Designing n8n workflows for operational intake, priority routing, duplicate prevention, and timed escalation.",
      "Building webhook-driven integrations for Discord, Google Sheets, Slack, and email with secure validation and failure handling.",
      "Applying a QA-first approach to workflow logic, edge cases, monitoring, and production readiness.",
    ],
  },
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
    icon: MessageSquareMore,
    category: "N8N · OPERATIONS & SUPPORT · DRAFT",
    title: "Customer Inquiry Intake & Escalation",
    text: "An n8n workflow that detects duplicate inquiries, assigns priority, logs new requests, notifies the team, and escalates unresolved cases.",
    tags: ["n8n", "Google Sheets", "Slack", "Email"],
    href: customerInquiryOverview.url,
  },
  {
    index: "02",
    icon: Bot,
    category: "N8N · DISCORD AUTOMATION · ACTIVE",
    title: "Granblue Relink Discord Build Bot",
    text: "A verified Discord slash-command workflow that finds build guides from Google Sheets, handles typos, and returns chunked replies within platform limits.",
    tags: ["n8n", "Discord", "Webhooks", "Fuzzy Matching"],
    href: discordBotOverview.url,
  },
  {
    index: "03",
    icon: ShieldCheck,
    category: "ENTERPRISE IDENTITY",
    title: "Windows Hello for Business",
    text: "Pioneered an enterprise authentication solution, collaborating with stakeholders from development through testing, pipelines, and deployment support.",
    tags: ["PowerShell", "Azure DevOps", "IAM"],
  },
  {
    index: "04",
    icon: BadgeCheck,
    category: "FINANCIAL PLATFORM",
    title: "1040 Exchange",
    text: "Performed end-to-end validation of tax application workflows spanning functional, regression, integration, and release testing.",
    tags: ["Functional QA", "Regression", "API"],
  },
  {
    index: "05",
    icon: Sparkles,
    category: "ENTERPRISE WEB",
    title: "Accenture.com",
    text: "Developed and maintained enterprise web solutions using Sitecore, with hands-on testing, debugging, and production release support.",
    tags: ["Sitecore", "Web Development", "Agile"],
  },
];

const skills = [
  "n8n",
  "Workflow Design",
  "AI Automation",
  "Webhooks",
  "Google Sheets",
  "Slack",
  "Discord",
  "Error Handling",
  "Process Mapping",
  "API Integration",
  "JavaScript",
  "TypeScript",
  "Manual Testing",
  "Regression Testing",
  "API Testing",
  "Jest",
  "WebDriverIO",
  "Appium",
  "Azure DevOps",
  "Postman",
  "MongoDB",
  "PowerShell",
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
            <p className="eyebrow"><span /> N8N WORKFLOW · AI AUTOMATION</p>
            <h1>SMARTER<br />WORKFLOWS.<br /><em>LESS WORK.</em></h1>
            <p className="intro">
              I build reliable n8n workflows and AI-assisted automations that connect tools, remove repetitive work, and keep operations moving.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">View my work <ArrowDown aria-hidden="true" /></a>
              <a className="secondary-action" href="mailto:jraph5295@gmail.com">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-halo" />
            <img src={portrait} alt="John Raphael C. De Castro" />
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
            <div><SectionLabel>SERVICES & EXPERTISE</SectionLabel><h2>Automation that<br />does the busywork.</h2></div>
            <p>Practical n8n systems designed around real operations, dependable integrations, and clear outcomes.</p>
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
              <h2>Built across<br />automation & quality.</h2>
              <p>Current n8n automation work supported by years of quality assurance, development, and enterprise delivery experience.</p>
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
            <p>n8n automations and enterprise systems built around useful logic, accuracy, security, and dependable delivery.</p>
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
                  {project.href ? <a className="case-study-link" href={project.href} target="_blank" rel="noreferrer">View workflow overview <ArrowUpRight aria-hidden="true" /></a> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section glass-panel">
          <div><SectionLabel>CORE SKILLS</SectionLabel><h2>Systems I connect.<br />Standards I keep.</h2></div>
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
            <h2>LET&apos;S AUTOMATE<br />WHAT SLOWS<br /><em>YOU DOWN.</em></h2>
            <p>Have a repetitive process, disconnected tools, or an automation idea? Let&apos;s build a dependable n8n workflow around it.</p>
          </div>
          <div className="contact-card glass-panel">
            <span>GET IN TOUCH</span>
            <a href="mailto:jraph5295@gmail.com"><Mail aria-hidden="true" /><span><small>EMAIL</small>jraph5295@gmail.com</span><ArrowUpRight /></a>
            <a href="tel:+639162306072"><Phone aria-hidden="true" /><span><small>PHONE</small>0916-230-6072</span><ArrowUpRight /></a>
            <a href="https://linkedin.com/in/john-raphael-de-castro" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /><span><small>LINKEDIN</small>john-raphael-de-castro</span><ArrowUpRight /></a>
            <a href="https://www.upwork.com/freelancers/~01e531613a575f9769" target="_blank" rel="noreferrer"><Briefcase aria-hidden="true" /><span><small>UPWORK</small>John Raphael C. De Castro</span><ArrowUpRight /></a>
          </div>
        </div>
        <div className="footer-line"><span className="wordmark"><span>JOHN</span> RAPHAEL <strong>DE CASTRO</strong></span><p>© 2026 · AUTOMATING WHAT MATTERS.</p></div>
      </footer>
    </div>
  );
}