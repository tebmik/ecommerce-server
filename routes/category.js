const express = require("express");
const router = express.Router();

const { create, categoryById, read, remove, update, list } = require("../controllers/category.js");
const { 
    requireSignin,
    isAuth,
    isAdmin  
} = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", read);
router.post("/create/category/:userId", requireSignin, isAuth, isAdmin, create);
router.put("/category/:categoryId/:userId", requireSignin, isAuth, isAdmin, update);
router.delete("/category/:categoryId/:userId", requireSignin, isAuth, isAdmin, remove);
router.get("/categories", list);

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;