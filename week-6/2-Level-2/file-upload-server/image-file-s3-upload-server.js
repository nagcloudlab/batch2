
const express = require('express');
const aws = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');


const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const s3 = new aws.S3({
    accessKeyId: 'AKIAQD7S63PNWO7DNOFH',
    secretAccessKey: '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',
    Bucket: 'nagcloudlab-batch2'
});


/**
 * Single Upload
 */
const profileImgUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'nagcloudlab-batch2',
        acl: 'public-read',
        key: function (req, file, cb) {
            cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname))
        }
    }),
    limits: { fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image-file');

function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

app.post('/api/upload-file', (req, res) => {
    profileImgUpload(req, res, (error) => {
        if (error) {
            console.log('errors', error);
            res.json({ error: error });
        } else {
            // If File not found
            if (req.file === undefined) {
                console.log('Error: No File Selected!');
                res.json('Error: No File Selected');
            } else {
                // If Success
                const imageName = req.file.key;
                const imageLocation = req.file.location;
                // Save the file name into database into profile model
                res.json({
                    image: imageName,
                    location: imageLocation
                });
            }
        }
    });
});


// Set up a port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
