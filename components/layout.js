import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import { useState } from 'react';

const name = 'Kunpriyaa';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const [activeTab, setActiveTab] = useState('Yourself Introduction');

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home && (
          <>
            <Image
              priority
              src="/images/Image.jpg"
              className={styles.profileImage}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={styles.heading}>{name}</h1>
          </>
        )}
      </header>

      <nav className={styles.nav}>
        <button
          className={`${styles.navButton} ${activeTab === 'Yourself Introduction' ? styles.activeButton : ''}`}
          onClick={() => setActiveTab('Yourself Introduction')}
        >
          Yourself Introduction
        </button>
        <button
          className={`${styles.navButton} ${activeTab === 'Skills' ? styles.activeButton : ''}`}
          onClick={() => setActiveTab('Skills')}
        >
          Skills
        </button>
        <button
          className={`${styles.navButton} ${activeTab === 'Figma Projects' ? styles.activeButton : ''}`}
          onClick={() => setActiveTab('Figma Projects')}
        >
          Figma Projects
        </button>
      </nav>

      <main className={styles.mainContent}>
        {activeTab === 'Yourself Introduction' && (
          <section>
            <h3>Yourself Introduction</h3>
            <p>
              <strong>Student ID:</strong> 66024974<br />
              <strong>Name:</strong> Miss Kunpriyaa Chaiyavong<br />
              <strong>Education:</strong> Currently studying at 
              <i> University of Phayao</i>, Faculty of 
              <strong> Information and Communication Technology</strong>, 
              Major in Software Engineering, 2nd Year<br />
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/kunpriyaa" target="_blank" rel="noopener noreferrer">
                https://github.com/kunpriyaa
              </a><br />
              <strong>Vercel:</strong>{' '}
              <a href="https://vercel.com/kunpriyaas-projects" target="_blank" rel="noopener noreferrer">
                https://vercel.com/kunpriyaas-projects
              </a>
            </p>
          </section>
        )}

        {activeTab === 'Skills' && (
          <section>
            <h3>Skills</h3>
            <ul className={styles.skillsList}>
              <li>
                <Image src="/images/javascript-icon.jpg" width={50} height={50} alt="JavaScript Icon" />
                <span>JavaScript</span>
                <div className={styles.skillBar} style={{ width: '50%' }}></div>
              </li>
              <li>
                <Image src="/images/next-js-logo.png" width={50} height={50} alt="Next.js Icon" />
                <span>Next.js</span>
                <div className={styles.skillBar} style={{ width: '40%' }}></div>
              </li>
              <li>
                <Image src="/images/database-mysql-icon.png" width={50} height={50} alt="MySQL Icon" />
                <span>MySQL</span>
                <div className={styles.skillBar} style={{ width: '60%' }}></div>
              </li>
              <li>
                <Image src="/images/figma.png" width={50} height={50} alt="Figma Icon" />
                <span>Figma</span>
                <div className={styles.skillBar} style={{ width: '75%' }}></div>
              </li>
            </ul>
          </section>
        )}

        {activeTab === 'Figma Projects' && (
          <section>
            <h3>My Figma Projects</h3>
            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <h4>Personal Portfolio</h4>
                <iframe
                  src="https://embed.figma.com/design/ai0Zr528lI8RsLZJcoYVrm/Personal-Portfolio"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title="Personal Portfolio"
                ></iframe>
              </div>
              <div className={styles.projectCard}>
                <h4>Selling Tree App</h4>
                <iframe
                  src="https://embed.figma.com/design/LSqOwVcMMqb9maLG0xSorA/Group-7-%3A-Selling-Tree"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title="Selling Tree App"
                ></iframe>
              </div>
              <div className={styles.projectCard}>
                <h4>Plant App Design</h4>
                <iframe
                  src="https://embed.figma.com/design/1u3qFyZeuFzwXUXSiyccjg/Plant-App-the-sill"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title="Plant App Design"
                ></iframe>
              </div>
              <div className={styles.projectCard}>
                <h4>Health App UI</h4>
                <iframe
                  src="https://embed.figma.com/design/5qg65RFgJymyTxKycIH5vf/%E0%B9%81%E0%B8%AD%E0%B8%9B%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%951"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  allowFullScreen
                  title="Health App UI"
                ></iframe>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
