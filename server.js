import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.post("/send", async (req, res) => {
  const { shuttle } = req.body;

  const time = new Date().toLocaleTimeString('en-GB');

  const message = `🚚 Shuttle Update

Name: ${shuttle.name}
From: ${shuttle.from}
Type: ${shuttle.cat}

Arrived at: ${time}
Location: Polgasowita WH`;

  try {
    await fetch(
      `https://graph.facebook.com/v18.0/${process.env.PHONE_ID}/messages`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: process.env.RECEIVER,
          type: "text",
          text: { body: message }
        })
      }
    );

    res.json({ message: "Message sent ✅" });

  } catch (err) {
    res.json({ message: "Error sending ❌" });
  }
});

app.listen(3000, () => console.log("Server running"));