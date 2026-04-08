import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const heroImg = 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80'
const cardImg = 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1600&q=80'
const beans1 = 'https://images.unsplash.com/photo-1504630083234-140607ff2f66?auto=format&fit=crop&w=800&q=80'
const beans2 = 'https://images.unsplash.com/photo-1517959105821-eaf2591984b2?auto=format&fit=crop&w=800&q=80'

export default function Hero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const dampedX = useSpring(x, { stiffness: 100, damping: 12, mass: 0.4 })
  const dampedY = useSpring(y, { stiffness: 100, damping: 12, mass: 0.4 })
  const rotateX = useTransform(dampedY, [-50, 50], [8, -8])
  const rotateY = useTransform(dampedX, [-50, 50], [-8, 8])

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx / 4)
    y.set(dy / 4)
  }
  const onLeave = () => {
    x.set(0); y.set(0)
  }

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center section">
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden rounded-b-[2.5rem]">
        <img
          src={heroImg}
          alt="Café preparado con cuidado en barra"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(31,23,19,0.1),rgba(31,23,19,0.55))]" />
      </div>
      <div className="container-lp">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-xs uppercase tracking-wider text-tinta"
        >
          Cafetería de especialidad
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="max-w-3xl font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
        >
          Del origen a tu taza
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-5 max-w-xl text-lg text-white/90"
        >
          Trabajamos con productores locales y tostamos lotes pequeños para resaltar el carácter único de cada grano.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#historia" className="btn-primary bg-white text-tinta hover:bg-white/90">
            Conócenos <ArrowRight size={18} />
          </a>
          <a href="#cafes" className="btn-outline border-white/70 text-white hover:text-tinta hover:border-cafe-300">
            Ver menú
          </a>
        </motion.div>

        <div className="mt-12">
          <div
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: 1000 }}
            className="relative inline-block"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative w-[min(90vw,760px)] rounded-3xl border border-white/60 bg-white/70 shadow-suave overflow-hidden"
            >
              <img
                src={cardImg}
                alt="Latte art servido en barra"
                className="h-[320px] w-full object-cover"
              />
              <div
                style={{ transform: 'translateZ(40px)' }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute right-4 top-4 chip">Tostado artesanal</div>
            </motion.div>
            <motion.img
              src={beans1}
              alt=""
              aria-hidden
              initial={{ y: 0, rotate: -12 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute -right-6 -top-6 h-20 w-20 rounded-full object-cover border border-white/70 shadow-suave"
            />
            <motion.img
              src={beans2}
              alt=""
              aria-hidden
              initial={{ y: 0, rotate: 8 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              className="absolute -left-6 -bottom-6 h-20 w-20 rounded-full object-cover border border-white/70 shadow-suave"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
