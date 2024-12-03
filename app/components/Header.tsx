'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-500 animate-slide-in-left">BLUEDEMON TECH</a>
        <nav className="hidden md:flex space-x-6 animate-slide-in-right">
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#apis" className="hover:text-blue-500 transition-colors">APIs</a>
          <a href="#general-tools" className="hover:text-blue-500 transition-colors">General Tools</a>
          <a href="#hacking-tools" className="hover:text-blue-500 transition-colors">Hacking Tools</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </nav>
        <button className="md:hidden animate-fade-in" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center py-4 space-y-4 animate-slide-in-bottom">
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#apis" className="hover:text-blue-500 transition-colors">APIs</a>
          <a href="#general-tools" className="hover:text-blue-500 transition-colors">General Tools</a>
          <a href="#hacking-tools" className="hover:text-blue-500 transition-colors">Hacking Tools</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </nav>
      )}
    </header>
  )
}

