'use client'

import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Company {
  name: string
  logo?: string
}

interface CompanyCarouselProps {
  companies: Company[]
}

const CompanyCarousel = ({ companies }: CompanyCarouselProps) => {
  const autoScrollRef = useRef<any>(null)
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
      }
    },
    [
      AutoScroll({ 
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Função para pausar/retomar auto-scroll
  const handleMouseEnter = useCallback(() => {
    if (emblaApi) {
      const autoScrollPlugin = emblaApi.plugins().autoScroll
      if (autoScrollPlugin) {
        autoScrollPlugin.stop()
      }
    }
  }, [emblaApi])

  const handleMouseLeave = useCallback(() => {
    if (emblaApi) {
      const autoScrollPlugin = emblaApi.plugins().autoScroll
      if (autoScrollPlugin) {
        autoScrollPlugin.play()
      }
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      autoScrollRef.current = emblaApi.plugins().autoScroll
    }
  }, [emblaApi])

  // Create company logo with fallback
  const CompanyLogo = ({ company, index }: { company: Company; index: number }) => {
    const colors = [
      'from-blue-500 to-blue-700',
      'from-green-500 to-green-700', 
      'from-purple-500 to-purple-700',
      'from-red-500 to-red-700',
      'from-yellow-500 to-yellow-700',
      'from-pink-500 to-pink-700',
      'from-indigo-500 to-indigo-700',
      'from-teal-500 to-teal-700',
      'from-orange-500 to-orange-700',
      'from-cyan-500 to-cyan-700',
    ]
    
    const colorClass = colors[index % colors.length]
    
    if (company.logo) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden">
          <img
            src={company.logo}
            alt={company.name}
            className="max-w-full max-h-full object-contain transition-all duration-300"
            style={{ maxHeight: '80px', maxWidth: '160px' }}
            onError={(e) => {
              // Fallback se a imagem não carregar
              e.currentTarget.style.display = 'none'
              const fallback = e.currentTarget.nextElementSibling as HTMLElement
              if (fallback) fallback.style.display = 'flex'
            }}
          />
          <div className={`w-full h-full bg-gradient-to-br ${colorClass} rounded-lg hidden items-center justify-center shadow-lg`}>
            <span className="text-white font-bold text-xl drop-shadow-lg">
              {company.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      )
    }
    
    return (
      <div className={`w-full h-full bg-gradient-to-br ${colorClass} rounded-lg flex items-center justify-center shadow-lg`}>
        <span className="text-white font-bold text-xl drop-shadow-lg">
          {company.name.charAt(0).toUpperCase()}
        </span>
      </div>
    )
  }

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {companies.map((company, index) => (
            <motion.div
              key={`${company.name}-${index}`}
              className="flex-[0_0_50%] min-w-0 pl-4 md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="h-24 bg-white rounded-lg p-3 flex items-center justify-center group cursor-pointer">
                <CompanyLogo company={company} index={index} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-10 opacity-0 hover:opacity-100 group-hover:opacity-100"
        onClick={scrollPrev}
        aria-label="Previous companies"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-10 opacity-0 hover:opacity-100 group-hover:opacity-100"
        onClick={scrollNext}
        aria-label="Next companies"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

export default CompanyCarousel