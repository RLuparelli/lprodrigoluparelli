'use client'

import { motion } from 'framer-motion'
import { Heart, Coffee } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; 2024 Rodrigo Luparelli.</span>
            <span className="flex items-center gap-1">
              Desenvolvido com
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" />
              </motion.span>
              e muito
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee size={16} className="text-yellow-600" />
              </motion.span>
            </span>
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4"
          >
            <p className="text-gray-500 text-sm">
              Feito com React, Next.js e TailwindCSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer