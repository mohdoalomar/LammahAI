import {motion} from "framer-motion"
import useLazyLoad from '../hooks/useLazyLoad';

const DiagonalLines = ({ direction = 'right' }) => {
  const [lineRef, isLineVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: "50px"
  });
  
  const isRight = direction === 'right';
  
  return (
    <div 
      ref={lineRef}
      className={`absolute top-0 ${isRight ? 'right-0' : 'left-0'} w-64 h-64`}
    >
      {isLineVisible && (
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1={isRight ? 80 + (i * 4) : 20 - (i * 4)}
              y1="0"
              x2={isRight ? 100 : 0}
              y2={20 + (i * 4)}
              stroke="#6C351A"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          ))}
        </motion.svg>
      )}
    </div>
  );
};

  export default DiagonalLines