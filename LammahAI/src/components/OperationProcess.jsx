import React from 'react';
import { motion } from 'framer-motion';
import useLazyLoad from '../hooks/useLazyLoad';

const OperationsProcess = ({isOperVisible}) => {
  const [cardRef, isCardVisible] = useLazyLoad({
    threshold: 0.9,
    rootMargin: '50px'
  });
  const [card2Ref, isCard2Visible] = useLazyLoad({
    threshold: 0.9,
    rootMargin: '50px'
  });
  const [sectionRef, isVisible] = useLazyLoad({
    threshold: 0.5,
    rootMargin: '100px'
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 70,
      scale: 0.75
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const decorativeLine = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    }
  };

  const renderCard = (item, index, borderColor) => (
    <motion.div
    key={index}
      variants={cardVariants}
      whileHover="hover"
      className={`bg-white/40 rounded-xl p-6 shadow-lg 
        border-r-4 ${borderColor} animate-fade-up `}
    >
      <div className={`flex items-center justify-end gap-4 animate-fade-up animate-delay-${item.delay}`}>
        <div className="flex flex-col items-end">
          <span className={`text-lg font-medium text-gray-800 text-right animate-fade-left animate-delay-${item.delay+200}`}>{item.text}</span>
          <span className={`text-sm text-gray-500 mt-1 text-right animate-fade-right animate-delay-${item.delay+200} animate-duration-1000`}>
            {item.description || '\u200E'}
          </span>
        </div>
        <div className={`text-2xl bg-white p-3 rounded-full shadow-md animate-fade-down animate-duration-700 animate-delay-${item.delay+200}`}>
          {item.icon}
        </div>
      </div>
    </motion.div>
  );

  return (

    <div className="bg-LammmahBG p-8 relative overflow-hidden">
      {/* Decorative SVG Background */}
      <svg className="absolute top-0 right-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
        <motion.path
          d="M80,20 Q90,50 80,80"
          stroke="#E0C4A3"
          strokeWidth="0.5"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={decorativeLine}
        />
        <motion.path
          d="M85,10 Q95,50 85,90"
          stroke="#6C351A"
          strokeWidth="0.5"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={decorativeLine}
          style={{ opacity: 0.1 }}
        />
        <motion.path
          d="M75,15 Q85,50 75,85"
          stroke="#E0C4A3"
          strokeWidth="0.3"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={decorativeLine}
          style={{ opacity: 0.2 }}
        />
        <motion.path
          d="M70,25 Q80,50 70,75"
          stroke="#6C351A"
          strokeWidth="0.3"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={decorativeLine}
          style={{ opacity: 0.05 }}
        />
      </svg>

      <motion.div 
        ref={sectionRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative"
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          variants={cardVariants}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-LammahBrown font-bold mb-6">
            طريقة الشغل
          </h1>
          <motion.div
            className="h-1.5 w-32 mx-auto rounded-full bg-LammahRed"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 relative" >
          {/* Channels Section */}
          <motion.div variants={containerVariants} className="space-y-8" ref={cardRef}>
          {isCardVisible && <>
            <h2 className="text-3xl text-LammahBrown font-bold text-right mb-10 
              relative before:content-[''] before:absolute before:right-0 before:-bottom-2 
              before:w-16 before:h-1 before:bg-LammahGreen before:rounded-full">
              القنوات
            </h2>
            <motion.div className="space-y-6">
              {[
                { 
                  text: 'منصة ويب وتطبيق جوال',
                  icon: '💻',
                  description: 'منصة رقمية متكاملة',
                  delay : 100
                },
                {
                  text: 'شراكات مع مراكز الإنتاج',
                  icon: '🤝',
                  description: 'تعاون استراتيجي',
                  delay : 300
                },
                {
                  text: 'حضور المعارض والمهرجانات',
                  icon: '🎪',
                  description: 'تواجد فعال',
                  delay : 500
                }
              ].map((item, index) => renderCard(item, index, 'border-LammahGreen'))}
            </motion.div>
            </>}
          </motion.div>

          {/* Customer Segments Section */}
          <motion.div variants={containerVariants} className="space-y-8" ref={card2Ref}>
          {isCard2Visible && <>
            <h2 className="text-3xl text-LammahBrown font-bold text-right mb-10
              relative before:content-[''] before:absolute before:right-0 before:-bottom-2 
              before:w-16 before:h-1 before:bg-LammahRed before:rounded-full">
              شرائح العملاء
            </h2>
            <motion.div className="space-y-6">
              {[
                {
                  text: 'صناع الأفلام المستقلين',
                  icon: '🎬',
                  description: 'مبدعون مستقلون',
                  delay : 100
                },
                {
                  text: 'شركات الإنتاج',
                  icon: '🏢',
                  description: 'مؤسسات محترفة',
                  delay : 300
                },
                {
                  text: 'المبدعين في قطاع الإعلام',
                  icon: '✨',
                  description: 'محتوى إبداعي',
                  delay : 500
                }
              ].map((item, index) => renderCard(item, index, 'border-LammahRed'))}
            </motion.div>
            </>}
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default OperationsProcess;