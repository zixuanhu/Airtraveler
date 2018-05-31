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
    const address = req.body.address;
    const lat = req.body.lat;
    const lng = req.body.lng;
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
            user_id: user_id,
            address: address,
            lat: lat,
            lng: lng
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
            console.log(err)
            console.log("******POST /api/home/create FAIL!!******");
            return res.json({
                success: false,
                error: err
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


router.post("/searchhomelist/:page", (req, res) => {
    console.log("******POST /api/homes/searchhomelist PASS!!******");

    const keyword = req.body.keyword.toLocaleLowerCase();
    const page = req.params.page;
    const maxprice = req.body.price;
    const guest_availability = req.body.guest_availability;
    const rooms_availability = req.body.rooms_availability;
    const beds_availability = req.body.beds_availability;
    const bath_availability = req.body.bath_availability;
    const room_type = req.body.room_type;
    const property_type = req.body.property_type;
    const setup_for_guest = req.body.setup_for_guest;
    const target = req.body.target;
    const address = req.body.destination;
    console.log(address)
    Home
        .query(function (home) {
            home.where(function () {
                this.whereRaw(`LOWER(title) LIKE '%${keyword}%'`);
                this.orWhereRaw(`LOWER(description) LIKE '%${keyword}%'`);
                this.orWhereRaw(`LOWER(address) LIKE '%${keyword}%'`);
            });
            if (maxprice) {
                home.where('price', '<=', `${maxprice}`);
            }
            if (guest_availability) {
                home.where('guest_availability', '>=', `${guest_availability}`);
            }
            if (rooms_availability) {
                home.where('rooms_availability', '>=', `${rooms_availability}`);
            }
            if (beds_availability) {
                home.where('beds_availability', '>=', `${beds_availability}`);
            }
            if (bath_availability) {
                home.where('bath_availability', '>=', `${bath_availability}`);
            }
            if (room_type) {
                home.where({'room_type': `${room_type}`});
            }
            if (property_type) {
                home.where({'property_type': `${property_type}`});
            }
            if (setup_for_guest) {
                home.where({'setup_for_guest': `${setup_for_guest}`});
            }
            if (target) {
                home.where({'target': `${target}`});
            }
            if (address) {
                home.whereRaw(`LOWER(address) LIKE '%${address}%'`)
            }


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