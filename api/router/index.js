const router = require("express").Router();

router.use("/artist", require("./artist"));
router.use("/event", require("./event"));
router.use("/venue", require("./venue"));
router.use("/city", require("./city"));
router.use("/style", require("./style"));
router.use("/user", require("./user"));

const userRouter = require("./user");
const authRouter = require("./auth");

router.use("/users", userRouter);
router.use("/auth", authRouter);

module.exports = router;

