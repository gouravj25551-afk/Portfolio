import { User, Code2, FolderGit2, Mail } from "lucide-react";
export default function Navbar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">

      <div className="flex items-center gap-6 px-6 py-3 rounded-full border border-zinc-800 bg-black/80 backdrop-blur-xl">

        <a
  href="#about"
  className="text-zinc-400 hover:text-white transition-all duration-300"
>
  <User size={18} />
</a>

        <a
  href="#tech"
  className="text-zinc-400 hover:text-white transition-all duration-300"
>
  <Code2 size={18} />
</a>

        <a
  href="#projects"
  className="text-zinc-400 hover:text-white transition-all duration-300"
>
  <FolderGit2 size={18} />
</a>

        <a
  href="#contact"
  className="text-zinc-400 hover:text-white transition-all duration-300"
>
  <Mail size={18} />
</a>

      </div>

    </div>
  )
}