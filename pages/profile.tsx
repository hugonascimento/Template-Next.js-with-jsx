import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Profile: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <h1>Profile</h1>
      </main>
    </div>
  );
};

export default Profile;
