import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#historia', label: 'Historia' },
    { href: '#cafes', label: 'Cafés' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#testimonios', label: 'Opiniones' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`container-lp mt-5 rounded-2xl border border-cafe-200/70 ${scrolled ? 'bg-white/70' : 'bg-white/50'} backdrop-blur-xl shadow-suave`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#" className="group inline-flex items-center gap-2">
            <motion.span
              whileHover={{ rotate: -5, scale: 1.02 }}
              className="relative text-xl font-display font-semibold tracking-wide"
            >
              <span className="text-cafe-800">Origen</span>{' '}
              <span className="text-cafe-600">Tostado</span>
            </motion.span>
          </a>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-cafe-200/70 bg-white/70 px-2 py-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group rounded-full px-3 py-2 text-sm text-tinta/80 hover:text-tinta transition-colors"
                >
                  <span>{l.label}</span>
                  <span className="block h-[2px] w-full origin-left scale-x-0 bg-cafe-700 transition-transform group-hover:scale-x-100" />
                </a>
              ))}
            </div>
            <a href="#cafes" className="btn-primary">Ver menú</a>
          </div>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-lg p-2 border border-cafe-200 hover:bg-white/60 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-50 bg-white/80 backdrop-blur-xl"
            >
              <div className="container-lp h-full flex flex-col">
                <div className="flex items-center justify-between py-4">
                  <span className="text-lg font-display">Menú</span>
                  <button
                    aria-label="Cerrar menú"
                    onClick={() => setOpen(false)}
                    className="rounded-lg p-2 border border-cafe-200 hover:bg-white/70"
                  >
                    <X size={22} />
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-3">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-3xl font-display text-tinta hover:opacity-80"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
                <div className="pb-8">
                  <a href="#cafes" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">Ver menú</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
