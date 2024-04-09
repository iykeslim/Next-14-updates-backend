const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const FormData = require("./models/formData")

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
app.use(cors()) 
app.use(express.json()) 

//I will add  Routes (Add routes here later)

app.listen(port, () => console.log(`Server listening on port ${port}`))


// Form submission route
app.post('/api/submit-form', async (req, res) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: 'Form data submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving form data' });
  }
});
