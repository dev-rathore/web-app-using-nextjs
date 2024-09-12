## Method 1
- Add motion in front of the element e.g. if element is div then convert it to motion.div
- Set initial object e.g. opacity: 1
- Set whileInView object e.g. opacity: 0
- Set viewport object e.g. margin: -200px (Animation should take effect when margin is -200px), once: true (Run the animation only once)

## Method 2
```
const ref = useRef(null);
const isInView = useInView(ref, {
  amount: "all",
});
// isInView return a boolean

<section ref={ref}> // Parent Element
  <motion.div
    animate={{
      y: isInView ? "100%": "0%",
    }}
  />
</section>
```

## Method 3
### 1) useScroll - Basic
```
const {
  scrollYProgress, // Value between 0 to 1
} = useScroll();

useMotionValueEvent(scrollYProgress, "change", (latest) => {
  console.log(latest);
});

const background = useTransform(
  scrollYProgress,
  [0, 1],
  ["#FFFFFF", "#6366F1"],
);

<motion.div
  style={{
    scaleX: scrollYProgress,
    background,
    x: "-50%",
    y: "-50%",
  }}
/>
```

### 2) useScroll - Advanced
```
const targetRef = useRef(null);
const {
  scrollYProgress, // Value between 0 to 1
} = useScroll({
  target: targetRef,
  offset: ["start end", "end start"], // first value - start/end of the element, second value - end/start of the viewport,
});

const rotate = useTransform(
  scrollYProgress,
  [0, 1],
  ["0deg", "180deg"],
);

<motion.div
  ref={targetRef}
  style={{
    rotate,
  }}
/>
```

### 3) useScroll - With container
```
const containerRef = useRef(null);
const targetRef = useRef(null);
const {
  scrollYProgress,
} = useScroll({
  container: containerRef,
  target: targetRef,
  axis: "x",
  offset: ["end start", "start start"],
});

<motion.section
  ref={containerRef}
>
  <motion.div
    ref={targetRef}
    style:{{
      opacity: scrollYProgress,
    }}
  />
</motion.section>
```