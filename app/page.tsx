import { headers } from 'next/headers';
import LoginForm from './components/LoginForm';
import { redirect } from 'next/navigation';
import type { Session } from 'next-auth';

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.LOCAL_AUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function Home() {
  const session = await getSession(headers().get('cookie') ?? '');

  if (session) {
    redirect('/dashboard');
  }

  return (
    <div className='flex h-screen'>
      <div className='hidden md:w-2/5 md:flex justify-center items-center bg-black'>
        <h1 className='font-bold text-white lg:text-7xl md:text-5xl text-3xl'>Board.</h1>
      </div>

      <div className='px-3 md:p-0 w-full md:w-3/5 flex justify-center items-center'>
        <LoginForm />
      </div>
    </div>
  );
}
