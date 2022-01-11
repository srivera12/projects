import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/layout.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b8b5ff',
    },
    secondary: {
      main: '#1cef9e',
    },
  },
});

type LayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}