import NewsCard from '../NewsCard';
import newsImage from "@assets/generated_images/Women's_football_team_celebration_caf22bd2.png";

export default function NewsCardExample() {
  const handleReadMore = () => {
    console.log('Leia Mais clicado');
  };

  return (
    <div className="p-4 max-w-sm">
      <NewsCard
        title="Seleção brasileira feminina vence amistoso por 3x0"
        content="A Seleção Brasileira de Futebol Feminino conquistou uma vitória expressiva no amistoso internacional contra a equipe visitante, demonstrando grande entrosamento e técnica em campo."
        image={newsImage}
        date="15 de Janeiro, 2025"
        onReadMore={handleReadMore}
      />
    </div>
  );
}