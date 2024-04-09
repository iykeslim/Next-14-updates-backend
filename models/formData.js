const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  comment: String,
})

module.exports = mongoose.model("FormData", formSchema)
