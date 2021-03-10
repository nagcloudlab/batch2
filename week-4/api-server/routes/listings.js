const express = require('express');
const router = express.Router();
const Listing = require('../model/Listing')
const multer = require('multer');
const path = require('path');


// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './public/images/',
    filename: function (req, file, cb) {
        cb(null, file.originalname + (+new Date()) + "." + file.mimetype.split("/")[1]);
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).array('images')



// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/; // regular exporession
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!', null);
    }
}




router
    .get('/', (req, res, next) => {

        // fetch existing listings from mongodb
        Listing
            .find({})
            .exec((err, documents) => {
                if (err) throw err;
                const docs = documents.map(doc => {
                    return {
                        id: doc._id,
                        title: doc.title,
                        price: doc.price,
                        image: `http://192.168.43.28:3000/images/${doc.image}`
                    }
                })
                res.status(200).json(docs)
            })

    })
    .post('/', (req, res, next) => {

        upload(req, res, (err) => {
            if (err) {
                console.log(err)
                res.json({
                    msg: err
                });
            } else {
                if (req.files.length == 0) {
                    res.json({
                        msg: 'Error: No File Selected!'
                    });
                } else {
                    // res.render('index', {
                    //     msg: 'File Uploaded!',
                    //     file: `${req.file.filename}`
                    // });

                    const body = req.body;
                    console.log(body)
                    const listing = new Listing({ ...body, image: req.files[0].filename })
                    listing.save((err, doc) => {
                        if (err)
                            throw err;
                        res.status(201).json(doc)
                    })

                }
            }
        });



    });

module.exports = router;
