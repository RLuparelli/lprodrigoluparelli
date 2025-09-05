'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CompanyCarousel from './CompanyCarousel'

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  const experiences = [
    {
      title: 'Desenvolvedor Full Stack Sênior',
      company: 'Freelance - Sistema Multi-Tenant SaaS Healthcare',
      period: 'Ago 2024 - Presente',
      description: 'Arquitetei solução fullstack Node.js/React para múltiplas empresas com MongoDB e PostgreSQL. Implementei isolamento completo entre tenants com 100% de segurança. Sistema de autenticação JWT com contexto de empresa e rate limiting por role.',
      stack: 'Node.js, React, TypeScript, PostgreSQL, MongoDB, Redis, RabbitMQ, Prisma ORM, Azure, Docker'
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'SONDA - Projeto SEPSI (BID)',
      period: 'Fev 2023 - Ago 2024',
      description: 'Desenvolvi microserviços em Node.js/Java integrando com MongoDB e PostgreSQL para 50.000+ usuários. Configurei RabbitMQ para mensageria entre 12 microserviços. Utilizei Redis para cache distribuído, melhorando response time em 30%.',
      stack: 'Node.js, React, MongoDB, PostgreSQL, Redis, RabbitMQ, Docker, Kubernetes'
    },
    {
      title: 'Desenvolvedor Backend',
      company: 'SONDA - Petrobras (Sistemas Críticos SOX)',
      period: 'Nov 2021 - Fev 2023',
      description: 'Desenvolvi APIs RESTful em Java/Node.js integradas com Oracle Database. Implementei testes unitários com 80% cobertura. Otimizei queries Oracle processando 500K+ transações diárias.',
      stack: 'Node.js, Java, Oracle 12c, REST APIs, Jest, JUnit, Docker'
    },
    {
      title: 'Desenvolvedor de Integração',
      company: 'SONDA - Caixa Econômica Federal (via SAS)',
      period: 'Out 2020 - Nov 2021',
      description: 'Automatizei pipelines de dados reduzindo processamento manual em 50%. Implementei modelos de risco processando R$ 5M+ em transações diárias. Reduzi tempo de relatórios regulatórios em 35%.',
      stack: 'Python, SAS, SQL Server, Power BI, ETL, Pandas, NumPy'
    },
  ]

  const projects = [
    {
      title: 'Plataforma EAD - Fênix Educação',
      description: 'Plataforma com SEO otimizado (Lighthouse 90+), aumentando tráfego orgânico em 80%.',
      stack: 'Next.js, TypeScript, TailwindCSS'
    },
    {
      title: 'Sistema de Detecção de EPIs',
      description: 'IA para segurança do trabalho com 85% de acurácia, reduzindo incidentes em 30%.',
      stack: 'Python, YOLO, Computer Vision'
    }
  ]

  const companies = [
    { name: 'Petrobras', logo: 'https://github.com/RLuparelli/lprodrigoluparelli/blob/main/img/petrobras.png?raw=true' },
    { name: 'INCA', logo: 'https://github.com/RLuparelli/lprodrigoluparelli/blob/main/img/inca.png?raw=true' },
    { name: 'Caixa', logo: 'https://github.com/RLuparelli/lprodrigoluparelli/blob/main/img/caixa.png?raw=true' },
    { name: 'BID', logo: 'https://github.com/RLuparelli/lprodrigoluparelli/blob/main/img/bid.png?raw=true' },
    { name: 'Sonda', logo: 'https://github.com/RLuparelli/lprodrigoluparelli/blob/main/img/sonda.png?raw=true' },
    { name: 'SAS', logo: 'https://github.com/RLuparelli/lprodrigoluparelli/blob/main/img/sas.png?raw=true' },
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
    <section id="experience" className="bg-gray-900 py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experiência Profissional</h2>
          
          {/* Timeline */}
          <div className="mx-auto mb-16 max-w-4xl">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="hidden md:block left-1/2 absolute bg-gradient-to-b from-blue-500 to-purple-500 w-0.5 h-full -translate-x-1/2 transform" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative mb-12 md:mb-8 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block left-1/2 z-10 absolute bg-white border-4 border-blue-500 rounded-full w-4 h-4 -translate-x-1/2 transform" />
                  
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    className="group bg-black/90 backdrop-blur-sm p-6 border border-gray-700 hover:border-blue-500/50 rounded-xl transition-all duration-300"
                  >
                    <div className="flex md:flex-row flex-col justify-between items-start mb-3">
                      <h3 className="font-semibold text-white group-hover:text-blue-400 text-xl transition-all duration-300">
                        {exp.title}
                      </h3>
                      <span className="bg-gray-800 mt-2 md:mt-0 px-3 py-1 rounded-full text-gray-400 text-sm">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="mb-4 font-medium text-blue-400 text-lg">
                      {exp.company}
                    </h4>
                    <p className="mb-4 text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-800 group-hover:bg-gray-700 px-2 py-1 rounded font-medium text-gray-300 group-hover:text-blue-300 text-xs transition-all duration-300"
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

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="mb-8 font-semibold text-white text-2xl text-center">
              Projetos Destacados
            </h3>
            <div className="gap-6 grid md:grid-cols-2 mx-auto max-w-4xl">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-black/90 backdrop-blur-sm p-6 border border-gray-700 hover:border-purple-500/50 rounded-xl transition-all duration-300"
                >
                  <h4 className="mb-2 font-semibold text-white text-lg">{project.title}</h4>
                  <p className="mb-4 text-gray-300 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-900/30 px-2 py-1 rounded font-medium text-purple-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Companies Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="mb-8 font-semibold text-white text-2xl text-center">
              Empresas e Instituições
            </h3>
            <CompanyCarousel companies={companies} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience