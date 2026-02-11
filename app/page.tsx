import HeroSequence from '@/components/HeroSequence'

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Hero Section (Pinned 300vh, then scroll past) */}
      <HeroSequence />

      {/* 2. About Competition */}
      <section className="relative z-10 py-32 px-6 md:px-20 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
              The Arena <br />
              <span className="text-blue-600">Awaits</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Construct, code, and conquer. The 2024 Robotics Championship brings together elite engineering teams from 15+ countries to solve complex autonomous challenges.
            </p>
          </div>
          <div className="h-96 w-full bg-zinc-900 border border-zinc-800 relative group overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-500" />
            <div className="absolute bottom-4 left-4 font-mono text-xs text-blue-400">
              // SYSTEMS_ACTIVE
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Categories */}
      <section className="relative z-10 py-32 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-sm font-bold tracking-[0.3em] uppercase text-blue-500 mb-16">
            Competition Tracks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Robo Race", desc: "High-speed autonomous navigation." },
              { title: "Line Follower", desc: "Precision tracking algorithms." },
              { title: "Soccer Bot", desc: "Team-based mechanical strategy." }
            ].map((event, i) => (
              <div key={i} className="group p-8 border border-zinc-800 hover:border-blue-500/50 bg-black transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-zinc-900 mb-6 flex items-center justify-center text-blue-500 font-bold group-hover:scale-110 transition-transform">
                  0{i + 1}
                </div>
                <h3 className="text-2xl font-bold uppercase mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schedule (Timeline) */}
      <section className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black uppercase text-center mb-20 italic">
            Mission <span className="text-zinc-700">Timeline</span>
          </h2>

          <div className="space-y-12 pl-8 border-l border-zinc-800 relative">
            {[
              { time: "09:00", event: "Registration & Inspection" },
              { time: "11:00", event: "Qualifying Rounds Begin" },
              { time: "14:00", event: "Technical Showcase" },
              { time: "16:00", event: "Finals: The Showdown" }
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                </span>
                <span className="text-blue-500 font-mono text-sm tracking-widest block mb-1">
                  {item.time}
                </span>
                <h4 className="text-white text-xl font-bold uppercase">
                  {item.event}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA / Footer */}
      <section className="relative z-10 py-40 bg-zinc-900 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white/10 uppercase tracking-tighter absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
            Register Now
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase mb-8 relative">
            Limitless <span className="text-blue-500">Possibility</span>
          </h3>
          <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
            Join The Competition
          </button>
        </div>
      </section>
    </main>
  )
}
