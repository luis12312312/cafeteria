import { motion } from 'framer-motion'
import { Sprout, Flame, Droplets } from 'lucide-react'

const pasos = [
  {
    title: 'Selección del grano',
    desc: 'Trabajamos con productores en altura. Catamos cada lote para garantizar calidad y trazabilidad.',
    Icon: Sprout,
  },
  {
    title: 'Tostado artesanal',
    desc: 'Tostamos en pequeñas partidas de forma local, ajustando curvas para resaltar dulzor y acidez equilibrada.',
    Icon: Flame,
  },
  {
    title: 'Preparación precisa',
    desc: 'Molienda al momento y recetas estandarizadas para una taza consistente y expresiva.',
    Icon: Droplets,
  },
]

export default function Proceso() {
  return (
    <section id="proceso" className="section">
      <div className="container-lp">
        <div className="mb-10">
          <p className="chip">Proceso</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">Cuidado en cada paso</h2>
          <p className="mt-2 text-tinta/80">Desde la finca hasta la barra, priorizamos calidad, origen y sostenibilidad.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {pasos.map(({ title, desc, Icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="paper rounded-2xl p-6 bg-white/60"
            >
              <div className="mb-4 inline-flex rounded-xl border border-cafe-200 bg-white p-3 text-cafe-700">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-tinta/80">{desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
