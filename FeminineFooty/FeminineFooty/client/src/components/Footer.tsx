import { Link } from "wouter";
import { Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* div para redes sociais na esquerda */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/instagram" className="flex items-center gap-2 hover-elevate p-2 rounded-md" data-testid="link-instagram">
                  <Instagram className="h-5 w-5" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="/tiktok" className="flex items-center gap-2 hover-elevate p-2 rounded-md" data-testid="link-tiktok">
                  <SiTiktok className="h-5 w-5" />
                  TikTok
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="flex items-center gap-2 hover-elevate p-2 rounded-md" data-testid="link-youtube">
                  <Youtube className="h-5 w-5" />
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
          
          {/* div para informações de contato na direita */}
          <div>
            <p className="text-lg font-semibold mb-2">Passa Bola &copy; 2025</p>
            <p className="mb-4">Caso tenha alguma dúvida, entre em contato conosco.</p>
            <div className="space-y-1">
              <p className="font-medium">Contato:</p>
              <p data-testid="text-email">Email: contato@passabola.com.br</p>
              <p data-testid="text-telefone">Telefone: (11) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}