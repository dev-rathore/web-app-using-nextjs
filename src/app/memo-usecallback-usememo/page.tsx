'use client';

import { useCallback, useState } from 'react';
import Fruits from './fruits';
import Counter from './counter';
import { Button } from '@/components/ui/button';

const Page = () => {
  const [count, setCount] = useState(0);
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

  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className="text-2xl">Page</h1>
      <p className='text-lg'>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Counter />
      <Fruits fruitsToEmojis={fruitsToEmojis} />
    </div>
  );
};

export default Page;
