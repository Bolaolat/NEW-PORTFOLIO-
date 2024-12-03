import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import APIs from './components/APIs'
import GeneralTools from './components/GeneralTools'
import HackingTools from './components/HackingTools'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Projects />
        <APIs />
        <GeneralTools />
        <HackingTools />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

