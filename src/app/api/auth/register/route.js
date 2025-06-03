import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { makeSureDbIsReady } from '@/lib/db';

export async function POST(req) {
  await makeSureDbIsReady();

  const { username, password } = await req.json();

  const userExists = await User.findOne({ username });
  if (userExists) {
    return NextResponse.json({ error: 'Usuário já existe' }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ username, password: hashed });

  return NextResponse.json({ message: 'Usuário criado', user: { id: user._id, username: user.username } }, { status: 201 });
}
