import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user";
let router = express.Router();

// POST api/auth/signup :signup
router.post("/signup", (req, res) => {
    console.log("******POST api/auth/signup PASS!!******");
    // console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const password_digest = bcrypt.hashSync(password, 10);
    User.forge(
        {
            username: username,
            email: email,
            password_digest: password_digest
        },
        { hasTimestamps: true }
    )
        .save()
        .then(user => {
            console.log("******POST api/auth/signup SUCCESS!!******");
            return res.json({ success: true, user: user });
        })
        .catch(error => {
            console.log("******POST api/auth/signup FAIL!!******");
            return res.json({ success: false, error: error });
        });
});

export default router;
