require("dotenv").config();
import express, { Request, Response } from "express";
import axios from "axios";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/auth/discord/redirect", async (req: Request, res: Response) => {
  console.log(req.query);
  const { code } = req.query;
  if (code) {
    const response = await axios.post(
      "https://discord.com/api/v8/oauth2/token",
      {
        client_id: process.env.DISCORD_OAUTH_CLIENT_ID,
        client_secret: process.env.DISCORD_OAUTH_CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://localhost:3001/api/auth/discord/redirect",
      }
    );
  }
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
