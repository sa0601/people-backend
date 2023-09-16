const express = require('express');
const router = express.Router();
const People = require("../models/people");

//INDUCES





//INDEX
router.get("/", async (req, res) => {
    try{
        res.json(await People.find())
    }catch(error){
        res.status(400).json(error)
    }
});

//DELETE
router.delete('/:id', async (req, res) => {
    try{
        res.json(await People.findByIdAndDelete(req.params.id));
    }catch(error){
        res.status(400).json(error);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    }catch(error){
        res.status(400).json(error);
    }
})


//CREATE
router.post('/', async (req, res) => {
    try {
        res.json( await People.create(req.body))
    } catch(error){
        res.status(400).json(error)
    }
})

//EDIT

//SHOW
router.get("/:id", async (req, res) => {
    try{
        res.json(await People.findById(req.params.id));
    }catch(error){
        res.status(400).json(error)
    }
})


module.exports = router;