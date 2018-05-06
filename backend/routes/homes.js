import express from "express";
import Home from "../models/home";
let router = express.Router();

// POST /api/homes
router.post("/", (req, res) => {
    console.log("******POST /api/homes PASS!!******");
    const title = req.body.title;
    const description = req.body.description;
    Home.forge(
        {
            title: title,
            description: description
        },
        { hasTimestamps: true }
    )
        .save()
        .then(home => {
            console.log("******POST /api/homes SUCCESS!!******");
            return res.json({ success: true, home: home, id: home.id });
        })
        .catch(err => {
            console.log("******POST /api/homes FAIL!!******");
            return res.json({ success: false, error: err });
        });
});

export default router;
