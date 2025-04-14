const express = require("express");
const router = express.Router();
const {
  getJobs,
  createJob,
  updateJobStatus,
  deleteJob,
} = require("../controllers/jobController");

router.get("/", getJobs);
router.post("/", createJob);
router.patch("/:id", updateJobStatus);
router.delete("/:id", deleteJob);

module.exports = router;
