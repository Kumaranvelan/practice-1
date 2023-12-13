/* eslint-disable prettier/prettier */

import { Schema } from 'mongoose';

export const PersonSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  website: String,
  contact: String,
  number: String,
  another: String,
  notes: String,
  type: [String],
  category: [String],
  commission: Number,
  date: Date,
  logo: String,
  criticalAccount:[String],
  payment: [String],
});
