import { NextResponse } from 'next/server';

export const GET = async (request: Request, response: Response) => {
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
