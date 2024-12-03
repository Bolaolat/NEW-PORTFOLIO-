import { CodeIcon } from 'lucide-react'

const apis = [
  {
    name: "POPCAT REST APIs",
    description: "Comprehensive fun APIs tools developed by popcat.",
    link: "https://popcat.xyz/api"
  },
  {
    name: "GIFTED REST APIs",
    description: "Comprehensive APIs tools developed by gifted.",
    link: "https://api.giftedtech.my.id/docs/"
  },
  {
    name: "MELIAN REST APIs",
    description: "Advance APIs tools developed by melian.",
    link: "https://popcat.xyz/api"
  },
]

export default function APIs() {
  return (
    <section id="apis" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">APIs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apis.map((api, index) => (
            <div 
              key={index} 
              className="bg-gray-700 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 animate-slide-in-bottom"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-4">
                <CodeIcon className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">{api.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{api.description}</p>
              <a 
                href={api.link} 
                className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
              >
                Check out 
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

