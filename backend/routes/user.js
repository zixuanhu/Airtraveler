import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtSecret from "../config/jwtSecret";
import User from "../models/user";
let router = express.Router();
router.put("/editprofile", (req, res) => {
    console.log("****** pass POST /api/user/editProfile!!******");
    const username = req.body.username;
    const email = req.body.email;
    const id = req.body.id;

    User.query({
            where: {
                id: id
            }
        })
        .fetch()
        .then(user => {
            user
                .set({
                    username: username,
                    email: email
                }, User)
                .save()
                .then(user => {
                    console.log("pass here");
                    const token = jwt.sign({
                            id: user.get("id"),
                            username: user.get("username"),
                            email: user.get("email"),
                            img: user.get("img")
                        },
                        jwtSecret.jwtSecret
                    );
                    console.log(
                        "******POST /api/user/editProfile SUCCESS!!******"
                    );

                    return res.json({
                        token
                    });
                })
                .catch(error => {
                    console.log(
                        "******POST /api/user/editProfile fail!!******"
                    );
                    return res.json({
                        error: error
                    });
                });
        })
        .catch(error => {
            console.log("******POST /api/user/editProfileProfile!!******");
            return res.json({
                error: error
            });
        });
});

router.get("/:id", (req, res) => {
    console.log("******POST /api/user/getUser/:id Pass!!******");
    const id = req.params.id;
    User.query({
            where: {
                id: id
            }
        })
        .fetch()
        .then(user => {
            console.log("******POST /api/user/getUser/:id SUCCESS!!******");
            const token = jwt.sign({
                    id: user.get("id"),
                    username: user.get("username"),
                    email: user.get("email"),
                    img: user.get("img")
                },
                jwtSecret.jwtSecret
            );

            return res.json({
                token
            });
        })
        .catch(error => {
            console.log("******POST /api/user/getUser/:id fail!!******");
            return res.json({
                error: error
            });
        });
});
export default router;