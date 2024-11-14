import React from "react";
import { motion } from "framer-motion";
import DiagonalLines from "./DiagonalLiens";
import useLazyLoad from "../hooks/useLazyLoad";
const ServiceCard = ({ title, delay, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={`bg-LammahBiege/30 rounded-xl p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${className}`}
  >
    <h3 className="text-xl font-bold text-LammahBrown text-right mb-2">
      {title}
    </h3>
    <div className="w-16 h-1 bg-LammahRed rounded-full ml-auto" />
  </motion.div>
);

const Services = () => {
  const [headerRef, isHeaderVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: "50px",
  });

  const [servicesRef, isServicesVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: "50px",
  });

  const [dotsRef, isDotsVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: "50px",
  });

  const services = [
    "مصحح نصوص للكتاب",
    "عرض تقديمي للمخرجين",
    "تحليل التكاليف للمنتجين",

    "فريق يشتغلون من بعيد",
    "عربي",
  ];

  return (
    <div className="relative w-full bg-LammmahBG p-8 lg:p-12">
      {/* Decorative lines */}
      <DiagonalLines direction="right" />
      <DiagonalLines direction="left" />

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={isHeaderVisible ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-LammahBrown mb-4">لمّاح يدبرك</h1>
           <motion.div
            className="h-1.5 w-32 mx-auto rounded-full bg-LammahRed"
            initial={{ width: 0 }}
            animate={isHeaderVisible ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service}
              delay={index * 0.1}
              isVisible={isServicesVisible}
              className={`${
                // Conditionally set col-span-2 for specific items
                index === 4 ? "lg:col-span-2" : ""
              }`}
            />
          ))}
        </div>

        {/* Decorative dots pattern */}
        <div ref={dotsRef} className="absolute bottom-0 left-0 w-32 h-32">
          {isDotsVisible && (
            <motion.div
              className="grid grid-cols-3 gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-LammahBrown/20"
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
