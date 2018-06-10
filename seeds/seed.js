const faker = require("faker");
const bcrypt = require("bcrypt");
const BUILD_USER_NUM = 100;
const BUILD_HOME_NUM = BUILD_USER_NUM * 10;
const BUILD_TRIP_NUM = BUILD_USER_NUM * 20;
const {
    format
} = require("react-phone-input-auto-format");

function buildUserSeed(knex) {
    let res = [];
    for (let i = 1; i <= BUILD_USER_NUM; i++) {
        res.push(
            knex("users").insert({
                email: `user${i}@gmail.com`,
                username: `User_${i}`,
                img: "http://pic.uzzf.com/up/2017-3/14901722897158766.jpg",
                password_digest: bcrypt.hashSync("password", 10),
                phonenumber: format(faker.phone.phoneNumberFormat()),
                gender: Math.random() > 0.5,
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName(),
                description: faker.lorem.sentence(),
                created_at: new Date(),
                updated_at: new Date()
            }))
    }
    return res;
}

const images = [
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328734/7c7e75847879244c6e0c6e8646f4bdea.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328732/3.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328731/01-This-minimalist-apartment-features-amazing-views-of-the-Michigan-Lake-and-nothing-distracts-from-them-the-color-palette-is-rather-cooling-to-match-the-water-surface-775x436.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328707/Emily-Henderson-Christmas-2017-Neutral-Winter-Wonderland-14.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328707/my-white-bedroom-modmissy-layers-of-cotton-linens-on-the-bed-give-a-cool-as-sensation-i-made-duvet-cover-from-2-sheets-that-we-hubby-and-brought-back_bedroom-white-sheets_bedroom_cheap-bedroom-sets-ki.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328706/oahu-hotel-rooms-ocean-front-king-room.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328706/simple-living-room-design-Simple-Living-Room-Design-For-Small-House-Chairs-Simple-Living-Room-For-Small-Space-Living-Room-Decorating.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328705/images_1.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328704/242787efb10d1c7f04b778b92fdbd644.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328704/luxury-room-sofitel-the-palm-dubai-1200x675.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328704/modern-minimalist-interior-design-living-room-small-living-room-ideas-designer-living-room-furniture-interior-design-simple-living-room-setup-modern-house-home-decoration-ideas-2017.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328703/Contemporary-and-Modern-Bedding.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328703/br_rm_danapoint_brown1_Dana-Point-Brown-5-Pc-King-Panel-Bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328701/The-Madison-at-Racine-Apartments-in-Chicago-2.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328701/69e5c18a5e2b144f460741c5d80c25ea.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328700/Small-Space-Style-12-7-HERO.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328701/white-bedroom-rug-1-2774.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328700/white-and-grey-minimalist-living-room.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328700/using-colour-5.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328699/simple-master-bedroom-ceiling-decoration-effect-picture.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328699/Small-Rectangular-Living-Room-Design-Ideas-and-Living-Room-Ideas-With-Cream-Sofa-Living-Room-Dining-Room-Design-Ideas-and-Living-Room-Ideas-With-Cream-Sofa.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328698/meg-ryan-architectural-digest-01.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328698/orig_1.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328698/maxresdefault.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328697/Modern-Minimalist-Living-Room-Interior-Design-ideas-29.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328696/images.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328696/contemporary-bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328696/br_rm_paris3_Sofia-Vergara-Paris-Silver-7-Pc-Queen-Bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328696/engaging-office-guest-room-ideas-17-1420682184545.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328695/orig.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328695/Jan_2018_dining.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328695/orig_2.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328695/br_rm_paris6_Sofia-Vergara-Paris-Silver-7-Pc-Queen-Upholstered-Bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328694/modernhome.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328694/farrow-and-ball-light-blue-farrow-ball-vert-floor-walls-light-blue-farrow-and-ball-light-blue-images.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328694/cute-beautiful-bedroom-decor-14-decorated-rooms-bedrooms-best-simple.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328693/1429738756916.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328693/rimbun-sanctuary-apartment-fb.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328693/Rooms-Hotels-Kazbegi-Interior-DSC_5753-1024x683.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328693/shelves-home-depot-canada-for-bathroom-towels-walmart-storage-closet-diy-corner-living-modern-alluring-red-accent-tone-and-black-floating.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328692/oahu-hotel-rooms-large-luxury-ocean-room.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328692/arch-head2.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328691/feature.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328691/prettiest-bedroom-in-the-world-worlds-best-bedrooms-home-design-super-small-bedroom-design.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328690/navy-couch-living-room-large-size-of-blue-sofa-set-blue-velvet-couch-navy-couch-living-room-navy-blue-living-room-furniture-ideas.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328690/modern-decoration-beautiful-bedroom-designs-romantic.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328690/naturally-inviting-girly-apartment-1.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328689/modular-wall-unit-monaco-red-l.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328689/Cute-Round-Decorative-Wall-Clocks-For-Home-Decorating-Ideas-With-Black-Wall-Bookshelf-And-Black-Sofa-Using-Colorful-Pillows.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328689/japanese-style-living-room-gray-rug-on-wooden-floor-white-covered-bedding-sheet-shoji-pendant-lamp-small-pendant-lamps-above-low-dining-table-wooden-storage-shelves.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328689/minimalist-bedroom-design-for-small-rooms-bedroom-minimalist-bedroom-design-for-small-room-intended-for-minimalist-bedroom-design-minimalist-bedroom-design-minimalist-bedroom-design-small-rooms.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328689/br_rm_urbanplains_brown_uph2_Urban-Plains-Brown-5-Pc-King-Upholstered-Bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328688/minimalist-living-rooms-12-1505200566.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328688/like-interior-design-follow-us-apartment-living-for-the-modern-minimalist-sleek.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328687/br_rm_whitmore_cream_uph_low_Whitmore-Cherry-5-Pc-Queen-Upholstered-Bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328687/modern-minimalist-interior-design-ideas-modern-minimalist-living-room-interior-design-ideas-modern-minimalist-house-design-trends-popular-ideas.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328687/ghRoom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328687/modern-living-room-storage-units-full-size-of-cabinets-for-living-room-living-room-storage-cabinets-for-interior-modern-living-room-wall-units-with-storage.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328687/architecture-modern-apartment-1-850x450.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/dark-grey-room-dark-grey-and-blue-bedroom-cheap-photos-of-dark-bedrooms-dark-bedroom-dark-blue-gray-bedroom-dark-grey-and-blue-bedroom-dark-grey-sofa-living-room-decor.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/beautiful-white-brown-wood-glass-luxury-design-best-neutral-bedroom-ideas-floor-mattres-cushion-night-lamp-clubchairs_bedroom-flooring-ideas_bedroom_girls-bedroom-ideas-diy-decor-paint-furniture-decor.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/black-block-sofa-white-walls-minimalist-tv-room.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/living-room-wood-dark-heavy.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/Livingroom-Color-Scheme-Jeeworld.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/gold-bedroom-walls-golden-bedroom-gold-wall-decor-ideas-wallpaper-beautiful-golden-bedroom-featured-living-room-golden-state-warriors-golden-bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/brown-floors-mini-orating-italian-design-modern-oration-low-ideas-fireplace-apartment-sitting-wall-pictures-building-picture-stylish-above-simple-area-stone-color-room-furniture-sh.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328686/living-room-wall-unitsliving-units-on-amazonliving-unit-designslivingroom-storage-or-cabinets-designs-970x710.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328685/Good-Awesome-Modern-Apartment-Interior-Design-Ideas-Feats-Stands-Free-Tufted-Sofa-And-Rectangle-Glass-Top-Table-About-Modern-Apartment-Design.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328685/dark-grey-sofa-living-room-ideas-brown-sofa-transparant-banister-modern-wooden-table-grey-modern-sofa-gorgeous-wickery-black-sofa.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328685/dLP_MdsyAfter_20170414.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328685/built-in-wall-units-for-dining-room-built-in-wall-units-bedroom.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328685/high-end-bedroom-design-delightful-high-end-bedroom-design-4-high-gloss-bedroom-designs.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328684/doherty_10names04_liv.webp',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328684/Chic-Living-room-of-Doria-by-Fabio-Fantolino-Used-Minimalist-Modern-Design1.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328659/white-wall-with-contemporary-red-modern-storage-wall-unit.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328657/white-living-room-decor.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328657/who1522gr-202038-Fabulous-Ocean-Front-King-Med-1600x900.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1528328657/Worthy-Paint-Ideas-For-A-Dining-Room-B56d-About-Remodel-Rustic-Home-Design-Style-with-Paint-Ideas-For-A-Dining-Room.jpg',
    'https://res.cloudinary.com/airtraveler/image/upload/v1527974665/ledmccgvqq11z6e1o5zc.jpg'


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

const address_pool = [
    "2651 S Kingston Ct, Aurora, CO, USA",
    "106 Kamm Ave, South River, NJ, USA",
    "4585 Rugosa Way, Austell, GA, USA",
    "5406 Interstate 55 North Frontage Road, Jackson, MS, USA",
    "600 South Brown Street, Bakersfield, CA, USA",
    "770 E Holly St, Bellingham, WA, USA",
    "23412 Pacific Park Dr, Aliso Viejo, CA, USA",
    "430 North Tejon Street, Colorado Springs, Colorado, USA",
    "110 County Road 4th Northeast, Spicer, MN, USA",
    "157 Knob Hill Rd, Glastonbury, CT, USA",
    "12841 Long Gun Dr, Dunkirk, MD, USA",
    "741 E Turmont St, Carson, CA, USA",
    "6411 Stablewood Way, Lithonia, GA,USA",
    "13-19 Fair Lawn Ave, Fair Lawn, NJ,USA",
    "1340 3rd Ave Se,  Rochester, MN,USA",
    "244 W 21st St,  New York, NY,USA",
    "1329 W Walnut Hill Ln, Irving, TX, USA",
    "1480 Eight Mile Rd,Cincinnati, OH,USA",
    "1212 Richard Ln E,Honolulu, HI,USA",
    "249 N Miller Rd,Saginaw, MI,USA",
    "3050 Green Pond Rd,Easton, PA,USA",
    "19915 Horizon Blf,San Antonio, TX ,USA",
    "8703 Curry Ford Rd,Orlando, FL,USA",
    "4859 El Grande Pl,El Sobrante, CA,USA",
    "48 Elm St,Northampton, MA,USA",
    "902 Hayden Dr, Mchenry, IL,USA",
    "100 Lacosta Ln,Daytona Beach, FL,USA",
    "372 Mammoth Rd,Londonderry, NH,USA",
    "2 Ravinia Dr,Atlanta, GA,USA",
    "1629 Netherwood Ave,Memphis, TN,USA",
    "5440 Blue Ridge Cutoff,Kansas City, MO,USA",
    "5336 Highlight Pl,Los Angeles, CA,USA",
    "1100 College St,Northfield, MN,USA",
    "3224 Cheek Sparger Rd,Bedford, TX,USA",
    "5882 Sheldon Court,College Park, GA,USA",
    "11026 Callow Rd, Lake Stevens, WA,USA",
    "5580 Holland Dr,Arvada, CO,USA",
    "174 Michigan Ct,Bloomingdale, IL,USA",
    "2131 W Highland Spgs,Saint Maries, ID,USA",
    "120 Wilshire Dr,Tinton Falls, NJ USA",
    "300 Lincoln Pkwy,Columbia, SC,USA",
    "2225 Grant Rd,Los Altos, CA,USA",
    "635 Emerald Meadows Ct,Saint Charles, MO,USA",
    "345 N Glenn Ave,Fresno, CA,USA",
    "401 E Hendy Ave,Sunnyvale, CA,USA"
];

const googleMapsClient = require("@google/maps").createClient({
    key: "AIzaSyD-ItGZm4M2T9YPPL8Lzn4H1mSueAjFFlQ"
});

let getGeoAddress = [];
let geoValidLocations = [];
for (let address of address_pool) {
    getGeoAddress.push(
        new Promise(resolve => {
            let obj = {};
            obj["address"] = address;
            googleMapsClient.geocode({
                    address: address
                },
                (err, response) => {
                    if (!err) {
                        response = JSON.parse(JSON.stringify(response));
                        const info = response.json.results[0].geometry.location;
                        obj["lat"] = info.lat;
                        obj["lng"] = info.lng;
                        geoValidLocations.push(obj);
                        resolve();
                    }
                }
            );
        })
    );
}

function buildHomeSeed(knex) {
    let res = [];
    for (let i = 1; i <= BUILD_HOME_NUM; i++) {
        const address = faker.random.arrayElement(geoValidLocations);
        let imgs = [];
        
        imgs.push(faker.random.arrayElement(images));
        imgs.push(faker.random.arrayElement(images));
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
                price: Math.floor(Math.random() * 500),
                guest_availability: Math.floor(Math.random() * 16 + 1),
                rooms_availability: Math.floor(Math.random() * 8 + 1),
                beds_availability: Math.floor(Math.random() * 4 + 1),
                bath_availability: Math.floor(Math.random() * 4 + 1),
                setup_for_guest: faker.random.arrayElement(setup_for_guest),
                target: faker.random.arrayElement(target),
                address: address.address,
                lat: address.lat,
                lng: address.lng,
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

exports.seed = function (knex, Promise) {
    return Promise.all(getGeoAddress).then(() => {
        return knex("users")
            .del()
            .then(function () {
                return Promise.all(buildUserSeed(knex));
            })
            .then(function () {
                return knex("homes")
                    .del()
                    .then(function () {
                        return Promise.all(buildHomeSeed(knex));
                    })
                    .then(function () {
                        return knex("trips")
                            .del()
                            .then(function () {
                                return Promise.all(buildTripSeed(knex));
                            });
                    });
            });
    });
};