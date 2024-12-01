import styles from './layout.module.css';

export default function Layout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/public/images/Image.jpg" alt="Profile" className={styles.profileImage} />
        <h1>Kunpriyaa</h1>
      </header>

      <nav className={styles.nav}>
        <button onClick={() => showSection('intro')}>Yourself Introduction</button>
        <button onClick={() => showSection('skills')}>Skills</button>
        <button onClick={() => showSection('projects')}>Figma Projects</button>
      </nav>

      <main>
        <section id="intro" className={styles.hidden}>
          <h2>Yourself Introduction</h2>
          <p>Student ID: 66024974</p>
          <p>Name: Miss Kunpriyaa Chaiyavong</p>
          <p>
            Education: Currently studying at University of Phayao, Faculty of Information and
            Communication Technology, Major in Software Engineering, 2nd Year
          </p>
          <p>GitHub: <a href="https://github.com/kunpriyaa">kunpriyaa</a></p>
          <p>Vercel: <a href="https://vercel.com/kunpriyaas-projects">kunpriyaas-projects</a></p>
        </section>

        <section id="skills" className={styles.hidden}>
          <h2>Skills</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <img src="/public/images/javascript-icon.jpg" alt="JavaScript" />
              <span>JavaScript</span>
              <div className={styles.skillBar} style={{ width: '50%' }}></div>
            </div>
            <div className={styles.skill}>
              <img src="/public/images/next-js-logo.png" alt="Next.js" />
              <span>Next.js</span>
              <div className={styles.skillBar} style={{ width: '40%' }}></div>
            </div>
            <div className={styles.skill}>
              <img src="/public/images/database-mysql-icon.png" alt="MySQL" />
              <span>MySQL</span>
              <div className={styles.skillBar} style={{ width: '60%' }}></div>
            </div>
            <div className={styles.skill}>
              <img src="/public/images/figma.png" alt="Figma" />
              <span>Figma</span>
              <div className={styles.skillBar} style={{ width: '75%' }}></div>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.hidden}>
          <h2>Figma Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.card}>
              <h3>Project 1</h3>
              <p>Selling Tree App</p>
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="800"
                height="450"
                src="https://embed.figma.com/design/LSqOwVcMMqb9maLG0xSorA/Group-7-%3A-Selling-Tree?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.card}>
              <h3>Project 2</h3>
              <p>Personal Portfolio Design</p>
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="800"
                height="450"
                src="https://embed.figma.com/design/ai0Zr528lI8RsLZJcoYVrm/Plant-App-the-sill-66024974?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.card}>
              <h3>Project 3</h3>
              <p>Plant Care App Design</p>
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="800"
                height="450"
                src="https://embed.figma.com/design/ai0Zr528lI8RsLZJcoYVrm/Plant-App-the-sill-66024974?node-id=0-1&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.card}>
              <h3>Project 4</h3>
              <p>Health App Design</p>
              <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="800"
                height="450"
                src="https://embed.figma.com/design/5qg65RFgJymyTxKycIH5vf/%E0%B9%81%E0%B8%AD%E0%B8%9B%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%951?embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function showSection(id) {
  document.querySelectorAll('section').forEach((section) => {
    section.classList.add(styles.hidden);
  });
  document.getElementById(id).classList.remove(styles.hidden);
}
