import Head from 'next/head';
import Header from './components/Header';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import FoodSlider from './components/FoodSlider';
import FoodSlider2 from './components/FoodSlider2';

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
      <FoodSlider />

      <FoodSlider2 />
    </div>
  );
}