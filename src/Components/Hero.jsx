import SocialLinks from "./SocialLinks";
import Leetcode from "./Leetcode";


function Hero() {
  return (
    <div className="max-w-5xl mx-auto">

      <div className="flex items-center justify-between">

        <h1 className="text-5xl md:text-7xl font-bold">
          Gourav Jain
        </h1>

        <SocialLinks />

      </div>

      <p className="text-zinc-400 text-lg max-w-xl leading-relaxed mt-8">
Hey, I'm Gourav, a first-year Computer Science undergraduate at Newton School of Technology focused on competitive programming, AI-powered products, open-source development and modern developer experiences.

Over the last few months, I’ve been actively solving DSA problems, exploring advanced algorithms, building interactive projects and experimenting with emerging AI tools. I enjoy learning by building, understanding how things work internally, contributing to open source and sharing my journey publicly.

      </p>

      <Leetcode />

    </div>
  )
}

export default Hero