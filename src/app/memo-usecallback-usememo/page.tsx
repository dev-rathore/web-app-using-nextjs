'use client';

import { lazy, Suspense, useCallback, useMemo, useState } from 'react';
import Fruits from './fruits';
import Counter from './counter';
import { Button } from '@/components/ui/button';

// const Fruits = lazy(() => import('./fruits')); // fruits.js chunk
// const Counter = lazy(() => import('./counter')); // counter.js chunk

const Page = () => {
  const [count, setCount] = useState(0);
  const [newData, setNewData] = useState<string | undefined>(undefined);
  console.log("Page component rendered");

  const fruitsToEmojis = useCallback((fruits: string[]) => {
    console.log("fruitsToEmojis function called");
    return fruits.map((fruit) => {
      switch (fruit) {
        case "Mango":
          return "🥭";
        case "Banana":
          return "🍌";
        case "Apple":
          return "🍎";
        case "Pineapple":
          return "🍍";
        case "Grapes":
          return "🍇";
        case "Strawberry":
          return "🍓";
        case "Watermelon":
          return "🍉";
        case "Kiwi":
          return "🥝";
        case "Peach":
          return "🍑";
        default:
          return "❓";
      }
    });
  }, []);

  setTimeout(() => {
    setNewData('Data Loaded');
  }, 3000);

  const handleClick = useCallback(() => {  // returns a memoized callback function
    // The useCallback hook ensures that the handleClick function is only re-created if the count prop changes.
    setCount(count + 1); // count is zero if we don't add count as dependency
  }, [count]);

  const processedData = useMemo(() => { // returns a memoized value
    // The useMemo hook ensures that the processedData value is only re-computed if the data prop changes.
    const result = 'Processed Data Response';
    // Do some expensive processing with data
    return result;
  }, []);

  // console.log(handleClick); // () => { setCount(count + 1); }
  // console.log(processedData); // Processed Data Response

  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className="text-2xl">Page</h1>
      <p className='text-lg'>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={handleClick}>Click Me!</Button>
      <Counter />
      <Suspense fallback={<h1>"Loading..."</h1>}>
        <h1>{newData}</h1>
      </Suspense>
      <Fruits fruitsToEmojis={fruitsToEmojis} />
    </div>
  );
};

export default Page;
