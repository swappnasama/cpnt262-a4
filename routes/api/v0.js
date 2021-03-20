
//router for gallery
const express = require('express');
const router = express.Router();

const galleryImages= require('../../data/galleryImages');
router.get('/gallery', (req,res)=>{

  res.json(galleryImages);
  

});
module.exports = router;