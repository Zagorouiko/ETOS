import About from './components/About'
import Header from './components/Header'
import Carousel1 from './components/Carousel1'
import Carousel2 from './components/Carousel2'
import Footer from './components/Footer'
import CTA1 from './components/CTA1'
import CTA2 from './components/CTA2'
import OurClients from './components/OurClients'

export default function App() {
  return (
    <div className='w-full h-screen'>
      <Header />
      <About />
      <OurClients />
      <Carousel1 />
      <CTA1 />
      <Carousel2 />
      <CTA2 />
      <Footer />
    </div>
  )
}