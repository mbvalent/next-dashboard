'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  link: string;
  icon?: string;
  isActive?: boolean;
};

const Navlink = ({ text, icon, link, isActive = false }: Props) => {
  return (
    <div className='flex items-center'>
      {icon && <Image src={icon} alt='home' height={'18'} width={'18'} />}
      <Link
        className={cn('text-lg ml-5', {
          'font-bold': isActive,
        })}
        href={link}
      >
        {text}
      </Link>
    </div>
  );
};

export default Navlink;
