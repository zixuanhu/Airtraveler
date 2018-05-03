import express from "express";
import User from "../models/user";
let router = express.Router();
// POST api/usernamechecker/checker
router.post("/checker", (req, res) => {
    console.log("******POST /api/usernamechecker/signup PASS!!******");
    const username = req.body.username;

    User.forge({
        username: username
    })
        .fetch()
        .then(user => {
            console.log(
                "******POST /api/usernamechecker/signup FindUsername!!******"
            );

            console.log(user);
            console.log(!(user === null));
            return res.json({ exist: !(user === null) });
        })
        .catch(error => {
            console.log(
                "******POST /api/usernamechecker/signup Donot FindUsername!!******"
            );

            return res.json({ exist: false });
        });
});
export default router;
