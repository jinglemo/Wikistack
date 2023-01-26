const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

router.get("/add", (req, res, next) => {
    res.send(addPage());
  });

router.get("/", (req, res, next) => {
    res.send("/wiki/");
  });
router.post("/", (req, res, next) => {
  res.json(req.body);
});

router.post("/", async (req, res, next) => {
try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

  
  // router.post("/", (req, res, next) => {
  //   res.json(req.body);
  // });
  
  
module.exports = router;
