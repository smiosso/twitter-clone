// app/api/posts/route.js
import { makeSureDbIsReady } from '@/lib/db';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';

export async function POST(request) {
  await makeSureDbIsReady();
  const body = await request.json();

  // body.author deve ser um ID de usuário (string)
  const newPost = await Post.create({
    content: body.content,
    author: body.author,
  });

  return NextResponse.json(newPost, { status: 201 });
}

export async function GET() {
  await makeSureDbIsReady();

  const posts = await Post.find()
    .populate('author', 'username avatar')
    .sort({ createdAt: -1 });

  return NextResponse.json(posts);
}
