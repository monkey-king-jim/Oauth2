require("dotenv").config();
import express, { Request, Response } from "express";
import axios from "axios";
import url from "url";

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api/auth/discord/redirect", async (req: Request, res: Response) => {
  console.log(req.query);
  const { code } = req.query;
  if (code) {
    try {
      const formData = new url.URLSearchParams({
        client_id: "949805625842487456",
        client_secret: "PSlmFAPK_iwVEM95e03Rw8dKR_qWA3B1",
        grant_type: "authorization_code",
        code: code.toString(),
        redirect_uri: "http://localhost:3001/api/auth/discord/redirect",
      });
      const response = await axios.post(
        "https://discord.com/api/v8/oauth2/token",
        formData.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
