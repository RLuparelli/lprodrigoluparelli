'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation, scrollVariants, staggerContainerVariants } from '../hooks/useScrollAnimation'

const Skills = () => {
  const { ref, controls, isInView } = useScrollAnimation({ threshold: 0.1 })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React 19', 'Next.js 14', 'TypeScript', 'TailwindCSS', 'Vue.js', 'Angular']
    },
    {
      title: 'Architecture',
      skills: ['Monorepos', 'Micro-frontends', 'Design Systems', 'Nx Workspace', 'Performance Optimization']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', '.NET Core', 'PostgreSQL', 'Oracle SQL', 'REST APIs', 'SOAP APIs']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'CI/CD', 'Git & GitHub', 'Jest & Testing', 'Webpack', 'Vite']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
        staggerChildren: 0.05
      }
    }
  }

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-black">
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
            Tech Stack
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 group"
              >
                <h3 className="text-lg font-semibold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Simple Stats */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={controls}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-gray-400">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-sm text-gray-400">Projetos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-sm text-gray-400">Tecnologias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">7+</div>
                <div className="text-sm text-gray-400">Empresas</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills