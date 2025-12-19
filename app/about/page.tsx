import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export const metadata = {
  title: "Sam Hendricksen | About",
};

const SKILLS = {
  primary: ["Python", "Java", "PostgreSQL"],
  backend: ["AWS Lambda", "DynamoDB"],
};

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
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
              </div>
              <div className={styles.profileName}>Sam Hendricksen</div>
              <div className={styles.profileRole}>Software Engineer</div>
            </div>

            <div className={styles.skills}>
              <div className={styles.skillSection}>
                <p className={styles.skillLabel}>
                  Backend-first • AWS-native • Production systems
                </p>
              </div>

              <div className={styles.skillSection}>
                <h4 className={styles.skillCategory}>Primary</h4>
                <div className={styles.skillsList}>
                  {SKILLS.primary.map((s) => (
                    <span key={s} className={styles.skillTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.skillSection}>
                <h4 className={styles.skillCategory}>Backend & Platform</h4>
                <div className={styles.skillsList}>
                  {SKILLS.backend.map((s) => (
                    <span key={s} className={styles.skillTag}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className={styles.content}>
            <h1 className={styles.heroTitle}>About Me</h1>

            <div className={styles.aboutText}>
              <p>
                I'm a backend-focused software engineer building production
                systems and APIs with an emphasis on reliability, scalability,
                and developer tooling.
              </p>
              <p>
                On my current team, I work on data transfer and integration
                software, building and maintaining systems that support SFTP,
                HTTPS, BOX, and internal transfer workflows. My day-to-day work
                involves designing backend services, integrating APIs, and
                supporting event-driven, AWS-native architectures.
              </p>
              <p>
                I primarily work in <b>Python and Java</b>, using{" "}
                <b>Lambda-based microservices with PostgreSQL (RDS)</b> and{" "}
                <b>DynamoDB</b> for persistence. I enjoy building internal tools
                and automation that help teams ship faster, reduce operational
                friction, and improve confidence in backend changes.
              </p>
              <p>
                While backend development is my core focus, I also build
                lightweight frontend tools to support testing, validation, and
                operational visibility. Recently, I've been expanding into
                machine learning, earning my
                <b> AWS Machine Learning – Associate </b>
                certification and exploring ways to combine backend systems with
                ML-driven features.
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
        © {new Date().getFullYear()} Sam Hendricksen · Built with Next.js &amp;
        React
      </footer>
    </div>
  );
};

export default Page;
