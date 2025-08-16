"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DownloadIcon, ArrowRightIcon } from "lucide-react"
import { motion } from "framer-motion"
import TypewriterComponent from "typewriter-effect"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = ev
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      containerRef.current.style.setProperty("--mouse-x", `${x}`)
      containerRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    document.addEventListener("mousemove", updateMousePosition)
    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const skills = [
    "Full-Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Git",
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Aliyannnn",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aliyan-arif-9b4179377/",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://x.com/Aliyann712709",
      icon: "twitter"
    }
  ]

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 overflow-hidden"
      style={{
        "--mouse-x": "0.5",
        "--mouse-y": "0.5",
      } as React.CSSProperties}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x)*40%)_calc(50%+var(--mouse-y)*40%),hsl(var(--primary)/10%),transparent_50%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 max-w-4xl mx-auto text-center md:text-left pt-20"
      >
        <Badge
          variant="outline"
          className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/5 text-primary font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          Full Stack Web Developer
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I&apos;m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2 hover:from-chart-2 hover:to-primary transition-all duration-300">
            Aliyan Arif
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6 flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
          <span>I build</span>
          <span className="text-primary h-8 md:h-10">
            <TypewriterComponent
              options={{
                strings: [
                  "modern web apps",
                  "scalable full-stack solutions",
                  "beautiful frontend designs",
                  "web app backends",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed">
          Full-stack web developer passionate about creating modern, scalable, and user-friendly web applications with React, Next.js, Node.js, and MongoDB.
        </p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className={cn(
                "px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105",
                skill === "Full-Stack" && "bg-chart-4/20 text-chart-4 hover:bg-chart-4/30",
                skill === "React" && "bg-chart-1/20 text-chart-1 hover:bg-chart-1/30",
                skill === "Next.js" && "bg-chart-2/20 text-chart-2 hover:bg-chart-2/30",
                skill === "Node.js" && "bg-chart-3/20 text-chart-3 hover:bg-chart-3/30",
                skill === "TypeScript" && "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
                skill === "JavaScript" && "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30",
                skill === "Tailwind CSS" && "bg-cyan-500/20 text-cyan-500 hover:bg-cyan-500/30",
                skill === "MongoDB" && "bg-green-500/20 text-green-500 hover:bg-green-500/30",
                skill === "Git" && "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30",
              )}
            >
              {skill}
            </Badge>

          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
          <Button className="group hover:scale-105 transition-transform">
            <Link href="#projects">View Projects</Link>
            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" asChild className="hover:scale-105 transition-transform">
            <Link
              href="/Aliyan%20Arif%20-%20Full%20Stack%20Web%20Developer%20Resume.pdf"
              target="_blank"
              download
            >
              Resume
              <DownloadIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="sr-only">{link.name}</span>
              <i className={`fab fa-${link.icon} text-xl`} />
            </Link>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </div>
    </div>
  )
}
