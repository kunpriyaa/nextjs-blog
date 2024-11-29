// layout.js

import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';

const name = '[kunpriyaa-]';
export const siteTitle = 'Figma Project Showcase';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Showcase Figma Projects" />
        <meta property="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <header className={styles.header}>
        {home ? (
          <>
            <h1>{name}</h1>
            <p>Welcome to my Figma Project Showcase and Personal Introduction!</p>
          </>
        ) : (
          <>
            <Link href="/">
              <h1>{name}</h1>
            </Link>
          </>
        )}
      </header>

      <main className={styles.mainContent}>
        {/* Your Self Introduction Section */}
        <section className={styles.introduction}>
          <h2>Yourself Introduction</h2>
          <div className={styles.introContent}>
            <p><strong>Student ID:</strong> 66024974</p>
            <p><strong>Name:</strong> Miss Kunpriyaa Chaiyong</p>
            <p><strong>Education:</strong> Currently studying at the University of Phayao, Faculty of Information and Communication Technology, Software Engineering, Year 2</p>
          </div>
        </section>

        {/* Figma Project Showcase Section */}
        <section className={styles.projectsSection}>
          <h2>Figma Project Showcase</h2>

          <div className={styles.projectsGrid}>
            {/* Figma Project 1 */}
            <div className={styles.projectItem}>
              <h3>Project 1: Figma Design</h3>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/proto/6ikLfb0JnMkyE5yJAG1fbu/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%A3%E0%B8%A7%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F?node-id=3-1049&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A1049&share=1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Figma Project 2 */}
            <div className={styles.projectItem}>
              <h3>Project 2: Figma Design</h3>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/design/1u3qFyZeuFzwXUXSiyccjg/Plant-App-the-sill?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Figma Project 3 */}
            <div className={styles.projectItem}>
              <h3>Project 3: Figma Design</h3>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/design/5qg65RFgJymyTxKycIH5vf/%E0%B9%81%E0%B8%AD%E0%B8%9B%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%951?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Figma Project 4 */}
            <div className={styles.projectItem}>
              <h3>Project 4: Figma Design</h3>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/design/ai0Zr528lI8RsLZJcoYVrm/Plant-App-the-sill-66024974?embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
