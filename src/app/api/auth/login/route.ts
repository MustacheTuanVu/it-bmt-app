// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectToDatabase from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  await connectToDatabase();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 });
  }

  const token = jwt.sign({ userId: user._id }, process.env.NEXTAUTH_SECRET!, { expiresIn: '1h' });

  return NextResponse.json({ token }, { status: 200 });
}
