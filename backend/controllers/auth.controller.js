import User from "../models/user.model.js";
import brcypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "user already exist" });
    }
    const salt = await brcypt.genSalt(10);
    const hashedPassword = await brcypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.log("error in signup", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user don't exist" });
    }
    const matchedPassword = await brcypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.status(400).json({ message: "wrong password" });
    }

    res.status(200).json({ user, message: "user logged in succesfully" });
  } catch (error) {
    console.log("error in login", error.message);
    res.status(500).json({ error: error.message });
  }
};
