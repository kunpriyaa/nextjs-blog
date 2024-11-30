import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';

const name = 'Kunpriyaa';
export const siteTitle = 'Next.js Sample Website';

export default function Layout() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <Image
          src="/images/Image.jpg"
          alt={name}
          width={144}
          height={144}
          className={styles.profileImage}
        />
        <h1 className={styles.profileName}>{name}</h1>
      </header>
      <main>
        <div className={styles.toggleSection}>
          <button
            className={styles.toggleButton}
            onClick={() => toggleSection('introduction')}
          >
            Yourself Introduction
          </button>
          {activeSection === 'introduction' && (
            <div className={styles.sectionContent}>
              <p>
                <strong>Student ID:</strong> 66024974<br />
                <strong>Name:</strong> Miss Kunpriyaa Chaiyavong<br />
                <strong>Education:</strong> Currently studying at{' '}
                <i>University of Phayao</i>, Faculty of{' '}
                <strong>Information and Communication Technology</strong>, Major in Software
                Engineering, 2nd Year<br />
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/kunpriyaa" target="_blank" rel="noopener noreferrer">
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
            </div>
          )}
        </div>
        <div className={styles.toggleSection}>
          <button
            className={styles.toggleButton}
            onClick={() => toggleSection('skills')}
          >
            Skills
          </button>
          {activeSection === 'skills' && (
            <div className={styles.sectionContent}>
              <ul className={styles.skillsList}>
                <li>
                  <Image
                    src="/images/javascript-icon.jpg"
                    alt="JavaScript"
                    width={40}
                    height={40}
                  />
                  JavaScript
                </li>
                <li>
                  <Image
                    src="/images/next-js-logo.png"
                    alt="Next.js"
                    width={40}
                    height={40}
                  />
                  Next.js
                </li>
                <li>
                  <Image
                    src="/images/database-mysql-icon.png"
                    alt="MySQL"
                    width={40}
                    height={40}
                  />
                  MySQL
                </li>
                <li>
                  <Image src="/images/figma.png" alt="Figma" width={40} height={40} />
                  Figma
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
