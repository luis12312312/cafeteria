import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ana Salazar',
    role: 'Diseñadora',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80',
    quote:
      'El flat white más equilibrado que he probado en Lima. Se nota el cariño y la técnica en cada taza.',
  },
  {
    name: 'Diego Rivas',
    role: 'Arquitecto',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80',
    quote:
      'Su selección de Cajamarca tiene una acidez cítrica deliciosa. El lugar invita a quedarse y leer.',
  },
  {
    name: 'Valeria Torres',
    role: 'Fotógrafa',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    quote:
      'Me encanta que trabajen directo con productores. El espresso de Amazonas es suave y dulce.',
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="section">
      <div className="container-lp">
        <div className="mb-10">
          <p className="chip">Testimonios</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">Lo que dicen</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-cafe-200 bg-white p-6 shadow-suave"
            >
              <div className="mb-4 flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-tinta/70">{t.role}</p>
                </div>
              </div>
              <p className="text-tinta/90">“{t.quote}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

