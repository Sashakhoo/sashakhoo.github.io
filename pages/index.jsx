import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';


export default function HomePage() { 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.foreground}>
          <div className={styles.content}> 
            <div className={styles.centered}>
              <h1 className={styles.name}>Natasya Khoo</h1>
              <h6 className={styles.bio}>Junior Software Engineer</h6>
              <a href="resume.pdf" target='_blank' download>
                <button className={styles.outlined}>Resume</button>
              </a>
            </div>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}


