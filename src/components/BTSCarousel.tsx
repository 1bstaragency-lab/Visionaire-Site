"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "@/components/ui/parallax-floating"

const exampleImages = [
  { url: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=800&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1579294273574-e36bf265c0ec?q=80&w=800&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=800&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1527011045974-4b5c7774dce5?q=80&w=800&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1518134346374-184f9d21cb2c?q=80&w=800&auto=format&fit=crop" },
  { url: "https://images.unsplash.com/photo-1585863955675-9e658421c97a?q=80&w=800&auto=format&fit=crop" },
]

export const BTSCarousel = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div
      className="relative flex w-full h-[600px] md:h-[800px] justify-center items-center bg-black overflow-hidden my-16 border-y border-white/5"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-6 items-center flex flex-col px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className="text-3xl md:text-5xl lg:text-7xl z-50 text-white font-light tracking-widest uppercase font-blocky">
          What our sets look like
        </p>
        <div className="z-50 hover:scale-105 transition-transform bg-white text-black font-semibold uppercase tracking-widest rounded-sm px-6 py-3 cursor-pointer text-xs md:text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          bringing visions alive
        </div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[10%] left-[5%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[15%] left-[28%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            className="w-28 h-28 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[5%] left-[60%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            className="w-32 h-44 md:w-48 md:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[85%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            className="w-24 h-24 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>

        <FloatingElement depth={1.5} className="top-[55%] left-[8%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            className="w-32 h-32 md:w-48 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[65%] left-[75%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            className="w-36 h-36 md:w-52 md:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>

        <FloatingElement depth={3.5} className="top-[65%] left-[20%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            className="w-40 h-40 md:w-56 md:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[75%] left-[55%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            className="w-28 h-28 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}
