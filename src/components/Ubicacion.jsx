import { motion } from 'framer-motion'
import { MapPin, Clock } from 'lucide-react'

export default function Ubicacion() {
  return (
    <section id="visitanos" className="section">
      <div className="container-lp">
        <div className="mb-10">
          <p className="chip">Ubicación y horario</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">Visítanos en Miraflores</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl overflow-hidden border border-cafe-200"
          >
            <iframe
              title="Mapa Miraflores"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-77.05%2C-12.14%2C-77.01%2C-12.10&layer=mapnik&marker=-12.12%2C-77.03"
              className="w-full h-[320px]"
            ></iframe>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="paper rounded-2xl bg-white/70 p-6"
          >
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-cafe-700" />
              <div>
                <p className="font-semibold">Av. La Paz 123, Miraflores</p>
                <p className="text-tinta/80">Lima, Perú</p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-cafe-700" />
              <div>
                <p className="font-semibold">Horarios</p>
                <p className="text-tinta/80">Lun–Vie: 7:00–20:00</p>
                <p className="text-tinta/80">Sáb–Dom: 8:00–21:00</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#cafes" className="btn-primary">Ver menú</a>
              <a href="#historia" className="btn-outline">Conócenos</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

