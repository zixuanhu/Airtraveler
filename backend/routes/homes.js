import express from "express";
import Home from "../models/home";
let router = express.Router();

// POST /api/homes
router.post("/create", (req, res) => {
    console.log("******POST /api/homes/create PASS!!******");

    const title = req.body.title;
    const description = req.body.description;
    const img = req.body.img;

    Home.forge(
        {
            title: title,
            description: description,
            img: img
        },
        { hasTimestamps: true }
    )
        .save()
        .then(home => {
            console.log("******POST /api/home/create SUCCESS!!******");
            return res.json({ success: true, home: home, id: home.id });
        })
        .catch(err => {
            console.log("******POST /api/home/create FAIL!!******");
            return res.json({ success: false, error: err });
        });
});

router.get("/homelist", (req, res) => {
    console.log("******POST /api/homes/homelist PASS!!******");
    Home.fetchAll()
        .then(homes => {
            return res.json({ homes: homes });
        })
        .catch(error => {
            console.log("******POST  /api/homes/homelist FAIL!!******");
            return res.json({ error: error });
        });
});
router.post("/gethome", (req, res) => {
    console.log("******POST /api/homes/gethome PASS!!******");
    const id = req.body.home_id;

    Home.query({
        where: { id: id }
    })
        .fetch()
        .then(home => {
            console.log("******POST gethome PASS!!******");
            return res.json({ home: home });
        })
        .catch(error => {
            console.log("******POST  /api/homes/gethome FAIL!!******");
            return res.json({ error: error });
        });
});
export default router;
