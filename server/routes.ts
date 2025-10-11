import type { Express } from "express";
import { createServer, type Server } from "http";
import { ObjectId } from "mongodb";
import clientPromise from "../lib/mongo"; // import MongoDB clientPromise

export async function registerRoutes(app: Express): Promise<Server> {
  // Register GET /api/posts route
  app.get("/api/posts", async (req, res) => {
    try {
      const client = await clientPromise;
      const db = client.db("resources");
      const posts = await db
        .collection("website-resource")
        .find({})
        .sort({ publishedAt: -1 }) // newest first
        .toArray();
      res.json(posts);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  // Register GET /api/posts/:id route
  app.get("/api/posts/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log("Fetching post with id:", id);
      
      const client = await clientPromise;
      const db = client.db("resources");

      // First try to find by string id
      let post = await db
        .collection("website-resource")
        .findOne({ id: id });

      // If not found, try to find by ObjectId
      if (!post) {
        try {
          post = await db.collection("website-resource").findOne({
            _id: new ObjectId(id),
          });
        } catch (error) {
          console.error("Invalid ObjectId format:", error);
        }
      }

      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }

      return res.json(post);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  // Create and return server with routes
  const httpServer = createServer(app);
  return httpServer;
}