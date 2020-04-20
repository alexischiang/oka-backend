module.exports = (app) => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });

  const Server = require("../../models/server.js");
  const User = require("../../models/user.js");
  // router.get("/server/init", async (req, res) => {
  //   const data = require("../../oriData");
  //   await Server.deleteMany({});
  //   await Server.insertMany(data.serverData);
  //   res.send("init servers successfully");
  // });
  // router.get("/user/init", async (req, res) => {
  //   const data = require("../../oriData");
  //   await User.deleteMany({});
  //   await User.insertMany(data.userData);
  //   res.send("init users successfully");
  // });
  router.get("/server", async (req, res) => {
    console.log("GET /server/test");
    res.send(await Server.find().populate("users"));
  });
  router.get("/user", async (req, res) => {
    console.log("GET /server/test");
    res.send(await User.find());
  });
  router.get("/server/:id", async (req, res) => {
    console.log(`GET /server/${req.params.id}`);
    res.send(await Server.findById(req.params.id));
  });
  router.get("/user/:id", async (req, res) => {
    console.log(`GET /user/${req.params.id}`);
    res.send(await User.findById(req.params.id));
  });
  router.post("/server", async (req, res) => {
    console.log(`POST /server`);
    await Server.create(req.body);
    res.send({
      success: true,
      message: "successfully added server",
    });
  });
  router.put("/server/:id", async (req, res) => {
    console.log(`PUT /server/${req.params.id}`);
    await Server.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "successfully updated server",
    });
  });
  router.delete("/server/:id", async (req, res) => {
    console.log(`DELETE /server/${req.params.id}`);
    await Server.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true,
      message: "successfully delete server",
    });
  });
  router.post("/user", async (req, res) => {
    console.log(`POST /user`);
    await User.create(req.body);
    res.send({
      success: true,
      message: "successfully added user",
    });
  });
  router.put("/user/:id", async (req, res) => {
    console.log(`PUT /user/${req.params.id}`);
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send({
      success: true,
      message: "successfully updated user",
    });
  });
  router.delete("/user/:id", async (req, res) => {
    console.log(`DELETE /user/${req.params.id}`);
    await User.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true,
      message: "successfully delete user",
    });
  });
  app.use("/admin/api", router);
};
