import { motion } from 'framer-motion'

const imgs = [
  'https://images.unsplash.com/photo-1507133750040-4a8f57021563?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1502465771179-51f3535da42a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80',
]

export default function Experiencia() {
  return (
    <section id="experiencia" className="section">
      <div className="container-lp">
        <div className="mb-10">
          <p className="chip">En tienda</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">Una barra para quedarse</h2>
          <p className="mt-2 text-tinta/80">
            Un espacio luminoso y cálido, con baristas que disfrutan conversar sobre café.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {imgs.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-cafe-200"
            >
              <img src={src} alt="Ambiente de la cafetería" className="h-64 w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
