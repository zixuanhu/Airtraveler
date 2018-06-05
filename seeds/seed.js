const faker = require("faker");
const bcrypt = require("bcrypt");
const BUILD_USER_NUM = 100;
const BUILD_HOME_NUM = BUILD_USER_NUM * 10;
const BUILD_TRIP_NUM = BUILD_USER_NUM * 5;
const { format } = require("react-phone-input-auto-format");

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
            })

    }
    return res;
}

const images = [
    "http://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg",
    "https://images.stylebyemilyhenderson.com/SBEH_Images/2017/11/Emily-Henderson-Christmas-2017-Neutral-Winter-Wonderland-14.jpg",
    "http://bf01c2ed37effae151cd-792ce12b6282494a5faa9f34a69274ce.r58.cf1.rackcdn.com/lps/assets/u/who1522gr-202038-Fabulous-Ocean-Front-King-Med-1600x900.jpg",
    "http://bf01c2ed37effae151cd-792ce12b6282494a5faa9f34a69274ce.r58.cf1.rackcdn.com/lps/assets/u/who1522gr-202038-Fabulous-Ocean-Front-King-Med-1600x900.jpg",
    "http://bupamalaysia.com/wp-content/uploads/63/living-room-wood-dark-heavy.jpg",
    "http://47b1e16c5fc39d5c11d8-ae3a410e0c52cfb4720aed5a14698407.r7.cf1.rackcdn.com/lps/assets/u/oahu-hotel-rooms-ocean-front-king-room.jpg",
    "https://images.crateandbarrel.com/is/image/Crate/dLP_MdsyAfter_20170414?wid=1440",
    "https://roomshotels.com/wp-content/uploads/2016/09/Rooms-Hotels-Kazbegi-Interior-DSC_5753-1024x683.jpg",
    "http://www.tc.columbia.edu/housing/guest-and-conference-housing/guest-housing/rooms/ghRoom.jpg",
    "https://www.roomandboard.com/features/gallery/Jan_2018_dining/Jan_2018_dining.jpg",
    "http://meccafest.com/mec/simple-living-room-design-Simple-Living-Room-Design-For-Small-House-Chairs-Simple-Living-Room-For-Small-Space-Living-Room-Decorating.jpg",
    "http://www.nytexas.com/wp-content/uploads/2016/12/Cute-Round-Decorative-Wall-Clocks-For-Home-Decorating-Ideas-With-Black-Wall-Bookshelf-And-Black-Sofa-Using-Colorful-Pillows.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2009/07/white-living-room-decor.jpg",
    "https://st.hzcdn.com/simgs/0591ba9901920b69_4-6276/contemporary-bedroom.jpg",
    "http://lifex.hr/wp-content/uploads/2012/08/3.jpg?x84988",
    "http://www.shaidee.com/wp-content/uploads/japanese-style-living-room-gray-rug-on-wooden-floor-white-covered-bedding-sheet-shoji-pendant-lamp-small-pendant-lamps-above-low-dining-table-wooden-storage-shelves.jpg",
    "http://www.decobizz.com/pictures/20131211/best-idea-living-room-modern-wardrobe-interior.jpg",
    "https://editeestrela.net/wp-content/uploads/2017/08/Contemporary-and-Modern-Bedding.jpg",
    "https://i.ytimg.com/vi/jLNr3sKSkqU/maxresdefault.jpg",
    "http://diyblogdesigns.com/img/2018/04/brown-floors-mini-orating-italian-design-modern-oration-low-ideas-fireplace-apartment-sitting-wall-pictures-building-picture-stylish-above-simple-area-stone-color-room-furniture-sh.jpg",
    "http://cdn.home-designing.com/wp-content/uploads/2017/11/black-block-sofa-white-walls-minimalist-tv-room.jpg",
    "http://rilane.com/images/2016140/white-and-grey-minimalist-living-room.jpg",
    "https://avatars.mds.yandex.net/get-pdb/33827/65b7327a-76b9-4925-9e70-1f28ba22c64d/orig",
    "https://avatars.mds.yandex.net/get-pdb/69339/19adae0a-5c90-4acf-ad5a-1410680b1ab3/orig",
    "http://www.connectorcountry.com/wp-content/uploads/2017/09/like-interior-design-follow-us-apartment-living-for-the-modern-minimalist-sleek.jpg",
    "http://catinhouse.co/wp-content/uploads/2016/06/Good-Awesome-Modern-Apartment-Interior-Design-Ideas-Feats-Stands-Free-Tufted-Sofa-And-Rectangle-Glass-Top-Table-About-Modern-Apartment-Design.jpg",
    "http://rinka.info/wp-content/uploads/2017/11/relaxing-living-rooms-with-gorgeous-modern-sofas-relaxing-outdoor-furniture.jpg",
    "https://rocheledecorating.com.au/website-images/modernhome.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/minimalist-living-rooms-12-1505200566.jpg",
    "http://interiordesign4.com/wp-content/uploads/2013/12/Modern-Minimalist-Living-Room-Interior-Design-ideas-29.jpg",
    "http://bobmwc.com/wp-content/uploads/dark-grey-sofa-living-room-ideas-brown-sofa-transparant-banister-modern-wooden-table-grey-modern-sofa-gorgeous-wickery-black-sofa.jpg",
    "http://onlinemundo.info/wp-content/uploads/2018/05/modern-minimalist-interior-design-ideas-modern-minimalist-living-room-interior-design-ideas-modern-minimalist-house-design-trends-popular-ideas.jpg",
    "http://gojovi.com/wp-content/uploads/2018/02/Small-Rectangular-Living-Room-Design-Ideas-and-Living-Room-Ideas-With-Cream-Sofa-Living-Room-Dining-Room-Design-Ideas-and-Living-Room-Ideas-With-Cream-Sofa.jpg",
    "http://www.dickoatts.com/wp-content/uploads/2014/08/Chic-Living-room-of-Doria-by-Fabio-Fantolino-Used-Minimalist-Modern-Design1.jpg",
    "http://syrius.top/wp-content/uploads/2018/05/modern-minimalist-interior-design-living-room-small-living-room-ideas-designer-living-room-furniture-interior-design-simple-living-room-setup-modern-house-home-decoration-ideas-2017.jpg",
    "https://www.digsdigs.com/photos/2017/12/01-This-minimalist-apartment-features-amazing-views-of-the-Michigan-Lake-and-nothing-distracts-from-them-the-color-palette-is-rather-cooling-to-match-the-water-surface-775x436.jpg",
    "https://adorable-home.com/wp-content/gallery/naturally-inviting-girly-apartment/naturally-inviting-girly-apartment-1.jpg",
    "https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2015/12/Small-Space-Style-12-7-HERO.jpg",
    "https://cdn.interiorzine.com/wp-content/uploads/2014/03/miysis-3d-studio-interior-fireplace.jpg",
    "http://marlinspring.com/wp-content/uploads/2018/03/feature.jpg",
    "https://www.simedarbyproperty.com/sites/default/files/2018-04/rimbun-sanctuary-apartment-fb.jpg",
    "https://cdnblog.rentcafe.com/blog/wp-content/uploads/2016/04/The-Madison-at-Racine-Apartments-in-Chicago-2.jpg",
    "https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2017/01/09/BostonGlobe.com/Lifestyle/Images/doherty_10names04_liv.jpg",
    "https://www.londonperfect.com/g/apartment-hero-images/hi_eldon-apartment-rental-16.jpg",
    "https://cdn.freshome.com/wp-content/uploads/2016/03/architecture-modern-apartment-1-850x450.jpg",
    "https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/7c7e75847879244c6e0c6e8646f4bdea.jpg",
    "http://wylielauderhouse.com/wp-content/uploads/imgp/white-bedroom-rug-1-2774.jpg",
    "http://mypaintings.info/wp-content/uploads/2018/04/dark-grey-room-dark-grey-and-blue-bedroom-cheap-photos-of-dark-bedrooms-dark-bedroom-dark-blue-gray-bedroom-dark-grey-and-blue-bedroom-dark-grey-sofa-living-room-decor.jpg",
    "http://www.bis-eg.com/wp-content/uploads/2017/11/bohemian-bedroom-ideas-bohemian-apartment-decor-chic-room-bohemian-style-bedroom-decor-gypsy-style-bedroom-bohemian-style-bohemian-bedroom-ideas-on-a-budget.jpg",
    "http://www.anadolukardiyolderg.com/wp-content/uploads/2018/05/cute-beautiful-bedroom-decor-14-decorated-rooms-bedrooms-best-simple.jpg",
    "http://errolchua.com/wp-content/uploads/2018/03/modern-decoration-beautiful-bedroom-designs-romantic.jpg",
    "http://xecc.co/wp-content/uploads/2018/05/gold-bedroom-walls-golden-bedroom-gold-wall-decor-ideas-wallpaper-beautiful-golden-bedroom-featured-living-room-golden-state-warriors-golden-bedroom.jpg",
    "http://47b1e16c5fc39d5c11d8-ae3a410e0c52cfb4720aed5a14698407.r7.cf1.rackcdn.com/lps/assets/u/oahu-hotel-rooms-large-luxury-ocean-room.jpg",
    "http://www.overcurfew.com/wp-content/uploads/2018/03/ikea-bedroom-ideas-small-rooms-bedroom-ideas-for-small-rooms-amazing-bedroom-for-interior-decoration-of-your-home-decorating-easter-eggs-with-shaving-cream.jpg",
    "http://www.anadolukardiyolderg.com/wp-content/uploads/2018/05/engaging-office-guest-room-ideas-17-1420682184545.jpeg",
    "http://cdn01.cdn.justjared.com/wp-content/uploads/2016/10/ryan-ad/meg-ryan-architectural-digest-01.jpg",
    "http://eventsbygoldman.com/wp-content/uploads/2018/05/peacock-themed-room-download-peacock-bedroom-decor-net-ideas-delightful-room-add-gold-peacock-room-ideas.jpg",
    "http://syrius.top/wp-content/uploads/2018/05/minimalist-bedroom-design-for-small-rooms-bedroom-minimalist-bedroom-design-for-small-room-intended-for-minimalist-bedroom-design-minimalist-bedroom-design-minimalist-bedroom-design-small-rooms.jpg",
    "https://theedisonhouston.com/wp-content/uploads/2017/12/built-in-wall-units-for-dining-room-built-in-wall-units-bedroom.jpg",
    "https://i.pinimg.com/originals/69/e5/c1/69e5c18a5e2b144f460741c5d80c25ea.jpg",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/9/27/2/CI_Dwell-with-Dignity-before-and-after-bed-8.jpg.rend.hgtvcom.966.725.suffix/1475019892091.jpeg",
    "http://www.loversiq.com/daut/as/f/m/my-white-bedroom-modmissy-layers-of-cotton-linens-on-the-bed-give-a-cool-as-sensation-i-made-duvet-cover-from-2-sheets-that-we-hubby-and-brought-back_bedroom-white-sheets_bedroom_cheap-bedroom-sets-ki.jpg",
    "https://www.clickbratislava.com/wp-content/uploads/2017/12/prettiest-bedroom-in-the-world-worlds-best-bedrooms-home-design-super-small-bedroom-design.jpg",
    "http://flipiy.com/wp-content/uploads/2017/10/best-25-cool-bedroom-ideas-ideas-on-pinterest-teenager-girl-throughout-cool-rooms-for-girls.jpg",
    "http://www.decobizz.com/pictures/20131204/simple-master-bedroom-ceiling-decoration-effect-picture.jpg",
    "http://www.loversiq.com/daut/as/f/b/beautiful-white-brown-wood-glass-luxury-design-best-neutral-bedroom-ideas-floor-mattres-cushion-night-lamp-clubchairs_bedroom-flooring-ideas_bedroom_girls-bedroom-ideas-diy-decor-paint-furniture-decor.jpg",
    "http://viksistemi.com/wp-content/uploads/2018/02/high-end-interior-design-houses-window-kitchens-will-have-a-mix-of-matte-white-lacquer-and-elm-millwork-marble-islands-be-paired-with-wood-breakfast-bars-credit-redundant-pixel.jpg",
    "http://openasia.club/wp-content/uploads/2017/12/high-end-bedroom-design-delightful-high-end-bedroom-design-4-high-gloss-bedroom-designs.jpg"
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
            googleMapsClient.geocode(
                {
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

exports.seed = function(knex, Promise) {
    return Promise.all(getGeoAddress).then(() => {
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
    });
};
