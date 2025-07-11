'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useScrollAnimation, scrollVariants, staggerContainerVariants, staggerItemVariants, scaleVariants } from '../hooks/useScrollAnimation'

const About = () => {
  const { ref, controls, isInView } = useScrollAnimation({ threshold: 0.1 })
  const [counters, setCounters] = useState({ experience: 0, projects: 0, technologies: 0 })

  useEffect(() => {
    if (isInView) {
      const animateCounters = () => {
        const targets = { experience: 5, projects: 30, technologies: 20 }
        const duration = 2000
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
  }, [isInView])

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
          variants={scrollVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="section-title"
            variants={scrollVariants}
          >
            Sobre Mim
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate={controls}
              className="text-center space-y-6 mb-16"
            >
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                variants={staggerItemVariants}
              >
                Desenvolvedor Frontend com mais de 5 anos de experiência, especializado em React e Next.js.
                Tenho expertise em criar aplicações escaláveis e performáticas para diversos segmentos,
                incluindo e-commerce, EdTech e sistemas corporativos críticos.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                variants={staggerItemVariants}
              >
                Trabalhei em projetos para grandes empresas como Petrobras, INCA e Caixa,
                desenvolvendo soluções robustas que atendem milhares de usuários diariamente.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate={controls}
              className="grid md:grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={scaleVariants}
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