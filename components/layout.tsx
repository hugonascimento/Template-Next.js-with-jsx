import { useRouter } from 'next/router';
import Navbar from './navbar';
import Footer from './footer';

export default function Layout({ children }: { children: any }) {
  /* Show Navbar only this links */
  const router = useRouter();
  const showHeader =
    router.pathname === '/protected' ||
    router.pathname === '/about' ||
    router.pathname === '/profile'
      ? true
      : false;

  return (
    <>
      {showHeader && <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}
