import React from "react";
import styles from "./monopoly.module.css";

export const metadata = {
  title: "Sam Hendricksen | Monopoly",
};

const Page = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>Sam Hendricksen</span> · Monopoly
        </div>
        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/freelance">Freelance</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        <section>
          <h1 className={styles.heroTitle}>Monopoly</h1>
          <p className={styles.heroSubtitle}>
            Video submissions for the Monopoly project.
          </p>

          <div className={styles.videoSection}>
            <h2 className={styles.videoTitle}>Netlifx monopoly submission</h2>
            <div className={styles.videoWrapper}>
              <video className={styles.video} controls playsInline>
                <source src="/monopoly.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className={styles.videoSection}>
            <h2 className={styles.videoTitle}>Monopoly Villian version</h2>
            <div className={styles.videoWrapper}>
              <video className={styles.video} controls playsInline>
                <source src="/monopoly-goofy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
