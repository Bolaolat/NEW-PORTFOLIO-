import { GitlabIcon as GitHub, Linkedin, Twitter, Phone, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Hi, I'm <span className="text-blue-500 animate-pulse">BLUEDEMON</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay-1">
          Full-stack Developer | UI/UX Enthusiast | Open Source Contributor
        </p>
        <div className="flex flex-col items-center gap-6 animate-fade-in-delay-2">
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/BLUEXDEMONl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <GitHub size={24} />
            </a>
            <a href="https://linkedin.com/in/bluedemon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/bluedemon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Twitter size={24} />
            </a>
            <a href="https://wa.me/2347041039367" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
              <Phone size={24} />
            </a>
          </div>
          <a 
            href="https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-green-600 hover:scale-105 animate-bounce hover:animate-none"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span className="font-semibold">Join My WhatsApp Channel</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </a>
        </div>
      </div>
    </section>
  )
}

