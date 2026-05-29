function TechStack() {

const tech = [
  { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" },
  { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30" },
  { name: "Tailwind", color: "bg-sky-500/10 text-sky-400 border-sky-500/30" },
  { name: "Git", color: "bg-orange-500/10 text-orange-400 border-orange-500/30" },
  { name: "GitHub", color: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
  { name: "DSA", color: "bg-green-500/10 text-green-400 border-green-500/30" },
  { name: "AI", color: "bg-pink-500/10 text-pink-400 border-pink-500/30" },
  { name: "Vite", color: "bg-violet-500/10 text-violet-400 border-violet-500/30" },
  { name: "Framer Motion", color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
]

  return (
    <div id="tech" className="max-w-5xl mx-auto mt-40 overflow-hidden">

      <p className="text-zinc-500 uppercase tracking-[0.2em] mb-8 text-sm">
        Technologies & Tools
      </p>

      <div className="relative flex overflow-x-hidden">

        <div className="animate-marquee whitespace-nowrap flex gap-6">

          {tech.map((item, index) => (
            <div
              key={index}
              className={`${item.color} border rounded-full px-6 py-3 text-lg hover:scale-105 transition-all duration-300 backdrop-blur-lg`}
            >
              {item.name}
            </div>
          ))}

        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-6">

          {tech.map((item, index) => (
            <div
              key={index}
              className={`${item.color} border rounded-full px-6 py-3 text-lg hover:scale-105 transition-all duration-300 backdrop-blur-lg`}
            >
              {item.name}
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default TechStack