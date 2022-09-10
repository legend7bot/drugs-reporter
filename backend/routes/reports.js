import { Router } from 'express';
import { Report, validate } from '../models/report.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    console.log(req.body);
    await new Report(req.body).save();
    res.status(201).send({ message: 'Report created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/public', async (req, res) => {
  try {
    const reports = await Report.find({ isPublic: true });
    console.log(reports);
    const finalReport = reports.map((report) => {
      return {
        pincode: report.pincode,
        location: report.location,
        type: report.type,
      };
    });
    res.send(finalReport);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default router;
