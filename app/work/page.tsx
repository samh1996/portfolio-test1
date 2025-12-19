import React from "react";
import styles from "./work.module.css";
import Image from "next/image";

export const metadata = {
  title: "Sam Hendricksen | Work Experience",
};

const Page = () => {
  const workExperience = [
    {
      company: "Fannie Mae",
      role: "Senior Cloud Software Engineer",
      period: "Jan 2020 - Present",
      location: "Remote",
      description:
        "Building scalable backend services and APIs for enterprise clients. Leading development of microservices architecture.",
      highlights: [
        "Designed and implemented RESTful APIs using Spring Boot serving 10K+ daily requests",
        "Reduced API response time by 40% through database query optimization",
        "Mentored junior developers and conducted code reviews",
        "Deployed services to Kubernetes clusters with 99.9% uptime",
      ],
      technologies: ["Python", "Java", "PostgreSQL", "ECS", "Docker", "Lambda"],
    },
    {
      company: "Ten 56, Brand Developmenet",
      role: "Chick-Fil-A Cow",
      period: "2014-2015",
      location: "Event Locations",
      description:
        "Lived the life of the Chick-fil-A cow, promoting healthy eating habits and encouraging people to 'Eat Mor Chikin' through public appearances and events. This job is out of order but I'm keeping it for fun.",
      highlights: [
        "The Chick-fil-A Cow",
        "Silently judging you if you don't order chicken",
        "Hearing too many cow Jokes",
      ],
      technologies: ["Costume Fan", "Golf Cart", "Skateboard"],
      gif: "/skateboarding-cow.gif",
    },
    {
      company: "Previous Company",
      role: "Junior Developer",
      period: "Jun 2021 - Dec 2022",
      location: "City, State",
      description:
        "Developed web applications and contributed to full-stack projects using React and Node.js.",
      highlights: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Wrote comprehensive unit tests achieving 85% code coverage",
        "Participated in agile sprints and daily standups",
      ],
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>Sam Hendricksen</span> · Work Experience
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
          <h1 className={styles.heroTitle}>Work Experience</h1>
          <p className={styles.heroSubtitle}>
            A timeline of my professional journey, highlighting key projects and
            accomplishments in software development.
          </p>

          <div className={styles.workGrid}>
            {workExperience.map((job, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.leftContent}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.cardTitle}>{job.role}</h3>
                        <div className={styles.company}>{job.company}</div>
                      </div>
                      <div className={styles.meta}>
                        <div className={styles.period}>{job.period}</div>
                        <div className={styles.location}>{job.location}</div>
                      </div>
                    </div>

                    <p className={styles.cardDesc}>{job.description}</p>

                    <div className={styles.highlights}>
                      <h4 className={styles.highlightsTitle}>
                        Key Achievements
                      </h4>
                      <ul className={styles.highlightsList}>
                        {job.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className={styles.tech}>
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {job.gif && (
                    <div className={styles.gifContainer}>
                      <Image
                        src={job.gif}
                        alt={`${job.role} at ${job.company}`}
                        width={300}
                        height={400}
                        unoptimized
                        className={styles.gif}
                      />
                    </div>
                  )}
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
