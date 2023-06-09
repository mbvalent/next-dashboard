import * as React from 'react';

import { cn } from '@/lib/utils';
import { Lato } from 'next/font/google';
import Image from 'next/image';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  iconPlacement?: 'left' | 'right';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPlacement = 'right', ...props }, ref) => {
    return (
      <div className='relative'>
        <input
          type={type}
          className={cn(
            'flex font-lato caret-[#999999] h-10 w-full rounded-[10px] bg-input px-[15px] py-2.5 text-sm placeholder:text-placeholder focus-visible:outline-none focus:bg-input-focus hover:bg-input-hover disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <Image
            src={icon}
            alt='icon'
            className={cn('absolute right-0 top-[50%] -translate-y-[50%] mx-4', {
              'right-0': iconPlacement === 'right',
              'left-0': iconPlacement === 'left',
            })}
            width={12}
            height={12}
          />
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
