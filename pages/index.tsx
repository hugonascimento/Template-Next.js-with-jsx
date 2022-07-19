import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <p>Menu links only after login (login not implemented)</p>
        <p>Can test...</p>
        <Link href="/protected">
          <a>&rarr; Protected (is not protected) &larr;</a>
        </Link>
      </main>
    </div>
  );
};

export default IndexPage;
