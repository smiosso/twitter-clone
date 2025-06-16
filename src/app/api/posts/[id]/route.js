import { NextResponse } from 'next/server';
import Post from '@/models/Post';
import { makeSureDbIsReady } from '@/lib/db';

export async function DELETE(req, { params }) {
  await makeSureDbIsReady();

  const { id } = params;

  try {
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Post deletado com sucesso' }, { status: 200 });
  } catch (err) {
    console.error('Erro ao deletar post:', err);
    return NextResponse.json({ error: 'Erro ao deletar post' }, { status: 500 });
  }
}
