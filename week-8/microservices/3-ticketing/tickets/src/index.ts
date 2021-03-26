import express from 'express';
import { json } from 'body-parser';
import jwt from 'jsonwebtoken';
const app = express();
app.set('trust proxy', true);
app.use(json());


app.post("/api/tickets", (req, res) => {

  const authorizationHeader = req.headers['authorization']

  if (!authorizationHeader) {
    return res.send("AuthToken missing")
  } else {
    const token = authorizationHeader?.split(" ")[1] || ""
    try {
      const payload: any = jwt.verify(
        token,
        process.env.JWT_KEY!
      )
      res.status(201).json({ message: 'ticket created..by' + payload.email })
    } catch (err) {
      // if token invalid | expired
      // take some decision
      res.json({ message: err.message })
    }
  }

});

const start = async () => {
  app.listen(4000, () => {
    console.log('Listening on port 4000!!!!!!!!');
  });
};

start();
