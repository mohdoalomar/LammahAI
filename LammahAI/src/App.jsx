import React, { useState } from 'react';
import useLazyLoad from './hooks/useLazyLoad';
import LammahContactForm from "./components/LammahContactForm";
import Subscriptions from "./components/Subscriptions";
import AboutLammah from './components/AboutLammah';
import ProblemSolutionSlides from './components/ProblemSolutionsSlides';
import Services from './components/Services';
import OperationsProcess from './components/OperationProcess';
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
            <bdi className="font-arian font-bold text-3xl lg:text-6xl animate-fade-left animate-duration-1000 flex justify-center flex-col items-center lg:flex-row">
            
              <span className='lg:my-auto  lg:text-7xl'> هلا بك في </span> 
              <img src='LammahNoCatchPhrase.png' className='lg:w-1/4 w-[30%] mr-2 '/>
            </bdi>
          </div>
          <div className='mx-auto'>
          <AboutLammah />
          </div>
        </div>
        <div className="mx-auto mt-32">
          <ProblemSolutionSlides />
        </div>
        <div className="mx-auto mt-32">
          <Services />
        </div>
        <div className="mx-auto mt-32">
          <OperationsProcess />
        </div>
        <div className="mx-auto mt-32">
          <Subscriptions />
        </div>
        <div className="mx-auto mt-32" ref={formRef}>
          <LammahContactForm isFormVisible={isFormVisible} />
        </div>
      </div>
    </div>
  );
}

export default App;
