import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwtSecret from "../config/jwtSecret";
import User from "../models/user";

let router = express.Router();
router.put("/editprofile", (req, res) => {
    console.log("****** pass POST /api/user/editProfile!!******");
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const description = req.body.description;
    const gender = req.body.gender;
    const username = req.body.username;
    const email = req.body.email;
    const img = req.body.img;
    const id = req.body.id;
    const phonenumber = req.body.phonenumber;

    User.query({
        where: {
            id: id
        }
    })
        .fetch()
        .then(user => {
            user
                .set(
                    {
                        username: username,
                        email: email,
                        img: img,
                        gender: gender,
                        firstname: firstname,
                        lastname: lastname,
                        description: description,
                        phonenumber: phonenumber
                    },
                    User
                )
                .save()
                .then(user => {
                    console.log("pass here");
                    const token = jwt.sign(
                        {
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
            console.log(error);
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
            const token = jwt.sign(
                {
                    id: user.get("id"),
                    username: user.get("username"),
                    email: user.get("email"),
                    img: user.get("img"),
                    gender: user.get("gender"),
                    firstname: user.get("firstname"),
                    lastname: user.get("lastname"),
                    phonenumber: user.get("phonenumber"),
                    description: user.get("description")
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
