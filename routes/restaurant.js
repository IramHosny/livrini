const express = require("express");
const restaurant = require("../models/restaurant");
const restaurantrouter = express.Router();
// add restaurant
// POST method

restaurantrouter.post("/addrestaurant", async (req, res) => {
  try {
    let newrestaurant = new restaurant({ ...req.body });
    let result = await newrestaurant.save();
    res.send({ restaurant: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister restaurant
// Get method
restaurantrouter.get("/allrestaurant", async (req, res) => {
  try {
    let result = await restaurant.find();
    res.send({ restaurant: result, msg: "all restaurants " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete restaurant
// Delete method
restaurantrouter.delete("/:id", async (req, res) => {
  try {
    let result = await restaurant.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "restaurant deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update restaurant
// update method
restaurantrouter.put("/:id", async (req, res) => {
  try {
    let result = await restaurant.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " restaurant updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = restaurantrouter;