'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from '../Dropdown';
import { ChevronDown, CreditCard, LogOut, PlusCircle, Settings, User } from 'lucide-react';

const UserMenu = () => {
  const { data: session } = useSession();

  const { image, email, name } = session?.user || {};

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className='inline-flex items-center justify-center'>
            <Image
              src={image || '/avatar_placeholder.png'}
              alt='user'
              className='rounded-[50%] shadow-md'
              width={30}
              height={30}
            />
            <ChevronDown className='inline h-4 2-4 ' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {name && email && (
            <>
              <DropdownMenuLabel>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium leading-none'>{name || ''}</p>
                  <p className='text-xs leading-none text-muted'>{email || ''}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className='w-4 h-4 mr-2' />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className='w-4 h-4 mr-2' />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className='w-4 h-4 mr-2' />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PlusCircle className='w-4 h-4 mr-2' />
              <span>New Team</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: '/',
              })
            }
          >
            <LogOut className='w-4 h-4 mr-2' />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
