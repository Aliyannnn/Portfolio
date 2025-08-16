"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { GithubIcon, LinkedinIcon, TwitterIcon, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { href: "/", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#build-logs", label: "Build Logs" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // custom smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const section = document.querySelector(href)
      section?.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // close mobile menu after click
    }
  }

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          href="/" 
          className="text-foreground font-semibold text-lg hover:text-primary transition-colors"
        >
          <span className="font-mono text-primary">~</span>/Aliyan
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex items-center space-x-2">
            <a href="https://github.com/Aliyannnn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://x.com/Aliyann712709" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <TwitterIcon className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/aliyan-arif-9b4179377/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <LinkedinIcon className="h-4 w-4" />
              </Button>
            </a>
          </div>
          <ModeToggle />
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <nav className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-2 border-t border-border">
                <a href="https://github.com/pratikkale26" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <GithubIcon className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://twitter.com/pratikkale26" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <TwitterIcon className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/pratikkale26" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                    <LinkedinIcon className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
