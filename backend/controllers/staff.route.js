import express from 'express'
import staffModel from '../models/staff.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await staffModel.find()
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/:id', async (req, res) => {
  try {
    const data = await staffModel.findById(req.params.id)
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.post('/', async (req, res) => {
  try {
    const data = new staffModel(req.body)
    await data.save()
    res.json(data)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.delete('/:id', async (req, res) => {
  try {
      await staffModel.deleteOne({"_id": req.params.id})
      res.json({success: true})
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router