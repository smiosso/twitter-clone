import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { makeSureDbIsReady } from '@/lib/db';

export async function POST(req) {
  await makeSureDbIsReady();

  const { username, password } = await req.json();

  const user = await User.findOne({ username });
  if (!user) {
    return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 });
  }

  return NextResponse.json({ message: 'Login bem-sucedido', user: { id: user._id, username: user.username } });
}
