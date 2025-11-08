import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import heroImage from "@assets/generated_images/Women's_football_tournament_action_48ccd2f1.png";
import newsImage1 from "@assets/generated_images/Women's_football_team_celebration_caf22bd2.png";
import newsImage2 from "@assets/generated_images/Female_goalkeeper_making_save_627a8172.png";

export default function NoticiaDetalhePage() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState<any>(null);

  useEffect(() => {
    //todo: remove mock functionality - replace with real API call
    const mockNews = [
      {
        id: 1,
        title: "Seleção brasileira feminina vence amistoso por 3x0",
        content: `A Seleção Brasileira de Futebol Feminino conquistou uma vitória expressiva no amistoso internacional contra a equipe visitante, demonstrando grande entrosamento e técnica em campo.

O jogo foi marcado por belas jogadas e gols espetaculares. A primeira etapa foi controlada pela seleção brasileira, que abriu o placar aos 15 minutos com um gol de cabeça após cruzamento preciso da lateral direita.

Na segunda etapa, a equipe manteve o ritmo alto e ampliou a vantagem aos 20 minutos com um belo chute de fora da área. O terceiro gol veio aos 35 minutos, selando uma vitória convincente.

A técnica destacou a evolução da equipe e a importância desses jogos para a preparação das próximas competições internacionais. "Estamos no caminho certo e o grupo está cada vez mais entrosado", comentou.

O próximo compromisso da seleção será em março, quando enfrentará outra seleção sul-americana em casa. A expectativa é de que o time mantenha essa performance crescente.`,
        image: newsImage1,
        date: "15 de Janeiro, 2025",
        author: "Redação Passa Bola"
      },
      {
        id: 2,
        title: "Para 2024: e o Brasil precisa para entrosar no futebol feminino",
        content: `A seleção de futebol feminino fez um único jogo em novembro de 2024, e há consenso de que é preciso mais atividade para desenvolver o time nacional.

Especialistas discutem estratégias para melhorar o desempenho da equipe e aumentar o número de jogos da seleção feminina. A falta de regularidade nos confrontos internacionais tem sido apontada como um dos principais obstáculos para o desenvolvimento do futebol feminino brasileiro.

"Precisamos de mais jogos, mais oportunidades para as atletas mostrarem seu potencial", afirma a coordenadora técnica da CBF. A proposta é aumentar o calendário de jogos amistosos e participar de mais torneios internacionais.

O investimento na base também é fundamental. Programas de desenvolvimento de jovens talentos estão sendo implementados em todo o país, com foco especial nas regiões onde o futebol feminino ainda está crescendo.

A meta é classificar o Brasil para todas as competições internacionais importantes e estabelecer o país como uma potência mundial no futebol feminino.`,
        image: newsImage2,
        date: "12 de Janeiro, 2025",
        author: "Ana Silva"
      },
      {
        id: 3,
        title: "Futebol feminino é o 4º mais de espera",
        content: `A procissão dos teve mais um bela festa. A Copa, realizada há mais de 8 anos, teve mais campanha subicilada e mostrava um crescimento robusto do ranking na categoria.

O evento reuniu milhares de torcedores e demonstrou o crescente interesse pelo futebol feminino no país. As arquibancadas lotadas e a transmissão televisiva com boa audiência comprovam que o esporte está ganhando cada vez mais espaço.

Patrocinadores também estão de olho nesse crescimento. Grandes marcas têm investido no futebol feminino, reconhecendo o potencial de crescimento e o engajamento dos fãs.

As redes sociais têm papel fundamental nessa expansão. Jogadoras e clubes usam as plataformas para se conectar com os torcedores, criando uma base de fãs fiel e engajada.

O futuro do futebol feminino no Brasil parece promissor, com mais investimentos, melhor estrutura e crescente reconhecimento público.`,
        image: heroImage,
        date: "10 de Janeiro, 2025",
        author: "Carlos Mendes"
      }
    ];

    const noticiaEncontrada = mockNews.find(n => n.id === parseInt(id || "0"));
    setNoticia(noticiaEncontrada);
  }, [id]);

  if (!noticia) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Notícia não encontrada</h1>
          <Link href="/noticias">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Notícias
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/noticias">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Notícias
            </Button>
          </Link>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <div className="aspect-video overflow-hidden">
            <img 
              src={noticia.image} 
              alt={noticia.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <CardHeader className="pb-4">
            <CardTitle className="text-3xl font-bold leading-tight text-gray-900">
              {noticia.title}
            </CardTitle>
            
            <div className="flex items-center gap-6 text-gray-600 text-sm mt-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{noticia.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{noticia.author}</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {noticia.content}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}