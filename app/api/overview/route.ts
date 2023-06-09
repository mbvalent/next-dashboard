import { NextResponse } from 'next/server';

export const GET = async (request: Request, response: Response) => {
  return NextResponse.json({
    totalLikes: 2129430,
    totalRevenue: 1520,
    totalTransactions: 9721,
    totalUsers: 892,
  });
};
