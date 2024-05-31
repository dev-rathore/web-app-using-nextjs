'use client';

import { Button } from "@/components/ui/button";
import { memo, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter component rendered");

  return (
    <div className='flex flex-col items-center gap-2 mt-2 mb-2 aspect-square bg-emerald-600 rounded-lg p-4 text-white'>
      <h2 className="text-2xl">Counter</h2>
      <p className='text-lg'>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
}

export default memo(Counter);
