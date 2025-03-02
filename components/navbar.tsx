"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Japheth Yates</span>
        </Link>
        <nav className="hidden flex-1 items-center justify-between md:flex">
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-white/70 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/tech" className="text-white/70 transition-colors hover:text-white">
              Tech
            </Link>
            <Link href="/astrophysics" className="text-white/70 transition-colors hover:text-white">
              Astrophysics
            </Link>
            <Link href="/contact" className="text-white/70 transition-colors hover:text-white">
              Contact
            </Link>
          </div>
          <div>
            <Button asChild variant="default" size="sm">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black md:hidden">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">Japheth Yates</span>
            </Link>
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container mt-8 flex flex-col gap-6 px-4 text-lg">
            <Link
              href="/"
              className="text-white/70 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tech"
              className="text-white/70 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech
            </Link>
            <Link
              href="/astrophysics"
              className="text-white/70 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Astrophysics
            </Link>
            <Link
              href="/contact"
              className="text-white/70 transition-colors hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mt-4">
              <Button asChild variant="default" className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get In Touch
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

