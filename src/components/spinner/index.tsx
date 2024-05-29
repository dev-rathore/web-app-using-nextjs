import React from 'react';

import { SpinnerVariant } from '@/ts-types/spinner';

interface SpinnerProps {
  kind?: SpinnerVariant;
  size?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  kind = SpinnerVariant.PRIMARY,
  size = 'size-12',
}) => (
  <div className='flex justify-center items-center'>
      <div
        className={`
      inline-block
      ${size}
      animate-spin
      rounded-full
      border-4
      border-solid
      ${kind === SpinnerVariant.PRIMARY ? 'border-primary' : 'border-current'}
      border-r-transparent
      align-[-0.125em]
      motion-reduce:animate-[spin_1.5s_linear_infinite]
    `}
      />
  </div>
);

export default Spinner;
