const express = require("express");
const router = express.Router();
const {getUser,getUserByID,addUser,editUser,deleteUser} = require("../controller/crud");

// Route 1 : Get user all data 
router.get("/userdata",getUser)

// Route 2 : Get user by ID 
router.get("/userdata/:id",getUserByID)


// Route 3 : Post new user 
router.post("/adduser",addUser)

// Route 4: Delete user by ID 
router.put("/edituser/:id",editUser)

// Route 5: Delete user by ID 
router.delete("/deleteuser/:id",deleteUser)

module.exports = router;