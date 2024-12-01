import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from './layout.module.css';

const name = 'Kunpriyaa';
const siteTitle = 'Kunpriyaa Portfolio';

export default function Layout({ children }) {
  const [showSection, setShowSection] = useState('');

  const toggleSection = (section) => {
    setShowSection(showSection === section ? '' : section);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className={styles.header}>
        <Image
          priority
          src="/images/Image.jpg"
          className={styles.profileImage}
          height={144}
          width={144}
          alt={name}
        />
        <h1 className={styles.title}>{name}</h1>
      </header>

      {/* Toggle Buttons */}
      <div className={styles.toggleContainer}>
        <button
          className={styles.toggleButton}
          onClick={() => toggleSection('introduction')}
        >
          Yourself Introduction
        </button>
        <button
          className={styles.toggleButton}
          onClick={() => toggleSection('skills')}
        >
          Skills
        </button>
      </div>

      {/* Sections */}
      {showSection === 'introduction' && (
        <section className={styles.section}>
          <h2>Yourself Introduction</h2>
          <p>
            <strong>Student ID:</strong> 66024974<br />
            <strong>Name:</strong> Miss Kunpriyaa Chaiyavong<br />
            <strong>Education:</strong> Currently studying at 
            <i> University of Phayao</i>, Faculty of Information and Communication Technology, 
            Major in Software Engineering, 2nd Year<br />
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/kunpriyaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kunpriyaa
            </a>
            <br />
            <strong>Vercel:</strong>{' '}
            <a
              href="https://vercel.com/kunpriyaas-projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com/kunpriyaas-projects
            </a>
          </p>
        </section>
      )}

      {showSection === 'skills' && (
        <section className={styles.section}>
          <h2>Skills</h2>
          <div className={styles.skillItem}>
            <Image
              src="/images/javascript-icon.jpg"
              alt="JavaScript"
              width={50}
              height={50}
            />
            <span>JavaScript</span>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/images/next-js-logo.png"
              alt="Next.js"
              width={50}
              height={50}
            />
            <span>Next.js</span>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/images/database-mysql-icon.png"
              alt="MySQL"
              width={50}
              height={50}
            />
            <span>MySQL</span>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className={styles.skillItem}>
            <Image
              src="/images/figma.png"
              alt="Figma"
              width={50}
              height={50}
            />
            <span>Figma</span>
            <div className={styles.skillBar}>
              <div className={styles.skillLevel} style={{ width: '75%' }}></div>
            </div>
          </div>
        </section>
      )}

      {/* Figma Projects */}
      <section className={styles.projectsSection}>
        <h2>Figma Projects</h2>
        <div className={styles.projectsGrid}>
          <a
            href="https://embed.figma.com/project1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Project 1</h3>
            <p>Personal Portfolio Design</p>
          </a>
          <a
            href="https://embed.figma.com/project2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Project 2</h3>
            <p>Selling Tree App</p>
          </a>
          <a
            href="https://embed.figma.com/project3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Project 3</h3>
            <p>Plant Care App Design</p>
          </a>
          <a
            href="https://embed.figma.com/project4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h3>Project 4</h3>
            <p>Health App UI</p>
          </a>
        </div>
      </section>
    </div>
  );
}
