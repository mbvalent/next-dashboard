'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const UserMenu = () => {
  const { data: session } = useSession();

  const userImage = session?.user?.image;
  console.log('userImage', userImage);
  return (
    <div>
      <button>
        <Image
          src={userImage || '/avatar_placeholder.png'}
          alt='user'
          className='rounded-[50%] shadow-md'
          width={30}
          height={30}
        />
      </button>
    </div>
  );
};

export default UserMenu;
