import NavBar from './NavBar';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b8b5ff',
    },
    secondary: {
      main: '#1cef9e',
    },
    info: {
      main: '#43e9e1',
    },
    warning: {
      main: '#333',
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
        <div className={styles.main}>{children}</div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
