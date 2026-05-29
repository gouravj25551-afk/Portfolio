function Contact() {

  const copyEmail = () => {
    navigator.clipboard.writeText("gouravjain3107@gmail.com")
    alert("Email copied!")
  }

  return (
    <div id="contact" className="max-w-5xl mx-auto mt-40 pb-10">

      <div className="border-t border-zinc-900 pt-10 flex flex-col items-center text-center">

        <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed mb-6">
           Open to internships,
          collaborations and exciting opportunities.
        </p>

        <div className="flex items-center gap-4">

          <a
            href="mailto:gouravjain3107@gmail.com"
            className="text-sm md:text-base hover:text-zinc-400 transition-all duration-300"
          >
            gouravjain3107@gmail.com
          </a>

          <button
            onClick={copyEmail}
            className="border border-zinc-800 px-4 py-1 rounded-full text-sm text-zinc-400 hover:text-white hover:border-zinc-600 transition-all duration-300"
          >
            Copy
          </button>

        </div>

      </div>

    </div>
  )
}

export default Contact