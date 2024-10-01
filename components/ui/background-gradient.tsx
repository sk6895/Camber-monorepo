import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 0',
    },
    animate: {
      backgroundPosition: ['0 0', '100% 100%'],
    },
  };

  return (
    <div className={cn('group relative', containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className={cn(
          'absolute inset-0 z-[1] rounded-[20px] opacity-80 blur-2xl transition duration-500 group-hover:opacity-100',
          'bg-[conic-gradient(from_0deg_at_50%_50%,#ff6b6b_0deg,#ff4757_90deg,#ff7f50_180deg,#ff6b6b_270deg,#ff6b6b_360deg)]',
          'shadow-[0_0_50px_rgba(255,107,107,0.7)] group-hover:shadow-[0_0_100px_rgba(255,107,107,0.9)]'
        )}
      />
      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};
