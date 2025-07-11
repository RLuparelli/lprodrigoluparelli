'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'luparelli@exemplo.com',
      href: 'mailto:luparelli@exemplo.com',
      color: 'hover:text-red-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rodrigo-luparelli-4881a1198',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub',
      href: 'https://github.com/rluparelli',
      color: 'hover:text-purple-400'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'WhatsApp',
      href: 'https://wa.me/5521972326040',
      color: 'hover:text-green-400'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Vamos Conversar?</h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-gray-300 mb-12 leading-relaxed"
            >
              Interessado em colaborar ou tem algum projeto em mente? 
              <br />
              Entre em contato! Estou sempre aberto a novas oportunidades.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {contactLinks.map((contact) => {
                const IconComponent = contact.icon
                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                      borderColor: "rgba(255, 255, 255, 0.2)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25,
                      duration: 0.2
                    }}
                    className={`bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col items-center space-y-4 group ${contact.color} relative overflow-hidden`}
                  >
                    <div className="w-14 h-14 bg-gray-800/60 rounded-full flex items-center justify-center group-hover:bg-gray-600/60 transition-all duration-300 group-hover:scale-110">
                      <IconComponent size={26} className="text-gray-400 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-white font-semibold mb-1">
                        {contact.label}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {contact.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12"
            >
              <motion.a
                href="mailto:luparelli@exemplo.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Enviar Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact