import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <title>Kunpriyaa's Portfolio</title>
      </Head>

      <header className={styles.header}>
        <Image
          priority
          src="/images/Image.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="Kunpriyaa"
        />
        <h1 className={utilStyles.heading2Xl}>Kunpriyaa's Portfolio</h1>
      </header>

      <main>
        {/* Yourself Introduction Section */}
        <section className={styles.personalInfo}>
          <h2>Yourself Introduction</h2>
          <p>
            <strong>Student ID:</strong> 66024974<br />
            <strong>Name:</strong> Miss Kunpriyaa Chaiyavong<br />
            <strong>Education:</strong> Currently studying at <i>University of Phayao</i>, 
            Faculty of <strong>Information and Communication Technology</strong>, 
            Major in Software Engineering, 2nd Year<br />
            <strong>GitHub:</strong> <a href="https://github.com/kunpriyaa" target="_blank" rel="noopener noreferrer">https://github.com/kunpriyaa</a><br />
            <strong>Vercel:</strong> <a href="https://vercel.com/kunpriyaas-projects" target="_blank" rel="noopener noreferrer">https://vercel.com/kunpriyaas-projects</a>
          </p>
        </section>

        {/* Skills Section */}
        <section className={styles.skillsSection}>
          <h2>Skills</h2>
          <ul>
            <li>
              <Image
                src="/images/javascript-icon.jpg"
                alt="JavaScript Icon"
                width={20}
                height={20}
              />
              <span>JavaScript</span>
              <div className={styles.skillBar}>
                <div className={styles.skillJavaScript}></div>
              </div>
            </li>
            <li>
              <Image
                src="/images/next-js-logo.png"
                alt="Next.js Logo"
                width={20}
                height={20}
              />
              <span>Next.js</span>
              <div className={styles.skillBar}>
                <div className={styles.skillNextJs}></div>
              </div>
            </li>
            <li>
              <Image
                src="/images/database-mysql-icon.png"
                alt="MySQL Icon"
                width={20}
                height={20}
              />
              <span>MySQL</span>
              <div className={styles.skillBar}>
                <div className={styles.skillMySQL}></div>
              </div>
            </li>
            <li>
              <Image
                src="/images/figma.png"
                alt="Figma Icon"
                width={20}
                height={20}
              />
              <span>Figma</span>
              <div className={styles.skillBar}>
                <div className={styles.skillFigma}></div>
              </div>
            </li>
          </ul>
        </section>

        {/* Figma Projects Section */}
        <section className={styles.projectsSection}>
          <h2>My Figma Projects</h2>
          <div className={styles.projectsGrid}>
            {/* Project 1 */}
            <div className={styles.projectCard}>
              <h3>Project 1: Personal Portfolio</h3>
              <p>A prototype for a personal portfolio design showcasing skills and projects.</p>
              <a
                href="https://embed.figma.com/proto/6ikLfb0JnMkyE5yJAG1fbu"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className={styles.projectCard}>
              <h3>Project 2: Selling Tree App</h3>
              <p>An e-commerce platform for selling plants and gardening tools.</p>
              <a
                href="https://embed.figma.com/design/LSqOwVcMMqb9maLG0xSorA"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            {/* Project 3 */}
            <div className={styles.projectCard}>
              <h3>Project 3: Plant App Design</h3>
              <p>An app designed to help users learn about and care for indoor plants.</p>
              <a
                href="https://embed.figma.com/design/1u3qFyZeuFzwXUXSiyccjg"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>

            {/* Project 4 */}
            <div className={styles.projectCard}>
              <h3>Project 4: Health App UI</h3>
              <p>A conceptual design for a health and fitness tracking app.</p>
              <a
                href="https://embed.figma.com/design/5qg65RFgJymyTxKycIH5vf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
