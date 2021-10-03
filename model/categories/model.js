const { Schema, model } = require("mongoose");

const categorySchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
    },
    logo: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);


const Category = model("category", categorySchema);

module.exports = Category;