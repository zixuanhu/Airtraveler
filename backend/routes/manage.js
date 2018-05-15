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
    const title = req.body.title;
    const description = req.body.description;
    const img = req.body.img;
    const property_type = req.body.property_type;
    const room_type = req.body.room_type;
    const price = req.body.price;
    const guest_availability = req.body.guest_availability;
    const rooms_availability = req.body.rooms_availability;
    const beds_availability = req.body.beds_availability;
    const bath_availability = req.body.bath_availability;
    const setup_for_guest = req.body.setup_for_guest;
    const target = req.body.target;
    const user_id = req.body.user_id;
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
                    description: description,
                    img: img,
                    property_type: property_type,
                    room_type: room_type,
                    price: price,
                    guest_availability: guest_availability,
                    rooms_availability: rooms_availability,
                    beds_availability: beds_availability,
                    bath_availability: bath_availability,
                    setup_for_guest: setup_for_guest,
                    target: target,
                    user_id: user_id
                }, Home)
                .save()
                .then(home => {
                    console.log("pass here");
                    const token = jwt.sign({
                            id: home.get("id"),
                            title: home.get("title"),
                            description: home.get("description"),
                            img: home.get("img"),
                            property_type:
                                home.get("property_type"),
                            room_type:
                                home.get("room_type"),
                            price:
                                home.get("price"),
                            guest_availability:
                                home.get("guest_availability"),
                            rooms_availability:
                                home.get("rooms_availability"),
                            beds_availability:
                                home.get("beds_availability"),
                            bath_availability:
                                home.get("bath_availability"),
                            setup_for_guest:
                                home.get("setup_for_guest"),
                            target:
                                home.get("target"),
                            user_id:
                                home.get("user_id")
                        },
                        jwtSecret.jwtSecret
                        )
                    ;
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