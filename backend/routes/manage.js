import express from "express";
import Home from "../models/home";
import home from "../models/home";
import jwt from "jsonwebtoken";
import jwtSecret from "../config/jwtSecret";
let router = express.Router();

// POST /api/manage/:user_id
router.get("/:user_id", (req, res) => {
    console.log("******POST /api/manage/:user_id PASS!!******");

    const user_id = req.params.user_id;
    console.log(user_id);
    Home.query({
            where: {
                user_id: user_id
            }
        })
        .fetchAll()
        .then(homes => {
            console.log("******POST /api/manage/:user_id SUCCESS!!******");
            return res.json(homes);
        })
        .catch(error => {
            console.log("******POST /api/manage/:user_id FAIL!!******");
            return res.json(error);
        });
});
router.put("/edithome", (req, res) => {
    console.log("******put /api/manage/edithome PASS!!******");

    const home_id = req.body.home_id;
    const img = req.body.img;
    const description = req.body.description;
    const title = req.body.title;
    console.log(home_id);
    Home.query({
            where: {
                id: home_id
            }
        })
        .fetch()
        .then(home => {
            home
                .set({
                    title: title,
                    img: img,
                    description: description
                }, Home)
                .save()
                .then(home => {
                    console.log("pass here");
                    const token = jwt.sign({
                            id: home.get("id"),
                            title: home.get("title"),
                            description: home.get("description"),
                            img: home.get("img")
                        },
                        jwtSecret.jwtSecret
                    );
                    console.log("******POST /api/manage/edithome !!******");

                    return res.json({
                        token
                    });
                })
                .catch(error => {
                    console.log("******POST /api/manage/edithome fail!!******");
                    console.log(error);
                    return res.json({
                        error: error
                    });
                });
        })
        .catch(error => {
            console.log("******put /api/manage/edithome FAIL!!******");
            console.log(error);


            return res.json(error);
        });
});
export default router;