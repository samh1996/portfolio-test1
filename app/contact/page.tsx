"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

type Button = {
  text: string;
  onClick?: () => void;
  isButton?: boolean;
  link?: string;
  target?: string;
  download?: string;
};

type ContactMethod = {
  icon: string;
  title: string;
  description: string;
  value: string;
  buttons: Button[];
};

const Page = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("Samuel.h1996@yahoo.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownloadVCard = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Sam Hendricksen
N:Hendricksen;Sam;;;
TEL;TYPE=CELL:+17578143391
EMAIL:Samuel.h1996@yahoo.com
URL:https://github.com/samh1996
URL:https://www.linkedin.com/in/sam-hendricksen-340377135/
TITLE:Software Developer
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sam_Hendricksen.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: "📧",
      title: "Email",
      description: "Send me an email and I'll get back to you within 48 hours",
      value: "Samuel.h1996@yahoo.com",
      buttons: [
        {
          text: copied ? "Copied!" : "Copy Email",
          onClick: handleCopyEmail,
          isButton: true,
        },
        {
          text: "Open Mail App",
          link: "mailto:Samuel.h1996@yahoo.com",
          isButton: false,
        },
      ],
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect with me professionally on LinkedIn",
      value: "linkedin.com/in/samhendricksen",
      buttons: [
        {
          text: "View Profile",
          link: "https://www.linkedin.com/in/sam-hendricksen-340377135/",
          target: "_blank",
        },
      ],
    },
    {
      icon: "📱",
      title: "Phone",
      description: "Call or text me for quick communication",
      value: "+1 (757) 814-3391",
      buttons: [
        {
          text: "Call Now",
          link: "tel:+17578143391",
        },
        {
          text: "Add to Contacts",
          onClick: handleDownloadVCard,
          isButton: true,
        },
      ],
    },
    {
      icon: "💻",
      title: "GitHub",
      description: "Check out my code and open source contributions",
      value: "github.com/samhendricksen",
      buttons: [
        {
          text: "View GitHub",
          link: "https://github.com/samh1996",
          target: "_blank",
        },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span>Sam Hendricksen</span> · Contact
        </div>
        <nav className={styles.links}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/resume">Resume</a>
        </nav>
      </header>

      <main>
        <section>
          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  {method.icon} {method.title}
                </h3>
                <p className={styles.cardDesc}>{method.description}</p>
                <p className={styles.contactValue}>{method.value}</p>
                <div className={styles.cardActions}>
                  {method.buttons.map((button, btnIndex) =>
                    button.isButton ? (
                      <button
                        key={btnIndex}
                        onClick={button.onClick}
                        className={styles.primary}
                      >
                        {button.text}
                      </button>
                    ) : (
                      <a
                        key={btnIndex}
                        href={button.link}
                        target={button.target}
                        rel={button.target ? "noopener noreferrer" : undefined}
                        className={styles.primary}
                        download={button.download}
                      >
                        {button.text}
                      </a>
                    )
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
