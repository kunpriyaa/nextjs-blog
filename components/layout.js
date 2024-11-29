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

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, window.FB has been populated`)
        }
      />

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

      <main className={styles.mainContent}>
        {children}

        {/* Your Figma Works */}
        <section className={styles.figmaWorks}>
          <h3>My Figma Designs</h3>
          
          <div className={styles.figmaEmbed}>
            <h4>Project 1</h4>
            <iframe 
              style="border: 1px solid rgba(0, 0, 0, 0.1);" 
              width="800" 
              height="450" 
              src="https://embed.figma.com/proto/6ikLfb0JnMkyE5yJAG1fbu/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%A3%E0%B8%A7%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F?node-id=3-1049&node-type=canvas&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A1049&share=1&embed-host=share" 
              allowfullscreen>
            </iframe>
          </div>

          <div className={styles.figmaEmbed}>
            <h4>Project 2</h4>
            <iframe 
              style="border: 1px solid rgba(0, 0, 0, 0.1);" 
              width="800" 
              height="450" 
              src="https://embed.figma.com/design/LSqOwVcMMqb9maLG0xSorA/Group-7-%3A-Selling-Tree?node-id=0-1&embed-host=share" 
              allowfullscreen>
            </iframe>
          </div>

          <div className={styles.figmaEmbed}>
            <h4>Project 3</h4>
            <iframe 
              style="border: 1px solid rgba(0, 0, 0, 0.1);" 
              width="800" 
              height="450" 
              src="https://embed.figma.com/design/1u3qFyZeuFzwXUXSiyccjg/Plant-App-the-sill?node-id=0-1&embed-host=share" 
              allowfullscreen>
            </iframe>
          </div>

          <div className={styles.figmaEmbed}>
            <h4>Project 4</h4>
            <iframe 
              style="border: 1px solid rgba(0, 0, 0, 0.1);" 
              width="800" 
              height="450" 
              src="https://embed.figma.com/design/5qg65RFgJymyTxKycIH5vf/%E0%B9%81%E0%B8%AD%E0%B8%9B%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%88%E0%B8%B4%E0%B8%951?node-id=0-1&embed-host=share" 
              allowfullscreen>
            </iframe>
          </div>

          <div className={styles.figmaEmbed}>
            <h4>Project 5</h4>
            <iframe 
              style="border: 1px solid rgba(0, 0, 0, 0.1);" 
              width="800" 
              height="450" 
              src="https://embed.figma.com/design/ai0Zr528lI8RsLZJcoYVrm/Plant-App-the-sill-66024974?embed-host=share" 
              allowfullscreen>
            </iframe>
          </div>
        </section>

      </main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
