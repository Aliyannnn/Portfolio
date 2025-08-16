"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projects } from "@/data/projects"

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const displayedProjects = projects.slice(0, 6)

  return (
    <section id="projects" className="py-20 md:py-32 bg-accent/10 relative overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container max-w-6xl relative z-10">
        {/* Header centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="font-mono text-primary">#</span>{" "}
            <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A curated collection of my recent work in Full-Stack and Web3
            development. Each project highlights modern technologies,
            performance, and innovation.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Card
                className={cn(
                  "h-full overflow-hidden border-border/40 bg-card/70 backdrop-blur-xl transition-all duration-500",
                  "rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2"
                )}
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      "h-full w-full object-cover transition-transform duration-700",
                      hoveredIndex === index ? "scale-110" : "scale-100"
                    )}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />
                </div>

                {/* Content */}
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                    {project.grant && (
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                        {project.grant}
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="secondary"
                        className="px-2 py-0.5 text-xs"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Footer */}
                <CardFooter className="relative z-10 flex gap-3">
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 hover:text-primary relative group"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span className="relative">
                        Repo
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Button>
                  </Link>

                  {project.links.live && (
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 hover:text-primary relative group"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                        <span className="relative">
                          Live
                          <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </span>
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
