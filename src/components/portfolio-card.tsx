import Image from "next/image"

interface PortfolioCardProps {
  title: string
  description: string
  tags: string[]
  image: string
}

export function PortfolioCard({ title, description, tags, image }: PortfolioCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

