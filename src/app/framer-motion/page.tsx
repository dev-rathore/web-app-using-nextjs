import AnimatedCounter from './animated-counter';
import FramerMotionBasics from './framer-motion-basics';

const Page = () => {
  return (
    <>
      <FramerMotionBasics />
      <AnimatedCounter from={0} to={100} />
    </>
  )
};

export default Page;
