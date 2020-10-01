const mongoose = require("mongoose");
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");

const placeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    categorie: {
      type: String,
      lowercase: true,
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);



module.exports = mongoose.model("Place", placeSchema);