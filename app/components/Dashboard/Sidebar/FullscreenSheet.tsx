'use client';

import React, { ReactNode } from 'react';

import { Root, Trigger, Close, Content, Portal, Overlay } from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
import { SidebarClose } from 'lucide-react';

interface Props {
  trigger: ReactNode;
  children: ReactNode;
}

const FullScreenSheet = ({ trigger, children }: Props) => {
  return (
    <Root>
      <Trigger asChild>{trigger}</Trigger>
      <Portal>
        <Overlay className='fixed inset-0 z-50 bg-black/50 backdrop-brightness-50 transition-all animate-in fade-in duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:duration-700' />
        <Content
          className={cn(
            'fixed z-50 flex w-full flex-col bg-black text-white animate-in duration-500 data-[state=closed]:animate-out data-[state=closed]:duration-500 data-[state=closed]:slide-out-to-left inset-0 max-h-screen p-4 slide-in-from-left'
          )}
        >
          {children}
          <Close
            onClick={() => {}}
            className='absolute ms-1 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary'
            title='close'
          >
            <SidebarClose className='w-10 h-10' />
            <span className='sr-only'>Close</span>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};

export const SheetClose = Close;

export default FullScreenSheet;
