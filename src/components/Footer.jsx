import { Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const links = [
    { name: 'Historia', href: '#historia' },
    { name: 'Nuestros Cafés', href: '#cafes' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'En tienda', href: '#experiencia' },
    { name: 'Opiniones', href: '#testimonios' },
  ]
  return (
    <footer className="section pt-10">
      <div className="container-lp">
        <div className="rounded-3xl border border-cafe-200 bg-white/70 p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-display font-semibold text-cafe-800">Origen Tostado</p>
              <p className="mt-2 text-tinta/70 text-sm">Café de especialidad tostado artesanalmente.</p>
            </div>
            <div className="flex gap-4">
              <a aria-label="Instagram" href="#" className="rounded-lg border border-cafe-200 p-2 hover:bg-white/80">
                <Instagram size={18} />
              </a>
              <a aria-label="Email" href="mailto:hola@origentostado.pe" className="rounded-lg border border-cafe-200 p-2 hover:bg-white/80">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-tinta/80 hover:text-tinta">
                {l.name}
              </a>
            ))}
          </div>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cafe-300 to-transparent" />
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-tinta/60">
              © {new Date().getFullYear()} Origen Tostado. Todos los derechos reservados.
            </p>
            <p className="text-xs text-tinta/60">Hecho con cuidado</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
