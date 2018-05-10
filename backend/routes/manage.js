import express from "express";
import Home from "../models/home";
import home from "../models/home";
let router = express.Router();

// POST /api/manage/:user_id
router.get("/:user_id", (req, res) => {
    console.log("******POST /api/manage/:user_id PASS!!******");
    const user_id = req.params.user_id;
    Home.query({
        where: { user_id: user_id }
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

export default router;
