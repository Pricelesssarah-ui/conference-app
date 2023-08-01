import Navbar from '../app/components/Navbar'
import Head from 'next/head';
import Homepage from './components/Homepage';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';



export default function Home() {
  return (
    <>
      <Head>
        <title>Conference App</title>
      </Head>
      <Navbar />
      <Homepage />
      <About />
      <Speakers />
      <Schedule />
      <Workshop />
      <Contact />
      <Footer />
    </>
  )
}
