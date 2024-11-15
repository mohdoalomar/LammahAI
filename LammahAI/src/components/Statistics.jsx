import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid} from "recharts";

const data = [
  {
    name: "People",
    value: 10,
  },
  {
    name: "Sales",
    value: 60,
  },
  {
    name: "Market",
    value: 2,
  },
];

const StatisticsCard = ({ title, value, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-LammmahBG rounded-xl p-4 shadow-lg text-right"
  >
    <h3 className="text-lg font-bold text-LammahBrown">
      <bdi>{value}</bdi>
    </h3>
    <p className="text-sm text-LammahBrown/80">{subtitle}</p>
  </motion.div>
);

const Statistics = ({isVisible}) => {
    return (
        isVisible && (
    <div className="bg-LammahBiege/30 p-8 rounded-3xl shadow-xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
         <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 text-LammahBrown font-bold lg:animate-delay-75 animate-fade-up">
        الإحصائيات
        <motion.div
            className="h-1.5 w-32 mx-auto rounded-full bg-LammahRed mt-5"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatisticsCard value="10K" subtitle="عدد المستخدمين المتوقع" />
          <StatisticsCard
            value="3,600,000 ريال"
            subtitle="العوائد المتوقعة في السنة الأولى"
          />
          <StatisticsCard
            value="1-2%"
            subtitle="نسبة السوق المتوقعة للسنة الأولى"
          />
        </div>

        <div className="bg-LammmahBG p-6 rounded-xl shadow-lg ">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#6C351A" />
              <YAxis stroke="#6C351A" />
              <CartesianGrid stroke="#E0C4A3" vertical={false}/>
              <Bar
                dataKey="value"
                fill="#6C351A"
                animationDuration={1500}
                animationBegin={300}
                barSize={window.innerWidth < 500 ? 80 : 150}
              />
              
            </BarChart>
          </ResponsiveContainer>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-right text-sm text-LammahBrown/80 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <StatisticsCard
            value="الناس"
            subtitle="عدد المهتمين بالسينما في العالم العربي تقريبا بين 67.5 مليون إلى 90 مليون شخص
                      عدد المستخدمين المتوقع: 5,000 إلى 10,000 مستخدم خلال السنة الأولى
            "
          />
          <StatisticsCard
            value="المبيعات"
            subtitle=" 
          إجمالي العوائد الشهرية: SAR 300,000
          إجمالي العوائد السنوية = SAR 3,600,000
            "
          />
          <StatisticsCard
            value="السوق"
            subtitle=<bdi>
            لمّاح تستهدف شريحة من سوق السينما والإعلام الذي قد يصل حجمه إلى 5 مليارات ريال سعودي (تقريباً 1.33 مليار دولار أمريكي) في المنطقة.
            <br/>
             إذا كان لديها حصة سوقية متوقعة تبلغ حوالي 1-2% يعني 50-100 مليون ريال سعودي في السنة الأولى
             </bdi>
          />
        </motion.div>
      </motion.div>
    </div>
        )
  );
};

export default Statistics;
