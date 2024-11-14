import React, { useState } from 'react';
import useLazyLoad from './hooks/useLazyLoad';
import LammahContactForm from "./components/LammahContactForm";
import Subscriptions from "./components/Subscriptions";
function App() {
  const [formRef, isFormVisible] = useLazyLoad({
    threshold: 0.3,
    rootMargin: '50px'
  });
  return (
    <div className="relative min-h-screen bg-LammmahBG "> 

      <div className="container mx-auto px-4 py-8"> 
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center">
            <bdi className="font-arian font-bold text-3xl lg:text-6xl animate-fade-left animate-duration-1000">
              مرحبا بك في لـمّـاح
            </bdi>
          </div>
          <img 
            className="lg:w-2/5 w-full animate-fade-left animate-duration-1000 mr-5" 
            src="LammahAIFullLogo-Cropped.png"
            alt="Lammah AI Logo"
          />
        </div>
        <div className="mx-auto">
          <Subscriptions />
        </div>
        <div className="mx-auto mt-20" ref={formRef}>
          <LammahContactForm isFormVisible={isFormVisible} />
        </div>
      </div>
    </div>
  );
}

export default App;
