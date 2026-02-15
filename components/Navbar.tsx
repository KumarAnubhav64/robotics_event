'use client'

import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Timeline', href: '#schedule' },
    { name: 'Details', href: '#details' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={twMerge(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png?v=3"
            alt="YANTRA 2026 Logo"
            className="h-12 w-auto object-contain pointer-events-none"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group font-heading"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#events"
          className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-0.5 font-heading"
        >
          Register
        </a>
      </div>
    </nav>
  )
}
