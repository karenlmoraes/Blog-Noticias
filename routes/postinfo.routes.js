const express = require("express");
const router = express.Router();

const postsController = require("../controller/post_info.controller");

router.get("/", postsController.getAll);
router.get("/:id", postsController.getById);
router.post("/", postsController.create);
router.put("/:id", postsController.update);
router.delete("/:id", postsController.delete);

module.exports = router;
