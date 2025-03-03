import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black"></div>
          <div className="stars absolute inset-0"></div>
        </div>
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            <span className="block">Japheth Yates</span>
            <span className="mt-2 block text-2xl font-light text-white/80 sm:text-3xl md:text-4xl">
              Software and Data Specialist
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/70">
            A driven specialist with a proven track record of impact across multiple fields
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild variant="default">
              <Link href="/resume">
                Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-black/50 text-white hover:bg-black/70">
              <Link href="/tech">Tech Projects</Link>
            </Button>
            <Button asChild variant="outline" className="bg-black/50 text-white hover:bg-black/70">
              <Link href="/astrophysics">Academic Background</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-black py-16 md:py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-lg text-white/70">
                  I'm a software and data specialist with a passion for solving complex problems. My background in
                  astrophysics informs my approach to dealing with data, allowing me to bring unique perspectives to
                  technical challenges.
                </p>
                <p className="mt-4 text-lg text-white/70">
                  
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Expertise</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Software Engineering</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Data Engineering</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Data Science</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Python</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">SQL</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Rust</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Elm</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">MatLab</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Fortran</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Cloud Computing</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">MongoDB</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">CI/CD</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Git</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Docker</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Kubernetes</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">High Performance Computing</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Data Visualisation</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Machine Learning</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Artificial Intelligence</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Statistics</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Business Intelligence</Badge>
                  <Badge className="bg-purple-900/60 hover:bg-purple-900/80">Computational Physics</Badge>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

