import type { AppProps } from 'next/app'; 
import Layout from '../components/Layout'; 
import { IsMobileProvider } from '../contexts/isMobileContext'; 
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }: AppProps) { 
  return ( 
    <IsMobileProvider> 
      <Layout> 
        <Component {...pageProps} /> 
      </Layout> 
    </IsMobileProvider> 
  ); 
} 

export default MyApp; 
