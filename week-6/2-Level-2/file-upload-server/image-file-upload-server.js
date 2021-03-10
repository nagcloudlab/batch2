const express = require('express');
const multer = require('multer');
const path = require('path');
const ejs = require('ejs');


// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('my-image')




// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/; // regular exporession
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!', null);
    }
}


// Init app
const app = express();


// EJS
app.set('view engine', 'ejs');


// Public Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => res.render('index'));


app.post('/upload-image', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('index', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('index', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                res.render('index', {
                    msg: 'File Uploaded!',
                    file: `${req.file.filename}`
                });
            }
        }
    });
});


const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
