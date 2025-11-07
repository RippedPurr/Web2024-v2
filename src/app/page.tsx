import Head from 'next/head';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AQUARIM</title>
        <meta name="description" content="AQUARIM Рыбный ресторан" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <AboutSection />
    </div>
  );
}