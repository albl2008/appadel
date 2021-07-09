const {Router} = require('express')
const PlaceEntry = require('../models/PlaceEntry')
const router = Router();

router.get('/', async (req,res,next)=>{
    try {
        const entries = await PlaceEntry.find();
        res.json(entries)
    } catch (error){
        next(error)
    }
   
})

router.post('/', async (req,res,next)=>{
    try{
        const placeEntry = new PlaceEntry(req.body);
        const createdEntry = await placeEntry.save()
        res.json(createdEntry)
        console.log(req.body)
    } catch(error){
        if (error.name === 'ValidationError') {
            res.status(422);
        }
        next(error);
    }
   
})

module.exports = router;