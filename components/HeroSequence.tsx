'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Countdown from '@/components/Countdown'

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
  const countdownContainerRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)

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
        end: '+=400%', // Increased for more sequence phases
        scrub: true,
        pin: true,
      }
    })

    // Phase 1: Frame Animation (0 -> 119)
    tl.to(frame, {
      index: FRAME_COUNT - 1,
      ease: 'none',
      duration: 3,
      onUpdate: () => render()
    })

    // Phase 2: Cinematic Text Reveal
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, "-=0.2")

    tl.fromTo(textContainerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
      "<"
    )

    // Phase 3: Text Fade Out (Keep robot pinned/static)
    tl.to(textContainerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power2.in',
      delay: 0.5
    })

    // Phase 4: Countdown Reveal
    tl.fromTo(countdownContainerRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' }
    )

    // Phase 5: Fade out scroll indicator as we get deep into sequence
    tl.to(scrollIndicatorRef.current, {
      opacity: 0,
      duration: 0.5
    }, "<")

    // Note: scrubbing cleans up automatically, but kill explicit triggers on unmount
    return () => {
      window.removeEventListener('resize', handleResize)
      tl.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [isLoaded, images])

  if (!isLoaded) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center text-white font-accent uppercase tracking-[0.3em] text-xs animate-pulse">
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
          className="text-blue-500 font-bold tracking-[0.2em] text-sm md:text-base uppercase mb-4 font-heading"
        >
          IIIT RANCHI PRESENTS
        </h2>

        <h1
          ref={headlineRef}
          className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] italic transform -skew-x-6 font-heading px-4 pb-6"
        >
          YANTRA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-heading px-10">
            2026
          </span>
        </h1>

        <p className="max-w-md mt-6 text-gray-300 text-lg md:text-xl font-light tracking-wide leading-relaxed">
          The ultimate test of engineering and autonomy.
        </p>

        <a
          href="#events"
          className="mt-10 group relative px-8 py-4 bg-transparent border border-white/20 overflow-hidden transition-all hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] pointer-events-auto font-heading block text-center"
        >
          <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-90" />
          <span className="relative text-white font-bold tracking-widest uppercase text-sm group-hover:text-white transition-colors">
            Register Team
          </span>
        </a>
      </div>

      {/* Countdown Layer (Fades in later) */}
      <div
        ref={countdownContainerRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-40 opacity-0 pointer-events-none"
      >
        <div className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em] mb-8 flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          T-MINUS_COMMENCEMENT
        </div>
        <div className="scale-110">
          <Countdown />
        </div>
      </div>

      {/* Bottom Gradient Underlay for legibility */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-25 pointer-events-none opacity-80" />

      {/* Scroll indicator - Iteration 3: Refined & Underlayed */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 pointer-events-none"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white font-accent font-bold animate-pulse drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
          Scroll to Explore
        </span>
        <div className="relative w-[1.5px] h-16 bg-white/10 overflow-hidden rounded-full shadow-[0_0_10px_rgba(59,130,246,0.2)]">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 -translate-y-full animate-[scroll-draw_2s_infinite_ease-in-out]" />
        </div>
      </div>
    </div>
  )
}
