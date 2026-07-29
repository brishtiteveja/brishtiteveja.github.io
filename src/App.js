import React from 'react';
import './App.css';

const scholarUrl =
  'https://scholar.google.com/scholar?q=%22Abdullah+Khan+Zehady%22';

const updates = [
  {
    date: '2026',
    type: 'Award',
    title:
      '8kEdu won the AITX Recursive Intelligence track and Best Use of NVIDIA Nemotron.',
    href: 'https://dev.perspectivity.co/8kedu/',
  },
  {
    date: 'Mar 2026',
    type: 'Publication',
    title:
      'BanglaLlama published at LoResLM 2026 with 224k open Bengali instruction samples.',
    href: 'https://aclanthology.org/2026.loreslm-1.7/',
  },
  {
    date: '2025',
    type: 'Publication',
    title:
      'Published the first diagnostic benchmark for political stance in Bangla news.',
    href: 'https://aclanthology.org/2025.banglalp-1.5/',
  },
  {
    date: '2025',
    type: 'Finalist',
    title:
      'Olympia Topology MCP Server placed Top 10 among 200+ teams in Cisco’s AI MCP Hackathon.',
  },
];

const work = [
  {
    index: '01',
    status: 'Founder & CEO',
    title: 'Perspectivity',
    description:
      'A multi-perspective intelligence platform that compares how sources frame the same story, surfaces bias, and helps readers think beyond a single narrative.',
    tags: ['AI agents', 'Media intelligence', 'Production systems'],
    links: [
      { label: 'Visit Perspectivity', href: 'https://perspectivity.co/' },
      {
        label: 'Research',
        href: 'https://perspectivity.co/research',
      },
    ],
    accent: 'blue',
  },
  {
    index: '02',
    status: 'Research lead',
    title: 'BanglaLLM',
    description:
      'Open models, datasets, and evaluation infrastructure for Bengali—bringing modern language technology to one of the world’s most widely spoken low-resource languages.',
    tags: ['BanglaLlama', 'Open source', 'Low-resource NLP'],
    links: [
      {
        label: 'Read the paper',
        href: 'https://aclanthology.org/2026.loreslm-1.7/',
      },
      {
        label: 'Hugging Face',
        href: 'https://huggingface.co/brishtiteveja',
      },
    ],
    accent: 'cyan',
  },
  {
    index: '03',
    status: 'AI research engineer',
    title: 'Reliable AI systems',
    description:
      'At Ciroos, I design model evaluations, root-cause-analysis benchmarks, and agentic investigation workflows for complex production systems.',
    tags: ['AI for SRE', 'Evaluation', 'Python & Rust'],
    links: [{ label: 'Visit Ciroos', href: 'https://ciroos.ai/' }],
    accent: 'violet',
  },
  {
    index: '04',
    status: 'Lead developer & researcher',
    title: 'TimeScale Creator',
    description:
      'Scientific software for exploring Earth history—connecting a database of 20,000+ geological events with interactive evolutionary-tree visualization.',
    tags: ['Scientific software', 'Data visualization', 'Earth history'],
    links: [
      {
        label: 'Published work',
        href: 'https://doi.org/10.1016/j.acags.2020.100037',
      },
      {
        label: 'PhD research',
        href: 'https://docs.lib.purdue.edu/dissertations/AAI30503868/',
      },
    ],
    accent: 'amber',
  },
];

const publications = [
  {
    year: '2026',
    area: 'Language models',
    title: 'BanglaLlama: LLaMA for Bangla Language',
    venue: 'LoResLM · Association for Computational Linguistics',
    href: 'https://aclanthology.org/2026.loreslm-1.7/',
    authors:
      'Abdullah Khan Zehady, Shubhashis Roy Dipta, Naymul Islam, Safi Al Mamun & Santu Karmaker',
    artifacts: [
      { label: 'ACL', href: 'https://aclanthology.org/2026.loreslm-1.7/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2410.21200' },
      { label: 'Models', href: 'https://huggingface.co/brishtiteveja' },
    ],
  },
  {
    year: '2025',
    area: 'Media bias',
    title:
      'Read Between the Lines: A Benchmark for Uncovering Political Bias in Bangla News Articles',
    venue: 'BanglaLP · Association for Computational Linguistics',
    href: 'https://aclanthology.org/2025.banglalp-1.5/',
    authors:
      'Nusrat Jahan Lia, Shubhashis Roy Dipta, Abdullah Khan Zehady, Naymul Islam, Madhusodan Chakraborty & Abdullah Al Wasif',
    artifacts: [
      { label: 'ACL', href: 'https://aclanthology.org/2025.banglalp-1.5/' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2510.03898' },
    ],
  },
  {
    year: '2020',
    area: 'Scientific software',
    title:
      'Visualization of Evolutionary Relationships Through Geologic Time in TimeScale Creator',
    venue: 'Applied Computing and Geosciences',
    href: 'https://doi.org/10.1016/j.acags.2020.100037',
    authors:
      'Abdullah Khan Zehady, James G. Ogg, Barry G. Fordham, Gangi Palem, Jason Bobick & Gabi M. Ogg',
    artifacts: [
      {
        label: 'DOI',
        href: 'https://doi.org/10.1016/j.acags.2020.100037',
      },
      {
        label: 'Thesis',
        href: 'https://docs.lib.purdue.edu/dissertations/AAI30503868/',
      },
    ],
  },
  {
    year: '2019',
    area: 'Evolutionary visualization',
    title:
      'Integrated Species–Phenon Trees: Visualizing Infraspecific Diversity Within Lineages',
    venue: 'Scientific Reports',
    href: 'https://doi.org/10.1038/s41598-019-55435-w',
    authors: 'Abdullah Khan Zehady, Barry G. Fordham & James G. Ogg',
    artifacts: [
      {
        label: 'Nature',
        href: 'https://doi.org/10.1038/s41598-019-55435-w',
      },
      {
        label: 'PubMed',
        href: 'https://pubmed.ncbi.nlm.nih.gov/31831804/',
      },
    ],
  },
  {
    year: '2018',
    area: 'Earth-history data',
    title:
      'Future-Proofing the Cenozoic Macroperforate Planktonic Foraminifera Phylogeny',
    venue: 'PLOS ONE',
    href: 'https://doi.org/10.1371/journal.pone.0204625',
    authors:
      'Barry G. Fordham, Tracy Aze, Christian Haller, Abdullah Khan Zehady, Paul N. Pearson, James G. Ogg & Bridget S. Wade',
    artifacts: [
      {
        label: 'PLOS ONE',
        href: 'https://doi.org/10.1371/journal.pone.0204625',
      },
    ],
  },
  {
    year: '2016',
    area: 'Natural-language processing',
    title:
      'Adapting Event Embedding for Implicit Discourse Relation Recognition',
    venue: 'CoNLL · Association for Computational Linguistics',
    href: 'https://aclanthology.org/K16-2019/',
    authors:
      'Maria Leonor Pacheco, I-Ta Lee, Xiao Zhang, Abdullah Khan Zehady, Pranjal Daga, Di Jin, Ayush Parolia & Dan Goldwasser',
    artifacts: [
      { label: 'ACL', href: 'https://aclanthology.org/K16-2019/' },
      { label: 'DOI', href: 'https://doi.org/10.18653/v1/K16-2019' },
    ],
  },
];

const recognition = [
  {
    value: '2× winner',
    label: 'AITX 2026',
    detail:
      'Recursive Intelligence and Best Use of NVIDIA Nemotron for 8kEdu.',
  },
  {
    value: 'Top 10',
    label: 'Cisco AI MCP Hackathon',
    detail:
      'Olympia Topology MCP Server, selected from more than 200 teams.',
  },
  {
    value: '224k',
    label: 'Bangla instructions',
    detail:
      'Two open instruction datasets introduced with the BanglaLlama research.',
  },
  {
    value: '20k+',
    label: 'Earth-history events',
    detail:
      'Scientific records made explorable through TimeScale Creator.',
  },
];

function ExternalLink({ href, children, className }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="external-mark" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Abdullah Khan Zehady, home">
        <span className="brand-mark">AZ</span>
        <span className="brand-name">Abdullah Khan Zehady</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a className="nav-link-secondary" href="#latest">
          Latest
        </a>
        <a href="#work">Work</a>
        <a href="#research">Research</a>
        <a className="nav-link-secondary" href="#about">
          About
        </a>
        <a className="nav-contact" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

function FieldMap() {
  return (
    <div
      className="field-map"
      role="img"
      aria-label="A map connecting Abdullah's work in AI systems, language, reliability, and science"
    >
      <div className="field-map-grid" aria-hidden="true" />
      <div className="map-meta">
        <span>FIELD MAP</span>
        <span>04 DOMAINS / ONE THROUGH-LINE</span>
      </div>

      <div className="map-orbit map-orbit-outer" aria-hidden="true" />
      <div className="map-orbit map-orbit-inner" aria-hidden="true" />
      <span className="map-connector connector-one" aria-hidden="true" />
      <span className="map-connector connector-two" aria-hidden="true" />
      <span className="map-connector connector-three" aria-hidden="true" />
      <span className="map-connector connector-four" aria-hidden="true" />

      <div className="map-center">
        <span>I make complex systems</span>
        <strong>legible.</strong>
      </div>

      <div className="map-node node-ai">
        <span>01</span>
        <strong>AI systems</strong>
      </div>
      <div className="map-node node-language">
        <span>02</span>
        <strong>Language</strong>
      </div>
      <div className="map-node node-reliability">
        <span>03</span>
        <strong>Reliability</strong>
      </div>
      <div className="map-node node-science">
        <span>04</span>
        <strong>Science</strong>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">AI research engineer · founder · systems builder</p>
          <h1 id="hero-title">
            I build AI systems that make complex worlds{' '}
            <span className="ink-underline">legible.</span>
          </h1>
          <p className="hero-lede">
            I’m Abdullah Khan Zehady (Andy), founder of Perspectivity and an AI
            Research Engineer at Ciroos. My work spans multilingual language
            models, AI for production systems, and scientific visualization.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work
              <span aria-hidden="true">↓</span>
            </a>
            <ExternalLink
              className="button button-secondary"
              href={scholarUrl}
            >
              Google Scholar
            </ExternalLink>
          </div>
          <div className="hero-proof" aria-label="Current roles and education">
            <div>
              <span>Now</span>
              <strong>Perspectivity · Ciroos</strong>
            </div>
            <div>
              <span>Previously</span>
              <strong>Cisco · Purdue</strong>
            </div>
            <div>
              <span>Education</span>
              <strong>PhD · MS · BEng</strong>
            </div>
          </div>
        </div>
        <FieldMap />
      </section>
    </main>
  );
}

function Latest() {
  return (
    <section
      className="section latest-section"
      id="latest"
      aria-labelledby="latest-title"
    >
      <div className="latest-heading">
        <p className="section-kicker">Latest</p>
        <h2 id="latest-title">Recent signals.</h2>
        <p>
          Publications, awards, and shipped work—kept compact so the current
          chapter is visible without turning the portfolio into a feed.
        </p>
      </div>
      <div className="update-list">
        {updates.map((update) => {
          const content = (
            <React.Fragment>
              <span className="update-date">{update.date}</span>
              <span className="update-type">{update.type}</span>
              <strong>{update.title}</strong>
              {update.href && (
                <span className="external-mark" aria-hidden="true">
                  ↗
                </span>
              )}
            </React.Fragment>
          );

          if (update.href) {
            return (
              <a
                className="update-row"
                href={update.href}
                target="_blank"
                rel="noopener noreferrer"
                key={update.title}
              >
                {content}
              </a>
            );
          }

          return (
            <div className="update-row" key={update.title}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-kicker">Selected work</p>
        <h2 id="work-title">Research that ships.</h2>
        <p>
          From open models to production infrastructure, I build the full
          system—data, evaluation, agents, interfaces, and deployment.
        </p>
      </div>
      <div className="work-grid">
        {work.map((item) => (
          <article className={`work-card accent-${item.accent}`} key={item.title}>
            <div className="work-card-topline">
              <span className="work-index">{item.index}</span>
              <span className="work-status">{item.status}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul className="tag-list" aria-label={`${item.title} capabilities`}>
              {item.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="card-links">
              {item.links.map((link) => (
                <ExternalLink href={link.href} key={link.label}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section
      className="section recognition-section"
      aria-labelledby="recognition-title"
    >
      <div className="section-heading section-heading-light">
        <p className="section-kicker">Selected signals</p>
        <h2 id="recognition-title">Evidence over adjectives.</h2>
      </div>
      <div className="recognition-grid">
        {recognition.map((item) => (
          <article className="recognition-item" key={item.label}>
            <strong>{item.value}</strong>
            <h3>{item.label}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      <ExternalLink
        className="winner-link"
        href="https://dev.perspectivity.co/8kedu/"
      >
        See the award-winning 8kEdu project
      </ExternalLink>
    </section>
  );
}

function Research() {
  return (
    <section
      className="section research-section"
      id="research"
      aria-labelledby="research-title"
    >
      <div className="research-intro">
        <div className="section-heading">
          <p className="section-kicker">Peer-reviewed research</p>
          <h2 id="research-title">Across language and deep time.</h2>
        </div>
        <p>
          My research began with natural-language understanding and Earth-history
          visualization. It now includes open Bengali language models and the
          first diagnostic benchmarks for political stance in Bangla news.
        </p>
        <div className="profile-links">
          <ExternalLink href={scholarUrl}>Google Scholar</ExternalLink>
          <ExternalLink href="https://aclanthology.org/people/abdullah-khan-zehady/">
            ACL Anthology
          </ExternalLink>
          <ExternalLink href="https://orcid.org/0000-0002-2905-2598">
            ORCID
          </ExternalLink>
        </div>
      </div>
      <div className="publication-list">
        {publications.map((publication) => (
          <article className="publication" key={publication.title}>
            <div className="publication-rail">
              <span className="publication-year">{publication.year}</span>
              <span className="publication-area">{publication.area}</span>
            </div>
            <div className="publication-copy">
              <ExternalLink
                className="publication-title"
                href={publication.href}
              >
                {publication.title}
              </ExternalLink>
              <span className="publication-authors">{publication.authors}</span>
              <span className="publication-venue">{publication.venue}</span>
              <div
                className="publication-artifacts"
                aria-label={`${publication.title} links`}
              >
                {publication.artifacts.map((artifact) => (
                  <ExternalLink
                    href={artifact.href}
                    key={artifact.label}
                    className="artifact-link"
                  >
                    {artifact.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Career() {
  return (
    <section className="section career-section" aria-labelledby="career-title">
      <div className="section-heading">
        <p className="section-kicker">Career</p>
        <h2 id="career-title">A builder across disciplines.</h2>
      </div>
      <div className="career-track">
        <article className="career-entry is-current">
          <div className="career-date">2025—now</div>
          <div>
            <p className="career-org">Ciroos · Perspectivity</p>
            <h3>AI Research Engineer · Founder & CEO</h3>
            <p>
              Building agentic investigation systems for reliability while
              leading a multi-perspective intelligence product from architecture
              through production.
            </p>
          </div>
        </article>
        <article className="career-entry">
          <div className="career-date">2020—2025</div>
          <div>
            <p className="career-org">Cisco</p>
            <h3>Research Software Engineer</h3>
            <p>
              Built graph- and Kafka-based security analytics, hybrid-cloud
              control systems, Kubernetes observability services, authorization
              infrastructure, and natural-language interfaces for networking.
            </p>
          </div>
        </article>
        <article className="career-entry">
          <div className="career-date">2014—2020</div>
          <div>
            <p className="career-org">Purdue University · TimeScale Creator</p>
            <h3>Researcher · Lead developer</h3>
            <p>
              Connected computer science and geoscience through published
              software, data mining, evolutionary visualization, and a PhD in
              computational Earth science.
            </p>
          </div>
        </article>
        <article className="career-entry">
          <div className="career-date">Japan</div>
          <div>
            <p className="career-org">Osaka University · GREE · Rakuten</p>
            <h3>Computer science foundation</h3>
            <p>
              Studied computer science and engineering, researched network data,
              and built production software across gaming and web platforms.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-statement">
        <p className="section-kicker">About</p>
        <h2 id="about-title">
          The domain changes.
          <br />
          The question stays the same.
        </h2>
      </div>
      <div className="about-copy">
        <p className="about-lede">
          How do we turn a system too large for one person to hold in their head
          into something they can explore, question, and trust?
        </p>
        <p>
          That question has taken me from Bangladesh to Japan, from computer
          science to Earth science, and from enterprise infrastructure to
          multilingual AI. I’m happiest at the boundary between research and
          product—where a strong idea has to survive real data, real users, and
          real constraints.
        </p>
        <div className="education-list">
          <div>
            <span>PhD</span>
            <strong>Computational Earth Science</strong>
            <small>Purdue University</small>
          </div>
          <div>
            <span>MS</span>
            <strong>Computer Science</strong>
            <small>Purdue University</small>
          </div>
          <div>
            <span>BEng</span>
            <strong>Computer Science & Engineering</strong>
            <small>Osaka University</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <p className="section-kicker">Let’s compare notes</p>
        <h2>Working on a hard system?</h2>
        <p>
          I’m always interested in thoughtful conversations about multilingual
          AI, agent evaluation, information systems, and ambitious technical
          products.
        </p>
        <a className="button footer-button" href="mailto:brishtiteveja@gmail.com">
          brishtiteveja@gmail.com
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="footer-links">
        <ExternalLink href="https://www.linkedin.com/in/abdullah-khan-zehady-915ba024">
          LinkedIn
        </ExternalLink>
        <ExternalLink href="https://github.com/brishtiteveja">
          GitHub
        </ExternalLink>
        <ExternalLink href={scholarUrl}>Google Scholar</ExternalLink>
        <ExternalLink href="https://x.com/brishtiteveja">X / Twitter</ExternalLink>
      </div>
      <div className="footer-meta">
        <span>Abdullah Khan Zehady</span>
        <span>© {new Date().getFullYear()} · Austin, Texas</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>
      <Header />
      <Hero />
      <Latest />
      <Work />
      <Recognition />
      <Research />
      <Career />
      <About />
      <Footer />
    </div>
  );
}

export default App;
