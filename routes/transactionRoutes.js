const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction
} = require("../controllers/transactionCtrl");

//router object
const router = express.Router();

//routes
//add transaction POST MEthod
router.post("/add-transaction", addTransaction);

//edit transaction POST MEthod
router.post("/edit-transaction", editTransaction);

//delete transaction POST MEthod
router.post("/delete-transaction", deleteTransaction);

//get transactions
router.post("/get-transaction", getAllTransaction);

module.exports = router;