import AnimatedCounter from './animated-counter';
import FramerMotionBasics from './framer-motion-basics';
import HorizontalScrollCarousel from './horizontal-scroll-carousel';

const Page = () => {
  return (
    <>
      <FramerMotionBasics />
      <AnimatedCounter from={0} to={100} />
      <HorizontalScrollCarousel />
    </>
  )
};

export default Page;
