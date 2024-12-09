import React from "react";
import { motion } from "framer-motion";
import DiagonalLines from "./DiagonalLiens";
import useLazyLoad from "../hooks/useLazyLoad";
import { 
  Brain, 
  Presentation, 
  Languages, 
  FileText, 
  Timer,
  Shield
} from "lucide-react";

const ServiceCard = ({ title, description, delay, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-LammahBiege/30 rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
  >
    <div className="flex flex-col items-end">
      <div className="bg-LammahRed/10 p-3 rounded-full mb-4">
        <Icon className="w-8 h-8 text-LammahRed" />
      </div>
      <h3 className="text-xl font-bold text-LammahBrown text-right mb-3">
        {title}
      </h3>
      <p className="text-right text-LammahBrown/80 leading-relaxed text-sm">
        {description}
      </p>
    </div>
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

  const services = [
    {
      title: "يدعم عدة لغات",
      description: "سوّ مشروعك بأي لغة تبيها: عربي ، انجليزي ، إسباني، فرنسي، أو حتى روسي، بدون عوائق",
      icon: Languages
    },
    {
      title: "عرض الأفكار الذكي",
      description: "سوّ عرض تقديمي قوي لفيلمك باستخدام قوالب جاهزة. الذكاء الاصطناعي يساعدك باقتراح طاقم العمل وتصور قصتك بطريقة جذابة",
      icon: Presentation
    },
    {
      title: "مساعد الكتابة بالذكاء الاصطناعي",
      description: "لا تخلي الأفكار توقفك! اقتراحات الذكاء الاصطناعي بتساعدك تكتب بسلاسة وبدون عقبات",
      icon: Brain
    },
   
    {
      title: "الذكاء الاصطناعي الأخلاقي",
      description: "في لمّاح، نلتزم باستخدام الذكاء الاصطناعي لتعزيز الإبداع البشري مع احترام خصوصيتك",
      icon: Shield
    },
    {
      title: "وفّر وقتك وأتحكم بإبداعك",
      description: "سوّ مشاريعك بكفاءة عالية وقلل المهام الروتينية. اجعل العمل الجماعي أسهل وجدولة الإنتاج أسرع، وكل هذا وأنت محتفظ بحقوقك الفكرية بنسبة 100%",
      icon: Timer
    },
    {
      title: "تحليل النصوص وتقسيمها",
      description: "حدد الفجوات بالنصوص بسرعة مع تحليل شامل ونتائج دقيقة لتحسين نصك وتقسيمها بشكل تلقائي وسريع",
      icon: FileText
    }
  
  ];

  return (
    <div className="relative w-full bg-LammmahBG py-16 px-4 md:px-8">
      <DiagonalLines direction="right" />
      <DiagonalLines direction="left" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={isHeaderVisible ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-LammahBrown mb-6">
            لمّاح يدبرك
          </h1>
          <motion.div
            className="h-1.5 w-32 mx-auto rounded-full bg-LammahRed"
            initial={{ width: 0 }}
            animate={isHeaderVisible ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-16"
        >
          <p className="text-LammahBrown/80 font-medium bg-LammahBiege/20 inline-block px-6 py-3 rounded-full">
            خصوصيتك أمانة، وحقوقك محفوظة بالكامل مع لمّاح
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;