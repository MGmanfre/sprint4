import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import NewsCard from "@/components/NewsCard";
import heroImage from "@assets/generated_images/Women's_football_tournament_action_48ccd2f1.png";
import newsImage1 from "@assets/generated_images/Women's_football_team_celebration_caf22bd2.png";
import newsImage2 from "@assets/generated_images/Female_goalkeeper_making_save_627a8172.png";

export default function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  //todo: remove mock functionality
  const mockNews = [
    {
      id: 1,
      title: "Seleção brasileira feminina vence amistoso por 3x0",
      content: "A Seleção Brasileira de Futebol Feminino conquistou uma vitória expressiva no amistoso internacional contra a equipe visitante, demonstrando grande entrosamento e técnica em campo. O jogo foi marcado por belas jogadas e gols espetaculares.",
      image: newsImage1,
      date: "15 de Janeiro, 2025"
    },
    {
      id: 2,
      title: "Para 2024: e o Brasil precisa para entrosar no futebol feminino",
      content: "A seleção de futebol feminino fez um único jogo em novembro de 2024, e há consenso de que é preciso mais atividade para desenvolver o time nacional. Especialistas discutem estratégias para melhorar o desempenho da equipe.",
      image: newsImage2,
      date: "12 de Janeiro, 2025"
    },
    {
      id: 3,
      title: "Futebol feminino é o 4º mais de espera",
      content: "A procissão dos teve mais um bela festa. A Copa, realizada há mais de 8 anos, teve mais campanha subicilada e mostrava um crescimento robusto do ranking na categoria. O evento reuniu milhares de torcedores.",
      image: heroImage,
      date: "10 de Janeiro, 2025"
    },
    {
      id: 4,
      title: "Campeonato estadual de futebol feminino tem início",
      content: "O campeonato estadual de futebol feminino iniciou com grande expectativa. Várias equipes se inscreveram para participar da competição que promete revelar novos talentos do futebol feminino brasileiro.",
      image: newsImage1,
      date: "8 de Janeiro, 2025"
    },
    {
      id: 5,
      title: "Jogadora da seleção se destaca em torneio internacional",
      content: "A atleta brasileira foi eleita a melhor jogadora do torneio internacional, demonstrando o alto nível técnico do futebol feminino nacional. Sua performance foi fundamental para o sucesso da equipe.",
      image: newsImage2,
      date: "5 de Janeiro, 2025"
    },
    {
      id: 6,
      title: "Investimentos no futebol feminino crescem 40%",
      content: "Os investimentos no futebol feminino brasileiro cresceram significativamente no último ano, mostrando o interesse crescente de patrocinadores e a valorização da modalidade no país.",
      image: heroImage,
      date: "3 de Janeiro, 2025"
    }
  ];

  const filteredNews = mockNews.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReadMore = (newsId: number) => {
    console.log(`Leia Mais clicado para notícia ${newsId}`);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Busca realizada:', searchTerm);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover-elevate p-2 rounded-md" data-testid="link-voltar">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Últimas Notícias</h1>
          <p className="text-muted-foreground text-lg">Fique por dentro das últimas novidades do futebol feminino</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                data-testid="input-busca"
              />
            </div>
            <Button type="submit" data-testid="button-buscar">
              Buscar
            </Button>
          </form>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
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

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhuma notícia encontrada para sua busca.</p>
          </div>
        )}
      </div>
    </div>
  );
}