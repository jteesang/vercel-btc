"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl mb-6">
            I'm a passionate web developer with a knack for creating vibey digital experiences. When I'm not coding, you
            can find me exploring new coffee shops or practicing my ukulele skills.
          </p>
          <motion.div className="inline-block" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <span className="text-4xl">🚀</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

