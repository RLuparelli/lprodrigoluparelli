'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const codeSnippet = [
    { type: 'keyword', text: 'const' },
    { type: 'variable', text: ' developer' },
    { type: 'operator', text: ' = {' },
  ]

  const codeLines = [
    "const developer = {",
    "  name: 'Rodrigo Luparelli',",
    "  skills: ['React', 'Next.js'],", 
    "  experience: '5+ years'",
    "};"
  ]

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-gray-400 text-lg">Olá, eu sou</span>
              <h1 className="text-5xl md:text-6xl font-bold mt-2">
                <span className="text-gradient">Rodrigo Luparelli</span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mt-2 font-light">
                Frontend Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-lg max-w-lg leading-relaxed"
            >
              Especialista em React/Next.js com 5+ anos de experiência em arquiteturas escaláveis,
              e-commerce, EdTech e sistemas críticos corporativos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleScrollToContact}
                className="btn btn-primary"
              >
                Entre em Contato
              </button>
              <button
                onClick={handleScrollToProjects}
                className="btn btn-secondary"
              >
                Ver Projetos
              </button>
            </motion.div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono text-sm shadow-2xl max-w-md w-full">
              {/* Terminal Header */}
              <div className="flex items-center mb-4 pb-3 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              {/* Code Content */}
              <div className="space-y-1">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    className="text-gray-300"
                  >
                    {line.includes('const') && (
                      <span>
                        <span className="text-purple-400">const</span>
                        <span className="text-green-400"> developer</span>
                        <span className="text-white"> = {'{'};</span>
                      </span>
                    )}
                    {line.includes('name:') && (
                      <span>
                        {'  '}
                        <span className="text-blue-400">name</span>
                        <span className="text-white">: </span>
                        <span className="text-yellow-400">&lsquo;Rodrigo Luparelli&rsquo;</span>
                        <span className="text-white">,</span>
                      </span>
                    )}
                    {line.includes('skills:') && (
                      <span>
                        {'  '}
                        <span className="text-blue-400">skills</span>
                        <span className="text-white">: [</span>
                        <span className="text-yellow-400">&lsquo;React&rsquo;</span>
                        <span className="text-white">, </span>
                        <span className="text-yellow-400">&lsquo;Next.js&rsquo;</span>
                        <span className="text-white">],</span>
                      </span>
                    )}
                    {line.includes('experience:') && (
                      <span>
                        {'  '}
                        <span className="text-blue-400">experience</span>
                        <span className="text-white">: </span>
                        <span className="text-purple-400">4</span>
                        <span className="text-white">+ years</span>
                      </span>
                    )}
                    {line === '};' && (
                      <span className="text-white">{'};'}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero