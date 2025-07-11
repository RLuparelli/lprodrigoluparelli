'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [counters, setCounters] = useState({ experience: 0, projects: 0, technologies: 0 })

  useEffect(() => {
    if (inView) {
      const animateCounters = () => {
        const targets = { experience: 5, projects: 30, technologies: 20 }
        const duration = 3000
        const steps = 30
        
        Object.keys(targets).forEach((key) => {
          const target = targets[key as keyof typeof targets]
          const increment = target / steps
          let current = 0
          
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCounters(prev => ({ ...prev, [key]: target }))
              clearInterval(timer)
            } else {
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }))
            }
          }, duration / steps)
        })
      }
      
      animateCounters()
    }
  }, [inView])

  const stats = [
    { number: counters.experience, label: 'Anos de Experiência', suffix: '+' },
    { number: counters.projects, label: 'Projetos Concluídos', suffix: '+' },
    { number: counters.technologies, label: 'Tecnologias', suffix: '+' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Desenvolvedor Frontend com mais de 5 anos de experiência, especializado em React e Next.js.
                Tenho expertise em criar aplicações escaláveis e performáticas para diversos segmentos,
                incluindo e-commerce, EdTech e sistemas corporativos críticos.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Trabalhei em projetos para grandes empresas como Petrobras, INCA e Caixa,
                desenvolvendo soluções robustas que atendem milhares de usuários diariamente.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  className="text-center bg-black border border-gray-700 rounded-lg p-6 card-hover"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About