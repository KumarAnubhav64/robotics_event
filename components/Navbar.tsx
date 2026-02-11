'use client'

import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

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
    { name: 'Prizes', href: '#prizes' },
  ]

  return (
    <nav
      className={twMerge(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex flex-col leading-none">
          <span className="text-xl font-black italic tracking-tighter text-white">
            YANTRA<span className="text-blue-500">2026</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-zinc-400">
            IIIT RANCHI
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://unstop.com/p/yantra-2026-iiit-ranchi-1419741"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-0.5"
        >
          Register
        </a>
      </div>
    </nav>
  )
}
