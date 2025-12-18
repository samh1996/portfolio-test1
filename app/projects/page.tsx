import React from "react";

export const metadata = {
  title: "Sam Hendricksen | Portfolio",
};

const Projects = () => {
  return (
    <div className="page">
      <header>
        <div className="brand">
          <span>Sam Hendricksen</span> · Portfolio
        </div>
        <nav className="links">
          <a
            href="https://github.com/samh1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:Samuel.h1996@yahoo.com" rel="noopener noreferrer">
            Email
          </a>
        </nav>
      </header>

      <main>
        <section>
          <h1 className="hero-title">Projects &amp; Experiments</h1>
          <p className="hero-subtitle">
            A collection of things I’ve built while learning Java, Spring Boot,
            Python, and React. Click through to see the code or live demos.
          </p>

          <div className="project-grid">
            <article className="card">
              <div className="card-tag">In Progress</div>
              <h2 className="card-title">NeighborShare</h2>
              <p className="card-desc">
                Platform for neighbors to give away extra produce and animal
                products safely, with simple listings, messaging, and location
                search.
              </p>
              <div className="tech">
                Spring Boot · React/Next.js · PostgreSQL
              </div>
              <div className="card-actions">
                <a
                  className="btn primary"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live (coming soon)
                </a>
                <a
                  className="btn"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="card">
              <div className="card-tag">Web App</div>
              <h2 className="card-title">Exam Scheduler</h2>
              <p className="card-desc">
                Tool to schedule exams and avoid conflicts using a simple
                calendar UI and backend rules.
              </p>
              <div className="tech">React · Spring Boot · PostgreSQL</div>
              <div className="card-actions">
                <a
                  className="btn primary"
                  href="https://your-exam-app-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  className="btn"
                  href="https://github.com/your-username/exam-scheduler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="card">
              <div className="card-tag">API</div>
              <h2 className="card-title">Match Predictor</h2>
              <p className="card-desc">
                Simple stats-based API and UI for predicting football match
                outcomes using historical data.
              </p>
              <div className="tech">Python · scikit-learn · FastAPI</div>
              <div className="card-actions">
                <a
                  className="btn primary"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  className="btn"
                  href="https://github.com/your-username/match-predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="card">
              <div className="card-tag">Utility</div>
              <h2 className="card-title">Portfolio Site</h2>
              <p className="card-desc">
                This site itself – a lightweight portfolio to showcase projects
                and experiments as I learn.
              </p>
              <div className="tech">HTML · CSS · (future: Next.js)</div>
              <div className="card-actions">
                <a
                  className="btn primary"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
                <a
                  className="btn"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Sam Hendricksen · Built while learning
        Spring Boot &amp; React
      </footer>

      <style>{`
        :root {
          --bg: #050816;
          --bg-alt: #0b1020;
          --primary: #ffd166;
          --accent: #4cc9f0;
          --text: #f8f9ff;
          --muted: #a0a4c0;
          --card-radius: 18px;
          --shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        body { background: radial-gradient(circle at top, #151b3b 0, #050816 55%); color: var(--text); min-height: 100vh; display: flex; justify-content: center; }
        .page { width: 100%; max-width: 1100px; padding: 2.5rem 1.5rem 3rem; }
        header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .brand { font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.95rem; color: var(--muted); }
        .brand span { color: var(--primary); }
        .links a { color: var(--muted); text-decoration: none; font-size: 0.9rem; margin-left: 1rem; padding-bottom: 2px; border-bottom: 1px solid transparent; }
        .links a:hover { color: var(--text); border-bottom-color: var(--accent); }
        .hero-title { font-size: clamp(2rem, 3vw + 1.5rem, 2.8rem); font-weight: 700; margin-bottom: 0.5rem; }
        .hero-subtitle { color: var(--muted); max-width: 550px; font-size: 0.98rem; margin-bottom: 2rem; }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.4rem; }
        .card { background: linear-gradient(145deg, #111827, #020617); border-radius: var(--card-radius); padding: 1.2rem 1.1rem 1.1rem; box-shadow: var(--shadow); display: flex; flex-direction: column; position: relative; overflow: hidden; border: 1px solid rgba(148, 163, 184, 0.18); }
        .card-tag { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--muted); margin-bottom: 0.4rem; }
        .card-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.35rem; }
        .card-desc { font-size: 0.87rem; color: var(--muted); margin-bottom: 0.8rem; flex: 1; }
        .tech { font-size: 0.78rem; color: var(--accent); margin-bottom: 0.9rem; }
        .card-actions { display: flex; gap: 0.5rem; }
        .btn { flex: 1; text-align: center; font-size: 0.8rem; padding: 0.45rem 0.6rem; border-radius: 999px; border: 1px solid rgba(148, 163, 184, 0.6); color: var(--text); text-decoration: none; background: transparent; transition: background 0.15s ease, transform 0.08s ease, box-shadow 0.15s ease, border-color 0.15s ease; white-space: nowrap; }
        .btn:hover { background: rgba(148, 163, 184, 0.18); border-color: var(--accent); transform: translateY(-1px); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35); }
        .btn.primary { background: linear-gradient(135deg, var(--primary), #ff9f1c); color: #111827; border-color: transparent; font-weight: 600; }
        .btn.primary:hover { background: linear-gradient(135deg, #ffe08a, var(--primary)); }
        footer { margin-top: 2.5rem; font-size: 0.8rem; color: var(--muted); text-align: center; }
        @media (max-width: 600px) {
          header { flex-direction: column; align-items: flex-start; gap: 0.7rem; }
          .links { display: flex; flex-wrap: wrap; }
          .links a { margin-left: 0; margin-right: 0.9rem; margin-top: 0.15rem; }
        }
      `}</style>
    </div>
  );
};

export default Projects;
