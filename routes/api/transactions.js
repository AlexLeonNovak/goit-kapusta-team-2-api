const express = require("express");
const router = express.Router();
const TransactionController = require("../../controllers/transaction");
const {
  validation,
  auth,
  controllerWrapper,
} = require("../../middlewares");
const joiTransactionSchema = require("../../model/transactions/validation/transaction");


router.post(
  "/",
  validation(joiTransactionSchema), auth,
  controllerWrapper(TransactionController.addTransaction)
);
// router.get("/", auth, controllerWrapper(TransactionController.getAllTransactions));




module.exports = router;