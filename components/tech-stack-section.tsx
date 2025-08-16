"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "databases"
  | "ai"
  | "devops"
  | "others"

type TechItem = {
  name: string
  level: "exploring" | "familiar" | "proficient" | "expert"
  category: TechCategory
}

const techStack: TechItem[] = [
  // Languages
  { name: "JavaScript (ES6+)", level: "expert", category: "languages" },
  { name: "TypeScript", level: "expert", category: "languages" },
  { name: "HTML5", level: "expert", category: "languages" },
  { name: "CSS3", level: "expert", category: "languages" },

  // Front-End
  { name: "React.js", level: "expert", category: "frontend" },
  { name: "Next.js", level: "expert", category: "frontend" },
  { name: "Bootstrap", level: "proficient", category: "frontend" },
  { name: "Tailwind CSS", level: "expert", category: "frontend" },
  { name: "ShadCN-UI", level: "expert", category: "frontend" },
  { name: "Nest.js", level: "exploring", category: "frontend" },

  // Back-End
  { name: "Node.js", level: "expert", category: "backend" },
  { name: "Express.js", level: "expert", category: "backend" },
  { name: "JWT Authentication", level: "proficient", category: "backend" },
  { name: "OAuth", level: "proficient", category: "backend" },
  { name: "API Integration", level: "expert", category: "backend" },
  { name: "RestFul API's", level: "expert", category: "backend" },

  // Databases
  { name: "MongoDB", level: "proficient", category: "databases" },
  { name: "Firebase", level: "proficient", category: "databases" },
  { name: "Appwrite", level: "familiar", category: "databases" },

  // AI & APIs
  { name: "OpenAI API", level: "proficient", category: "ai" },
  { name: "REST APIs", level: "expert", category: "ai" },
  { name: "WebSockets", level: "proficient", category: "ai" },

  // DevOps & Tools
  { name: "Git", level: "expert", category: "devops" },
  { name: "GitHub", level: "expert", category: "devops" },
  { name: "Netlify", level: "proficient", category: "devops" },
  { name: "Vercel", level: "proficient", category: "devops" },
  { name: "Postman", level: "proficient", category: "devops" },

  // Others
  { name: "Chatbot Integration", level: "familiar", category: "others" },
  { name: "Server-Side Rendering (SSR)", level: "proficient", category: "others" },
]

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState<TechCategory>("languages")

  const filterTech = (category: TechCategory) =>
    techStack.filter((t) => t.category === category)

  const levelOrder = { expert: 4, proficient: 3, familiar: 2, exploring: 1 }

  const sortByLevel = (a: TechItem, b: TechItem) =>
    levelOrder[b.level] - levelOrder[a.level]

  const levelColors: Record<string, string> = {
    expert: "bg-blue-500",
    proficient: "bg-green-500",
    familiar: "bg-yellow-500",
    exploring: "bg-gray-500",
  }

  return (
    <section id="tech-stack" className="py-16 md:py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 md:mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4"># Tech Stack</h2>
<p className="text-muted-foreground max-w-lg md:max-w-2xl mx-auto text-base md:text-lg">
  Tools, frameworks, and technologies I use to build modern, scalable web applications.
</p>

      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <Tabs
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as TechCategory)}
          defaultValue="languages"
        >
          {/* Horizontal scroll on mobile */}
          <TabsList className="flex overflow-x-auto md:grid md:grid-cols-7 gap-2 mb-6 md:mb-8 bg-muted p-1 rounded-lg scrollbar-hide">
            <TabsTrigger value="languages" className="flex-shrink-0">Languages</TabsTrigger>
            <TabsTrigger value="frontend" className="flex-shrink-0">Front-End</TabsTrigger>
            <TabsTrigger value="backend" className="flex-shrink-0">Back-End</TabsTrigger>
            <TabsTrigger value="databases" className="flex-shrink-0">Databases</TabsTrigger>
            <TabsTrigger value="ai" className="flex-shrink-0">AI & APIs</TabsTrigger>
            <TabsTrigger value="devops" className="flex-shrink-0">DevOps & Tools</TabsTrigger>
            <TabsTrigger value="others" className="flex-shrink-0">Others</TabsTrigger>
          </TabsList>

          {( ["languages","frontend","backend","databases","ai","devops","others"] as TechCategory[] ).map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filterTech(category).sort(sortByLevel).map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-5 shadow-lg text-left"
                  >
                    <h3 className="font-semibold text-base md:text-lg">{tech.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground capitalize mb-2">
                      {tech.level}
                    </p>

                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width:
                            tech.level === "expert"
                              ? "100%"
                              : tech.level === "proficient"
                              ? "75%"
                              : tech.level === "familiar"
                              ? "50%"
                              : "25%",
                        }}
                        transition={{ duration: 0.6 }}
                        className={`h-2 rounded-full ${levelColors[tech.level]}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}
