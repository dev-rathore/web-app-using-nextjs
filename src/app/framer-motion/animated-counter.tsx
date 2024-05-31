'use client';

import { KeyframeOptions, animate, motion, useInView, useIsomorphicLayoutEffect } from "framer-motion";
import { useRef } from "react";

type Props = {
  from: number;
  to: number;
  keyframeOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  keyframeOptions,
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = from.toString();

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeInOut",
      ...keyframeOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [ref, inView, from, to]);

  return (
    <div className="min-h-screen flex justify-center items-center font-mono text-6xl">
      <span ref={ref} />
    </div>
  );
};

export default AnimatedCounter;
