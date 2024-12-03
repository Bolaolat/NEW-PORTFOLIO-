import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

const projects = [
  {
    title: "BLUEXDEMON-V2",
    description: "A cutting-edge backend server for WhatsApp bots built with Nodejs.",
    image: "https://raw.githubusercontent.com/BLUEXDEMONl/BLUEXDEMON-BUG/refs/heads/master/database/image/bluexx.jpg",
    github: "https://github.com/BLUEXDEMONl/BLUEXDEMON-BUG.git",
    live: ""
  },
  {
    title: "BLUEXDEMON-V3",
    description: "An amplified version of V2 based on 100% Nodejs.",
    image: "https://raw.githubusercontent.com/BLUEXDEMONl/BLUEXDEMON-BUG-V3/refs/heads/master/database/image/xbug.jpg",
    github: "https://github.com/BLUEXDEMONl/BLUEXDEMON-BUG-V3.git",
    live: ""
  },
  {
    title: "BLUEXDEMON-V4",
    description: "More advance integrations and cool apis, built with Node.js.",
    image: "https://raw.githubusercontent.com/BLUEXDEMONl/BLUEXDEMON-V4/refs/heads/master/database/blueimages/bluex.jpg",
    github: "https://github.com/BLUEXDEMONl/BLUEXDEMON-V4.git",
    live: ""
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 animate-slide-in-bottom" style={{animationDelay: `${index * 0.2}s`}}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <GitHub size={20} className="mr-2" />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

