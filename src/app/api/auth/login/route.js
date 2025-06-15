// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { makeSureDbIsReady } from '@/lib/db';

export async function POST(req) {
  try {
    await makeSureDbIsReady();

    const { username, password } = await req.json();

    // Validação básica de entrada
    if (!username || !password) {
      return NextResponse.json({ error: 'Usuário e senha são obrigatórios' }, { status: 400 });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: 'Credenciais inválidas (usuário não encontrado)' }, { status: 401 }); // Mudei para 401 para ser mais genérico e não vazar info
    }


    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Credenciais inválidas (senha incorreta)' }, { status: 401 }); // Mudei para 401
    }


    const userWithoutPassword = {
        _id: user._id,
        username: user.username,
        avatar: user.avatar
    };

    return NextResponse.json({ message: 'Login bem-sucedido', user: userWithoutPassword }, { status: 200 });

  } catch (error) {
    console.error('Erro na rota POST /api/auth/login:', error);
    return NextResponse.json({ error: 'Erro interno do servidor. Tente novamente mais tarde.' }, { status: 500 });
  }
}