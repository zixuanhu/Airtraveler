import express from "express";
import Home from "../models/home";


let router = express.Router();

// POST /api/homes
router.post("/create", (req, res) => {
    console.log("******POST /api/homes/create PASS!!******");
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
    Home.forge(
        {
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

router.get("/searchhomelist/:page", (req, res) => {
    const page = req.params.page;
    console.log("******POST /api/homes/homelist PASS!!******");
    Home.query(function (qb) {
        qb.orderBy('price', 'DESC');
    })
        .fetchPage({page: page, pageSize: 18})
        .then(homes => {
            return res.json({
                homes: homes,
                pagination: homes.pagination
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
    Home.query({
        where: {
            id: id
        }
    })
        .fetch()
        .then(home => {
            console.log("******GET /api/homes/:home_id SUCCESS!!******");
            return res.json({
                home: home
            });
        })
        .catch(error => {
            console.log("******GET /api/homes/:home_id FAIL!!******");
            return res.json({
                error: error
            });
        });
});


router.get("/searchhomelist/:keyword/:page", (req, res) => {
    console.log("******POST /api/homes/searchhomelist PASS!!******");

    const keyword = req.params.keyword;
    const page = req.params.page;


    Home.query(function (home) {
        home.where('title', 'LIKE', `%${keyword}%`);
        home.orWhere('description', 'LIKE', `%${keyword}%`);
        home.orderBy('price', 'DESC');
    })
        .fetchPage({page: page, pageSize: 18})
        .then(homes => {
            console.log(homes.pagination)

            return res.json({
                homes: homes,
                pagination: homes.pagination
            });
        })
        .catch(error => {
            console.log("******POST  /api/homes/searchhomelist FAIL!!******");
            console.log(error)
            return res.json({
                error: error
            });
        });
});
export default router;