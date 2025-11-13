import React from "react";
import { HashRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/*
  Advanced Interactive Digital Portfolio (Single-file React app)
  Design notes:
  - Modern minimal macOS-inspired glass (glassmorphism) aesthetic
  - SPA navigation with routes for each major section (Introduction, Resume, Projects, etc.)
  - Smooth animated transitions using framer-motion
  - Clickable nav buttons that navigate to routes (works like pages)
  - Placeholders marked clearly for photos, certificates, and project images
  - TailwindCSS utility classes are used for styling; please set up Tailwind in your project.

  How to use:
  1) Create a React app (Vite recommended):
     npm create vite@latest veer-portfolio -- --template react
     cd veer-portfolio
  2) Install dependencies:
     npm install react-router-dom framer-motion
  3) Install and set up Tailwind CSS (postcss + autoprefixer). Follow Tailwind docs for Vite.
  4) Replace src/App.jsx with this file's content, and ensure you import it in src/main.jsx.
  5) Add your assets in public/assets/ (avatar.jpg, cover-photo.jpg, projects/*, certificates/*)
  6) Run: npm run dev

  Optional: deploy to Vercel/Netlify. HashRouter keeps routes working on static hosting.
*/

// ---------- Utility Components ----------
const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/6 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl ${className}`}>
    {children}
  </div>
);

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.45 }}
  >
    <div className="px-6 py-8">{children}</div>
  </motion.div>
);

// ---------- Header / Navigation ----------
function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl overflow-hidden border border-white/12 bg-white/3">
            {/* PLACEHOLDER: Avatar - replace with /assets/avatar.jpg */}
            <img src="/assets/avatar.jpg" alt="Veer Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-white font-semibold text-lg">Veerbhadrasinh Jadeja</div>
            <div className="text-xs text-gray-300">B.Tech CSE • Pandit Deendayal Energy University</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-4">
          <NavButton to="#/">Home</NavButton>
          <NavButton to="#/intro">Introduction</NavButton>
          <NavButton to="#/resume">Resume</NavButton>
          <NavButton to="#/projects">Projects</NavButton>
          <NavButton to="#/skills">Skills</NavButton>
          <NavButton to="#/leadership">Leadership</NavButton>
          <NavButton to="#/ethics">Ethics</NavButton>
          <NavButton to="#/future">Aspirations</NavButton>
          <NavButton to="#/contact">Contact</NavButton>
        </nav>

        <div className="md:hidden">
          {/* Mobile quick nav - anchor links to sections on the same page (HashRouter handles) */}
          <details className="relative">
            <summary className="cursor-pointer p-2 rounded bg-white/6">Menu</summary>
            <div className="absolute right-0 mt-2 w-40 bg-white/6 rounded-lg p-3 border border-white/10 backdrop-blur-md">
              <MobileNav />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function NavButton({ to, children }) {
  return (
    <a
      href={to}
      className="text-sm px-3 py-2 rounded-lg text-gray-200 hover:text-white hover:bg-white/6 transition"
    >
      {children}
    </a>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col gap-2">
      {['#/', '#/intro', '#/resume', '#/projects', '#/skills', '#/leadership', '#/ethics', '#/future', '#/contact'].map((h) => (
        <a key={h} href={h} className="text-sm text-gray-200 block px-2 py-1 rounded hover:bg-white/6">{h.replace('#/','') || 'home'}</a>
      ))}
    </div>
  );
}

// ---------- Home / Hero ----------
function Home() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <motion.h1 className="text-4xl md:text-5xl font-extrabold text-white gradient-text">Veerbhadrasinh Jadeja</motion.h1>
          <p className="text-cyan-300 mt-2">Designing Ideas, Securing Systems, and Building Intelligent Futures.</p>
          <p className="mt-6 text-gray-300 max-w-2xl leading-relaxed">I’m a CSE student at PDEU — passionate about building meaningful digital products, crafting compelling visual communication, and securing user-centered systems. I combine creative design with solid engineering principles to deliver polished and responsible solutions.</p>

          <div className="mt-6 flex gap-3">
            <a href="#/projects" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold">Explore Projects</a>
            <a href="#/resume" className="px-4 py-2 rounded-lg border border-white/10 text-gray-200">View Resume</a>
          </div>

          <div className="mt-8 flex gap-4">
            <GlassCard className="w-44">
              <div className="text-xs text-gray-300">Education</div>
              <div className="font-semibold">B.Tech — Computer Science & Engineering</div>
              <div className="text-xs text-gray-400">PDEU (2022–2026)</div>
            </GlassCard>

            <GlassCard className="w-44">
              <div className="text-xs text-gray-300">Role</div>
              <div className="font-semibold">Head, Graphic Design — Encode Club</div>
              <div className="text-xs text-gray-400">Led design for 30+ events</div>
            </GlassCard>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="rounded-2xl overflow-hidden border border-white/8 shadow-xl bg-white/3">
            {/* PLACEHOLDER: cover-photo.jpg (portrait) */}
            <img src="/assets/cover-photo.jpg" alt="Cover" className="w-full h-96 object-cover" />
          </div>

          <div className="mt-4 text-sm text-gray-300">
            <div className="font-semibold">Contact</div>
            <div className="text-xs text-gray-400">your.email@domain.com</div>
            <div className="text-xs text-gray-400">Gandhinagar, India</div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// ---------- Introduction ----------
function Introduction() {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <GlassCard>
            <h2 className="text-2xl font-bold">Introduction & Learning Philosophy</h2>
            <p className="text-gray-300 mt-3">Hello — I’m Veerbhadrasinh Jadeja. My approach to learning combines curiosity, hands-on practice, and iterative design. I value clarity, interdisciplinary thinking, and ethical responsibility in technology.</p>
            <blockquote className="mt-4 text-cyan-200">“Learning is where imagination meets discipline — where ideas evolve into innovation.”</blockquote>
          </GlassCard>
        </div>

        <div>
          <GlassCard>
            <h3 className="font-semibold">Core Values</h3>
            <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
              <li>Curiosity & Experimentation</li>
              <li>Design + Engineering Integration</li>
              <li>Ethical & Accessible Systems</li>
            </ul>
          </GlassCard>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <GlassCard>
              <div className="text-xs text-gray-300">Favorite Tools</div>
              <div className="font-semibold">Figma, Canva, VS Code, GitHub</div>
            </GlassCard>

            <GlassCard>
              <div className="text-xs text-gray-300">Interests</div>
              <div className="font-semibold">Web Security, UI/UX, Data Viz</div>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

// ---------- Resume ----------
function Resume() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold">Resume / CV</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <GlassCard>
            <h4 className="font-semibold">Education</h4>
            <div className="mt-2 text-sm text-gray-300">B.Tech in Computer Science & Engineering — PDEU (2022–2026)</div>

            <hr className="my-4 border-white/6" />

            <h4 className="font-semibold">Contact</h4>
            <div className="mt-2 text-sm text-gray-300">Email: your.email@domain.com</div>
            <div className="text-sm text-gray-300">Location: Gandhinagar, India</div>

            <hr className="my-4 border-white/6" />

            <h4 className="font-semibold">Certifications</h4>
            <ul className="text-sm text-gray-300 mt-2 list-disc ml-5">
              <li>Game Development Certificate</li>
              <li>Web Security Workshop</li>
            </ul>
          </GlassCard>
        </div>

        <div className="md:col-span-2">
          <GlassCard>
            <h4 className="font-semibold">Work Experience</h4>
            <div className="mt-3 grid gap-4">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Head — Graphic Design, Encode Club</div>
                    <div className="text-xs text-gray-400">Duration: 1.5 years</div>
                  </div>
                  <div className="text-xs text-gray-400">Lead Designer</div>
                </div>
                <p className="text-sm text-gray-300 mt-2">Led design campaigns across academic and tech events, mentored juniors and set club design standards.</p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Design Head — Techpreneurship Times (CSE Newsletter)</div>
                    <div className="text-xs text-gray-400">Publication Lead</div>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-2">Managed layouts, visual consistency and publication timelines.</p>
              </div>
            </div>

            <hr className="my-4 border-white/6" />

            <h4 className="font-semibold">Skills</h4>
            <div className="mt-3 grid gap-3">
              {['C','C++','Python','HTML','CSS','JavaScript','React','MySQL','Git'].map((s) => (
                <div key={s} className="flex items-center justify-between text-sm">
                  <div>{s}</div>
                  <div className="w-48 bg-white/6 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${60 + Math.floor(Math.random()*30)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      <div className="mt-6">
        <GlassCard>
          <h4 className="font-semibold">Download Resume</h4>
          <p className="text-sm text-gray-300 mt-2">/* PLACEHOLDER: Add link to your resume PDF in public/assets/resume.pdf and replace the href below */</p>
          <a href="/assets/resume.pdf" download className="mt-3 inline-block px-4 py-2 rounded bg-gradient-to-r from-cyan-400 to-violet-500 text-black">Download Resume (PDF)</a>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}

// ---------- Projects ----------
function Projects() {
  const data = [
    {
      slug: 'shark',
      title: 'Shark Catalyst',
      subtitle: 'Interactive Analytics Platform',
      image: '/assets/projects/shark-catalyst.png', // PLACEHOLDER: replace
      objective: 'Build a platform to analyze Indian startup ecosystem data with interactive visualizations.',
      methodology: 'React + Recharts, Node APIs, modular components.',
      outcome: 'Real-time dashboards and exportable visual reports.'
    },
    {
      slug: 'bank',
      title: 'Bank Management System',
      subtitle: 'DBMS Project',
      image: '/assets/projects/bank-management.png',
      objective: 'Design and implement a normalized relational database for banking operations.',
      methodology: 'ER model, SQL schemas, role based access.',
      outcome: 'Secure and auditable transaction workflows.'
    },
    {
      slug: 'noval',
      title: 'Noval',
      subtitle: 'Experimental Programming Language',
      image: '/assets/projects/noval.png',
      objective: 'Design a beginner-friendly programming language with readable syntax.',
      methodology: 'Language spec, tokenizer prototypes, sample interpreter snippets.',
      outcome: 'Conceptual syntax and tutorial examples.'
    },
  ];

  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold">Interdisciplinary Projects</h2>
      <p className="text-gray-400 mt-2">Click any project to view full details.</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {data.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </PageWrapper>
  );
}

function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white/4 rounded-2xl p-4 border border-white/8">
      <div className="w-full h-40 rounded-md overflow-hidden bg-white/6">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-3 font-semibold text-white">{project.title}</h3>
      <div className="text-xs text-gray-400">{project.subtitle}</div>
      <p className="mt-2 text-sm text-gray-300 line-clamp-3">{project.objective}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={() => navigate(`/projects/${project.slug}`)} className="px-3 py-2 rounded bg-gradient-to-r from-cyan-400 to-violet-500 text-black">View</button>
        <a href={project.image} target="_blank" rel="noreferrer" className="px-3 py-2 rounded border border-white/8 text-sm text-gray-300">Open Image</a>
      </div>
    </motion.div>
  );
}

function ProjectDetail({ slug }) {
  const projects = {
    shark: {
      title: 'Shark Catalyst',
      image: '/assets/projects/shark-catalyst.png',
      objective: 'Build a platform to analyze Indian startup ecosystem data with interactive visualizations.',
      methodology: 'React frontend, Node.js APIs, Recharts for graphs, caching and pagination.',
      outcome: 'Interactive dashboards for trend analysis and CSV export.'
    },
    bank: {
      title: 'Bank Management System',
      image: '/assets/projects/bank-management.png',
      objective: 'Design a secure relational database for banking operations.',
      methodology: 'ER modelling, SQL schemas, transaction locking and RBAC.',
      outcome: 'Implemented audit-logged transaction flows and reporting.'
    },
    noval: {
      title: 'Noval',
      image: '/assets/projects/noval.png',
      objective: 'Design a readable and minimal programming language for learners.',
      methodology: 'Iterative syntax design and prototype interpreter.',
      outcome: 'Spec and sample programs to teach core programming ideas.'
    }
  };
  const p = projects[slug];
  if (!p) return <PageWrapper><GlassCard>Project not found.</GlassCard></PageWrapper>;

  return (
    <PageWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <GlassCard>
            <h2 className="text-2xl font-bold">{p.title}</h2>
            <div className="mt-3">
              <img src={p.image} alt={p.title} className="w-full h-80 object-cover rounded-md" />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Objective</h4>
                <p className="text-sm text-gray-300 mt-1">{p.objective}</p>
              </div>

              <div>
                <h4 className="font-semibold">Methodology</h4>
                <p className="text-sm text-gray-300 mt-1">{p.methodology}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Outcome & Impact</h4>
              <p className="text-sm text-gray-300 mt-1">{p.outcome}</p>
            </div>
          </GlassCard>
        </div>

        <div>
          <GlassCard>
            <h4 className="font-semibold">Challenges & Solutions</h4>
            <ul className="text-sm text-gray-300 mt-3 list-disc ml-5">
              <li>Data consistency and normalization — used preprocessing pipelines.</li>
              <li>Performance with large datasets — virtualization and memoization.</li>
              <li>Design cohesion — component-based layout and style tokens.</li>
            </ul>

            <div className="mt-4">
              <h4 className="font-semibold">Artifacts</h4>
              <p className="text-xs text-gray-400">/* PLACEHOLDER: Add links to project repo, demo video or certificates. */</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageWrapper>
  );
}

// ---------- Skills ----------
function Skills() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold">Advanced Skills & Mastery</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="">
          <h4 className="font-semibold">Technical</h4>
          <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
            <li>C++, Python, React, Node.js</li>
            <li>Web Security: RSA, Diffie-Hellman basics</li>
            <li>SQL, Data Visualization</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <h4 className="font-semibold">Creative</h4>
          <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
            <li>UI/UX Research, Poster Design, Brand Identity</li>
            <li>Figma workflows, Prototyping, High-fidelity mockups</li>
          </ul>
        </GlassCard>

        <GlassCard>
          <h4 className="font-semibold">Soft Skills</h4>
          <ul className="mt-3 text-sm text-gray-300 list-disc ml-5">
            <li>Leadership, Mentorship</li>
            <li>Communication & Teamwork</li>
            <li>Design critique and feedback cycles</li>
          </ul>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}

// ---------- Leadership ----------
function Leadership() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold">Collaborative & Leadership Experiences</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard>
          <h4 className="font-semibold">Encode Club — Head of Graphic Design</h4>
          <p className="text-sm text-gray-300 mt-2">Led a multidisciplinary team producing 30+ posters, event branding and social media assets. Trained new members and implemented a design system.</p>
        </GlassCard>

        <GlassCard>
          <h4 className="font-semibold">Techpreneurship Times — Design Head</h4>
          <p className="text-sm text-gray-300 mt-2">Managed layout, editorial coordination and publication timelines for the departmental newsletter.</p>
        </GlassCard>
      </div>

      <div className="mt-6">
        <GlassCard>
          <h4 className="font-semibold">Leadership Approach</h4>
          <p className="text-sm text-gray-300 mt-2">I practice supportive leadership — empowering teammates with ownership while keeping strong design standards and clear feedback channels.</p>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}

// ---------- Ethics / Global Awareness ----------
function Ethics() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold">Global Awareness & Ethical Considerations</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard>
          <h4 className="font-semibold">Ethical Technology</h4>
          <p className="text-sm text-gray-300 mt-2">I believe technology must be built with privacy, accessibility and fairness at the core. Design decisions should always reflect user dignity and agency.</p>
        </GlassCard>

        <GlassCard>
          <h4 className="font-semibold">Case Study: Encryption</h4>
          <p className="text-sm text-gray-300 mt-2">Studying RSA and Diffie-Hellman highlighted the ethical obligations when designing secure communications. Confidentiality must be balanced with transparency and responsible use.</p>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}

// ---------- Future Aspirations ----------
function Future() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold">Future Aspirations & Professional Development</h2>
      <div className="mt-6 bg-white/4 p-6 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Short-Term</h4>
          <p className="text-sm text-gray-300 mt-2">Master web dev & UI/UX, contribute to open-source security projects.</p>
        </div>
        <div>
          <h4 className="font-semibold">Mid-Term</h4>
          <p className="text-sm text-gray-300 mt-2">Work in design-tech or cybersecurity, publish research and refine product design skills.</p>
        </div>
        <div>
          <h4 className="font-semibold">Long-Term</h4>
          <p className="text-sm text-gray-300 mt-2">Launch a creative-tech startup merging AI, design and security.</p>
        </div>
      </div>

      <div className="mt-6">
        <GlassCard>
          <h4 className="font-semibold">Continuous Learning</h4>
          <p className="text-sm text-gray-300 mt-2">Hackathons, certifications, mentorship, and collaborative projects form the backbone of my learning plan.</p>
        </GlassCard>
      </div>
    </PageWrapper>
  );
}

// ---------- Conclusion / SWOT / Testimonials ----------
function Conclusion() {
  return (
    <PageWrapper>
      <h2 className="text-2xl font-bold">Conclusion & Self-Assessment</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard>
          <h4 className="font-semibold">Reflection</h4>
          <p className="text-sm text-gray-300 mt-2">This portfolio captures my growth as a learner, designer and engineer. My focus remains on crafting secure and aesthetic digital experiences that are accessible and ethical.</p>
        </GlassCard>

        <GlassCard>
          <h4 className="font-semibold">SWOT</h4>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="p-3 bg-white/3 rounded">Strengths: Creativity, Leadership</div>
            <div className="p-3 bg-white/3 rounded">Weaknesses: Overfocus on perfection</div>
            <div className="p-3 bg-white/3 rounded">Opportunities: Design-tech roles</div>
            <div className="p-3 bg-white/3 rounded">Threats: Rapid tech change</div>
          </div>
        </GlassCard>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Testimonials</h3>
        <div className="mt-3 grid md:grid-cols-3 gap-3">
          <GlassCard>
            "Veer consistently delivers creative and impactful design work. His leadership has elevated the Encode Club visual identity." — Faculty Mentor, PDEU
          </GlassCard>

          <GlassCard>
            "A dependable team player who brings energy and precision to projects." — Core Member, Encode Club
          </GlassCard>

          <GlassCard>
            "A rare combination of design intuition and technical expertise." — Editorial Team
          </GlassCard>
        </div>
      </div>
    </PageWrapper>
  );
}

// ---------- Contact / Footer ----------
function Contact() {
  return (
    <PageWrapper>
      <GlassCard>
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-sm text-gray-300 mt-2">Email: your.email@domain.com</p>
        <p className="text-sm text-gray-300">Location: Gandhinagar, India</p>
        <p className="text-xs text-gray-400 mt-3">/* PLACEHOLDER: Add links to GitHub, LinkedIn, and certifications */</p>
      </GlassCard>
    </PageWrapper>
  );
}

// ---------- Router + App ----------
function ProjectRouteWrapper() {
  // Simple dynamic route handling for /projects/:slug in a HashRouter environment
  const path = window.location.hash.replace('#/projects/','');
  if (!path) return <Projects />;
  return <ProjectDetail slug={path} />;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_#071427,_#000814)] text-white">
        <Header />

        <main className="pt-28 pb-16">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/intro" element={<Introduction />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectRouteWrapper />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/ethics" element={<Ethics />} />
              <Route path="/future" element={<Future />} />
              <Route path="/conclusion" element={<Conclusion />} />
              <Route path="/contact" element={<Contact />} />

              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/4 px-4 py-2 rounded-full border border-white/8 text-xs">
          © Veerbhadrasinh Jadeja — Digital Portfolio 2025
        </footer>
      </div>
    </Router>
  );
}
