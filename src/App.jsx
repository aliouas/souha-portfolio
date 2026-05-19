import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink, Database, BarChart3, Globe2, Code2, BriefcaseBusiness, FileText } from "lucide-react";

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ asChild, variant, className = "", children }) {
  const base =
    variant === "outline"
      ? "inline-flex items-center justify-center border border-slate-300 bg-white text-slate-950 hover:bg-slate-100"
      : "inline-flex items-center justify-center bg-slate-950 text-white hover:bg-slate-800";

  if (asChild) {
    return React.cloneElement(children, {
      className: `${base} ${className} ${children.props.className || ""}`,
    });
  }

  return <button className={`${base} ${className}`}>{children}</button>;
}

const projects = [
  {
    title: "Educational Attainment & Well-Being in Maryland",
    type: "Data Story / Interactive Report",
    description:
      "County-level analysis examining how educational attainment relates to income, poverty, housing, health, and labor-market outcomes across Maryland.",
    tools: ["Python", "Pandas", "Plotly", "HTML/CSS/JS", "ACS", "GeoJSON"],
    links: [
      { label: "Live Demo", href: "https://educational-attainment-1198bd.gitlab.io/" },
    ],
  },
  {
    title: "Math Graduates Dashboard",
    type: "Tableau Dashboard",
    description:
      "Interactive Tableau dashboard exploring the geography, labor-market outcomes, and occupational patterns of mathematics and statistics graduates.",
    tools: ["SQL", "Tableau", "IPUMS", "Data Cleaning", "Dashboard Design"],
    links: [
      { label: "Tableau", href: "https://public.tableau.com/app/profile/souha.alioua/viz/MathGraduatesDashboard/Overview" },
      { label: "GitHub", href: "https://github.com/aliouas/math-graduates" },
    ],
  },
  {
    title: "Maryland Regional Economic Breakdown",
    type: "Web App / Data Visualization",
    description:
      "Regional economic data application with interactive maps, sortable tables, county-level drilldowns, and industry/sub-industry exploration.",
    tools: ["Python", "JavaScript", "Plotly", "QCEW", "GeoJSON", "HTML/CSS"],
    links: [],
  },
  {
    title: "Mindnest Coaching Module",
    type: "Full-Stack Application",
    description:
      "Mental-health coaching module with coaching plans, exercises, progress tracking, favorites, translation support, and dashboard views.",
    tools: ["Java", "JavaFX", "Symfony", "Doctrine", "MySQL", "FXML"],
    links: [],
  },
];

const skills = [
  {
    category: "Data Analysis",
    icon: BarChart3,
    items: ["Python", "Pandas", "NumPy", "SQL", "Excel", "Statistical Analysis", "Data Validation"],
  },
  {
    category: "Visualization & BI",
    icon: Globe2,
    items: ["Tableau", "Power BI", "Looker Studio", "Plotly", "Dashboards", "Storytelling"],
  },
  {
    category: "GIS & Public Data",
    icon: MapPin,
    items: ["ArcGIS Online", "ArcGIS Pro", "GeoJSON", "ACS", "BLS/QCEW", "BEA", "Census APIs"],
  },
  {
    category: "Software & Web",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "Java", "Symfony", "Git/GitLab", "GitHub"],
  },
];

const experience = [
  {
    role: "Planner I / Data Analyst",
    org: "Maryland Department of Planning — State Data & Analysis Center",
    period: "2025–Present",
    bullets: [
      "Build and maintain data workflows for demographic, economic, ACS, and public-sector reporting.",
      "Develop dashboards, maps, and web-based outputs that translate complex datasets into usable insights.",
      "Support population projections, enrollment review, data validation, and recurring analytical deliverables.",
    ],
  },
  {
    role: "Mathematics Graduate",
    org: "Dickinson College",
    period: "2025",
    bullets: [
      "Focused on quantitative reasoning, computer science, data systems, graph theory, and applied analytical work.",
      "Completed projects involving open-source development, data processing, web visualization, and technical documentation.",
    ],
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <Card className="h-full rounded-2xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">{project.type}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-950">{project.title}</h3>
            </div>
            <Database className="h-5 w-5 shrink-0 text-slate-400" />
          </div>
          <p className="text-sm leading-6 text-slate-600">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                {tool}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.length > 0 ? (
              project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-950 underline underline-offset-4"
                >
                  {link.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))
            ) : (
              <span className="text-sm text-slate-400">Link coming soon</span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function PortfolioWebsite() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight text-slate-950">
            Souha Alioua
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#projects" className="hover:text-slate-950">Projects</a>
            <a href="#skills" className="hover:text-slate-950">Skills</a>
            <a href="#experience" className="hover:text-slate-950">Experience</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </nav>
      </header>

      <section id="home" className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.25fr_0.75fr] md:items-center md:py-28">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Data Analyst · GIS · Public Data · Web Visualization
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
            I turn public data into clear, usable, and interactive insight.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I’m Souha Alioua, a data analyst focused on demographic, economic, GIS, and public-sector data. I build workflows, dashboards, maps, and web-based reports that help people understand patterns, validate decisions, and communicate findings clearly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl px-5 py-6">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl px-5 py-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="rounded-3xl border-slate-200 bg-white shadow-sm">
            <CardContent className="p-7">
              <div className="mb-6 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm text-slate-300">Current focus</p>
                <p className="mt-2 text-2xl font-bold">Public data products for Maryland</p>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold text-slate-500">Strength</p>
                  <p className="mt-1 text-slate-900">Connecting data cleaning, analysis, GIS, visualization, and written interpretation.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Best fit</p>
                  <p className="mt-1 text-slate-900">Data analyst, BI analyst, GIS/data visualization, research analyst, or public-sector analytics roles.</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500">Tools</p>
                  <p className="mt-1 text-slate-900">Python · SQL · Tableau · ArcGIS · Plotly · Excel · JavaScript</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects that combine analysis, visualization, and communication"
          description="These projects show practical work across public datasets, GIS, dashboards, web reports, and software development."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeader
          eyebrow="Capabilities"
          title="A practical toolkit for data-heavy work"
          description="My strongest work sits at the intersection of data preparation, public datasets, visualization, GIS, and stakeholder-facing communication."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <Card key={group.category} className="rounded-2xl border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <Icon className="mb-4 h-6 w-6 text-slate-500" />
                  <h3 className="text-lg font-bold text-slate-950">{group.category}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeader
          eyebrow="Experience"
          title="Data work grounded in real public-sector needs"
          description="I care about outputs that are accurate, maintainable, and understandable to non-technical audiences."
        />
        <div className="space-y-5">
          {experience.map((item) => (
            <Card key={item.role} className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardContent className="grid gap-4 p-6 md:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {item.period}
                  </div>
                  <h3 className="text-xl font-bold text-slate-950">{item.role}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.org}</p>
                </div>
                <ul className="space-y-3 text-sm leading-6 text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Card className="rounded-3xl border-slate-200 bg-slate-950 text-white shadow-sm">
          <CardContent className="grid gap-8 p-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Resume Snapshot</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Built for analyst, BI, GIS, and public-data roles.</h2>
            </div>
            <div className="grid gap-3 text-sm text-slate-300">
              <div className="flex gap-3"><BriefcaseBusiness className="h-5 w-5 shrink-0" /> Public-sector data analysis and reporting</div>
              <div className="flex gap-3"><Database className="h-5 w-5 shrink-0" /> Automated data pipelines and quality checks</div>
              <div className="flex gap-3"><FileText className="h-5 w-5 shrink-0" /> Clear documentation, executive summaries, and stakeholder-facing outputs</div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect"
          description="I’m interested in roles and projects involving data analysis, BI, GIS, public datasets, and interactive reporting."
        />
        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-2xl px-5 py-6">
            <a href="mailto:souhaalioua2@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl px-5 py-6">
            <a href="https://github.com/aliouas" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink className="h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-2xl px-5 py-6">
            <a href="https://www.linkedin.com/in/souha-alioua/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink className="h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Souha Alioua. All rights reserved.</p>
          <p>Built with React, Tailwind, and practical data storytelling.</p>
        </div>
      </footer>
    </main>
  );
}

