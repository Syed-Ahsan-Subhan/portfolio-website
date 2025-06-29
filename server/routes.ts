import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully!", data: message });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send message. Please check your input and try again." 
      });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      // In a real application, this would serve the actual CV file
      // For now, we'll create a simple response indicating the download would happen
      res.setHeader('Content-Type', 'application/json');
      res.json({ 
        success: true, 
        message: "CV download initiated",
        downloadUrl: "/cv/alex-chen-cv.pdf" // This would be the actual file path
      });
    } catch (error) {
      console.error("CV download error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to download CV. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
