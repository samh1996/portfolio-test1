import React from "react";
import styles from "./freelance.module.css";
import Link from "next/link";

const Page = () => {
  const services = [
    {
      icon: "🌐",
      title: "Portfolio Websites",
      description:
        "Custom-built portfolio websites like the one you're viewing right now. Responsive design, modern UI/UX, and optimized for performance.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Custom Animations",
      ],
    },
    {
      icon: "🔒",
      title: "Secure SFTP File Transfers",
      description:
        "Set up secure file transfer protocols for your business. Automated backups, encrypted transfers, and reliable data management.",
      features: [
        "End-to-End Encryption",
        "Automated Backups",
        "User Management",
        "Access Logs",
      ],
    },
    {
      icon: "💼",
      title: "Full-Stack Web Applications",
      description:
        "Build complete web applications from frontend to backend. React, Next.js, Spring Boot, and database integration.",
      features: [
        "REST APIs",
        "Database Design",
        "Authentication",
        "Cloud Deployment",
      ],
    },
    {
      icon: "🔧",
      title: "Custom Development",
      description:
        "Have a unique project in mind? I can help bring your ideas to life with custom solutions tailored to your specific needs.",
      features: [
        "Consultation",
        "Custom Features",
        "Ongoing Support",
        "Code Documentation",
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>Sam Hendricksen</span> · Freelance Services
        </div>
        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/resume">Resume</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        <section>
          <h1 className={styles.heroTitle}>Freelance Services</h1>
          <p className={styles.heroSubtitle}>
            I offer professional web development services to help bring your
            ideas to life. From modern portfolio websites to secure backend
            systems, I've got you covered. Check out the services below and
            reach out to discuss your project.
          </p>

          <Link href="/contact" className={styles.ctaButton}>
            Contact Me
          </Link>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.icon}>{service.icon}</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
                <p className={styles.cardDesc}>{service.description}</p>
                <div className={styles.features}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} className={styles.feature}>
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
