"use client";

import React, { useState, useEffect } from "react";
import styles from "./resume.module.css";

const metadata = {
  title: "Sam Hendricksen | Resume",
};

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const resumeUrl = "/resume.pdf";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
              {isMobile ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2rem",
                    textAlign: "center",
                    background: "rgba(148,163,184,0.05)",
                  }}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{ marginBottom: "1rem", opacity: 0.5 }}
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                  <h3 style={{ marginBottom: "0.5rem" }}>Resume PDF</h3>
                  <p style={{ marginBottom: "1.5rem", opacity: 0.7 }}>
                    View or download the PDF below
                  </p>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primary}
                    style={{ marginBottom: "0.75rem" }}
                  >
                    Open PDF in New Tab
                  </a>
                </div>
              ) : (
                <iframe
                  src={resumeUrl}
                  title="Resume"
                  style={{ width: "100%", height: "100%", border: 0 }}
                />
              )}
            </div>

            <div style={{ marginTop: 12 }}>
              <a
                href={resumeUrl}
                download="Sam_Hendricksen_Resume.pdf"
                className={styles.primary}
              >
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

export default Page;
