import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"

export default function ResumePage() {
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
              Resume
            </h1>
            <p className="mt-4 text-lg text-white/70 md:text-xl">
              My professional journey
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="bg-gray-950 py-16">
        <div className="container px-4">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Professional Experience</h2>
          <div className="mt-8 space-y-12">
            <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Lead Data Engineer</h3>
                  <p className="text-white/70">TechCorp Industries</p>
                </div>
                <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2020-Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>• Led a team of 5 engineers to build and maintain data pipelines processing 20TB+ daily</li>
                <li>• Implemented ML-based anomaly detection reducing system outages by 45%</li>
                <li>• Architected cloud-based data lake solution saving $300K annually in infrastructure costs</li>
                <li>• Developed real-time analytics dashboard used by 200+ internal stakeholders</li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Senior Software Engineer</h3>
                  <p className="text-white/70">DataViz Solutions</p>
                </div>
                <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2017-2020</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>• Developed interactive data visualization platform used by Fortune 500 clients</li>
                <li>• Created API services handling 50M+ requests daily with 99.99% uptime</li>
                <li>• Optimized database queries resulting in 70% performance improvement</li>
                <li>• Mentored junior developers and led technical interviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      {/* Skills Section */}
      <section className="bg-gradient-to-b from-black to-gray-950 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Technical Skills</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Programming Languages</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• Python (Advanced)</li>
                  <li>• JavaScript/TypeScript (Advanced)</li>
                  <li>• SQL (Advanced)</li>
                  <li>• Java (Intermediate)</li>
                  <li>• Go (Intermediate)</li>
                  <li>• C++ (Basic)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Data Technologies</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• Apache Spark</li>
                  <li>• Kafka</li>
                  <li>• Hadoop</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• Elasticsearch</li>
                  <li>• Redis</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Cloud & DevOps</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• AWS (Certified Solutions Architect)</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• Terraform</li>
                  <li>• CI/CD (GitHub Actions, Jenkins)</li>
                  <li>• Monitoring (Prometheus, Grafana)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Web Development</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• React & Next.js</li>
                  <li>• Node.js</li>
                  <li>• GraphQL</li>
                  <li>• REST API Design</li>
                  <li>• HTML/CSS/Tailwind</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Data Science & ML</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• Scikit-learn</li>
                  <li>• TensorFlow & PyTorch</li>
                  <li>• Pandas & NumPy</li>
                  <li>• Data Visualization (Matplotlib, D3.js)</li>
                  <li>• Statistical Analysis</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Soft Skills</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• Technical Leadership</li>
                  <li>• Project Management</li>
                  <li>• Cross-functional Collaboration</li>
                  <li>• Technical Writing</li>
                  <li>• Mentoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

