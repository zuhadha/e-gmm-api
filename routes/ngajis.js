const express = require('express')
const router = express.Router()
const Ngaji = require('../models/ngaji')
const ngaji = require('../models/ngaji')

// getting all 
router.get('/', async (req, res) => {
    try {
        const ngajis = await Ngaji.find()
        res.json(ngajis)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
 
// getting one
router.get('/:id', getNgaji, (req, res) => {
    res.json(res.ngaji)
})

// creating one
router.post('/', async (req, res) => {
    const ngaji = new Ngaji({
        studentsName: req.body.studentsName,
        teachersName: req.body.teachersName,
        date: req.body.date,
        surahRead: req.body.surahRead,
        ayahRead: req.body.ayahRead,
        surahMemorize: req.body.surahMemorize,
        ayahMemorize: req.body.ayahMemorize,
    })

    try {
        const newNgaji = await ngaji.save()
        res.status(201).json(newNgaji)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//updating one
router.patch('/:id', getNgaji, async (req, res) => {
    if (req.body.studentsName != null) {
        res.ngaji.studentsName = req.body.studentsName
    }
    if (req.body.teachersName != null) {
        res.ngaji.teachersName = req.body.teachersName
    }
    if (req.body.date != null) {
        res.ngaji.date = req.body.date
    }
    if (req.body.surahRead != null) {
        res.ngaji.surahRead = req.body.surahRead
    }
    if (req.body.ayahRead != null) {
        res.ngaji.ayahRead = req.body.ayahRead
    }
    if (req.body.surahMemorize != null) {
        res.ngaji.surahMemorize = req.body.surahMemorize
    }
    if (req.body.ayahMemorize != null) {
        res.ngaji.ayahMemorize = req.body.ayahMemorize
    }

    try {
        const updatedNgaji = await res.ngaji.save()
        res.json(updatedNgaji)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// deleting one
router.delete('/:id', getNgaji, async (req, res) => {
    try {
        await res.ngaji.deleteOne()
        res.json({message: "deleted ngaji"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }

})

async function getNgaji(req, res, next) {
    let ngaji
    try {
        ngaji = await Ngaji.findById(req.params.id)
        if (ngaji == null) {
            return res.status(404).json({message: 'Cannot find ngaji!'})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.ngaji = ngaji
    next()
}

module.exports = router