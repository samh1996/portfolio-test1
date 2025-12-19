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
                <object
                  data={`${resumeUrl}#view=FitH`}
                  type="application/pdf"
                  style={{ width: "100%", height: "100%", border: 0 }}
                  aria-label="Resume PDF"
                >
                  <embed
                    src={`${resumeUrl}#view=FitH`}
                    type="application/pdf"
                    style={{ width: "100%", height: "100%", border: 0 }}
                  />
                  <p style={{ padding: "2rem", textAlign: "center" }}>
                    Your browser doesn't support embedded PDFs.{" "}
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View PDF
                    </a>
                  </p>
                </object>
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
