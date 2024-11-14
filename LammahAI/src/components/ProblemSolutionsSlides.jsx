import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import useLazyLoad from "../hooks/useLazyLoad";
const ProblemSolutionSlides = () => {
    const [firstRef, isFirstVisible] = useLazyLoad({
      threshold: 0.1,
      rootMargin: "25px"
    });
;
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const borderVariants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  };

  const problems = [
    "الكتابة السينمائية الاحترافية",
    "التكاليف المعلية",
    "تكاليف على الفاضي",
    "حوسة"
  ];

  const solutions = [
    "90% أسرع",
    "تكاليف أقل %80",
    "دقة عالية",
    "ملف واحد ، مشروع واحد ، وجع رأس أقل"
  ];

  return (
    <div className="w-full bg-LammmahBG p-4 md:p-8 lg:p-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div 
          variants={slideUpVariants}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-LammahBrown mb-4">
            حول مشاكلك إلى حلول
          </h1>
          <div className="w-24 h-1 bg-LammahRed mx-auto rounded-full" />
        </motion.div>

        {/* Main Content with Animated Border */}
        <div className="relative p-8" >
          {/* SVG Border Animation */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ filter: "drop-shadow(0 0 10px rgba(108, 53, 26, 0.2))" }}
          >
            <motion.rect
              width="100%"
              height="100%"
              rx="16"
              fill="none"
              stroke="#6C351A"
              strokeWidth="2"
              variants={borderVariants}
              initial="initial"
              animate="animate"
              strokeLinecap="round"
            />
          </svg>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 relative z-10"  ref={firstRef}>

            {/* Solutions Section Desktop */}
            {isFirstVisible && <>
            <motion.div
              variants={slideUpVariants}
              className="bg-LammahBiege/30 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300  max-md:hidden"
            >
           
              <div className="flex items-center justify-end mb-6">
                <h2 className="text-2xl text-right font-bold text-LammahGreen mr-2">
                  لمّاح يحلها
                </h2>
                <CheckCircle className="w-8 h-8 text-LammahGreen" />
              </div>
              <motion.div
                variants={containerVariants}
                className="space-y-4"
              >
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={slideUpVariants}
                    className="flex items-center text-right justify-end space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-LammahBiege/50 transition-colors duration-300"
                  >
                    <span className="text-lg text-LammahBlack">{solution}</span>
                  </motion.div>
                ))}
              </motion.div>
              
            </motion.div>
            </>
            }
                 {/* Problems Section */}
                 {isFirstVisible && <>
                 <motion.div
              variants={slideUpVariants}
              className="bg-LammahBiege/30 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
             
            >
              <div className="flex items-center justify-end mb-6">
                <h2 className="text-2xl text-right font-bold text-LammahRed mr-2">
                  العلّة في ماقبل الإنتاج
                </h2>
                <XCircle className="w-8 h-8 text-LammahRed" />
              </div>
              <motion.div
                variants={containerVariants}
                className="space-y-4"
              >
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    variants={slideUpVariants}
                    className="flex items-center text-right justify-end space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-LammahBiege/50 transition-colors duration-300"
                 
                  >
                    <span className="text-lg text-LammahBlack">{problem}</span>
                  </motion.div>
                ))}
              </motion.div>
              
            </motion.div>
            </>
                 }
             
                 {/* Solution Mobile */}
                 
                 {isFirstVisible && (
              <motion.div
                variants={slideUpVariants}
                className="bg-LammahBiege/30 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 md:hidden"
              >
                <div className="flex items-center justify-end mb-6">
                  <h2 className="text-2xl text-right font-bold text-LammahGreen mr-2">
                    لمّاح يحلها
                  </h2>
                  <CheckCircle className="w-8 h-8 text-LammahGreen" />
                </div>
                <motion.div
                  variants={containerVariants}
                  className="space-y-4"
                >
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={index}
                      variants={slideUpVariants}
                      className="flex items-center text-right justify-end space-x-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl hover:bg-LammahBiege/50 transition-colors duration-300"
                    >
                      <span className="text-lg text-LammahBlack">{solution}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProblemSolutionSlides;