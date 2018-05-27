import express from "express";
import Trip from "../models/trip";

let router = express.Router();
router.post('/newtrip', (req, res) => {

    const check_in = req.body.check_in;
    const check_out = req.body.check_out
    const guest_number = req.body.guest_number;
    const reserved_id = req.body.reserved_id;
    const guest_id = req.body.guest_id;
    const home_id = req.body.home_id;
    console.log("new trip pass")
    Trip.forge(
        {
            check_in: check_in,
            check_out: check_out,
            guest_number: guest_number,
            reserved_id: reserved_id,
            guest_id: guest_id,
            home_id: home_id,
        },
        {
            hasTimestamps: true
        }
    )
        .save()
        .then(trip => {
            console.log(trip)
            return res.json({
                trip: trip
            });
        })
        .catch(err => {
                console.log("******POST /api/trips/newtrip FAIL!!******");
                console.log(err)
                return res.json({
                    error: err
                });
            }
        )


})


router.get("/", (req, res) => {
    console.log("******GET api/trips PASS!!******");
    Trip.fetchAll({withRelated: ['home']})
        .then(trips => {
            console.log("******GET api/trips SUCCESS!!******");
            return res.json(trips);
        })
        .catch(err => {
            console.log("******GET api/trips FAIL!!******");
            return res.json(err);
        });
});
router.delete("/delete/:trip_id", (req, res) => {
    console.log("******GET api//trips/delete PASS!!******");
    const id = req.params.trip_id;
    Trip.query({where: {id: id}})
        .destroy()
        .then(trips => {
            console.log("******GET api/trips/delete SUCCESS!!******");
            return res.json(trips);
        })
        .catch(err => {
            console.log("******GET api/trips/delete FAIL!!******");
            return res.json(err);
        });
});
router.get("/gettrip/:trip_id", (req, res) => {
    const id = req.params.trip_id;
    console.log("******GET api/trips PASS!!******");
    Trip.query({
        where: {
            id: id
        }
    })
        .fetch({withRelated: ['home']})
        .then(trip => {
            console.log("******GET /api/trips/:trip_id SUCCESS!!******");
            return res.json({
                trip: trip
            });
        })
        .catch(error => {
            console.log("******GET /api/trips/:trip_id FAIL!!******");
            return res.json({
                error: error
            });
        });
});

router.get("/:guest_id", (req, res) => {
    console.log("******GET api/trips/:guest_id PASS!!******");
    const guest_id = req.params.guest_id;
    Trip.query({
        where: {
            guest_id: guest_id
        }
    })
        .fetchAll({withRelated: ['home']})
        .then(trips => {
            console.log("******GET api/trips/:guest_id  SUCCESS!!******");
            return res.json(trips);
        })
        .catch(err => {
            console.log("******GET api/trips/:guest_id  FAIL!!******");
            return res.json(err);
        });
});

export default router;
