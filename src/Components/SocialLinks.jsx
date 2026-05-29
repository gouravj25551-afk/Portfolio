import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

function SocialLinks() {
  return (
    <div className="flex gap-4">

      <a
        href="https://github.com/gouravj25551-afk"
        target="_blank"
        className="border border-zinc-800 p-2 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 text-lg"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/gourav-jain-43841b37a/"
        target="_blank"
        className="border border-zinc-800 p-2 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 text-lg"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://x.com/Gourav_jain_7"
        target="_blank"
        className="border border-zinc-800 p-2 rounded-full text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300 text-lg"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://leetcode.com/u/JAINGOURAV/"
        target="_blank"
        className="border border-zinc-800 p-2 rounded-full text-zinc-400 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300 text-lg"
      >
        <SiLeetcode />
      </a>

    </div>
  )
}

export default SocialLinks