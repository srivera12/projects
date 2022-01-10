import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
