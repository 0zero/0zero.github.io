import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"

export default function AcademicPage() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Academic Background
            </h1>
            <p className="mt-4 text-lg text-white/70 md:text-xl">
              My education, research, and contributions in astrophysics and computational science.
            </p>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section className="bg-black py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Highlighted Research Projects</h2>
          <p className="mt-4 text-lg text-white/70">Scientific research and academic contributions</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Gas Giant Thermospheres and their response to time-varying solar wind"
              description="TBC"
              tags={["Fortran", "Matlab", "Python", "Physics", "High Performance Computing"]}
              imageUrl="/jupiter.png?height=400&width=600"
            />
            <ProjectCard
              title="Waves in Gas Giant Magnetospheres"
              description="TBC"
              tags={["MatLab", "Python", "Data Science", "Machine Learning", "Physics"]}
              imageUrl="/saturn_mhd_waves.jpg?height=400&width=600"
            />
          </div>
        </div>
      </section>


      {/* Publications */}
      <section className="bg-gradient-to-b from-black to-gray-950 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Selected Publications</h2>
            <div className="mt-8 space-y-6">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Journal Articles</h3>
                <ul className="mt-4 space-y-4 text-white/70">
                  <li>
                    <p>
                      Yates, J. N., Ray, L. C., Achilleos, N., Witasse, O. G., & Altobelli, N. (2020).
                      Magnetosphere-ionosphere-thermosphere coupling at Jupiter using a three-dimensional atmospheric
                      general circulation model. <em>Journal of Geophysical Research: Space Physics</em>, 125, e2019JA026792. 
                      <Link href="https://doi.org/10.1029/2019JA026792"> https://doi.org/10.1029/2019JA026792 </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      Yates, J. N., et al. (2016), 
                      Saturn’s quasiperiodic magnetohydrodynamic waves, <em>Geophys. Res. Lett.</em>, 43, 11,102–11,111, 
                      <Link href="https://doi.org/10.1002/2016GL071069"> https://doi.org/10.1002/2016GL071069 </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      Yates, J. N., Achilleos, N., Guio, P. (2013).
                      Response of the Jovian thermosphere to a transient ‘pulse’ in solar wind pressure
                      <em>Planetary and Space Science</em>, Vol. 91,
                      <Link href="https://doi.org/10.1016/j.pss.2013.11.009"> https://doi.org/10.1016/j.pss.2013.11.009 </Link>
                    </p>
                  </li>
                  <li>
                    <p>
                      See all publications on <Link href="https://scholar.google.com/citations?user=3cR93OoAAAAJ&hl=en"> Google Scholar </Link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section className="bg-gray-950 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Education</h2>
            <div className="mt-8 space-y-8">
              <div className="rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">PhD in Astrophysics</h3>
                    <p className="text-white/70">University College London</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2009-2013</span>
                </div>
                <div className="mt-4 text-white/70">
                  <p className="font-medium">
                    Thesis: "The influence of solar wind on Jupiter’s atmosphere over long and short time scales."
                  </p>
                  <p className="mt-2">
                    Developed  and enhanced a two-dimensional upper atmosphere model coupled to a 
                    one-dimensional magnetosphere model of the Jovian system so that it could be driven 
                    by prescribed profiles of the solar wind dynamic pressure. The major scientific 
                    achievement was establishing, for the first time, how transient solar wind phenomena 
                    affected Jupiter’s upper atmosphere..
                  </p>
                  <p className="mt-2">
                    <span className="font-medium">Advisor:</span> Prof. Nicholas Achilleos
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">MSci in Physics</h3>
                    <p className="text-white/70">University College London</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2004-2008</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Teaching & Outreach */}
      <section className="bg-gray-950 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Teaching and Outreach</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Teaching Experience</h3>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li>
                    <p>
                    <span className="font-medium">Teaching Assistant</span> - Python for Physics Undergrads,
                    Imperial College London (2014-2016)
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-medium">MSci Project Supervisor</span> - Space Physics, 
                      Imperial College London (2013-2016)
                    </p>
                  </li>
                  <li>
                    <p>
                    <span className="font-medium">First Year Project Supervisor</span> - Physics,
                    Imperial College London (2014-2016)
                    </p>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Public Outreach</h3>
                <ul className="mt-4 space-y-3 text-white/70">
                  <li>
                    <p>
                      <span className="font-medium">Guest Speaker</span> - King's College School Panama
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-medium">Guest Speaker</span> - Crayford Manor Astronomical Society 
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-medium">Careers Fair Presenter</span> - Sedgehill Secondary School
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="font-medium">Your Universe Assistant</span> - University College London
                    </p>
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

