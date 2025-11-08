import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CadastroPage from "@/pages/CadastroPage";
import LoginPage from "@/pages/LoginPage";
import NoticiasPage from "@/pages/NoticiasPage";
import NoticiaDetalhePage from "@/pages/NoticiaDetalhePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/cadastro" component={CadastroPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/noticias" component={NoticiasPage} />
      <Route path="/noticia/:id" component={NoticiaDetalhePage} />
      <Route path="/jogos" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
