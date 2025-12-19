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
      location: "Reston, VA (Remote)",
      description:
        "Designing and developing enterprise software solutions in Java and Python across secure, high-throughput systems. Leading automation initiatives, orchestration pipelines, and encryption modernization efforts.",
      highlights: [
        "Developed self-service onboarding automation tool reducing delivery time by ~20%",
        "Built Python/Flask migration dashboard to migrate 100+ applications",
        "Led enterprise-wide cipher modernization initiative aligned with compliance standards",
        "Architected decoupled orchestration workflows improving scalability and reliability",
        "Optimized PostgreSQL databases and scaled ECS-based tasks for distributed systems",
      ],
      technologies: [
        "Java",
        "Python",
        "PostgreSQL",
        "DynamoDB",
        "AWS Lambda",
        "ECS",
        "Docker",
        "Flask",
      ],
    },
    {
      company: "Ten 56, Brand Development",
      role: "Chick-fil-A Cow",
      period: "Sep 2014 - Aug 2015",
      location: "Yorktown, VA",
      description:
        "Lived the life of the Chick-fil-A cow, promoting healthy eating habits and encouraging people to 'Eat Mor Chikin' through public appearances and events. This job is out of order but I'm keeping it for fun.",
      highlights: [
        "The Chick-fil-A Cow",
        "Silently judging you if you don't order chicken",
        "Hearing too many cow jokes",
      ],
      technologies: ["Costume Fan", "Golf Cart", "Skateboard"],
      gif: "/skateboarding-cow.gif",
    },
    {
      company: "U.S. Coast Guard Reserve",
      role: "Marine Science Technician",
      period: "Aug 2015 - Jun 2021",
      location: "Norfolk, VA",
      description:
        "Applied federal compliance and security frameworks to operational procedures. Strengthened risk mitigation and multi-agency coordination while gaining hands-on experience in government-regulated operations.",
      highlights: [
        "Applied federal compliance frameworks (CFR) to operational procedures",
        "Strengthened risk mitigation and multi-agency coordination",
        "Gained experience in government-regulated operations and defense systems",
        "Held Secret Clearance during service",
      ],
      technologies: [
        "Federal Compliance",
        "Security Frameworks",
        "Risk Management",
      ],
    },
    {
      company: "nCino",
      role: "Software Developer Intern",
      period: "May 2019 - Aug 2019",
      location: "Wilmington, NC",
      description:
        "Built secure financial workflows and improved compliance features in data workflows for banking software solutions.",
      highlights: [
        "Developed secure financial workflows using Apex and AngularJS",
        "Enhanced compliance features in data workflows through JavaScript improvements",
        "Contributed to enterprise banking software solutions",
      ],
      technologies: ["Apex", "AngularJS", "JavaScript", "Salesforce"],
    },
    {
      company: "TrackOff",
      role: "UI Developer Intern",
      period: "May 2018 - Aug 2018",
      location: "Baltimore, MD",
      description:
        "Updated iOS application and integrated analytics pipelines to track user behavior and improve application transparency.",
      highlights: [
        "Updated iOS application with modern UI improvements",
        "Integrated analytics pipelines to track usage trends",
        "Redesigned UI for improved clarity and user transparency",
      ],
      technologies: ["iOS", "Swift", "Analytics", "UI/UX Design"],
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
            A timeline of my professional journey, from government service to
            enterprise software engineering, highlighting key projects and
            accomplishments.
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
                    <div className={styles.gifWrapper}>
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
                      <p className={styles.gifCaption}>Yes, that's really me</p>
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
