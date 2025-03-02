import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-black/50 transition-all hover:bg-black/70">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-purple-900/20 text-white/90">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

