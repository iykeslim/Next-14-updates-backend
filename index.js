const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5000

// MongoDB Connection
const uri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/your-database-name"
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err))

// Middlewares
app.use(cors()) // Enable CORS for cross-origin requests
app.use(express.json()) // Parse incoming JSON data

// Routes (Add routes here later)

app.listen(port, () => console.log(`Server listening on port ${port}`))
