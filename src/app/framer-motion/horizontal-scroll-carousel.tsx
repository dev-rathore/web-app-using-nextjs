'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <section
      className='relative h-[300vh] bg-slate-900'
      ref={targetRef}
    >
      <div
        className='sticky top-0 flex h-screen items-center overflow-hidden'
      >
        <motion.div className='flex gap-4' style={{ x }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                minWidth: '200px',
                height: '200px',
                background: `hsl(${i * 36}, 100%, 50%)`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
