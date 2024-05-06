import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface IProps {
  children: React.ReactNode;
  fadePosition?: 'top' | 'bottom';
}

const AnimateY = ({ children, fadePosition = 'bottom' }: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const getTransform = () => {
    if (fadePosition === 'top') {
      return isInView ? 'none' : 'translateY(-200px)';
    } else {
      return isInView ? 'none' : 'translateY(200px)';
    }
  };
  return (
    <div
      className="animation-div"
      ref={ref}
      style={{
        transform: getTransform(),
        opacity: isInView ? 1 : 0,
        transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {children}
    </div>
  );
};

export default AnimateY;
