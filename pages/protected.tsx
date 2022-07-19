import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Protected: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <h1>Protected</h1>
      </main>
    </div>
  );
};

export default Protected;
