import { NextResponse } from 'next/server';

export async function GET() {

  return NextResponse.json({ user: null }); // Simulação de "não logado"
}
