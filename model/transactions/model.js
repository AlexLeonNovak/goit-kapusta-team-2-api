const { Schema, Types, model } = require("mongoose");


const transactionSchema = Schema(
  {
    datetime: {
      type: String,
    },
    category: {
      type: Types.ObjectId,
      ref: "categories",
      required: true,
    },
  
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    description: {
      type: String,
    },
    user: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
const Transaction = model("transaction", transactionSchema);

module.exports = Transaction;
