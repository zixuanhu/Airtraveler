import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtSecret from "../config/jwtSecret";
import User from "../models/user";
let router = express.Router();

router.post("/finduserexists", (req, res) => {
    const identifer = req.body.identifer;
    User.query({
        where: { username: identifer },
        orWhere: { email: identifer }
    })
        .fetch()
        .then(user => {
            return res.json({ user: user });
        })
        .catch(error => {
            console.log("******POST /api/auth/findUserFAIL!!******");
            return res.json({ error: error });
        });
});
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

router.post("/login", (req, res) => {
    console.log("******POST /api/auth/login PASS!!******");
    const identifier = req.body.identifier;
    const password = req.body.password;

    User.query({
        where: { username: identifier },
        orWhere: { email: identifier }
    })
        .fetch()
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(password, user.get("password_digest"))) {
                    const token = jwt.sign(
                        {
                            id: user.get("id"),
                            username: user.get("username")
                        },
                        jwtSecret.jwtSecret
                    );
                    console.log("******POST /api/auth/login SUCCESS!!******");
                    return res.json({ token });
                } else {
                    console.log("******POST /api/auth/login FAIL!!******");
                    return res.json({
                        error: { password: "Invalid Passowrd" }
                    });
                }
            } else {
                console.log("******POST /api/auth/login FAIL!!******");
                return res.json({ error: { user: "user not find!" } });
            }
        })
        .catch(error => {
            console.log("******POST /api/auth/login FAIL!!******");
            return res.json({ error: error });
        });
});

// POST api/auth/checkexists
router.post("/checkexists", (req, res) => {
    console.log("******POST /api/auth/checkexists PASS!!******");
    const username = req.body.username;

    User.forge({
        username: username
    })
        .fetch()
        .then(user => {
            console.log(
                "******POST /api/usernamechecker/signup FindUsername!!******"
            );
            return res.json({ exist: !(user === null) });
        })
        .catch(error => {
            console.log(
                "******POST /api/usernamechecker/signup Donot FindUsername!!******"
            );

            return res.json({ error: error });
        });
});

export default router;
