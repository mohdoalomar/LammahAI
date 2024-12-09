import React from 'react';
import useLazyLoad from '../hooks/useLazyLoad';
import { motion } from 'framer-motion';
const Subscriptions = ({isVisible}) => {
  const [firstRef, isFirstVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: '25px'
  });
  const [secondRef, isSecondVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: '25px'
  });
  const [thirdRef, isThirdVisible] = useLazyLoad({
    threshold: 0.1,
    rootMargin: '25px'
  });

  const tiersOnDesktop = [
    {
      name: "حريف",
      price: "500 SAR",
      title: "كل ما هو متضمن في باقة المبدعين، بالإضافة إلى",
      features: [
        "أدوات كتابة متقدمة مع تحليلات",
        "مجموعة أدوات ما قبل الإنتاج البالغة",
        "صور عالية الجودة"
      ],
      delay: 700,
      duration: 1000,
      ref: firstRef,
      isVisible: isFirstVisible,
    },
    {
      name: "رهيب",
      price: "200 SAR",
      title: "كل ما هو متضمن في الباقة الأساسية، بالإضافة إلى",
      features: [
        "أدوات كتابة أساسية بدون قيود",
        "أدوات ما قبل الانتاج الأساسية",
        "طلبات وصور ذكاء اصطناعي غير محدودة"
      ],
      delay: 300,
      duration: 700,
      ref: secondRef,
      isVisible: isSecondVisible,
    },
    {
      name: "هاوي",
      price: "0 SAR",
      features: [
        "أدوات كتابة أساسية",
        "وصول محدود لميزات تطوير القصة",
        <span>
        طلبات الذكاء الاصطناعي مع فترة<br/>  استخدام لمدة 30 يوما
        </span>
      ],
      delay: 75,
      duration: 500,
      ref: thirdRef,
      isVisible: isThirdVisible,
    }
  ];

  const tiersOnMobile = [
    {
      name: "هاوي",
      price: "0 SAR",
      features: [
        "أدوات كتابة أساسية",
        "وصول محدود لميزات تطوير القصة",
        "طلبات الذكاء الاصطناعي مع فترة",
        "استخدام لمدة 30 يوما"
      ],
      delay: 75,
      duration: 500,
      ref: firstRef,
      isVisible: isFirstVisible,
    },
    {
      name: "رهيب",
      price: "200 SAR",
      title: ": كل ما هو متضمن في الباقة الأساسية، بالإضافة إلى",
      features: [
        "أدوات كتابة أساسية بدون قيود",
        "أدوات ما قبل الانتاج الأساسية",
        "طلبات وصور ذكاء اصطناعي غير محدودة"
      ],
      delay: 300,
      duration: 700,
      ref: secondRef,
      isVisible: isSecondVisible,
    },
    {
      name: "حريف",
      price: "500 SAR",
      title: ": كل ما هو متضمن في باقة المبدعين، بالإضافة إلى",
      features: [
        "أدوات كتابة متقدمة مع تحليلات",
        "مجموعة أدوات ما قبل الإنتاج البالغة",
        "صور عالية الجودة"
      ],
      delay: 700,
      duration: 1000,
      ref: thirdRef,
      isVisible: isThirdVisible,
    }
  ];

  const tiers = window.innerWidth > 768 ? tiersOnDesktop : tiersOnMobile;

  return (

    <div className="max-w-full mx-auto p-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-LammahBrown font-bold lg:animate-delay-1000 animate-fade-up">
        الدراهم
        <motion.div
            className="h-1.5 w-32 mx-auto rounded-full bg-LammahRed mt-5"
            initial={{ width: 0 }}
            animate={isFirstVisible ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => (
          <div
            key={index}
            ref={tier.ref}
            className={`text-right h-full ${tier.isVisible ? `animate-fade-up animate-duration-${tier.duration} animate-delay-${tier.delay}` : 'opacity-0'}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg bg-LammahBiege/25 text-LammahBrown border border-LammahBrown/10 h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="rounded-full bg-LammahBrown text-white text-center py-2 px-8 mb-6 w-full border border-white">
                  <h2 className="text-xl font-bold">{tier.name}</h2>
                </div>
                <ul className="space-y-4 mb-6">
                  {tier.title && <li className="text-base font-semibold"> <bdi> {tier.title} :</bdi></li>}
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-base list-disc" style={{ direction: 'rtl' }}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-2xl font-bold text-center py-4 border-t border-LammahBrown/10">
                {tier.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;