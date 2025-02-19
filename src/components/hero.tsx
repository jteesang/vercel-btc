"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-4">Hello, I'm YourName</h1>
        <motion.p
          className="text-2xl"
          animate={{
            color: ["#f0f0f0", "#ff79c6", "#8be9fd", "#50fa7b", "#f0f0f0"],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          Web Developer | Designer | Creative Thinker
        </motion.p>
      </motion.div>
    </section>
  )
}

