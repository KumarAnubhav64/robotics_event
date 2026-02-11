'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FRAME_COUNT = 120
const FRAME_PATH = '/frames/frame_'
const CLIP_HEIGHT = 60 // Amount to clip from bottom to remove watermark

export default function HeroSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Refs for animations
  const textContainerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLHeadingElement>(null)
  const ctaRef = useRef<HTMLButtonElement>(null)

  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // 1. Preload Frames
  useEffect(() => {
    const loadFrames = async () => {
      const loadedImages: HTMLImageElement[] = []
      const promises: Promise<void>[] = []

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const frameIndex = i.toString().padStart(3, '0') // 001..120
        const img = new Image()
        const src = `${FRAME_PATH}${frameIndex}.webp`

        const promise = new Promise<void>((resolve) => {
          img.src = src
          img.onload = () => resolve()
          img.onerror = () => {
            console.warn(`Frame not found: ${src}`)
            resolve()
          }
        })

        promises.push(promise)
        loadedImages.push(img)
      }

      await Promise.all(promises)
      setImages(loadedImages)
      setIsLoaded(true)
    }

    loadFrames()
  }, [])

  // 2. Setup Canvas & Animation
  useEffect(() => {
    if (!isLoaded || images.length === 0 || !canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const container = containerRef.current

    if (!ctx) return

    // --- High DPI Canvas Handling ---
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + "px"
      canvas.style.height = window.innerHeight + "px"

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      if (typeof frame !== 'undefined') render()
    }

    // --- Render Logic with Clipping & Offset ---
    const frame = { index: 0 }

    // Manual offset to fix asymmetry.
    // "Too much right" means we need to shift the image content to the LEFT.
    // If we subtract from X, the image moves left.
    const X_OFFSET_PX = -30

    const render = () => {
      ctx.save()
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      // Clamp frame index to valid range
      const imgIndex = Math.min(FRAME_COUNT - 1, Math.round(frame.index))
      const img = images[imgIndex]

      if (img) {
        // Effective source height after clipping
        const sourceHeight = img.height - CLIP_HEIGHT

        // Cover logic based on clipped dimensions
        const hRatio = window.innerWidth / img.width
        const vRatio = window.innerHeight / sourceHeight
        const ratio = Math.max(hRatio, vRatio)

        // Calculate centered position then apply offset
        const centerShift_x = ((window.innerWidth - img.width * ratio) / 2) + X_OFFSET_PX
        const centerShift_y = (window.innerHeight - sourceHeight * ratio) / 2

        ctx.drawImage(
          img,
          0, 0, img.width, sourceHeight,
          centerShift_x, centerShift_y, img.width * ratio, sourceHeight * ratio
        )
      }
    }

    // Initialize
    handleResize()
    window.addEventListener('resize', handleResize)

    // --- Cinematic Timeline ---
    // Total Scroll Distance: 300% (300vh)
    // 0% -> 85%: Animate frames 0 -> 119
    // 85% -> 100%: Hold frame 119, Fade in Overlay & Text

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=300%',
        scrub: true, // specific number for smoothness, or true for direct link
        pin: true,
      }
    })

    // Phase 1: Frame Animation (0 -> 119)
    tl.to(frame, {
      index: FRAME_COUNT - 1,
      ease: 'none',
      duration: 3, // Relative duration unit
      onUpdate: () => render()
    })

    // Phase 2: Cinematic Text Reveal (Overlapping slightly end of frame animation)
    // Trigger at roughly 85% of timeline
    tl.to(overlayRef.current, {
      opacity: 1, // darker overlay
      duration: 1,
      ease: 'power2.out'
    }, "-=0.5") // Start before frames finish

    tl.fromTo(textContainerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      "<" // Start with overlay
    )

    // Note: scrubbing cleans up automatically, but kill explicit triggers on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [isLoaded, images])

  if (!isLoaded) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center text-white font-mono uppercase tracking-widest text-sm animate-pulse">
        Initializing Systems...
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Grain Overlay - Subtle cinematic texture */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Focus/Dark Overlay (Fades in at end) */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 z-20 opacity-0 pointer-events-none backdrop-blur-[2px]"
      />

      {/* Content Layer - "Competitive Aggressive" Style */}
      <div
        ref={textContainerRef}
        className="absolute inset-x-0 top-[35%] flex flex-col items-center justify-center text-center z-30 opacity-0 px-4"
      >
        <h2
          ref={subheadlineRef}
          className="text-blue-500 font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4"
        >
          IIIT RANCHI PRESENTS
        </h2>

        <h1
          ref={headlineRef}
          className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] italic transform -skew-x-6"
        >
          YANTRA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            2026
          </span>
        </h1>

        <p className="max-w-md mt-6 text-gray-300 text-lg md:text-xl font-light tracking-wide leading-relaxed">
          The ultimate test of engineering and autonomy.
        </p>

        <button
          ref={ctaRef}
          className="mt-10 group relative px-8 py-4 bg-transparent border border-white/20 overflow-hidden transition-all hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] pointer-events-auto"
        >
          <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-90" />
          <span className="relative text-white font-bold tracking-widest uppercase text-sm group-hover:text-white transition-colors">
            Register Team
          </span>
        </button>
      </div>

      {/* Scroll indicator - fades out as you scroll down naturally due to absolute positioning passing out of view eventually, or can animate out */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 opacity-70 animate-bounce pointer-events-none mix-blend-difference">
        <span className="text-[10px] uppercase tracking-widest text-white">Initialize</span>
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </div>
  )
}
