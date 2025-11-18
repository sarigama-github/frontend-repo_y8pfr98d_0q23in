import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const produce = [
  { name: 'Heirloom Tomatoes', emoji: '🍅', note: 'sweet & juicy', price: '$4.50/lb' },
  { name: 'Crisp Cucumbers', emoji: '🥒', note: 'cool crunch', price: '$2.80/lb' },
  { name: 'Rainbow Carrots', emoji: '🥕', note: 'earthy bite', price: '$3.20/lb' },
  { name: 'Baby Spinach', emoji: '🥬', note: 'tender leaves', price: '$3.80/bag' },
  { name: 'Golden Corn', emoji: '🌽', note: 'buttery sweet', price: '$5.00/6pc' },
  { name: 'Fresh Basil', emoji: '🌿', note: 'aromatic', price: '$1.80/bunch' },
]

export default function Produce() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6])

  return (
    <section id="produce" ref={ref} className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Today’s harvest</h2>
            <p className="mt-2 text-emerald-100/80">Curated for flavor and freshness. Limited quantities daily.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-400 to-lime-400 px-5 py-2 font-semibold text-emerald-950 shadow">View all</a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {produce.map((p, i) => (
            <motion.div
              key={p.name}
              style={{ rotate }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-white/5 p-5 backdrop-blur"
            >
              <div className="absolute -right-6 -top-6 text-8xl opacity-10 select-none">{p.emoji}</div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.name}</h3>
                  <p className="text-emerald-100/70 text-sm">{p.note}</p>
                </div>
                <span className="rounded-lg bg-emerald-400/10 px-3 py-1 text-emerald-200/90 text-sm border border-emerald-400/20">
                  {p.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
