import React from "react";
import styles from "./projects.module.css";

export const metadata = {
  title: "Sam Hendricksen | Portfolio",
};

const Projects = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>Sam Hendricksen</span> · Portfolio
        </div>
        <nav className={styles.links}>
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
          <h1 className={styles.heroTitle}>Projects &amp; Experiments</h1>
          <p className={styles.heroSubtitle}>
            A collection of things I’ve built while learning Java, Spring Boot,
            Python, and React. Click through to see the code or live demos.
          </p>

          <div className={styles.projectGrid}>
            <article className={styles.card}>
              <div className={styles.cardTag}>In Progress</div>
              <h2 className={styles.cardTitle}>NeighborShare</h2>
              <p className={styles.cardDesc}>
                Platform for neighbors to give away extra produce and animal
                products safely, with simple listings, messaging, and location
                search.
              </p>
              <div className={styles.tech}>
                Spring Boot · React/Next.js · PostgreSQL
              </div>
              <div className={styles.cardActions}>
                <a
                  className={`${styles.btn} ${styles.primary}`}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live (coming soon)
                </a>
                <a
                  className={styles.btn}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardTag}>Web App</div>
              <h2 className={styles.cardTitle}>Exam Scheduler</h2>
              <p className={styles.cardDesc}>
                Tool to schedule exams and avoid conflicts using a simple
                calendar UI and backend rules.
              </p>
              <div className={styles.tech}>
                React · Spring Boot · PostgreSQL
              </div>
              <div className={styles.cardActions}>
                <a
                  className={`${styles.btn} ${styles.primary}`}
                  href="https://your-exam-app-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  className={styles.btn}
                  href="https://github.com/your-username/exam-scheduler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardTag}>API</div>
              <h2 className={styles.cardTitle}>Match Predictor</h2>
              <p className={styles.cardDesc}>
                Simple stats-based API and UI for predicting football match
                outcomes using historical data.
              </p>
              <div className={styles.tech}>Python · scikit-learn · FastAPI</div>
              <div className={styles.cardActions}>
                <a
                  className={`${styles.btn} ${styles.primary}`}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  className={styles.btn}
                  href="https://github.com/your-username/match-predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className={styles.card}>
              <div className={styles.cardTag}>Utility</div>
              <h2 className={styles.cardTitle}>Portfolio Site</h2>
              <p className={styles.cardDesc}>
                This site itself – a lightweight portfolio to showcase projects
                and experiments as I learn.
              </p>
              <div className={styles.tech}>HTML · CSS · (future: Next.js)</div>
              <div className={styles.cardActions}>
                <a
                  className={`${styles.btn} ${styles.primary}`}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo
                </a>
                <a
                  className={styles.btn}
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

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Sam Hendricksen · Built while learning
        Spring Boot &amp; React
      </footer>
    </div>
  );
};

export default Projects;
