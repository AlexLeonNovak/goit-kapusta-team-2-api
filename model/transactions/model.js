const { Schema, Types, model } = require("mongoose");

const transactionSchema = Schema(
  {
    datetime: {
      type: String,
    },
    categoryId: {
      type: String,
      required: [true, "categoryId is required"],
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    description: {
      type: String,
    },
    owner: {
      type: Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Transaction = model("transaction", transactionSchema);

module.exports = Transaction;
