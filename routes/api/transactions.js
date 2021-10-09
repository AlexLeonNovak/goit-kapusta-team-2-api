const express = require("express");
const router = express.Router();
const TransactionController = require("../../controllers/transaction");
const {
  validation,
  auth,
  controllerWrapper,
} = require("../../middlewares");
const createTransaction = require("../../model/transactions/validation/transaction");


router.post(
  "/",
  auth,
  validation(createTransaction),
  controllerWrapper(TransactionController.addTransaction)
);
router.get("/", auth, controllerWrapper(TransactionController.getAllTransactions));
router.delete("/:transactionId", controllerWrapper(TransactionController.delTransaction));
router.get("/:transactionDate", auth, controllerWrapper(TransactionController.getTransactionByDate));


module.exports = router;
