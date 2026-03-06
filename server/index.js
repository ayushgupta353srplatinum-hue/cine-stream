import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/mood", async (req, res) => {
  const { mood } = req.body;

  const prompt = `Suggest only ONE movie title based on this mood: ${mood}`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  const movie =
    data.candidates?.[0]?.content?.parts?.[0]?.text || "Inception";

  res.json({ movie });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});