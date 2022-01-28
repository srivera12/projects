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
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#333',
          color: '#ddd',
          borderRadius: '10px',
          '& hr': {
            color: '#43e9e1',
            borderColor: '#43e9e1',
          },
          '& h2, h3': {
            color: '#b5b8ff',
            '& p': {
              color: '#ddd',
              width: '100%',
            },
            '& svg': {
              color: '#43e9e1',
              marginRight: '10px',
            },
          },
          '& h4': {
            color: '#43e9e1',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: { width: 400 },
        paper: {
          backgroundColor: '#333',
          color: '#b5b8ff',
          fontSize: '30px',
        },
      },
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
