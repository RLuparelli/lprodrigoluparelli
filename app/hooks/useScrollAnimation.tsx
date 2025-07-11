'use client'

import { useEffect, useRef, useState } from 'react'
import { useAnimation } from 'framer-motion'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options
  
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const [isInView, setIsInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        setIsInView(isVisible)

        if (isVisible) {
          controls.start('visible')
          if (triggerOnce) {
            setHasAnimated(true)
          }
        } else {
          if (!triggerOnce || !hasAnimated) {
            controls.start('hidden')
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [controls, threshold, rootMargin, triggerOnce, hasAnimated])

  return { ref, controls, isInView }
}

// Variantes de animação predefinidas
export const scrollVariants = {
  hidden: {
    opacity: 0,
    y: 50,
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

export const slideInLeftVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

export const slideInRightVariants = {
  hidden: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

export const scaleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export const staggerItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
}