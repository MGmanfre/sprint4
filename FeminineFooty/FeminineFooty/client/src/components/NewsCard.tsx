import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
}

export default function NewsCard({ id, title, content, image, date }: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="h-4 w-4" />
          <span data-testid="text-date">{date}</span>
        </div>
        <h3 className="font-bold text-xl mb-3 line-clamp-2 text-gray-900" data-testid="text-title">{title}</h3>
        <p className="text-gray-600 line-clamp-3 leading-relaxed" data-testid="text-content">{content}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/noticia/${id}`} className="w-full">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            data-testid="button-leia-mais"
          >
            Leia Mais
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}