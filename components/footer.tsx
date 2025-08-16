import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Aliyan Arif</h3>
            <p className="text-muted-foreground max-w-md">
              Full Stack Web Developer passionate about building modern, scalable, and user-friendly applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#logs" className="text-muted-foreground hover:text-foreground transition-colors">Build Logs</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Aliyannnn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/Aliyann712709" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/aliyan-arif-9b4179377" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="mt-4">
              <a href="mailto:your@email.com" className="text-muted-foreground hover:text-foreground transition-colors">
                aliyan989pc@gmail.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aliyan Arif. All rights reserved.</p>
          <p className="mt-1 font-mono text-xs">Built with Next.js, Tailwind, and shadcn/ui</p>
        </div>
      </div>
    </footer>
  )
}
