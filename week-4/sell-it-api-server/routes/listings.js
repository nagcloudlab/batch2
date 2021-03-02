var express = require('express');
var router = express.Router();


let listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: "http://localhost:3000/assets/jacket.jpg",
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: "http://localhost:3000/assets/couch.jpg",
  },
];

//GET /api/listings

router.get('/', function (req, res, next) {
  // fetech data from SQL | NoSQL datasources ( MySQL | MongoDB)
  setTimeout(() => {
    res.json(listings)
  }, 4000)
});

router.post('/', function (req, res, next) {
  let newListing = req.body
  newListing.id = listings.length + 1
  listings = [newListing, ...listings]
  res.json(newListing)
});


module.exports = router;
