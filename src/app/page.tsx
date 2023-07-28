import Navbar from '../app/components/Navbar'
import Head from 'next/head';
import Homepage from './components/Homepage';
import Schedule from './components/Schedule';
import About from './components/About';
import Location from './components/Location';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Conference App</title>
      </Head>
      <Navbar />
      <Homepage />
      <Schedule />
      <About />
      <Location />
      <Workshop />
      <Contact />
      <Footer />
    </div>
  )
}
