import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/User';
import { makeSureDbIsReady } from '@/lib/db';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function POST(req) {
  try {
    await makeSureDbIsReady();

    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: 'Bad credentials' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Bad credentials' }, { status: 401 });
    }

    const tokenPayload = {
      id: user._id.toString(),
      username: user.username,
      avatar: user.avatar,
    };

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '7d' });

    const response = NextResponse.json({
      message: 'Login: success. I’m a hacker now 👨‍💻✨',
      user: tokenPayload,
    });

    // Define o cookie JWT
    response.headers.set('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax; ${process.env.NODE_ENV === 'production' ? 'Secure;' : ''}`);

    return response;

  } catch (error) {
    console.error('Error POST /api/auth/login:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
