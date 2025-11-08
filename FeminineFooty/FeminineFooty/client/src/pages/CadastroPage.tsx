import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    dataNascimento: "",
    posicaoFavorita: "",
    senha: "",
    confirmarSenha: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    console.log(`${field} atualizado:`, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Cadastro enviado:', formData);
    alert('Cadastro realizado com sucesso!');
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
            <CardTitle className="text-2xl font-bold text-primary">Cadastre-se</CardTitle>
            <p className="text-muted-foreground">Crie sua conta no Passa Bola</p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  data-testid="input-nome"
                  required
                />
              </div>
              
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
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  id="cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={(e) => handleInputChange('cpf', e.target.value)}
                  data-testid="input-cpf"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de nascimento</Label>
                <Input
                  id="dataNascimento"
                  type="date"
                  value={formData.dataNascimento}
                  onChange={(e) => handleInputChange('dataNascimento', e.target.value)}
                  data-testid="input-data-nascimento"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="posicaoFavorita">Posição favorita</Label>
                <Select value={formData.posicaoFavorita} onValueChange={(value) => handleInputChange('posicaoFavorita', value)}>
                  <SelectTrigger data-testid="select-posicao">
                    <SelectValue placeholder="Selecione sua posição favorita" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="goleira">Goleira</SelectItem>
                    <SelectItem value="zagueira">Zagueira</SelectItem>
                    <SelectItem value="lateral">Lateral</SelectItem>
                    <SelectItem value="volante">Volante</SelectItem>
                    <SelectItem value="meia">Meia</SelectItem>
                    <SelectItem value="atacante">Atacante</SelectItem>
                  </SelectContent>
                </Select>
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
              
              <div className="space-y-2">
                <Label htmlFor="confirmarSenha">Confirmar Senha</Label>
                <Input
                  id="confirmarSenha"
                  type="password"
                  placeholder="Confirme sua senha"
                  value={formData.confirmarSenha}
                  onChange={(e) => handleInputChange('confirmarSenha', e.target.value)}
                  data-testid="input-confirmar-senha"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" data-testid="button-cadastrar">
                Cadastrar
              </Button>
            </form>
            
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Já possui conta? </span>
              <Link href="/login" className="text-primary hover:underline" data-testid="link-login">
                Clique aqui!
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}