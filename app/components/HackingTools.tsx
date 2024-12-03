import { ShieldIcon } from 'lucide-react'

const hackingTools = [
  {
    name: "Port Scanner",
    description: "Scan for open ports on a target system or network.",
    link: "#"
  },
  {
    name: "Password Strength Checker",
    description: "Evaluate the strength of passwords against common attacks.",
    link: "#"
  },
  {
    name: "Network Traffic Analyzer",
    description: "Analyze and visualize network traffic patterns.",
    link: "#"
  },
]

export default function HackingTools() {
  return (
    <section id="hacking-tools" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Hacking Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackingTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-gray-700 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-in-bottom"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-4">
                <ShieldIcon className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">{tool.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <a 
                href={tool.link} 
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
              >
                Explore
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
