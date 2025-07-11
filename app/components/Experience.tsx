'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CompanyCarousel from './CompanyCarousel'

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'SONDA - BID  - Petrobras',
      period: 'Fev 2020 - Ago 2021',
      description: 'Sistema SEPSI de privacidade e segurança de dados. Backend Spring Boot com frontend Thymeleaf. Implementação de compliance e proteção de dados.',
      stack: 'Java, Spring Boot, PostgreSQL, Docker'
    },
    {
      title: 'Frontend Developer',
      company: 'INCA - Instituto Nacional de Câncer',
      period: 'Ago - 2021 - Fev - 2023',
      description: 'Desenvolvimento de interfaces Vue.js/Angular para laboratório oncológico nacional. Integração REST/SOAP APIs com sistemas Oracle legados. Processamento e visualização de dados clínicos críticos.',
      stack: 'Vue.js, Angular, .NET, Oracle SQL'
    },
    {
      title: 'Frontend Developer',
      company: 'E-hive Educational Platform',
      period: 'Fev - 2023 - Presente',
      description: 'Arquitetura monorepo com Nx Workspace e micro-frontends. Criação de 4 bibliotecas reutilizáveis (Design System, LMS Components, API Utils). Sistema multi-tenant com temas dinâmicos via CSS tokens.',
      stack: 'React 19, TypeScript, Styled Components, Jest'
    },
    {
      title: 'Frontend Developer',
      company: 'Fênix Educação',
      period: 'Fev - 2023 - Presente',
      description: 'Plataforma de cursos com performance otimizada (Core Web Vitals). SEO avançado com Next.js 14 SSR/SSG. Sistema de busca com filtros dinâmicos e checkout integrado.',
      stack: 'Next.js 14, React 18, TypeScript, TailwindCSS'
    },
  ]

  const companies = [
    { name: 'Petrobras', logo: '/img/petrobras.png' },
    { name: 'INCA', logo: '/img/inca.png' },
    { name: 'Global', logo: '/img/global.png' },
    { name: 'Claro', logo: '/img/claro.png' },
    { name: 'Sonda', logo: '/img/sonda.png' },
    { name: 'LBV', logo: '/img/lbv.png' },
    { name: 'SAS', logo: '/img/sas.png' },
  ]

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experiência</h2>
          
          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600 hidden md:block" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-12 md:mb-8 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900 hidden md:block" />
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    className="bg-black/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-500 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-gradient transition-all duration-300">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-blue-400 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-medium group-hover:bg-gray-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Companies Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-center text-white mb-8">
              Empresas que já trabalhei
            </h3>
            <CompanyCarousel companies={companies} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience