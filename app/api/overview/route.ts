import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export const GET = async (request: Request, response: Response) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.error();
  }

  return NextResponse.json({
    totalLikes: 2129430,
    totalRevenue: 1520,
    totalTransactions: 9721,
    totalUsers: 892,
  });
};
