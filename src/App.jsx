import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Produce from './components/Produce'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Produce />
      </main>
      <Footer />
    </div>
  )
}

export default App
