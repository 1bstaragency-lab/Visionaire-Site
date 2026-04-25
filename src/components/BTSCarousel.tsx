"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "@/components/ui/parallax-floating"

const btsVideos = [
  { url: "/videos/bts/bts-1.mov" },
  { url: "/videos/bts/bts-2.mov" },
  { url: "/videos/bts/bts-3.mov" },
  { url: "/videos/bts/bts-4.mov" },
  { url: "/videos/bts/bts-5.mov" },
  { url: "/videos/bts/bts-6.mov" },
  { url: "/videos/bts/bts-7.mov" },
  { url: "/videos/bts/bts-8.mov" },
]

export const BTSCarousel = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("video", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
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
          bringing visions to life
        </div>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[10%] left-[5%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[0].url}
            autoPlay loop muted playsInline
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[15%] left-[28%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[1].url}
            autoPlay loop muted playsInline
            className="w-28 h-28 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[5%] left-[60%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[2].url}
            autoPlay loop muted playsInline
            className="w-32 h-44 md:w-48 md:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[85%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[3].url}
            autoPlay loop muted playsInline
            className="w-24 h-24 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>

        <FloatingElement depth={1.5} className="top-[55%] left-[8%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[4].url}
            autoPlay loop muted playsInline
            className="w-32 h-32 md:w-48 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[65%] left-[75%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[5].url}
            autoPlay loop muted playsInline
            className="w-36 h-36 md:w-52 md:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>

        <FloatingElement depth={3.5} className="top-[65%] left-[20%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[6].url}
            autoPlay loop muted playsInline
            className="w-40 h-40 md:w-56 md:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[75%] left-[55%]">
          <motion.video
            initial={{ opacity: 0 }}
            src={btsVideos[7].url}
            autoPlay loop muted playsInline
            className="w-28 h-28 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-md opacity-80 hover:opacity-100 filter grayscale hover:grayscale-0"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}
