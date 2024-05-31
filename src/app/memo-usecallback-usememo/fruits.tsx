'use client';

import { memo, useMemo } from "react";

type Props = {
  fruitsToEmojis: (fruits: string[]) => string[];
};

const Fruits = ({
  fruitsToEmojis,
}: Props) => {
  console.log("Fruits component rendered");

  const fruits = [
    "Mango",
    "Banana",
    "Apple",
    "Pineapple",
    "Grapes",
    "Strawberry",
    "Watermelon",
    "Kiwi",
    "Peach",
  ]
  const emojis = useMemo(() => fruitsToEmojis(fruits), [fruitsToEmojis]);

  return (
    <div className='flex flex-col items-center gap-2'>
      <h1 className="text-2xl py-2 px-4 rounded-lg bg-pink-600 text-white">Fruits</h1>
      <ul>
        {emojis.map((emoji, index) => (
          <li key={index}>{emoji}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Fruits);
