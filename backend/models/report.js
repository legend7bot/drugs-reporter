import mongoose from 'mongoose';
import joi from 'joi';

const reportSchema = new mongoose.Schema(
  {
    name: { type: String, required: false, default: 'Anonymous' },
    email: { type: String, required: false, default: 'Anonymous' },
    location: { type: String, required: true },
    pincode: { type: Number, required: true }, //length
    sightingTime: { type: Date, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    isPublic: { type: Boolean, default: false },
    isResolved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Report = mongoose.model('report', reportSchema);

const validate = (data) => {
  const schema = joi.object({
    name: joi.string().label('Name'),
    email: joi.string().email().label('Email'),
    location: joi.string().required().label('Location'),
    pincode: joi.number().required().label('Pincode'),
    sightingTime: joi.date().required().label('Sighting Time'),
    type: joi.string().required().label('Type'),
    description: joi.string().required().label('Description'),
    isPublic: joi.boolean().label('Is Public'),
    isResolved: joi.boolean().label('Is Resolved'),
  });
  return schema.validate(data);
};

export { Report, validate };
