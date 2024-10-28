// src/models/Company.ts
import mongoose, { Schema, model, models } from 'mongoose';

interface ICompany {
  name: string;
  address: string;
  phone: string;
  email: string;
  facebook: string;
  review: string;
  recruitmentPosts: string[];
}

const CompanySchema: Schema = new Schema<ICompany>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  facebook: { type: String },
  review: { type: String },
  recruitmentPosts: [{ type: String }],
});

export default models.Company || model<ICompany>('Company', CompanySchema);
