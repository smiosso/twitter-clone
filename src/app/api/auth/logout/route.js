// import { NextResponse } from 'next/server';

// export async function POST() {

//   return NextResponse.json({ message: 'Logout efetuado' });
// }


// app/api/auth/logout/route.js
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Logout efetuado' });

  response.cookies.set({
    name: 'token',
    value: '',
    path: '/',
    maxAge: 0,
  });

  return response;
}
