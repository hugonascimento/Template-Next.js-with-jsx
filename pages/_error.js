import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
        <br />
        <p>
          {statusCode
            ? `Ocorreu um erro ${statusCode} no servidor`
            : 'Ocorreu um erro no cliente'}
        </p>
        <p>
          <Link href="/">Clique aqui para voltar para à Página Inicial</Link>
        </p>
      </main>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
