const express = require("express");
const router = express.Router();
const WalletsController = require("../../controllers/wallet");
const { validation, auth, controllerWrapper } = require("../../middlewares");
const createWallet = require("../../model/wallets/validation/wallet");

router.post(
  "/",
  auth,
  validation(createWallet),
  controllerWrapper(WalletsController.addWallet)
);
router.get("/", auth, controllerWrapper(WalletsController.getWallets));
router.delete("/:id", auth, controllerWrapper(WalletsController.delWallet));
router.patch("/:id", auth, controllerWrapper(WalletsController.updateWallet));

module.exports = router;
