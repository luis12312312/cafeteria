import { motion } from 'framer-motion'

const cafes = [
  {
    name: 'Cusco – Valle Sagrado',
    notes: ['Cacao', 'Florales', 'Caramelo'],
    intensity: 4,
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Cajamarca – Jaén',
    notes: ['Cítrico', 'Dulce', 'Limpio'],
    intensity: 3,
    img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Amazonas – Rodríguez de Mendoza',
    notes: ['Frutos rojos', 'Miel', 'Suave'],
    intensity: 2,
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
]

function Intensidad({ value }) {
  return (
    <div className="mt-2 flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-2 w-6 rounded-full ${i < value ? 'bg-cafe-700' : 'bg-cafe-300'}`}
        />
      ))}
    </div>
  )
}

export default function Cafes() {
  return (
    <section id="cafes" className="section">
      <div className="container-lp">
        <div className="mb-10">
          <p className="chip">Nuestros cafés</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">Origen y carácter</h2>
          <p className="mt-2 text-tinta/80">Lotes seleccionados y tostados en Lima, en pequeñas partidas.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cafes.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-cafe-200 bg-white"
            >
              <div className="relative">
                <img src={c.img} alt={c.name} className="h-48 w-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{c.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {c.notes.map((n) => (
                    <span key={n} className="chip">{n}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-tinta/70">Intensidad</p>
                  <Intensidad value={c.intensity} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

