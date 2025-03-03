import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"

export default function TechPage() {
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
              Tech Projects
            </h1>
            <p className="mt-4 text-lg text-white/70 md:text-xl">
              Showcasing some of my professional work in software, data, and AI.
            </p>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Featured Projects</h2>
          <p className="mt-4 text-lg text-white/70">A selection of my technical work and open-source contributions</p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Rapid Engineering"
              description="Built a suite of tools for rapid prototyping and design of engineering and simulation systems."
              tags={["Python", "Rust", "Elm", "AWS", "MongoDB", "Docker", "GitLab CI/CD", "Kubernetes", "Postgres", "Airflow", "REST", "protobuf", "GraphQL", "HPC"]}
              imageUrl="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Data Platform"
              description="Designed and built an internal data platform for real-time analytics and reporting for a shipping business."
              tags={["Python", "Postgres", "GCP", "dbt", "Airbyte", "Dagster", "Metabase", "BigQuery", "GitHub Actions", "ELT"]}
              imageUrl="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Carbon, Sustainability, and ESG"
              description="Built a suite of tools for analysing carbon emissions, energy prices, and sustainability metrics."
              tags={["Python", "Plotly Dash", "Docker", "Postgres", "REST", "LLMs"]}
              imageUrl="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="NLP for Disaster Response"
              description=""
              tags={["Python", "ETL", "Flask", "NLP", "NLTK", "SciKit-Learn", "Plotly"]}
              imageUrl="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Agentic Product/Project Planning"
              description=""
              tags={["Python", "LLMs", "crewAI"]}
              imageUrl="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Deep Learning for Image Recognition"
              description=""
              tags={["Python", "Keras", "CNNs", "Flask"]}
              imageUrl="/placeholder.svg?height=400&width=600"
            />            
          </div>
        </div>
      </section>
    </div>
  )
}

