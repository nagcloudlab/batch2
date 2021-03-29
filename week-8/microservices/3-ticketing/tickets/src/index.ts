import express from 'express';
import { json } from 'body-parser';

import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import multer from 'multer';
import path from 'path';

import config from 'config';

const app = express();
app.set('trust proxy', true);
app.use(json());

const s3 = new aws.S3({
  accessKeyId: config.get("aws.access_key"),
  secretAccessKey: config.get("aws.secret_key")
});

const ticketPicUpload = multer({
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
}).single('ticket-pic');


function checkFileType(file: any, cb: any) {
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

app.post("/api/tickets", (req: any, res: any) => {

  ticketPicUpload(req, res, (error: any) => {
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
        console.log(req.body)
        res.json({
          image: imageName,
          location: imageLocation
        });
      }
    }
  });

});

const start = async () => {
  app.listen(4000, () => {
    console.log('Listening on port 4000!!!!!!!!');
  });
};

start();
