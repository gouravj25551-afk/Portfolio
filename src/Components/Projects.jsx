function Projects() {

const projects = [

  {
    title: "NextStep",
    desc: "A placement tracking platform designed to help students organize opportunities, track applications and stay consistent during internship preparation.",
    tech: "React • Tailwind • JavaScript",
    live: "https://placement-track-weld.vercel.app/",
    github: "https://github.com/gouravj25551-afk/Placement_Tracker"
  },

  {
    title: "Paytm Clone",
    desc: "A modern Paytm-inspired frontend clone focused on clean UI, responsive layouts and seamless user experience.",
    tech: "React • Tailwind • UI Design",
    live: "https://your-live-link.com",
    github: "https://github.com/gouravj25551-afk/Frontend-Project"
  },

]
  return (
    <div id="projects" className="max-w-5xl mx-auto mt-40">

      <p className="text-zinc-500 uppercase tracking-[0.2em] mb-8 text-sm">
        Featured Projects
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project, index) => (

          <div
            key={index}
            className="border border-zinc-900 rounded-2xl p-6 hover:border-zinc-700 hover:-translate-y-2 transition-all duration-300"
          >

            <h2 className="text-2xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              {project.desc}
            </p>

          <div className="flex items-center justify-between mt-6">

  <p className="text-sm text-zinc-500">
    {project.tech}
  </p>

  <div className="flex gap-4 text-sm">

    <a
      href={project.live}
      target="_blank"
      className="hover:text-zinc-400 transition-all duration-300"
    >
      Live ↗
    </a>

    <a
      href={project.github}
      target="_blank"
      className="hover:text-zinc-400 transition-all duration-300"
    >
      GitHub ↗
    </a>

  </div>

</div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Projects