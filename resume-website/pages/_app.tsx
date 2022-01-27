import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { IsMobileProvider } from '../contexts/isMobileContext';

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
