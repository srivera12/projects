import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import { useContext } from 'react'; 
import { IsMobileContext } from '../contexts/isMobileContext'; 
import styles from '../styles/Layout.module.css'; 
import Footer from './Footer'; 
import NavBar from './NavBar'; 

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
        root: { height: '100vh' }, 
        paper: { 
          backgroundColor: '#333', 
          color: '#b5b8ff', 
          fontSize: '30px', 
          '& p': { 
            fontSize: '20px', 
          }, 
        }, 
      }, 
    }, 
  }, 
}); 

type LayoutProps = { 
  children: React.ReactNode; 
}; 

export default function DashboardLayout({ children }: LayoutProps) { 
  const { isMobile } = useContext(IsMobileContext); 
  return ( 
    <div className={styles.layout}> 
      <ThemeProvider theme={theme}> 
        <NavBar /> 
        <div className={!isMobile ? styles.main : styles.mobileMain}>{children}</div> 
        {!isMobile ? <Footer /> : null} 
      </ThemeProvider> 
    </div> 
  ); 
} 
