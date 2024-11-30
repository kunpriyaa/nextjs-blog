import Image from 'next/image';
import styles from './layout.module.css';

export default function Layout() {
  return (
    <div className={styles.container}>
      {/* Yourself Introduction */}
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
          {/* JavaScript */}
          <li>
            <Image
              src="/images/javascript-icon.jpg"
              alt="JavaScript Icon"
              width={40}
              height={40}
            />
            <span>JavaScript</span>
            <div className={styles.skillBar}>
              <div className={styles.skillJavaScript}></div>
            </div>
          </li>

          {/* Next.js */}
          <li>
            <Image
              src="/images/next-js-logo.png"
              alt="Next.js Logo"
              width={40}
              height={40}
            />
            <span>Next.js</span>
            <div className={styles.skillBar}>
              <div className={styles.skillNextJs}></div>
            </div>
          </li>

          {/* MySQL */}
          <li>
            <Image
              src="/images/database-mysql-icon.png"
              alt="MySQL Icon"
              width={40}
              height={40}
            />
            <span>MySQL</span>
            <div className={styles.skillBar}>
              <div className={styles.skillMySQL}></div>
            </div>
          </li>

          {/* Figma */}
          <li>
            <Image
              src="/images/figma.png"
              alt="Figma Icon"
              width={40}
              height={40}
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
        <h2>Figma Projects</h2>
        <div className={styles.projectsGrid}>
          {/* Project 1 */}
          <div className={styles.projectCard}>
            <h3>Personal Portfolio</h3>
            <p>A prototype for a personal portfolio design showcasing skills and projects.</p>
            <a href="https://embed.figma.com/proto/6ikLfb0JnMkyE5yJAG1fbu" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          {/* Project 2 */}
          <div className={styles.projectCard}>
            <h3>Selling Tree App</h3>
            <p>An e-commerce platform for selling plants and gardening tools.</p>
            <a href="https://embed.figma.com/design/LSqOwVcMMqb9maLG0xSorA" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          {/* Project 3 */}
          <div className={styles.projectCard}>
            <h3>Plant App Design</h3>
            <p>An app designed to help users learn about and care for indoor plants.</p>
            <a href="https://embed.figma.com/design/1u3qFyZeuFzwXUXSiyccjg" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>

          {/* Project 4 */}
          <div className={styles.projectCard}>
            <h3>Health App UI</h3>
            <p>A conceptual design for a health and fitness tracking app.</p>
            <a href="https://embed.figma.com/design/5qg65RFgJymyTxKycIH5vf" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </section>
    </div>
  );
}
