require('dotenv').config();
import express, {Request, Response} from "express";

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/auth/discord/redirect', (req: Request, res: Response) => {
    console.log(req.query);
    res.send(200);
});

app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
