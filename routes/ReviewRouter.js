const express = require('express');

const {  getReview,
  createReview,
  updateReview,
  deleteReview} = require('../controller/reviewController.js')

  const router = express.Router();

  router.get('/',getReview);
  router.post('/',createReview);
  router.put('/:id',updateReview);
  router.delete('/:id',deleteReview);

  module.exports = router;
  