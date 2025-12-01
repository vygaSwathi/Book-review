const Review = require('../model/review.js');


const getReview = async(req,res)=>{
  try {
    const reviews = await Review.find()
    res.status(200).json(reviews)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
const createReview = async(req,res)=>{
  try {
    const createdReview = await Review.create(req.body)
    res.status(201).json(createdReview)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const updateReview = async(req,res)=>{
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id,
      req.body,
    {new:true, runValidators:true})
    if(!updatedReview){
      res.status(404).json({message:"review not found"})
    }
    res.status(200).json(updatedReview)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


const deleteReview = async(req,res)=>{
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id)
    if(!deletedReview){
      res.status(404).json({message:"review not found"})
    }
    res.status(200).json({message:"review deleted successfully"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  getReview,
  createReview,
  updateReview,
  deleteReview
}