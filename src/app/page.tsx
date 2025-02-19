"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Github, Twitter, Linkedin, Code, Briefcase, Coffee, User, GraduationCap } from "lucide-react"

const cards = [
  {
    title: "Name",
    content: "Julia Tseng",
    icon: User,
    color: "from-pink-200 to-pink-100",
    image: "/IMG_6764.jpg",
  },
  { title: "Title", content: "Customer Success Manager", icon: Code, color: "from-blue-200 to-blue-100" },
  { title: "Hobbies", content: "Hiking, pilates, knitting my own clothes", icon: Coffee, color: "from-green-200 to-green-100" },
  {
    title: "Background",
    content: "Developer obsessed with customer satisfaction",
    icon: GraduationCap,
    color: "from-yellow-200 to-yellow-100",
  },
]

const projects = [
  { title: "Playscene", description: "Generate a Spotify playlist from an image" },
  { title: "Mood Board Creator", description: "Design your digital happy place" },
  { title: "Chill Beats Generator", description: "AI-powered lofi hip hop beats" },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gray-950 p-4 md:p-8 flex items-center justify-center">
      <div className="relative w-full max-w-7xl aspect-[16/9]">
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} index={index} mounted={mounted} />
        ))}
        <ProjectsCard mounted={mounted} />
        <ContactCard mounted={mounted} />
      </div>
    </main>
  )
}

function CardComponent({ title, content, icon: Icon, color, index, mounted, image }) {
  const positions = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-1/4 right-0"]

  const sizes = [
    "w-80 h-auto", // Increased width for the Name card
    "w-72 h-auto",
    "w-80 h-auto",
    "w-68 h-auto",
  ]

  const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"]

  return (
    <div
      className={`absolute bg-gradient-to-br ${color} rounded-lg shadow-lg p-6 ${positions[index]} ${sizes[index]} ${rotations[index]} transition-all duration-500 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        {Icon && <Icon className="mr-2" size={24} />}
        {title}
      </h2>
      {image && (
        <div className="mb-4 flex justify-center">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={content}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
      <p className="text-gray-700 text-center">{content}</p>
    </div>
  )
}

function ProjectsCard({ mounted }) {
  return (
    <div
      className={`absolute top-1/4 left-1/3 bg-gradient-to-br from-purple-200 to-purple-100 rounded-lg shadow-lg p-6 w-96 rotate-1 transition-all duration-500 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: "400ms" }}
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Briefcase className="mr-2" size={24} />
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded shadow transition-transform duration-300 hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactCard({ mounted }) {
  return (
    <div
      className={`absolute bottom-0 right-1/4 bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg shadow-lg p-6 w-64 -rotate-1 transition-all duration-500 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: "500ms" }}
    >
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <div className="flex justify-center space-x-6">
        {[
          { Icon: Github, href: "https://github.com/jteesang" },
          { Icon: Twitter, href: "https://twitter.com/jteesang" },
          { Icon: Linkedin, href: "https://linkedin.com/in/juliamtseng" },
        ].map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110"
          >
            <Icon size={32} />
          </a>
        ))}
      </div>
    </div>
  )
}

