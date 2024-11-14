export default function AboutLammah() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-0 justify-center  ">
        <img 
            className="lg:w-3/5 w-full animate-fade-right animate-duration-1000 " 
            src="LammahAIFullLogo-Cropped.png"
            alt="Lammah AI Logo"
          />
        

          <div className="lg:w-2/5 space-y-6 animate-fade-in delay-300 self-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-right text-LammahBrown animate-fade-left animate-duration-700 animate-delay-150">
              <bdi> مين لمّاح؟</bdi>
            </h1>
            <p className="text-xl lg:text-2xl text-right leading-relaxed animate-fade-left animate-duration-700 animate-delay-300">
              <bdi>
                لمّاح هو منصة سعودية مبتكرة تعمل بأدوات الذكاء الاصطناعي لدعم
                مرحلة ما قبل الإنتاج السينمائي
              </bdi>
            </p>
            <p className="text-xl lg:text-2xl text-right leading-relaxed animate-fade-left animate-duration-700 animate-delay-500">
              <bdi>
               منصة لمّاح تساعد الكتّاب و المنتجين والمخرجين والمصورين على تبسيط عملياتهم
                واتخاذ قرارات أسرع وأكثر دقة
              </bdi>
            </p>
          </div>
        </div>
   
    </>
  );
}
