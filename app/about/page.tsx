import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title: "Sam Hendricksen | About",
};

const SKILLS = [
  "Java",
  "Spring Boot",
  "Python",
  "FastAPI",
  "React / Next.js",
  "TypeScript",
  "PostgreSQL",
  "Kubernetes",
];

const Page = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>Sam Hendricksen</span> · About
        </div>
        <nav className={styles.links}>
          <a href="/projects">Projects</a>
          <a href="mailto:Samuel.h1996@yahoo.com">Email</a>
        </nav>
      </header>

      <main>
        <section className={styles.aboutGrid}>
          <aside className={styles.sidebar}>
            <div className={styles.profileWrap}>
              <div className={styles.profilePic} aria-hidden="true">
                <Image
                  src="/profile-pic-background.png"
                  alt="Sam Hendricksen"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="200px"
                />
              </div>
              <div className={styles.profileName}>Sam Hendricksen</div>
              <div className={styles.profileRole}>Software Engineer</div>
            </div>

            <div className={styles.skills}>
              <h4 className={styles.cardTag}>Skills</h4>
              <ul className={styles.skillsList}>
                {SKILLS.map((s) => (
                  <li key={s} className={styles.skillTag}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={styles.content}>
            <h1 className={styles.heroTitle}>About Me</h1>
            <p className={styles.heroSubtitle}>
              I build backend services and web apps while learning
              production-grade infrastructure. My focus is on reliable APIs,
              clean UX, and practical automation.
            </p>

            <div className={styles.aboutText}>
              <p>
                I enjoy building small teams' tooling and projects that help
                people ship faster. I work primarily with Java and Spring Boot
                for backend systems and Python for data/experimentation. On the
                frontend I use React / Next.js with TypeScript.
              </p>

              <p>
                Outside of coding I like learning about distributed systems,
                container orchestration, and exploring ways to make developer
                workflows smoother.
              </p>

              <div className={styles.cardActions}>
                <a className="btn primary" href="/resume">
                  View Resume
                </a>
                <a className="btn" href="/projects">
                  View Projects
                </a>
              </div>
            </div>
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

export default Page;
