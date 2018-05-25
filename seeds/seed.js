const faker = require("faker");
const bcrypt = require("bcrypt");
const BUILD_USER_NUM = 100;
const BUILD_HOME_NUM = BUILD_USER_NUM * 50;
const BUILD_TRIP_NUM = BUILD_USER_NUM * 20;

function buildUserSeed(knex) {
    let res = [];
    for (let i = 1; i <= BUILD_USER_NUM; i++) {
        res.push(
            knex("users").insert({
                email: `user${i}@gmail.com`,
                username: `User_${i}`,
                img: "http://pic.uzzf.com/up/2017-3/14901722897158766.jpg",
                password_digest: bcrypt.hashSync("password", 10),
                phonenumber: faker.phone.phoneNumberFormat(),
                gender: Math.random() > 0.5,
                firstname: faker.name.firstName(),
                lastname: faker.name.firstName(),
                description: faker.lorem.sentence(),
                created_at: new Date(),
                updated_at: new Date()
            })
        );
    }
    return res;
}

const images = [
    "https://res.cloudinary.com/airtraveler/image/upload/v1526266183/bnx954o3btknyjcy3liw.jpg",
    "https://res.cloudinary.com/airtraveler/image/upload/v1526268037/e7gzqsxrmqgg7lz8nxq8.jpg",
    "https://res.cloudinary.com/airtraveler/image/upload/v1526145862/bucywhv6gq3s0nzllbky.jpg"
];

const property_type = [
    "Apartment",
    "House",
    "Secondary Unit",
    "Unique Home",
    "Boutique"
];

const room_type = ["Private Room", "Share Room", "Entire Home"];

const setup_for_guest = [
    "Set up for guest",
    "Do it yourself",
    "Pay to clean up"
];

const target = ["Big Group", "Couple", "Family", "With Pets", "Single"];

function buildHomeSeed(knex) {
    let res = [];
    for (let i = 1; i <= BUILD_HOME_NUM; i++) {
        let imgs = [];
        imgs.push(faker.random.arrayElement(images));
        imgs.push(faker.random.arrayElement(images));
        res.push(
            knex("homes").insert({
                user_id: Math.floor(Math.random() * BUILD_USER_NUM + 1),
                title: faker.random.words(),
                description: faker.lorem.paragraph(),
                img: imgs,
                property_type: faker.random.arrayElement(property_type),
                room_type: faker.random.arrayElement(room_type),
                price: faker.random.number(),
                guest_availability: Math.floor(Math.random() * 16 + 1),
                rooms_availability: Math.floor(Math.random() * 8 + 1),
                beds_availability: Math.floor(Math.random() * 4 + 1),
                bath_availability: Math.floor(Math.random() * 4 + 1),
                setup_for_guest: faker.random.arrayElement(setup_for_guest),
                target: faker.random.arrayElement(target),
                created_at: new Date(),
                updated_at: new Date()
            })
        );
    }
    return res;
}

function buildTripSeed(knex) {
    let res = [];
    for (let i = 1; i <= BUILD_TRIP_NUM; i++) {
        let dFrom = new Date();
        dFrom.setDate(dFrom.getDate() - Math.floor(Math.random() * 3 + 1));
        let dTo = new Date();
        dTo.setDate(dTo.getDate() + Math.floor(Math.random() * 3 + 1));
        res.push(
            knex("trips").insert({
                check_in: dFrom,
                check_out: dTo,
                reserved_id: faker.random.uuid(),
                guest_number: Math.floor(Math.random() * 8 + 1),
                guest_id: Math.floor(Math.random() * BUILD_USER_NUM + 1),
                home_id: Math.floor(Math.random() * BUILD_HOME_NUM + 1),
                created_at: new Date(),
                updated_at: new Date()
            })
        );
    }
    return res;
}

exports.seed = function(knex, Promise) {
    return knex("users")
        .del()
        .then(function() {
            return Promise.all(buildUserSeed(knex));
        })
        .then(function() {
            return knex("homes")
                .del()
                .then(function() {
                    return Promise.all(buildHomeSeed(knex));
                })
                .then(function() {
                    return knex("trips")
                        .del()
                        .then(function() {
                            return Promise.all(buildTripSeed(knex));
                        });
                });
        });
};
