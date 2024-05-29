import clsx from 'clsx';
import * as React from 'react';

import styles from './input.styles';
import { InputVariant } from '@/ts-types/input';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  endEnhancer?: React.ReactElement | string;
  error?: string;
  hidden?: boolean;
  variant?: InputVariant;
  startEnhancer?: React.ReactElement | string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  endEnhancer,
  error,
  hidden,
  variant = InputVariant.PRIMARY,
  startEnhancer,
  type = 'text',
  ...props
}) => (
  <div
    className={clsx([
      styles.variant[variant].inputContainer,
      error ? styles.border.errorState : styles.border.normalState,
      hidden ? styles.hidden : '',
    ])}
  >
    <div className='flex items-center gap-2'>
      {startEnhancer && <span className="flex h-full min-w-6 items-center justify-center">
        {startEnhancer}
      </span>}
      <input
        {...props}
        autoComplete='off'
        className={clsx([
          styles.variant[variant].input,
        ])}
        type={type}
      />
      {endEnhancer && <span className="flex h-full min-w-6 items-center justify-center">
        {endEnhancer}
      </span>}
    </div>
  </div>
);

export default Input;
