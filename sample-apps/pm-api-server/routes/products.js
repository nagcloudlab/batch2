const express = require('express');
const router = express.Router();

const mongodb = require("mongodb");
const { MongoClient } = mongodb;
const uri = "mongodb+srv://user1:userone@cluster0.socov.mongodb.net/pm?retryWrites=true&w=majority"

router
  .post('/', async (req, res, next) => {
    const body = req.body;
    const client = new MongoClient(uri);
    try {
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
      await client.close();
    }
  })
  .get("/", async (req, res, next) => {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("pm");
      const products = database.collection("products");
      const cursor = await products.find({})
      const data = await cursor.toArray()
      res.status(200).json({
        products: data
      })
    } catch (e) {
      next(e)
    } finally {
      await client.close();
    }
  })
  .get("/:id", async (req, res, next) => {
    const productId = req.params.id
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("pm");
      const products = database.collection("products");
      const data = await products.findOne({ _id: new mongodb.ObjectID(productId) })
      res.status(200).json({
        product: data
      })
    } catch (e) {
      next(e)
    } finally {
      await client.close();
    }
  })
  .patch("/:id", async (req, res, next) => {
    const productId = req.params.id
    const body = req.body;
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("pm");
      const products = database.collection("products");
      const data = await products.updateOne({ _id: new mongodb.ObjectID(productId) }, { "$set": { price: body.price } })
      res.status(200).json({
        count: data.result.nModified
      })
    } catch (e) {
      next(e)
    } finally {
      await client.close();
    }
  })
  .delete("/:id", async (req, res, next) => {
    const productId = req.params.id
    const client = new MongoClient(uri);
    try {
      await client.connect();
      const database = client.db("pm");
      const products = database.collection("products");
      const data = await products.deleteOne({ _id: new mongodb.ObjectID(productId) })
      res.status(200).json({
        result: data
      })
    } catch (e) {
      next(e)
    } finally {
      await client.close();
    }
  });

module.exports = router;
