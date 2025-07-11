import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Sample API route
  app.get("/api/hello", (_req, res) => {
    res.json({ message: "Hello from API" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
