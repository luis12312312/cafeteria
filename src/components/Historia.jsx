import { motion } from 'framer-motion'

const img = 'https://images.unsplash.com/photo-1519162802294-93cb372f8533?auto=format&fit=crop&w=1400&q=80'

export default function Historia() {
  return (
    <section id="historia" className="section">
      <div className="container-lp">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 chip">Nuestra historia</p>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-tinta">Un viaje al origen</h2>
            <p className="mt-4 text-tinta/80">
              Origen Tostado nace del recorrido de <span className="font-medium text-tinta">Carlos Mendoza</span>, quien
              descubrió el café de altura durante una travesía por la sierra peruana. En una finca familiar de Cusco,
              probó una taza con notas a cacao y flores andinas que cambió su manera de entender el café.
            </p>
            <p className="mt-3 text-tinta/80">
              Hoy trabajamos directo con pequeños productores y tostamos localmente, cuidando cada detalle para que el
              carácter de cada región llegue intacto a tu taza.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-3xl bg-cafe-300/40 blur-2xl" />
              <img
                src={img}
                alt="Finca cafetalera en los Andes"
                className="relative rounded-3xl border border-cafe-200 shadow-suave"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
