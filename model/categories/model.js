const { Schema, model, Types } = require("mongoose");

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
     user: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);


const Category = model("categories", categorySchema);

module.exports = Category;