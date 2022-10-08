const asyncHandler =require("express");

const user=require("../models/user");


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await user.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      res.send('algo');
    }
  });

  module.exports=authUser;