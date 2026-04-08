import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Historia from './components/Historia.jsx'
import Cafes from './components/Cafes.jsx'
import Proceso from './components/Proceso.jsx'
import Experiencia from './components/Experiencia.jsx'
import Testimonios from './components/Testimonios.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Historia />
        <Cafes />
        <Proceso />
        <Experiencia />
        <Testimonios />
      </main>
      <Footer />
    </div>
  )
}
