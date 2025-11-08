import type { Express } from "express";
import { createServer, type Server } from "http";
import bcrypt from "bcryptjs";
import { storage } from "./storage";
import { insertUserSchema, loginSchema, type User } from "@shared/schema";
import { z } from "zod";

declare module 'express-session' {
  interface SessionData {
    userId: string;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if email already exists (case insensitive)
      const existingUserByEmail = await storage.getUserByEmail(validatedData.email.toLowerCase());
      if (existingUserByEmail) {
        return res.status(400).json({ 
          error: "Email já está em uso" 
        });
      }

      // Clean and check CPF
      const cleanCpf = validatedData.cpf.replace(/\D/g, '');
      const existingUserByCpf = await storage.getUserByCpf(cleanCpf);
      if (existingUserByCpf) {
        return res.status(400).json({ 
          error: "CPF já está cadastrado" 
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(validatedData.senha, 12);

      // Create user (exclude confirmarSenha)
      const { confirmarSenha, ...userData } = validatedData;
      const user = await storage.createUser({
        ...userData,
        email: userData.email.toLowerCase(),
        cpf: cleanCpf,
        senha: hashedPassword,
      });

      // Regenerate session and store user ID only
      req.session.regenerate((err) => {
        if (err) {
          console.error("Session regeneration error:", err);
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
        
        req.session.userId = user.id;

        // Return user without password
        const { senha, ...userResponse } = user;
        res.status(201).json({ 
          message: "Usuário criado com sucesso",
          user: userResponse 
        });
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: error.errors 
        });
      }
      console.error("Registration error:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  // Login endpoint
  app.post("/api/login", async (req, res) => {
    try {
      const validatedData = loginSchema.parse(req.body);
      
      // Find user by email (case insensitive)
      const user = await storage.getUserByEmail(validatedData.email.toLowerCase());
      if (!user) {
        return res.status(401).json({ 
          error: "Email ou senha incorretos" 
        });
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(validatedData.senha, user.senha);
      if (!isValidPassword) {
        return res.status(401).json({ 
          error: "Email ou senha incorretos" 
        });
      }

      // Regenerate session and store user ID only
      req.session.regenerate((err) => {
        if (err) {
          console.error("Session regeneration error:", err);
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
        
        req.session.userId = user.id;

        // Return user without password
        const { senha, ...userResponse } = user;
        res.json({ 
          message: "Login realizado com sucesso",
          user: userResponse 
        });
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Dados inválidos", 
          details: error.errors 
        });
      }
      console.error("Login error:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  // Logout endpoint
  app.post("/api/logout", (req, res) => {
    req.session.destroy((err: any) => {
      if (err) {
        console.error("Logout error:", err);
        return res.status(500).json({ error: "Erro ao fazer logout" });
      }
      res.clearCookie('connect.sid');
      res.json({ message: "Logout realizado com sucesso" });
    });
  });

  // Get current user endpoint
  app.get("/api/me", async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ error: "Não autenticado" });
    }

    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ error: "Usuário não encontrado" });
      }

      const { senha, ...userResponse } = user;
      res.json({ user: userResponse });
    } catch (error) {
      console.error("Get user error:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  // Middleware to check authentication
  const requireAuth = (req: any, res: any, next: any) => {
    if (!req.session.userId) {
      return res.status(401).json({ error: "Acesso negado. Faça login." });
    }
    next();
  };

  const httpServer = createServer(app);

  return httpServer;
}
