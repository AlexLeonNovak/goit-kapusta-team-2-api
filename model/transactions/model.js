const { Schema, Types, model } = require("mongoose");

const transactionSchema = Schema(
  {
    datetime: {
      type: Date,
    },
    category: {
      type: Types.ObjectId,
      ref: "categories",
      required: true,
    },
    wallet: {
      type: Types.ObjectId,
      ref: "wallets",
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
      ref: "users",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
const Transaction = model("transaction", transactionSchema);

module.exports = Transaction;
