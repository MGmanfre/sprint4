import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Star } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import heroImage from "@assets/generated_images/Women's_football_tournament_action_48ccd2f1.png";
import newsImage1 from "@assets/generated_images/Women's_football_team_celebration_caf22bd2.png";
import newsImage2 from "@assets/generated_images/Female_goalkeeper_making_save_627a8172.png";

export default function HomePage() {
  //todo: remove mock functionality
  const mockNews = [
    {
      id: 1,
      title: "Seleção brasileira feminina vence amistoso por 3x0",
      content: "A Seleção Brasileira de Futebol Feminino conquistou uma vitória expressiva no amistoso internacional contra a equipe visitante, demonstrando grande entrosamento e técnica em campo.",
      image: newsImage1,
      date: "15 de Janeiro, 2025"
    },
    {
      id: 2,
      title: "Para 2024: e o Brasil precisa para entrosar no futebol feminino",
      content: "A seleção de futebol feminino fez um único jogo em novembro de 2024, e há consenso de que é preciso mais atividade para desenvolver o time nacional.",
      image: newsImage2,
      date: "12 de Janeiro, 2025"
    },
    {
      id: 3,
      title: "Futebol feminino é o 4º mais de espera",
      content: "A procissão dos teve mais um bela festa. A Copa, realizada há mais de 8 anos, teve mais campanha subicilada e mostrava um crescimento robusto do ranking na categoria.",
      image: heroImage,
      date: "10 de Janeiro, 2025"
    }
  ];

  const handleReadMore = (newsId: number) => {
    console.log(`Leia Mais clicado para notícia ${newsId}`);
  };

  const handleCadastrar = () => {
    console.log('Cadastrar clicado');
    window.location.href = '/cadastro';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary-foreground rounded-full p-4 mb-4">
              <Trophy className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Copa Passa a Bola
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            O Passa a Bola é uma plataforma dedicada ao futebol feminino e suas inspirações. 
            Seu objetivo é popularizar e dar visibilidade ao futebol feminino.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                <h3 className="font-semibold text-primary-foreground mb-1">Seu objetivo é popularizar</h3>
                <p className="text-primary-foreground/80 text-sm">Dar visibilidade e promover o futebol feminino</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                <h3 className="font-semibold text-primary-foreground mb-1">Torneios e eventos</h3>
                <p className="text-primary-foreground/80 text-sm">Organizamos competições para todas as idades</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                <h3 className="font-semibold text-primary-foreground mb-1">Inspirações</h3>
                <p className="text-primary-foreground/80 text-sm">Plataforma dedicada ao futebol feminino</p>
              </CardContent>
            </Card>
          </div>
          
          <Button 
            onClick={handleCadastrar}
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg font-semibold"
            data-testid="button-participar"
          >
            Ver Jogos
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Últimas Notícias</h2>
            <p className="text-muted-foreground text-lg">
              Veja sobre as últimas notícias, classificações e conteúdos de Passa a Bola.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {mockNews.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                title={news.title}
                content={news.content}
                image={news.image}
                date={news.date}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/noticias'}
              data-testid="button-ver-todas-noticias"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}