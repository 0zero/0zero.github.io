import Link from "next/link"
import { ArrowLeft, Mail, Send } from "lucide-react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { Button } from "@/components/ui/button"


export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-black to-gray-950 py-16 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="stars absolute inset-0"></div>
        </div>
        <div className="container relative z-10 px-4">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">Contact Me</h1>
            <p className="mt-4 text-lg text-white/70 md:text-xl">
              Interested in collaborating or have questions about my work? Feel free to reach out. I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-purple-400" />
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="mt-1 text-white/70">japheth@japhethyates.xyz</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white">Connect</h3>
                  <div className="mt-4 flex space-x-4">
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-purple-900/20 hover:bg-purple-900/40"
                    >
                      <Link href="https://github.com/0zero" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <SiGithub className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-purple-900/20 hover:bg-purple-900/40"
                    >
                      <Link href="https://www.linkedin.com/in/japhethyates/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <SiLinkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
        </div>
      </section>
    </div>
  )
}

