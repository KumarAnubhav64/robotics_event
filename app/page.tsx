import HeroSequence from '@/components/HeroSequence'
import Navbar from '@/components/Navbar'

export default function Home() {
  const events = [
    { title: "RoboSoccer", desc: "Mechanical athletes on the field.", icon: "⚽" },
    { title: "Desert Dash", desc: "Navigating treacherous terrain.", icon: "🏜️" },
    { title: "WingFury", desc: "Aerial robotic dominance.", icon: "✈️" },
    { title: "Pathfinder", desc: "Autonomous navigation challenge.", icon: "🧭" }
  ]

  const timeline = [
    { time: "14th Mar", event: "Opening Ceremony & Inspections" },
    { time: "14th Mar", event: "Qualifying Rounds: All Tracks" },
    { time: "15th Mar", event: "Grand Finale: The Showdown" },
    { time: "15th Mar", event: "Prize Distribution" }
  ]

  return (
    <main className="relative bg-black min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. Hero Section (Pinned 300vh, then scroll past) */}
      <HeroSequence />

      {/* 2. About Competition */}
      <section id="about" className="relative z-10 py-32 px-6 md:px-20 bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6">
              IIIT RANCHI <br />
              <span className="text-blue-600">PRESENTS</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                The <strong>Indian Institute of Information Technology (IIIT), Ranchi</strong>, in collaboration with the <strong>Institution’s Innovation Council (IIC)</strong> and <strong>House of Geeks</strong> (Robotics & IoT Club), proudly announces <strong>YANTRA 2026</strong>.
              </p>
              <p>
                A premier inter-college Robotics Fest focused on innovation, engineering excellence, and competitive spirit. Compete. Innovate. Dominate.
              </p>
            </div>
          </div>
          <div className="h-96 w-full bg-zinc-900 border border-zinc-800 relative group overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-all duration-500" />
            <div className="text-center p-8 border border-white/10 bg-black/50 backdrop-blur-sm">
              <h3 className="text-5xl font-black text-white mb-2">₹65,000</h3>
              <p className="text-blue-500 uppercase tracking-widest text-sm font-bold">Total Prize Pool</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Categories */}
      <section id="events" className="relative z-10 py-32 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-sm font-bold tracking-[0.3em] uppercase text-blue-500 mb-16">
            Event Line-up
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, i) => (
              <div key={i} className="group p-8 border border-zinc-800 hover:border-blue-500/50 bg-black transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl grayscale group-hover:grayscale-0 transition-all duration-500">
                  {event.icon}
                </div>
                <div className="w-12 h-12 bg-zinc-900 mb-6 flex items-center justify-center text-blue-500 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {event.desc}
                </p>
                <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-zinc-900">
                  PRIZE: ₹12,500
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schedule (Timeline) */}
      <section id="schedule" className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black uppercase text-center mb-20 italic">
            14-15th <span className="text-zinc-700">MARCH</span>
          </h2>

          <div className="space-y-12 pl-8 border-l border-zinc-800 relative">
            {timeline.map((item, i) => (
              <div key={i} className="relative group">
                <span className="absolute -left-[41px] top-1 w-5 h-5 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-colors">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                </span>
                <span className="text-blue-500 font-mono text-sm tracking-widest block mb-1">
                  {item.time}
                </span>
                <h4 className="text-white text-xl font-bold uppercase group-hover:text-blue-400 transition-colors">
                  {item.event}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Prizes & Rules */}
      <section id="prizes" className="relative z-10 py-24 bg-zinc-900/50 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-zinc-800 bg-black">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Team Size</h4>
            <p className="text-4xl font-black text-white">2-4</p>
            <p className="text-zinc-500 text-sm mt-2">Members per Team</p>
          </div>
          <div className="p-8 border border-zinc-800 bg-black">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Registration</h4>
            <p className="text-4xl font-black text-white">₹250</p>
            <p className="text-zinc-500 text-sm mt-2">Per Team / Per Event</p>
          </div>
          <div className="p-8 border border-zinc-800 bg-black">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Eligibility</h4>
            <p className="text-2xl font-black text-white mt-1">OPEN TO ALL</p>
            <p className="text-zinc-500 text-sm mt-3">College Students</p>
          </div>
        </div>
      </section>

      {/* 6. CTA / Footer */}
      <section className="relative z-10 py-40 bg-zinc-950 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white/5 uppercase tracking-tighter absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none">
            YANTRA '26
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase mb-8 relative">
            Ready to <span className="text-blue-500">Dominate?</span>
          </h3>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://unstop.com/p/yantra-2026-iiit-ranchi-1419741"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
            >
              Register Now
            </a>
            <p className="text-zinc-500 text-sm font-mono mt-4">
              Open to students from all recognized institutions.
            </p>
          </div>
        </div>

        <footer className="absolute bottom-0 w-full py-6 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 text-xs uppercase tracking-widest">
            © 2026 IIIT Ranchi • House of Geeks • IIC
          </p>
        </footer>
      </section>
    </main>
  )
}
