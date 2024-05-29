import React from 'react';
import Link from 'next/link';

import { CTA } from '@/ts-types/error';

interface ErrorProps {
  cta?: CTA;
  height?: string;
  messages: string[];
  title: string;
}

const Error: React.FC<ErrorProps> = ({
  cta,
  height = 'min-h-screen',
  messages,
  title,
}) => (
  <div className={`flex ${height} w-full items-center justify-center p-4 text-center`}>
    <div className='flex flex-col justify-center gap-3'>
      <h1 className='text-2xl font-semibold text-primary md:text-4xl'>{title}</h1>
      {messages.map((message, index) => (
        <p key={index} className='text-base text-slate-600 md:text-lg'>{message}</p>
      ))}
      {cta && <p className='text-base text-slate-600 md:text-lg'>
        Let&apos;s get you back {cta.text === 'home' ? '' : 'to the'} <Link
          className='text-primary'
          href={cta.href}
        >
          {cta.text}
        </Link>.
      </p>}
    </div>
  </div>
);

export default Error;