import React from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  FileText,
  Globe2,
  Mail,
  MapPin,
  Workflow,
} from "lucide-react";

function Button({ variant = "primary", className = "", children }) {
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-950 hover:border-slate-950 hover:bg-slate-50"
      : "border border-slate-950 bg-slate-950 text-white hover:bg-slate-800";

  return React.cloneElement(children, {
    className: `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 ${styles} ${className} ${children.props.className || ""}`,
  });
}

const projects = [
  {
    number: "01",
    title: "Maryland Economic Data Explorer",
    type: "Professional work · Economic data product",
    description:
      "Developed an interactive web application for exploring GDP and personal income across Maryland, the United States, and counties, with both current-dollar and inflation-adjusted measures.",
    impact:
      "Turned complex BEA releases into a clearer, reusable tool for comparing geographies, trends, and year-over-year change.",
    tools: ["Python", "BEA API", "JavaScript", "HTML/CSS", "Data Validation"],
    links: [{ label: "Open explorer", href: "https://bea-a102ae.gitlab.io/" }],
  },
  {
    number: "02",
    title: "Economic Census Explorer",
    type: "Professional work · Public-data visualization",
    description:
      "Built a web-based comparison of Maryland's 2017 and 2022 Economic Census results, covering establishments, employment, payroll, and revenue across industries and counties.",
    impact:
      "Combined inflation adjustment, suppression-code handling, geographic comparison, downloadable data, and plain-language interpretation in one public-facing product.",
    tools: ["Python", "Census Data", "JavaScript", "Data Visualization", "QA/QC"],
    links: [
      { label: "Open explorer", href: "https://economic-census-205858.gitlab.io/" },
    ],
  },
  {
    number: "03",
    title: "Municipal Population Projections",
    type: "Professional work · Modeling and automation",
    description:
      "Automated population projections for 157 Maryland municipalities using historical estimates and county projections, including multi-county geographies and edge-case handling.",
    impact:
      "Evaluated more than 50,000 model runs across multiple projection methods and added validation checks to keep municipal results aligned with county-level controls.",
    tools: ["Python", "Pandas", "Forecasting", "Automation", "Quality Assurance"],
    links: [],
  },
  {
    number: "04",
    title: "Math Graduates and Career Outcomes",
    type: "Independent project · Labor-market analysis",
    description:
      "Analyzed where mathematics and statistics graduates live and work in the United States, with a focus on employment, wages, occupations, and geographic concentration.",
    impact:
      "Created a documented SQL and Python workflow and an interactive Tableau dashboard for state-level exploration.",
    tools: ["SQL", "Python", "Tableau", "IPUMS", "Data Storytelling"],
    links: [
      { label: "View code", href: "https://github.com/aliouas/math-graduates" },
      {
        label: "Open dashboard",
        href: "https://public.tableau.com/app/profile/souha.alioua/viz/MathGraduatesDashboard/Overview",
      },
    ],
  },
];

const skills = [
  {
    category: "Analysis & Engineering",
    icon: Database,
    items: ["Python", "Pandas", "NumPy", "SQL", "API pipelines", "Data validation"],
  },
  {
    category: "Visualization & BI",
    icon: BarChart3,
    items: ["Tableau", "Power BI", "Plotly", "JavaScript", "Dashboard design"],
  },
  {
    category: "GIS & Public Data",
    icon: MapPin,
    items: ["ArcGIS Pro", "ArcGIS Online", "Census", "ACS", "BEA", "BLS/QCEW"],
  },
  {
    category: "Delivery & Workflow",
    icon: Code2,
    items: ["Git/GitLab", "GitHub", "HTML/CSS", "Documentation", "Stakeholder communication"],
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group grid gap-6 border-t border-slate-300 py-9 md:grid-cols-[5rem_1fr] md:py-12">
      <p className="font-mono text-sm font-semibold text-slate-400" aria-hidden="true">
        {project.number}
      </p>
      <div>
        <p className="text-sm font-semibold text-blue-700">{project.type}</p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {project.title}
        </h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="leading-7 text-slate-650">{project.description}</p>
            <p className="mt-4 leading-7 text-slate-650">
              <span className="font-bold text-slate-950">Why it matters: </span>
              {project.impact}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-wrap gap-2" aria-label="Tools used">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {project.links.length > 0 ? (
                project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950"
                  >
                    {link.label} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))
              ) : (
                <span className="text-sm font-medium text-slate-500">Internal methodology project</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-[#f6f7f9] text-slate-900">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#f6f7f9]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Primary navigation">
          <a href="#home" className="text-base font-black tracking-tight text-slate-950">
            Souha Alioua
          </a>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-600 sm:gap-6">
            <a href="#projects" className="transition hover:text-slate-950">Work</a>
            <a href="#experience" className="hidden transition hover:text-slate-950 sm:block">Experience</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="max-w-5xl">
            <p className="eyebrow">Data analyst · Public data · Data products</p>
            <h1 className="mt-5 max-w-5xl text-4xl font-black leading-[1.04] tracking-[-0.04em] text-slate-950 sm:text-6xl md:text-7xl">
              I build reliable data workflows and interactive tools for real decisions.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              I’m Souha Alioua, a data analyst working across Python, SQL, GIS, and web visualization. I turn complex demographic and economic data into validated pipelines, accessible analysis, and public-facing data products.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button><a href="#projects">Explore my work <ArrowRight className="h-4 w-4" aria-hidden="true" /></a></Button>
              <Button variant="outline">
                <a href="/souha-portfolio/resume.pdf" target="_blank" rel="noreferrer">
                  <FileText className="h-4 w-4" aria-hidden="true" /> Resume
                </a>
              </Button>
              <Button variant="outline"><a href="#contact">Contact me</a></Button>
            </div>
          </div>

          <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
            <div className="bg-white p-6">
              <dt className="text-sm font-semibold text-slate-500">Municipalities modeled</dt>
              <dd className="mt-2 text-3xl font-black text-slate-950">157</dd>
            </div>
            <div className="bg-white p-6">
              <dt className="text-sm font-semibold text-slate-500">Projection runs evaluated</dt>
              <dd className="mt-2 text-3xl font-black text-slate-950">50,000+</dd>
            </div>
            <div className="bg-white p-6">
              <dt className="text-sm font-semibold text-slate-500">Core focus</dt>
              <dd className="mt-2 text-xl font-black text-slate-950">Data people can use</dd>
            </div>
          </dl>
        </section>

        <section id="projects" className="border-y border-slate-200 bg-white scroll-mt-20">
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <SectionHeader
              eyebrow="Selected work"
              title="Analysis that ends in something useful"
              description="A selection of professional and independent projects spanning public data, economic analysis, forecasting, automation, and interactive reporting."
            />
            <div>
              {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeader
            eyebrow="Capabilities"
            title="From raw data to finished product"
            description="My strongest work connects data acquisition, validation, analysis, visualization, and clear communication rather than treating them as separate steps."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.category} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black text-slate-950">{group.category}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="border-y border-slate-200 bg-slate-950 text-white scroll-mt-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
            <div>
              <p className="eyebrow text-slate-400">Experience</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Public-sector data work with practical stakes</h2>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-300">2025–Present</p>
              <h3 className="mt-3 text-2xl font-black">Planner I / Data Analyst</h3>
              <p className="mt-1 text-slate-400">Maryland Department of Planning · State Data & Analysis Center</p>
              <ul className="mt-6 space-y-4 leading-7 text-slate-300">
                <li className="flex gap-3"><Workflow className="mt-1 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />Build and maintain workflows for demographic, economic, ACS, and administrative data.</li>
                <li className="flex gap-3"><Globe2 className="mt-1 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />Develop maps, dashboards, web applications, and downloadable analytical products.</li>
                <li className="flex gap-3"><BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />Translate technical methods and results for planners, managers, and public audiences.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28 scroll-mt-20">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something useful"
            description="I’m interested in data analysis, BI, GIS and visualization, research analytics, data-product, and applied data-engineering opportunities."
          />
          <div className="flex flex-wrap gap-3">
            <Button><a href="mailto:souhaalioua2@gmail.com"><Mail className="h-4 w-4" aria-hidden="true" /> Email me</a></Button>
            <Button variant="outline"><a href="https://github.com/aliouas" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" aria-hidden="true" /> GitHub</a></Button>
            <Button variant="outline"><a href="https://www.linkedin.com/in/souha-alioua/" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" aria-hidden="true" /> LinkedIn</a></Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Souha Alioua</p>
          <p>Data analysis · GIS · Public data · Visualization</p>
        </div>
      </footer>
    </div>
  );
}

