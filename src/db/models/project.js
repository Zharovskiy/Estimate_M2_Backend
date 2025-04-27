import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
  {
    nameProject: { type: String, required: true, trim: true, maxlength: 100 },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    address: {
      country: { type: String, trim: true, default: '' },
      city: { type: String, trim: true, default: '' },
      street: { type: String, trim: true, default: '' },
      houseNumber: { type: String, trim: true, default: '' },
      apartment: { type: String, trim: true, default: '' },
      entrance: { type: String, trim: true, default: '' },
      floor: { type: String, trim: true, default: '' },
      elevator: { type: Boolean, default: false },
    },
    projectType: {
      type: String,
      enum: ['apartment', 'house', 'office', 'other'],
      default: 'other',
    },
    totalArea: { type: Number, default: 0, min: 0 },
    description: { type: String, trim: true, default: '' },
    rooms: [{ type: Schema.Types.ObjectId, ref: 'rooms' }],
    client: {
      name: { type: String, trim: true, default: '' },
      phone: {
        type: String,
        trim: true,
        default: '',
        match: [/^\+?[0-9]{7,15}$/, 'Invalid phone number'],
      },
      email: {
        type: String,
        trim: true,
        default: '',
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
      },
    },
    costProject: {
      totalWorksQuantity: { type: Number, default: 0, min: 0 },
      totalWorksCost: { type: Number, default: 0, min: 0 },
      totalMaterialsQuantity: { type: Number, default: 0, min: 0 },
      totalMaterialsCost: { type: Number, default: 0, min: 0 },
      totalCost: { type: Number, default: 0, min: 0 },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Project = model('projects', projectSchema);
