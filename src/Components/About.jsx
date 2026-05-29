function About() {
  return (
    <div id = "about" className="max-w-5xl mx-auto mt-40">

      <p className="text-zinc-500 uppercase tracking-[0.2em] mb-6 text-sm">
        Currently Exploring
      </p>

      <div className="space-y-6">

        <div className="border border-zinc-900 rounded-2xl p-5 hover:border-zinc-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2">
            Algorithms, Open Source & Emerging Tech
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Exploring competitive programming,
contributing to open source and
experimenting with modern AI-driven tools.
          </p>
        </div>

        <div className="border border-zinc-900 rounded-2xl p-5 hover:border-zinc-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2">
            Interactive Digital Experiences
          </h2>

          <p className="text-zinc-400 leading-relaxed">
           Building clean, modern and interactive
web experiences focused on simplicity,
performance and smooth user interactions.
          </p>
        </div>

        <div className="border border-zinc-900 rounded-2xl p-5 hover:border-zinc-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-2">
            AI-Powered Developer Workflows
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Exploring AI tools, automations and
developer-focused workflows while
learning by building real projects.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About