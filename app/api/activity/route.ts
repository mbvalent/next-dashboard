import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export const GET = async (request: Request, response: Response) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.error();
  }

  return NextResponse.json([
    {
      id: 0,
      week: 'Week 0',
      user: 0,
      guest: 200,
    },
    {
      id: 1,
      week: 'Week 1',
      user: 440,
      guest: 420,
    },
    {
      id: 2,
      week: 'Week 2',
      user: 50,
      guest: 200,
    },
    {
      id: 3,
      week: 'Week 3',
      user: 450,
      guest: 300,
    },
    {
      id: 4,
      week: 'Week 4',
      user: 200,
      guest: 250,
    },
    {
      id: 5,
      week: 'Week 5',
      user: 450,
      guest: 290,
    },
  ]);
};
