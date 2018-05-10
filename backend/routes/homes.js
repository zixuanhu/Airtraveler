import express from "express";
import Home from "../models/home";
let router = express.Router();

// POST /api/homes
router.post("/create", (req, res) => {
    console.log("******POST /api/homes/create PASS!!******");

    const title = req.body.title;
    const description = req.body.description;
    const img = req.body.img;
    const user_id = req.body.user_id;

    Home.forge(
        {
            title: title,
            description: description,
            img: img,
            user_id: user_id
        },
        {
            hasTimestamps: true
        }
    )
        .save()
        .then(home => {
            console.log("******POST /api/home/create SUCCESS!!******");
            return res.json({
                success: true,
                home: home,
                id: home.id
            });
        })
        .catch(err => {
            console.log("******POST /api/home/create FAIL!!******");
            return res.json({
                success: false,
                error: err
            });
        });
});

router.get("/homelist", (req, res) => {
    console.log("******POST /api/homes/homelist PASS!!******");
    Home.fetchAll()
        .then(homes => {
            return res.json({
                homes: homes
            });
        })
        .catch(error => {
            console.log("******POST  /api/homes/homelist FAIL!!******");
            return res.json({
                error: error
            });
        });
});
router.get("/:home_id", (req, res) => {
    console.log("******GET /api/homes/:home_id PASS!!******");
    const id = req.params.home_id;
    console.log("id: ", id);

    Home.query({
        where: {
            id: id
        }
    })
        .fetch({
            withRelated: ["user"]
        })
        .then(home => {
            console.log("******GET /api/homes/:home_id SUCCESS!!******");
            return res.json({
                home: home
            });
        })
        .catch(error => {
            console.log("******GET /api/homes/:home_id FAIL!!******");
            console.log(error);
            return res.json({
                error: error
            });
        });
});
export default router;
