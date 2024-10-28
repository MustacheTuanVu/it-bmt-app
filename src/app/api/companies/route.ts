// src/app/api/companies/route.ts
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Company from '@/models/Company';

export async function GET() {
  await connectToDatabase();
  const companies = await Company.find();
  return NextResponse.json(companies, { status: 200 });
}

export async function POST(request: Request) {
  const { name, address, phone, email, facebook, review, recruitmentPosts } = await request.json();

  await connectToDatabase();

  const company = new Company({
    name,
    address,
    phone,
    email,
    facebook,
    review,
    recruitmentPosts,
  });

  await company.save();

  return NextResponse.json(company, { status: 201 });
}
