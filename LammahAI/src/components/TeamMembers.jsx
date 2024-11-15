import React from 'react';
import { motion } from 'framer-motion';
import useLazyLoad from '../hooks/useLazyLoad';

const TeamMembers = ({isVisible}) => {


  const teamMembers = [
    {
      name: 'مبارك المحارفي',
      title: 'المؤسس',
      experience: 'خبرته في المجال السينمائي كمصور وممثل ومنتج من عام 2013، فكرة لماح طلعت من عز المعاناة',
      image: 'LammahTeam-3.png',
    },
    {
      name: 'أسامة العريني',
      title: 'مدير تطوير الأعمال',
      experience: 'خبرته في تطوير الأعمال والتنظيم نضمن أن ينمو لماح AI وتزدهر في سوق تنافسي',
      image: 'LammahTeam-2.png'
    },
    {
      name: 'مصعب الفريدي',
      title: 'المدير التقني (CTO)',
      experience: 'خبرته التقنية تذمن أن تقدم لماح AI حلول ذكاء اصطناعي متطورة لصناعة الأفلام',
      image: 'LammahTeam-1.png'
    }
  ];

  return (
    <div className="bg-LammmahBG py-12 px-6 sm:px-12 md:px-20" >
      {isVisible && (
        <>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-LammahBrown mb-4 animate-delay-100 animate-fade-left">
            تعرف على فريقنا
          </h1>
          <motion.div
            className="h-1.5 w-32 mx-auto rounded-full bg-LammahRed mb-4"
            initial={{ width: 0 }}
            animate={isVisible ? { width: 128 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              
              <div
                key={index}
                className=" rounded-lg  overflow-hidden "
                style={{ animationDelay: `${index * 100}ms` }}
              >
               <div className="p-4 animate-fade-up animate-delay-1000">
                  <h3 className="text-LammahBlack text-lg font-bold text-right"> <bdi> {member.name}</bdi></h3>
                  <p className="text-LammahBrown text-right"> <bdi>{member.title} </bdi></p>
                  <p className="text-LammahBlack text-right"><bdi> {member.experience}</bdi> </p>
                </div>
                <div className="relative">
               
                 
                </div>
               
              </div>
              
            ))}
           
          </div>
          <img
                    src={"LammahTeam.png"}
                  
                    className={`w-full max-md:hidden object-contain animate-fade-down animate-duration-1000 animate-delay-700 mx-auto`}
                  />
        </>
      )}
    </div>
  );
};

export default TeamMembers;