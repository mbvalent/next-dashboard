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
      id: 1,
      label: 'Basic Tees',
      data: 55,
    },
    {
      id: 2,
      label: 'Custom Short Pants',
      data: 31,
    },
    {
      id: 3,
      label: 'Super Hoodies',
      data: 14,
    },
  ]);
};
