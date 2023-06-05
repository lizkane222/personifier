const Segmenter = require('../models/segmenter.model');
// https://mongoosejs.com/docs/queries.html

// READ : ALL SEGMENTERS
module.exports.findAllSegmenters = (req, res) => {
    Segmenter.find()
        .then((allsegmenters) => {
            res.json({ segmenters: allsegmenters })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding all Segmenters : ', error: err })
        });
}
 
// READ : ONE SEGMENTER USER
module.exports.findSegmenter = (req, res) => {
    // console.log(req.params)
    Segmenter.findOne({ _id: req.params.id })
        .then(findOneSegmenter => {
            res.json({ segmenter: findOneSegmenter })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong finding one Segmenter ${req.params.id} : `, error: err })
        });}

// CREATE : ONE SEGMENTER USER
module.exports.createSegmenter = (req, res) => {
    Segmenter.create(req.body)
        .then(newSegmenter => {
            res.json({ newsegmenter: newSegmenter })
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
// UPDATE : ONE SEGMENTER USER
module.exports.updateSegmenter = (req, res) => {
    // console.log(req.params)
    Segmenter.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedSegmenter => {
            res.json({ segmenter: updatedSegmenter })
        })
        .catch((err) => {
            // res.json({ message: `Something went wrong deleting Segmenter ${req.params.id} : `, error: err })
            res.status(400).json(err)
        });}
 
// DELETE : ONE SEGMENTER USER
module.exports.deleteSegmenter = (req, res) => {
    Segmenter.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: `Something went wrong deleting Segmenter ${req.params.id} : `, error: err })
        });}
