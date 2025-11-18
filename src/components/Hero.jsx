import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

      {/* 3D Spline canvas */}
      <div className="absolute inset-0 -z-10 opacity-90">
        {/* Public vegetable-themed Spline scene. Falls back gracefully if network blocks */}
        <Spline scene="https://prod.spline.design/2AqTIfhH3d1xLw3r/scene.splinecode" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 sm:pt-36">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-emerald-200/90">
              Farm Fresh • Delivered Daily
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight text-white">
              Honest vegetables. Vibrant flavor.
            </h1>
            <p className="mt-4 text-emerald-100/90 text-lg max-w-xl mx-auto md:mx-0">
              Locally grown produce picked at peak ripeness and delivered with care. Taste the difference of sustainable farming.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="#produce" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-lime-400 px-6 py-3 font-semibold text-emerald-950 shadow hover:shadow-emerald-400/30 transition-shadow">Shop seasonal box</a>
              <a href="#stories" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white/90 hover:bg-white/10">Our story</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-emerald-400/20 bg-white/5 backdrop-blur"
          >
            {/* Decorative floating veggies */}
            <div className="absolute inset-0">
              <FloatingVeggie delay={0} y={8}>
                🥦
              </FloatingVeggie>
              <FloatingVeggie delay={0.3} y={12} className="left-10 top-16">
                🥕
              </FloatingVeggie>
              <FloatingVeggie delay={0.6} y={10} className="right-8 bottom-14">
                🥬
              </FloatingVeggie>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-200/70"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
}

function FloatingVeggie({ children, delay = 0, y = 10, className = "" }) {
  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl ${className}`}
      animate={{ y: [0, -y, 0] }}
      transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  )
}
