// Set the paths for the routes

const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send("Wrong route Selected!");
});

module.exports = router;