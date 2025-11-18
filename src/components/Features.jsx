import { motion, useScroll, useTransform } from 'framer-motion'
import { Leaf, Recycle, Truck, Plant, ShieldCheck } from 'lucide-react'
import { useRef } from 'react'

export default function Features() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  const items = [
    {
      icon: Leaf,
      title: 'Picked at Peak',
      desc: 'We harvest at the perfect moment so every bite bursts with flavor.'
    },
    {
      icon: Plant,
      title: 'Soil-first Farming',
      desc: 'Regenerative practices that nourish the land and our community.'
    },
    {
      icon: Truck,
      title: 'Same-day Delivery',
      desc: 'From field to doorstep in hours, not days.'
    },
    {
      icon: Recycle,
      title: 'Zero-waste Packing',
      desc: 'Returnable crates and compostable wraps keep trash out of landfills.'
    },
    {
      icon: ShieldCheck,
      title: 'No Nonsense',
      desc: 'No pesticides you can’t pronounce. Just clean, honest produce.'
    }
  ]

  return (
    <section id="features" ref={ref} className="relative py-28 overflow-hidden">
      <motion.div style={{ y }} className="pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why choose FreshFields?</h2>
          <p className="mt-3 text-emerald-100/80">We make eating better effortless with responsible farming and thoughtful delivery.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-emerald-500/20 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-lime-400 text-emerald-950 shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-emerald-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
