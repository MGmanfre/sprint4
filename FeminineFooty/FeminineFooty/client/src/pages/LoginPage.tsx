import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    console.log(`${field} atualizado:`, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login enviado:', formData);
    alert('Login realizado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover-elevate p-2 rounded-md" data-testid="link-voltar">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
        
        <Card>
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-primary">Login</CardTitle>
            <p className="text-muted-foreground">Entre na sua conta do Passa Bola</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  data-testid="input-email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="Sua senha"
                  value={formData.senha}
                  onChange={(e) => handleInputChange('senha', e.target.value)}
                  data-testid="input-senha"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" data-testid="button-login">
                Fazer Login
              </Button>
            </form>
            
            <div className="text-center space-y-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Ainda não têm conta? </span>
                <Link href="/cadastro" className="text-primary hover:underline" data-testid="link-cadastro">
                  Clique aqui!
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}