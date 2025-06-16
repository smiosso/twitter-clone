// api/auth/register/route.js

import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { makeSureDbIsReady } from '@/lib/db';

export async function POST(req) {
  await makeSureDbIsReady();

  const { username, password } = await req.json();

  const userExists = await User.findOne({ username });
  if (userExists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  const avatar = `https://i.pravatar.cc/150?u=${username}`;

  const user = await User.create({ username, password: hashed, avatar });

  return NextResponse.json(
    {
      message: 'It worked?! No way 😳',
      user: {
        id: user._id,
        username: user.username,
        avatar: user.avatar,
      },
    },
    { status: 201 }
  );
}
