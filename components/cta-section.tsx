"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageSquare, Send, Twitter } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Toaster, toast } from "react-hot-toast"

export default function CTASection() {
  const [activeTab, setActiveTab] = useState<'contact' | 'hire' | 'collaborate'>('contact')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xwpqjkkv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast.success("Message sent successfully 🚀")
        form.reset()
      } else {
        toast.error("Something went wrong. Try again ❌")
      }
    } catch (error) {
      toast.error("Network error. Please try later ⚠️")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-accent/10">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Have a project idea, collaboration opportunity, or just want to chat about Web and technology?
              I&apos;m always open to connecting with fellow builders and creators.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Contact Options */}
            <div className="md:w-5/12">
              <Card className="h-full bg-card/70 backdrop-blur">
                <CardHeader>
                  <CardTitle>Connect with Me</CardTitle>
                  <CardDescription>Choose how you&apos;d like to reach out</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <a
                    href="mailto:aliyan989pc@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">aliyan989pc@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://x.com/Aliyann712709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Twitter</h3>
                      <p className="text-sm text-muted-foreground">@Aliyann712709</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Aliyannnn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-muted-foreground">github.com/Aliyannnn</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/aliyan-arif-9b4179377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-accent"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/Aliyan</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Right Form Section */}
            <div className="md:w-7/12">
              <Card className="bg-card/70 backdrop-blur">
                <form onSubmit={handleSubmit}>
                  <CardHeader>
                    <div className="flex border border-border rounded-lg p-1 mb-4">
                      <button
                        type="button"
                        className={cn(
                          "flex-1 text-center py-2 rounded-md transition-colors",
                          activeTab === "contact"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        )}
                        onClick={() => setActiveTab("contact")}
                      >
                        Contact
                      </button>
                      <button
                        type="button"
                        className={cn(
                          "flex-1 text-center py-2 rounded-md transition-colors",
                          activeTab === "hire"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        )}
                        onClick={() => setActiveTab("hire")}
                      >
                        Hire Me
                      </button>
                      <button
                        type="button"
                        className={cn(
                          "flex-1 text-center py-2 rounded-md transition-colors",
                          activeTab === "collaborate"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        )}
                        onClick={() => setActiveTab("collaborate")}
                      >
                        Collaborate
                      </button>
                    </div>

                    <CardTitle>
                      {activeTab === "contact" && "Send a Message"}
                      {activeTab === "hire" && "Work with Me"}
                      {activeTab === "collaborate" && "Let's Build Together"}
                    </CardTitle>

                    <CardDescription>
                      {activeTab === "contact" && "I'll get back to you as soon as possible"}
                      {activeTab === "hire" && "Tell me about your project or position"}
                      {activeTab === "collaborate" && "Share your idea and how we can collaborate"}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>

                    {activeTab === "hire" && (
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium">
                          Company / Organization
                        </label>
                        <Input id="company" name="company" placeholder="Company or organization name" />
                      </div>
                    )}

                    {activeTab === "collaborate" && (
                      <div className="space-y-2">
                        <label htmlFor="project" className="text-sm font-medium">
                          Project Name
                        </label>
                        <Input id="project" name="project" placeholder="Name of your project" />
                      </div>
                    )}

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={
                          activeTab === "contact"
                            ? "Your message..."
                            : activeTab === "hire"
                            ? "Tell me about your project or position..."
                            : "Share your collaboration idea..."
                        }
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button type="submit" className="w-full group" disabled={loading}>
                      {loading ? "Sending..." : (
                        <>
                          {activeTab === "contact" && (
                            <>
                              Send Message
                              <MessageSquare className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                            </>
                          )}

                          {activeTab === "hire" && (
                            <>
                              Submit Inquiry
                              <Send className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                            </>
                          )}

                          {activeTab === "collaborate" && (
                            <>
                              Let&apos;s Collaborate
                              <Send className="ml-2 h-4 w-4 group-hover:animate-pulse" />
                            </>
                          )}
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
