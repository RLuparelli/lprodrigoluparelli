'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      title: 'HealthCare Analytics Platform',
      subtitle: 'Sistema de Dados Clínicos - INCA',
      description: 'Dashboard para visualização de dados clínicos oncológicos com integração a sistemas Oracle legados. Processamento de grandes volumes de dados críticos com interface Vue.js responsiva e APIs REST/SOAP.',
      technologies: ['Vue.js', 'Angular', '.NET Core', 'Oracle SQL', 'REST APIs'],
      github: 'https://github.com/rluparelli',
      live: '#',
      highlight: 'Performance Crítica'
    },
    {
      title: 'EduTech Monorepo Platform',
      subtitle: 'Sistema Multi-tenant - E-hive',
      description: 'Arquitetura monorepo com Nx Workspace para plataforma educacional SaaS. Design System reutilizável, 4 bibliotecas de componentes LMS e sistema de temas dinâmicos com CSS tokens.',
      technologies: ['React 19', 'TypeScript', 'Nx Workspace', 'Styled Components', 'Storybook'],
      github: 'https://github.com/rluparelli',
      live: '#',
      highlight: 'Micro-frontends'
    },
    {
      title: 'SEPSI Security Dashboard',
      subtitle: 'Compliance & Data Protection - SONDA',
      description: 'Sistema de privacidade e segurança de dados para o BID. Backend Spring Boot robusto com frontend Thymeleaf, implementação de compliance LGPD e proteção avançada de dados sensíveis.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Thymeleaf'],
      github: 'https://github.com/rluparelli',
      live: '#',
      highlight: 'Enterprise Security'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projetos em Destaque</h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                  borderColor: "rgba(255, 255, 255, 0.2)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3
                }}
                className="bg-black/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 group relative overflow-hidden flex flex-col h-full"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all duration-300 leading-tight flex-1 pr-4">
                      {project.title}
                    </h3>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30 whitespace-nowrap">
                      {project.highlight}
                    </span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="flex-grow">
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-gray-700 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Links - Fixed at bottom */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  <motion.span 
                    className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Ver projeto →
                  </motion.span>
                </div>

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Interessado em ver mais projetos?
            </p>
            <motion.a
              href="https://github.com/rluparelli"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <Github size={20} />
              Ver no GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects