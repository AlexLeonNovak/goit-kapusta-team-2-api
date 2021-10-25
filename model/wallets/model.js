const { Schema, Types, model } = require("mongoose");

const walletSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    balance: {
      type: Number,
      required: [true, "balance is required"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);
const Wallet = model("wallets", walletSchema);

module.exports = Wallet;
