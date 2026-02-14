import HeroSequence from '@/components/HeroSequence'
import Navbar from '@/components/Navbar'
import Countdown from '@/components/Countdown'

export default function Home() {
  const events = [
    {
      title: "RoboSoccer",
      desc: "Mechanical athletes on the field.",
      icon: "⚽",
      rules: "/pdfs/Robosoccer_Rulebook.pdf",
      regLink: "https://unstop.com/p/yantra-2026-robosoccer-indian-institute-of-information-technology-ranchi-1640907"
    },
    {
      title: "Desert Dash",
      desc: "Navigating treacherous terrain.",
      icon: "🏜️",
      rules: "/pdfs/Desert Dash_Rulebook.pdf",
      regLink: "https://unstop.com/p/yantra-2026-desert-dash-indian-institute-of-information-technology-ranchi-1640890"
    },
    {
      title: "WingFury",
      desc: "Aerial robotic combat dominance.",
      icon: "✈️",
      rules: "/pdfs/WingFury_Rulebook.pdf",
      regLink: "https://unstop.com/p/yantra-2026-wingfury-indian-institute-of-information-technology-ranchi-1640923"
    },
    {
      title: "Pathfinder",
      desc: "Autonomous navigation challenge.",
      icon: "🧭",
      rules: "/pdfs/PathFinder_Rulebook.pdf",
      regLink: "https://unstop.com/p/yantra-2026-pathfinder-indian-institute-of-information-technology-ranchi-1640918"
    }
  ]

  const schedule = {
    day1: {
      date: "14th March",
      venue: "KHELGAON",
      items: [
        { time: "10:00 - 11:30", event: "Opening Ceremony" },
        { time: "11:30 - 13:30", event: "Desert Dash Qualifier" },
        { time: "14:00 - 15:30", event: "Desert Dash Finale" },
        { time: "16:00 - 18:00", event: "RoboSoccer Qualifiers" },
        { time: "18:30 - 21:00", event: "RoboSoccer Finale" },
      ]
    },
    day2: {
      date: "15th March",
      venue: "BSNL",
      items: [
        { time: "10:30 - 12:00", event: "WingFury Qualifier" },
        { time: "12:15 - 13:00", event: "WingFury Finale" },
        { time: "14:30 - 15:30", event: "Pathfinder Qualifier" },
        { time: "15:45 - 16:30", event: "Pathfinder Finale" },
        { time: "17:00 - 18:00", event: "Closing Ceremony" },
        { time: "18:30 - 21:30", event: "Cultural Performance" },
      ]
    }
  }

  return (
    <main className="relative bg-black min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* 1. Hero Section (Pinned with Sequence) */}
      <HeroSequence />

      {/* 2. About Competition - Cinematic Overhaul */}
      <section id="about" className="relative z-10 py-32 px-6 md:px-20 bg-black overflow-hidden">
        {/* Subtle Background Technical Accents */}
        <div className="absolute top-10 left-10 text-[10px] font-mono text-white/5 uppercase tracking-[0.5em] pointer-events-none select-none">
          SYSTEM_VERSION: 1.0.26 // CORE_LINK_ESTABLISHED
        </div>
        <div className="absolute bottom-10 right-10 text-[10px] font-mono text-white/5 uppercase tracking-[0.5em] pointer-events-none select-none text-right">
          LAT: 23.3441° N <br /> LONG: 85.3090° E
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative">
          <div>
            <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-8 font-accent">
              Official Briefing
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 font-heading leading-[0.85]">
              IIIT RANCHI <br />
              <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]">PRESENTS</span>
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-body">
              <p className="border-l-2 border-zinc-800 pl-6">
                The <strong>Indian Institute of Information Technology (IIIT), Ranchi</strong>, in collaboration with the <strong>Institution’s Innovation Council (IIC)</strong> and <strong>House of Geeks</strong>, proudly announces <strong>YANTRA 2026</strong>.
              </p>
              <p className="border-l-2 border-blue-600/30 pl-6">
                A premier inter-college Robotics Fest focused on innovation, engineering excellence, and competitive spirit. Compete. Innovate. Dominate.
              </p>
            </div>
          </div>

          {/* Futuristic Prize Module */}
          <div className="relative group">
            {/* Corner Accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-600 z-20 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-600 z-20 group-hover:scale-110 transition-transform duration-500" />

            <div className="relative h-[400px] w-full bg-zinc-950 border border-zinc-900 overflow-hidden flex flex-col items-center justify-center">
              {/* Scanning Line Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-20 w-full top-[-100px] animate-[scan_4s_infinite_linear] pointer-events-none" />

              <div className="text-center relative z-10 px-12 py-10 border border-white/5 bg-black/40 backdrop-blur-xl shadow-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-zinc-900 border border-zinc-800 text-[8px] uppercase tracking-widest text-zinc-500 font-mono">
                  GRAND_REWARD_MODULE
                </div>

                <h3 className="text-6xl md:text-7xl font-black text-white mb-4 font-accent tracking-tighter glow-text">
                  ₹65<span className="text-blue-500">,000+</span>
                </h3>
                <p className="text-blue-500 uppercase tracking-[0.4em] text-xs font-black font-heading mb-8 opacity-80">
                  Total Prize Pool
                </p>

                <div className="grid grid-cols-2 gap-4 text-[9px] font-mono text-zinc-500 uppercase border-t border-zinc-800 pt-6">
                  <div className="text-left">
                    STATUS: ACTIVE <br />
                    PRIORITY: HIGH
                  </div>
                  <div className="text-right">
                    AUTH: VERIFIED <br />
                    DIST: SEEDED
                  </div>
                </div>
              </div>

              {/* Decorative Tech Grid Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Event Categories */}
      <section id="events" className="relative z-10 py-32 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-sm font-bold tracking-[0.3em] uppercase text-blue-500 mb-16 font-heading">
            Event Line-up
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, i) => (
              <div key={i} className="group p-8 border border-zinc-800 hover:border-blue-500/50 bg-black transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl grayscale group-hover:grayscale-0 transition-all duration-500">
                  {event.icon}
                </div>
                <div className="w-12 h-12 bg-zinc-900 mb-6 flex items-center justify-center text-blue-500 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors font-accent">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 text-white group-hover:text-blue-400 transition-colors font-heading">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {event.desc}
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-zinc-900 font-accent flex flex-col gap-3">
                    <div className="flex justify-between items-center w-full">
                      <span>PRIZE: ₹12,500+</span>
                      <a
                        href={event.rules}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 group/btn"
                      >
                        Rules <span className="text-[10px] group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                    <a
                      href={event.regLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 bg-blue-600/10 border border-blue-600/20 text-blue-500 text-center hover:bg-blue-600 hover:text-white transition-all font-bold uppercase tracking-wider text-[10px]"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schedule (Timeline) */}
      <section id="schedule" className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-sm font-bold tracking-[0.3em] uppercase text-blue-500 mb-16 font-heading">
            Event Schedule
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Day 1 */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-3xl font-black italic uppercase font-heading">Day 01</h3>
                <div className="h-px flex-1 bg-zinc-800" />
                <span className="text-zinc-500 font-mono text-sm">{schedule.day1.date}</span>
              </div>
              <p className="text-blue-500 font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                VENUE: {schedule.day1.venue}
              </p>
              <div className="space-y-8 pl-6 border-l border-zinc-900">
                {schedule.day1.items.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-2 h-2 bg-zinc-800 border border-zinc-700 rounded-full group-hover:border-blue-500 transition-colors" />
                    <span className="text-blue-500 font-mono text-xs tracking-widest block mb-1 font-accent">
                      {item.time}
                    </span>
                    <h4 className="text-white text-lg font-bold uppercase group-hover:text-blue-400 transition-colors font-heading">
                      {item.event}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-3xl font-black italic uppercase font-heading">Day 02</h3>
                <div className="h-px flex-1 bg-zinc-800" />
                <span className="text-zinc-500 font-mono text-sm">{schedule.day2.date}</span>
              </div>
              <p className="text-blue-500 font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                VENUE: {schedule.day2.venue}
              </p>
              <div className="space-y-8 pl-6 border-l border-zinc-900">
                {schedule.day2.items.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute -left-[31px] top-1.5 w-2 h-2 bg-zinc-800 border border-zinc-700 rounded-full group-hover:border-blue-500 transition-colors" />
                    <span className="text-blue-500 font-mono text-xs tracking-widest block mb-1 font-accent">
                      {item.time}
                    </span>
                    <h4 className="text-white text-lg font-bold uppercase group-hover:text-blue-400 transition-colors font-heading">
                      {item.event}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Prizes & Rules */}
      <section id="prizes" className="relative z-10 py-24 bg-zinc-900/50 border-y border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div className="p-8 border border-zinc-800 bg-black">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 font-heading">Team Size</h4>
            <p className="text-4xl font-black text-white font-accent">2-4</p>
            <p className="text-zinc-500 text-sm mt-2 font-body">Members per Team</p>
          </div>
          <div className="p-8 border border-zinc-800 bg-black">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 font-heading">Registration</h4>
            <p className="text-4xl font-black text-white font-accent">₹250</p>
            <p className="text-zinc-500 text-sm mt-2 font-body">Per Team / Per Event</p>
          </div>
          <div className="p-8 border border-zinc-800 bg-black">
            <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4 font-heading">Eligibility</h4>
            <p className="text-2xl font-black text-white mt-1 font-heading">OPEN TO ALL</p>
            <p className="text-zinc-500 text-sm mt-3 font-body">College Students</p>
          </div>
        </div>

        <div className="max-w-xl mx-auto px-6">
          <a
            href="/pdfs/Yantra'26_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-6 border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold uppercase tracking-wider font-heading">Download Event Brochure</h4>
              <p className="text-blue-500 text-xs font-mono">ALL RULEBOOKS & GUIDELINES</p>
            </div>
            <span className="ml-auto text-blue-500 group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* 6. Contact Us */}
      <section id="contact" className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-16 font-heading">
            GET IN <span className="text-blue-600">TOUCH</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase font-heading text-blue-500">Event Leads</h4>
              <div className="space-y-4">
                <div className="p-4 border border-zinc-800 bg-zinc-950/50">
                  <p className="text-white font-bold font-heading">Kumar Anubhav</p>
                  <p className="text-blue-500 text-sm font-mono">+91 84006 07807</p>
                </div>
                <div className="p-4 border border-zinc-800 bg-zinc-950/50">
                  <p className="text-white font-bold font-heading">Chaitanya Chaurasia</p>
                  <p className="text-blue-500 text-sm font-mono">+91 93356 54011</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase font-heading text-blue-500">Student Coordinators</h4>
              <div className="space-y-4">
                <div className="p-4 border border-zinc-800 bg-zinc-950/50">
                  <p className="text-white font-bold font-heading">Vansh Garg</p>
                  <p className="text-blue-500 text-sm font-mono">+91 96671 52033</p>
                </div>
                <div className="p-4 border border-zinc-800 bg-zinc-950/50">
                  <p className="text-white font-bold font-heading">Dipankar Sinha</p>
                  <p className="text-blue-500 text-sm font-mono">+91 80021 80608</p>
                </div>
                <div className="p-4 border border-zinc-800 bg-zinc-950/50">
                  <p className="text-white font-bold font-heading">Saurabh Shinde</p>
                  <p className="text-blue-500 text-sm font-mono">+91 87672 83733</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase font-heading text-blue-500">Accommodation</h4>
              <div className="space-y-4">
                <div className="p-4 border border-zinc-800 bg-zinc-950/50">
                  <p className="text-white font-bold font-heading">Akib Ali</p>
                  <p className="text-blue-500 text-sm font-mono">+91 63911 02839</p>
                </div>
                <div className="p-4 border border-zinc-800 bg-zinc-950/50">
                  <p className="text-white font-bold font-heading">Amrit Patel</p>
                  <p className="text-blue-500 text-sm font-mono">+91 62077 01448</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase font-heading">Institutional Support</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>House of Geeks (Robotics Club)</p>
                <p>Institution's Innovation Council (IIC)</p>
                <p>IIIT Ranchi</p>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold uppercase font-heading">Socials</h4>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/riot_iiitranchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/social"
                >
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center group-hover/social:bg-blue-600 group-hover/social:border-blue-600 transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold leading-none mb-1">RIOT</p>
                    <p className="text-blue-500 text-[10px] font-mono whitespace-nowrap">@riot.iiitr</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/yantra_iiitranchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/social"
                >
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center group-hover/social:bg-blue-600 group-hover/social:border-blue-600 transition-all duration-300">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold leading-none mb-1">YANTRA</p>
                    <p className="text-blue-500 text-[10px] font-mono whitespace-nowrap">@yantra_iiitr</p>
                  </div>
                </a>
              </div>
              <p className="text-zinc-500 text-xs mt-4">
                Follow us for real-time updates and highlights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA / Footer */}
      <section className="relative z-10 py-40 bg-zinc-950 text-center overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white/5 uppercase tracking-tighter absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none font-heading">
            YANTRA '26
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase mb-8 relative font-heading">
            Ready to <span className="text-blue-500">Dominate?</span>
          </h3>
          <div className="flex flex-col items-center gap-6">
            <a
              href="#events"
              className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 font-heading"
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
