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
              src="/images/Image.jpg"
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
                src="/images/Image.jpg"
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
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <Image src="/images/javascript-icon.jpg" alt="JavaScript" width={40} height={40} />
                <span>JavaScript</span>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar} style={{ width: '40%' }}></div>
              </div>
            </li>
            <li className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <Image src="/images/next-js-logo.png" alt="Next.js" width={40} height={40} />
                <span>Next.js</span>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar} style={{ width: '35%' }}></div>
              </div>
            </li>
            <li className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <Image src="/images/database-mysql-icon.png" alt="MySQL" width={40} height={40} />
                <span>MySQL</span>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar} style={{ width: '50%' }}></div>
              </div>
            </li>
            <li className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <Image src="/images/figma.png" alt="Figma" width={40} height={40} />
                <span>Figma</span>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar} style={{ width: '60%' }}></div>
              </div>
            </li>
          </ul>
        </section>

        {/* Figma Projects Section */}
        <section className={styles.projectsSection}>
          <h3>My Figma Projects</h3>
          <div className={styles.projectsGrid}>
            {/* Project 1 */}
            <div className={styles.projectItem}>
              <h4 className={styles.projectTitle}>Project 1: Personal Portfolio</h4>
              <p>A prototype for a personal portfolio design showcasing skills and projects.</p>
              <a
                className={styles.projectLink}
                href="https://embed.figma.com/proto/6ikLfb0JnMkyE5yJAG1fbu/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%A3%E0%B8%A7%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            {/* Add more projects */}
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
