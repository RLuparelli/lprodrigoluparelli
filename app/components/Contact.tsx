'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'
import { useScrollAnimation, scrollVariants, staggerContainerVariants, staggerItemVariants } from '../hooks/useScrollAnimation'

const Contact = () => {
  const { ref, controls, isInView } = useScrollAnimation({ threshold: 0.1 })

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'luparelli@hotmail.com.br',
      href: 'mailto:luparelli@hotmail.com.br',
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section id="contact" className="bg-gray-900 py-20">
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
            Vamos Conversar?
          </motion.h2>
          
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              variants={staggerItemVariants}
              initial="hidden"
              animate={controls}
              className="mb-12 text-gray-300 text-lg leading-relaxed"
            >
              Interessado em colaborar ou tem algum projeto em mente? 
              <br />
              Entre em contato! Estou sempre aberto a novas oportunidades.
            </motion.p>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate={controls}
              className="gap-6 grid md:grid-cols-2 lg:grid-cols-4"
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
                    <div className="flex justify-center items-center bg-gray-800/60 group-hover:bg-gray-600/60 rounded-full w-14 h-14 group-hover:scale-110 transition-all duration-300">
                      <IconComponent size={26} className="text-gray-400 group-hover:text-white transition-all duration-300" />
                    </div>
                    <div className="text-center">
                      <h3 className="mb-1 font-semibold text-white">
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
              variants={staggerItemVariants}
              initial="hidden"
              animate={controls}
              className="mt-12"
            >
              <motion.a
                href="mailto:luparelli@hotmail.com.br"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 btn btn-primary"
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