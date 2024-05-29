import React from 'react';

import { SpinnerVariant } from '@/ts-types/spinner';
import Spinner from '../spinner';

interface LoaderProps {
  height?: string;
  width?: string;
}

const Loader: React.FC<LoaderProps> = ({
  height = 'min-h-screen',
  width = 'w-full',
}) => (
  <div className={`flex items-center justify-center ${width} ${height}`}>
    <Spinner kind={SpinnerVariant.PRIMARY} />
  </div>
);

export default Loader;
