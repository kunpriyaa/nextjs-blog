import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = '[Kunpriyaa]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      {/* Meta Tags */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Script Loading */}
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, window.FB has been populated`)
        }
      />

      {/* Header Section */}
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {children}
        {/* Yourself Introduction Section */}
        <section className={styles.personalInfo}>
          <h3>Yourself Introduction</h3>
          <p>
            <strong>Student ID:</strong> 66024974<br />
            <strong>Name:</strong> Miss Kunpriyaa Chaiyavong<br />
            <strong>Education:</strong> Currently studying at <i>University of Phayao</i>, 
            Faculty of <strong>Information and Communication Technology</strong>, 
            Major in Software Engineering, 2nd Year<br />
            <strong>GitHub:</strong> <a href="https://github.com/kunpriyaa" target="_blank" rel="noopener noreferrer">https://github.com/kunpriyaa</a><br />
            <strong>Vercel:</strong> <a href="https://vercel.com/kunpriyaas-projects" target="_blank" rel="noopener noreferrer">https://vercel.com/kunpriyaas-projects</a>
          </p>

          <h3>Skills</h3>
          <ul>
            <li>JavaScript, TypeScript</li>
            <li>React, Next.js</li>
            <li>Node.js, Express</li>
            <li>Database: MySQL, MongoDB</li>
            <li>Version Control: Git, GitHub</li>
          </ul>
        </section>

        {/* Figma Projects Section */}
        <section className={styles.projectsSection}>
          <h3>My Figma Projects</h3>
          <div className={styles.projectsGrid}>
            {/* Project 1 */}
            <div className={styles.projectItem}>
              <h4>Project 1</h4>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/proto/6ikLfb0JnMkyE5yJAG1fbu/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%A3%E0%B8%A7%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F?node-id=3-1049&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A1049&share=1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Project 2 */}
            <div className={styles.projectItem}>
              <h4>Project 2</h4>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/design/LSqOwVcMMqb9maLG0xSorA/Group-7-%3A-Selling-Tree?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Project 3 */}
            <div className={styles.projectItem}>
              <h4>Project 3</h4>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/design/1u3qFyZeuFzwXUXSiyccjg/Plant-App-the-sill?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Project 4 */}
            <div className={styles.projectItem}>
              <h4>Project 4</h4>
              <iframe
                className={styles.figmaFrame}
                src="https://embed.figma.com/design/5qg65RFgJymyTxKycIH5vf/%E0%B9%81%E0%B8%AD%E0%B8%9B%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%951?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
