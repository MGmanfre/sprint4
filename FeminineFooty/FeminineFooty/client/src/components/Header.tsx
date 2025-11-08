import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/image_1757914166735.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu hambúrguer toggled:', !isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-primary text-primary-foreground border-b relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        {/* ícone de menu hambúrguer */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-primary-foreground hover:bg-primary-foreground/10" 
          onClick={toggleMenu}
          data-testid="button-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {/* logo principal no meio do header */}
        <Link href="/" className="flex flex-col items-center gap-2 hover-elevate rounded-md p-3" data-testid="link-home" onClick={closeMenu}>
          <img src={logoImage} alt="Passa Bola Logo" className="h-12 w-12 rounded-full" />
          <h1 className="text-lg font-bold text-center">Passa Bola</h1>
        </Link>

        {/* Space for alignment */}
        <div className="w-10"></div>
      </div>

      {/* Menu hambúrguer dropdown - maior */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-t border-primary-foreground/20 shadow-lg z-50">
          <nav className="max-w-7xl mx-auto py-6 px-6">
            <ul className="space-y-4">
              <li>
                <Link href="/login" onClick={closeMenu}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10 p-4 text-left text-lg"
                    data-testid="menu-link-login"
                  >
                    Login
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/noticias" onClick={closeMenu}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10 p-4 text-left text-lg"
                    data-testid="menu-link-noticias"
                  >
                    Notícias
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="/jogos" onClick={closeMenu}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10 p-4 text-left text-lg"
                    data-testid="menu-link-jogos"
                  >
                    Jogos
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Overlay para fechar o menu quando clicar fora */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40" 
          onClick={closeMenu}
          data-testid="menu-overlay"
        ></div>
      )}
    </header>
  );
}