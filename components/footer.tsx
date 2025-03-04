import Link from "next/link"
import { Mail } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link href="/" className="text-lg font-semibold text-white">
              Japheth Yates
            </Link>
            <nav className="flex gap-4 text-sm text-white/70">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/resume" className="hover:text-white">
                Resume
              </Link>
              <Link href="/tech" className="hover:text-white">
                Tech
              </Link>
              <Link href="/astrophysics" className="hover:text-white">
                Astrophysics
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex gap-4">
            <Link href="mailto:japheth@japhethyates.xyz" aria-label="Email" className="text-white/70 hover:text-white">
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/0zero"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/70 hover:text-white"
            >
              <SiGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/japhethyates/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 hover:text-white"
            >
              <SiLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-white/50">
          <p>© {new Date().getFullYear()} Japheth Yates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

