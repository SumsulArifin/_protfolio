import React from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-primary">
          Arifin.dev
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="home" className="hover:text-primary transition">Home</a>
          <a href="about" className="hover:text-primary transition">About</a>
          <a href="projects" className="hover:text-primary transition">Projects</a>
          <a href="contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">Let’s Talk</a>
          </Button>
        </div>

        {/* Mobile menu (optional) */}
        <div className="md:hidden">
          {/* You can implement a hamburger menu here */}
          <span className="text-xl font-bold">☰</span>
        </div>
        <div>
          <ModeToggle/>
        </div>
      </div>
    </header>
  )
}

export default Navbar
