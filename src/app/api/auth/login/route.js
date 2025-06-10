// app/api/auth/login/route.js
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { makeSureDbIsReady } from '@/lib/db';

export async function POST(req) {
  try { // <-- Adicionado try block
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

    // A senha deve estar em texto simples do frontend e um hash no DB
    // Se user.password não for um hash válido, bcrypt.compare pode lançar um erro
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Credenciais inválidas (senha incorreta)' }, { status: 401 }); // Mudei para 401
    }

    // Se tudo ok, retorna sucesso e dados do usuário (sem a senha)
    const userWithoutPassword = {
        _id: user._id,
        username: user.username,
        // Adicione outros campos que você queira retornar, como avatar
        avatar: user.avatar // Se você tem um campo avatar
    };

    return NextResponse.json({ message: 'Login bem-sucedido', user: userWithoutPassword }, { status: 200 });

  } catch (error) { // <-- Adicionado catch block
    console.error('Erro na rota POST /api/auth/login:', error); // Log o erro exato no console do servidor
    // Retorna uma resposta de erro 500 para o frontend
    return NextResponse.json({ error: 'Erro interno do servidor. Tente novamente mais tarde.' }, { status: 500 });
  }
}