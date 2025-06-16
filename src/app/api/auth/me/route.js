// import { NextResponse } from 'next/server';

// export async function GET() {

//   return NextResponse.json({ user: null }); // Simulação de "não logado"
// }


// app/api/auth/me/route.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function GET(req) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ user: null });
    }

    const userData = jwt.verify(token, JWT_SECRET);

    // Retorna só os dados do usuário para o frontend
    return NextResponse.json({ user: userData });
  } catch (error) {
    return NextResponse.json({ user: null });
  }
}
