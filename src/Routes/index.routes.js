import express from 'express'
const router = express.Router();


router.get("/", (req, res) => {
  res.render("../views/index.ejs");
});

router.get("/signin", (req, res) => {
  res.render("../views/signin.ejs");
});

router.get("/signup", (req, res) => {
  res.render("../views/signup.ejs");
});

  export default router; 