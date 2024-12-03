const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "GraphQL", "MongoDB", "PostgreSQL", "Docker", "Git"
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 rounded-full px-4 py-2 text-blue-400 animate-slide-in-bottom hover:bg-blue-500 hover:text-white transition-colors duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

