import Image from "next/image"
import { CalendarIcon, EyeIcon, PencilIcon } from "@heroicons/react/24/outline"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface FeaturedCardProps {
  imageUrl: string
  title: string
  description: string
  date: string
  author: {
    name: string
    avatarUrl: string
    isOnline: boolean
  }
}

export function FeaturedCard({ imageUrl, title, description, date, author }: FeaturedCardProps) {
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative w-1/3">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
        <Badge variant="secondary" className="absolute left-2 top-2">
          Featured
        </Badge>
      </div>
      <div className="flex w-2/3 flex-col justify-between p-6">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mb-4 text-gray-600">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={author.avatarUrl} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-900">{author.name}</p>
              <div className="flex items-center">
                <div
                  className={`mr-1.5 h-2.5 w-2.5 rounded-full ${author.isOnline ? "bg-green-400" : "bg-gray-300"}`}
                ></div>
                <p className="text-xs text-gray-500">{author.isOnline ? "Online" : "Offline"}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-4 w-4" />
            {date}
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <Button variant="outline" size="sm">
            <EyeIcon className="mr-2 h-4 w-4" />
            View
          </Button>
          <Button variant="outline" size="sm">
            <PencilIcon className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>
    </div>
  )
}

