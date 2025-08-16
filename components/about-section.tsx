"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Rocket, Brain, Award } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-14"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              <span className="font-mono text-primary">#</span> About Me
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m <span className="font-semibold text-foreground">Aliyan</span>, a passionate{" "}
              <span className="font-semibold text-primary">Full-Stack Web Developer</span> with a
              love for building scalable, modern, and user-friendly applications. 
              With a strong foundation in both frontend and backend, I specialize in creating 
              seamless digital experiences that solve real-world problems.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code2 className="w-6 h-6 text-primary" />,
                title: "Developer",
                desc: "Experienced in React, Next.js, Node.js, and modern web technologies. Turning ideas into functional products."
              },
              {
                icon: <Users className="w-6 h-6 text-primary" />,
                title: "Team Player",
                desc: "Collaborated with designers, developers, and clients to deliver efficient solutions that meet business goals."
              },
              {
                icon: <Rocket className="w-6 h-6 text-primary" />,
                title: "Problem Solver",
                desc: "I enjoy solving complex challenges, optimizing performance, and building systems that scale."
              },
              {
                icon: <Brain className="w-6 h-6 text-primary" />,
                title: "Continuous Learner",
                desc: "Always exploring new frameworks, tools, and technologies to stay ahead in the ever-evolving web landscape."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl p-6 bg-accent/40 border border-border/50 shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Background + Achievements Timeline */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-mono text-sm text-muted-foreground mb-4">$ background</h4>
              <div className="space-y-6 border-l border-border/40 pl-6">
                <div>
                  <p className="font-medium">Full-Stack Development</p>
                  <p className="text-sm text-muted-foreground">With Years of Experience - <b>(Academic)</b></p>
                </div>
                <div>
                  <p className="font-medium">Frontend Expertise</p>
                  <p className="text-sm text-muted-foreground">React, Next.js, Tailwind CSS, ShadCN-UI</p>
                </div>
                <div>
                  <p className="font-medium">Backend & Databases</p>
                  <p className="text-sm text-muted-foreground">Node.js, Express, MongoDB, Appwrite</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-mono text-sm text-muted-foreground mb-4">$ achievements</h4>
              <div className="space-y-6 border-l border-border/40 pl-6">
                <div>
                  <p className="font-medium">Client Projects</p>
                  <p className="text-sm text-muted-foreground">Delivered multiple full-stack solutions for startups & businesses</p>
                </div>
                <div>
                  <p className="font-medium">Hackathons</p>
                  <p className="text-sm text-muted-foreground">Participated & contributed to problem-solving competitions</p>
                </div>
                <div>
                  <p className="font-medium">Open Source</p>
                  <p className="text-sm text-muted-foreground">Actively contributing to developer communities and GitHub projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h4 className="font-mono text-sm text-muted-foreground mb-4">$ interests</h4>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary/20 text-primary px-3 py-1 rounded-full">Web Development</Badge>
              <Badge className="bg-chart-2/20 text-chart-2 px-3 py-1 rounded-full">System Design</Badge>
              <Badge className="bg-chart-3/20 text-chart-3 px-3 py-1 rounded-full">Backend Engineer</Badge>
              <Badge className="bg-chart-4/20 text-chart-4 px-3 py-1 rounded-full">Open Source</Badge>
              <Badge className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full">AI Integration</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
