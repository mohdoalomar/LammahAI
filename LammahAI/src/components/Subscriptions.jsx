import React from 'react';


const Subscriptions = () => {
 const tiersOnDesktop = [
    {
        name: "حريف",
        price: "375 SAR",
        title: ": كل ما هو متضمن في باقة المبدعين، بالإضافة إلى",
        features: [
          "أدوات كتابة متقدمة مع تحليلات",
          "مجموعة أدوات ما قبل الإنتاج البالغة",
          "صور عالية الجودة"
        ],
        delay:700 ,
        duration : 1000
      },
    {
      name: "رهيب",
      price: "150 SAR",
      title: ": كل ما هو متضمن في الباقة الأساسية، بالإضافة إلى",
      features: [
        "أدوات كتابة أساسية بدون قيود",
        "أدوات ما قبل الانتاج الأساسية",
        "طلبات وصور ذكاء اصطناعي غير محدودة"
      ],
      delay: 300,
      duration : 700
    },
    
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
        duration : 500
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
      duration : 500
    },
    {
      name: "رهيب",
      price: "150 SAR",
      title: ": كل ما هو متضمن في الباقة الأساسية، بالإضافة إلى",
      features: [
        "أدوات كتابة أساسية بدون قيود",
        "أدوات ما قبل الانتاج الأساسية",
        "طلبات وصور ذكاء اصطناعي غير محدودة"
      ],
      delay: 300,
      duration : 700
    },
    {
      name: "حريف",
      price: "375 SAR",
      title: ": كل ما هو متضمن في باقة المبدعين، بالإضافة إلى",
      features: [
        "أدوات كتابة متقدمة مع تحليلات",
        "مجموعة أدوات ما قبل الإنتاج البالغة",
        "صور عالية الجودة"
      ],
      delay:700 ,
      duration : 1000
    }
    
  ];
  let tiers
  window.innerWidth > 768 ? tiers = tiersOnDesktop : tiers = tiersOnMobile;

  return (
    <div className="max-w-full mx-auto p-6">
      <h1 className="text-4xl lg:text-5xl text-center mb-12 text-LammahBrown font-bold lg:animate-delay-1000 animate-fade-up">الدراهم</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {tiers.map((tier, index) => (
      <div className={` text-right animate-fade-up animate-duration-${tier.duration} animate-delay-${tier.delay}`}>
        
          <div 
            key={index} 
            className="rounded-2xl overflow-hidden shadow-lg bg-white/10  text-LammahBrown border border-LammahBrown/10  "
          >
            <div className="p-6">
              <div className="rounded-full bg-LammahBrown text-white text-center py-2 px-8 mb-6 w-full border border-white">
                <h2 className="text-xl font-bold">{tier.name}</h2>
              </div>
              
              <ul className="space-y-4 mb-6">
              <li className="text-base font-semibold" >{tier.title}</li>
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="text-base  list-disc" style={{direction : 'rtl'}}>{feature}</li>
                ))}
              </ul>
              
              <div className="text-2xl font-bold text-center mt-auto">
                {tier.price}
              </div>
            </div>
          </div>
          </div>
        ))}
        </div>
    </div>
  );
};
export default Subscriptions;