const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 6002;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Password (from .env file)
const password = process.env.PASSWORD; // Ensure PASSWORD is defined in your .env file

// MongoDB Configuration
const uri = `mongodb+srv://2200032312cseh:${password}@demo-foodie-cluster.hrj4v.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Test connection with a ping
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Collections
    const menuCollections = client.db("demo-foodi-client").collection("menus");
    const cartCollections = client.db("demo-foodi-client").collection("cartItems");

    // Endpoints
    app.get('/menu', async (req, res) => {
      try {
        console.log("Fetching menu items...");
        const result = await menuCollections.find().toArray();
        console.log("Menu items fetched:", result);
        res.send(result);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        res.status(500).send({ message: "Error fetching menu items", error });
      }
    });

    app.get('/cart', async (req, res) => {
      try {
        console.log("Fetching cart items...");
        const result = await cartCollections.find().toArray();
        console.log("Cart items fetched:", result);
        res.send(result);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).send({ message: "Error fetching cart items", error });
      }
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
run().catch(console.dir);

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
