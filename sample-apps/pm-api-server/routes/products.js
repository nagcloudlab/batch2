var express = require('express');
var router = express.Router();

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://user1:userone@cluster0.socov.mongodb.net/pm?retryWrites=true&w=majority"

router
  .post('/', async (req, res, next) => {
    const body = req.body;

    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
      // Connect the client to the server
      await client.connect();

      const database = client.db("pm");
      const products = database.collection("products");

      const result = await products.insertOne(body)

      res.status(201).json({
        product: { _id: result.insertedId, ...body }
      })
    } catch (e) {
      next(e)
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }

  });

module.exports = router;
