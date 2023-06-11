import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async (request: Request, response: Response) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.error();
  }

  return NextResponse.json([
    {
      title: 'Total Revenues',
      stat: 2129430,
      type: 'currency',
      icon: '/revenue_icon.svg',
    },
    {
      title: 'Total Transactions',
      stat: 1520,
      icon: '/total_transactions_icon.svg',
    },
    {
      title: 'Total Likes',
      stat: 9712,
      icon: '/total_likes.svg',
    },
    {
      title: 'Total Users',
      stat: 892,
      icon: '/total_users.svg',
    },
  ]);
};
