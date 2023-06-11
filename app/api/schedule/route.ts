import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

const schedules = [
  {
    title: 'Meeting with suppliers from Kuta Bali',
    time: '14:00 - 15:00',
    location: 'Sunset Road, Kuta, Bali',
    priority: 'High',
  },
  {
    title: 'Check operation at Giga Factory 1',
    time: '18:00-20:00',
    location: 'Sunset Road, Kuta, Bali',
    priority: 'Medium',
  },
  {
    title: 'Meeting with suppliers from Kuta Bali',
    time: '14:00 - 15:00',
    location: 'Central Jakarta',
    priority: 'High',
  },
  {
    title: 'Check operation at Giga Factory 1',
    time: '18:00-20:00',
    location: 'Sunset Road, Kuta, Bali',
    priority: 'Medium',
  },
];

export const GET = async (request: Request, response: Response) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.error();
  }

  const { searchParams } = new URL(request.url);
  const count = Number(searchParams.get('count'));

  return NextResponse.json(schedules.slice(0, count || schedules.length - 1));
};
