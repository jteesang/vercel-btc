"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a href="#" className="text-2xl font-bold" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          YourName
        </motion.a>
        <ul className="flex space-x-6">
          {["About", "Projects", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-gray-300">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

