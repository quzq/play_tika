import * as _ from "lodash";
import fs from "fs";
import multer from 'multer';

const upload = multer({ dest: './uploads/' }).single('file');;

export const tika = async (req, res, next) => {
  upload(req, res, err => {
  console.log(req.file);  

  res.json({res: 2222})
})};


const _createImageFiles = async (image_dir, filename, base64) => {
  // data:image/png;base64,===ssss....

};
