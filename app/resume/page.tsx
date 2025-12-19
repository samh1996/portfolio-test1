"use client";

import React, { useState, useEffect } from "react";
import styles from "./resume.module.css";
import Image from "next/image";

const metadata = {
  title: "Sam Hendricksen | Resume",
};

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const resumeUrl = "/resume.pdf";
  const resumeImages = ["/resume-1.png", "/resume-2.png", "/resume-3.png"]; // Add more pages if multi-page

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
            {isMobile && (
              <div style={{ marginBottom: "1rem" }}>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primary}
                >
                  Open PDF in New Tab
                </a>
              </div>
            )}

            <div
              style={{
                height: isMobile ? "auto" : 820,
                borderRadius: 12,
                overflow: isMobile ? "visible" : "hidden",
                border: "1px solid rgba(148,163,184,0.12)",
              }}
            >
              {isMobile ? (
                <div style={{ padding: "1rem", background: "#fff" }}>
                  {resumeImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Resume page ${index + 1}`}
                      width={800}
                      height={1035}
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom:
                          index < resumeImages.length - 1 ? "1rem" : 0,
                      }}
                      priority={index === 0}
                    />
                  ))}
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
