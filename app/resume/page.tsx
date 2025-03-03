"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Accordion from "@/components/accordion";

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
          {/* Current Role */}
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Senior Software Engineer</h3>
                  <p className="text-white/70">Forseven</p>
                </div>
                <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2024-Present</span>
              </div>
              <ul className="mt-4 space-y-2 text-white/70">
                TBC
              </ul>
            </div>
            {/* Previous Roles */}
            <Accordion title="Click for previous roles">
              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Senior Developer</h3>
                    <p className="text-white/70">EcoAct - A part of Schneider Electric</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2024-2024</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• Led the development of an analytics dashboard for the Marketing Communications team providing insights and leads</li>
                  <li>• Co-led EcoAct's first product definition workshop for an under-utilised dataset leading to an outline of an MVP</li>
                  <li>• Leading the development of a series of EcoAct products aimed at democratising sustainability consultants knowledge and experience</li>
                  <li>• Advocating and implementing best practices related to software development, product management and product definition</li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Data Engineer</h3>
                    <p className="text-white/70">FarmLend</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2023-2023</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• led the creation and maintenance of Farmlend’s data platform using tools from the open-source modern data stack to optimise costs</li>
                  <li>• Successfully migrated data and processes from Google Sheets to our data platform</li>
                  <li>• Led the development of Farmlend's data strategy</li>
                  <li>• Created analytics dashboards providing insights for operationional stakeholders</li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Lead Computational Engineer</h3>
                    <p className="text-white/70">Arrival</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2022-2023</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Computational Engineer</h3>
                    <p className="text-white/70">Arrival</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2019-2022</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Internal Research Fellow</h3>
                    <p className="text-white/70">European Space Agency</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2016-2019</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Postdoctoral Research Associate</h3>
                    <p className="text-white/70">Imperial College London</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2013-2016</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Postdoctoral Research Associate</h3>
                    <p className="text-white/70">University College London</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2013-2013</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-black/50 p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">PhD in Astrophysics</h3>
                    <p className="text-white/70">University College London</p>
                  </div>
                  <span className="rounded-full bg-purple-900/30 px-3 py-1 text-sm text-white/90">2009-2013</span>
                </div>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                  <li>• TBC </li>
                </ul>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-b from-black to-gray-950 py-16">
        <div className="container px-4">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Technical Skills</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Programming Languages</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• Python (Advanced)</li>
                  <li>• Fortran 77/90 (Advanced)</li>
                  <li>• MatLab (Advanced)</li>
                  <li>• SQL (Advanced)</li>
                  <li>• Rust (Intermediate)</li>
                  <li>• Elm (Intermediate)</li>
                  <li>• JavaScript/TypeScript (Basic)</li>
                  <li>• C++ (Basic)</li>
                  <li>• Java (Basic)</li>
                  <li>• TCL (Basic)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Data Technologies</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• Dagster</li>
                  <li>• Airflow</li>
                  <li>• Airbyte</li>
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• dbt</li>
                  <li>• BigQuery</li>
                  <li>• Metabase</li>

                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Cloud+</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• AWS</li>
                  <li>• GCP</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• CI/CD (GitHub Actions, GitLab)</li>
                  <li>• High Performance Computing</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Web Development</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• REST</li>
                  <li>• GraphQL</li>
                  <li>• Protocol Buffers</li>
                  <li>• FastAPI</li>
                  <li>• Plotly Dash</li>
                  <li>• Flask</li>
                  <li>• Django</li>
                  <li>• React </li>
                  <li>• ThreeJS</li>
                </ul>
              </div>
              <div className="rounded-lg bg-black/50 p-6">
                <h3 className="text-lg font-semibold text-white">Data Science, ML, and AI</h3>
                <ul className="mt-3 space-y-1 text-white/70">
                  <li>• Scikit-learn</li>
                  <li>• TensorFlow & Keras</li>
                  <li>• Pandas & NumPy & SciPy</li>
                  <li>• Data Visualization (Matplotlib, Plotly, Seaborn, Arviz)</li>
                  <li>• Statistical Analysis</li>
                  <li>• Bayesian Statisics</li>
                  <li>• AI Agents</li>
                  <li>• LLMs</li>
                  <li>• Natural Language Processing</li>
                  <li>• Convolutional Neural Networks</li>
                  <li>• Time Series Analysis</li>

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
                  <li>• Public Speaking</li>
                </ul>
              </div>
            </div>
        </div>
      </section>
    </div>
  )
}