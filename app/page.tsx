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
      <div className='w-[40%] flex justify-center items-center bg-black'>
        <h1 className='font-bold text-white text-7xl'>Board.</h1>
      </div>

      <div className='w-[60%] flex justify-center items-center'>
        <LoginForm />
      </div>
    </div>
  );
}
