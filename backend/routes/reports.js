import { Router } from 'express';
import { Report, validate } from '../models/report.js';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    await new Report(req.body).save();
    res.status(201).send({ message: 'Report created successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

router.get('/public', async (req, res) => {
  try {
    const reports = await Report.find({ isPublic: true });
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

router.get('/all', async (req, res) => {
  try {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) return res.status(401).send({ message: 'Unauthorized' });
    const token = bearerHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    } catch (error) {
      return res.status(401).send({ message: 'Unauthorized' });
    }
    const reports = await Report.find({});
    res.send(reports);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
});

export default router;
