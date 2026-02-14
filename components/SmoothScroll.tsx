'use client'

import { ReactLenis, useLenis } from 'lenis/react'
import { ReactNode, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  // Synchronize Lenis with GSAP ScrollTrigger
  useLenis(() => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Optional: Refresh ScrollTrigger on mount to ensure correct positioning with Lenis
    ScrollTrigger.refresh()
  }, [])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Smoothness intensity
        duration: 1.2, // Scroll duration
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
