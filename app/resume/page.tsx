import React from "react";
import styles from "./resume.module.css";

export const metadata = {
  title: "Sam Hendricksen | Resume",
};

const page = () => {
  // OPTION A (recommended): put resume.pdf in /public and use "/resume.pdf"
  const resumeUrl = "/resume.pdf";

  // OPTION B (alternative): import the file from the repo (may require next config / d.ts)
  // import resumeUrl from "../projects/resume.pdf";

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>Sam Hendricksen</span> · Resume
        </div>
        <nav className={styles.links}>
          <a href="mailto:Samuel.h1996@yahoo.com">Email</a>
        </nav>
      </header>

      <main>
        <section>
          <div style={{ marginTop: "1rem" }}>
            <div
              style={{
                height: 820,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(148,163,184,0.12)",
              }}
            >
              <iframe
                src={resumeUrl}
                title="Resume"
                style={{ width: "100%", height: "100%", border: 0 }}
              />
            </div>

            <div style={{ marginTop: 12 }}>
              <a href={resumeUrl} download className={styles.primary}>
                Download PDF
              </a>
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

export default page;
