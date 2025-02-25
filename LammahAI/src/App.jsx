import React, { useState } from "react";
import useLazyLoad from "./hooks/useLazyLoad";
import LammahContactForm from "./components/LammahContactForm";
import Subscriptions from "./components/Subscriptions";
import AboutLammah from "./components/AboutLammah";
import ProblemSolutionSlides from "./components/ProblemSolutionsSlides";
import Services from "./components/Services";
import Header from "./components/Header";
function App() {
  const [formRef, isFormVisible] = useLazyLoad({
    threshold: 0.3,
    rootMargin: "50px",
  });
  const [TeamRef, isTeamVisible] = useLazyLoad({
    threshold: 0.9,
    rootMargin: "100px",
  });
  // const [statisticsRef, isStatisticsVisible] = useLazyLoad({
  //   threshold: 0.9,
  //   rootMargin: "100px",
  // });
  // const [chatRef, isChatVisible] = useLazyLoad({
  //   threshold: 0.9,
  //   rootMargin: "100px",
  // });
  const [AboutRef, isAboutVisible] = useLazyLoad({
    threshold: 0.9,
    rootMargin: "100px",
  });
  const [problemRef, isProblemVisible] = useLazyLoad({
    threshold: 0.9,
    rootMargin: "100px",
  });
  const [serviceRef, isServiceVisible] = useLazyLoad({
    threshold: 0.9,
    rootMargin: "100px",
  });
  // const [operationRef, isOperationVisible] = useLazyLoad({
  //   threshold: 0.9,
  //   rootMargin: "100px",
  // });
  const [SubscriptionsRef, isSubscriptionsVisible] = useLazyLoad({
    threshold: 0.9,
    rootMargin: "100px",
  });
  const sectionRefs = {
    AboutRef,
    problemRef,
    serviceRef,
    SubscriptionsRef,
    formRef,
  };
  return (
    <div className="relative min-h-screen bg-LammmahBG ">
      <Header sectionRefs={sectionRefs} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="mx-auto mt-10 xl:mt-5" ref={AboutRef}>
            <AboutLammah isVisible={isAboutVisible} />
          </div>
        </div>
        <div className="mx-auto mt-32" ref={problemRef}>
          <ProblemSolutionSlides isVisible={isProblemVisible} />
        </div>
        <div className="mx-auto mt-32" ref={serviceRef}>
          <Services isVisible={isServiceVisible} />
        </div>
        {/* <div className="mx-auto mt-32" ref={operationRef}>
          <OperationsProcess isOperVisible={isOperationVisible} />
        </div> */}
        <div className="mx-auto mt-32" ref={SubscriptionsRef}>
          <Subscriptions isVisible={isSubscriptionsVisible} />
        </div>
        {/* 
        Team Members maychange this should be hidden for now
        <div className="mx-auto mt-32" ref={TeamRef}>
          <TeamMembers isVisible={isTeamVisible} />
        </div> */}
        {/* <div className="mx-auto mt-32" ref={statisticsRef}>
          <Statistics isVisible={isStatisticsVisible} />
        </div> */}
        {/* <div className="mx-auto mt-32" ref={chatRef}>
          <LammahChat isVisible={isChatVisible} />
        </div> */}
        <div className="mx-auto mt-32" ref={formRef}>
          <LammahContactForm isFormVisible={isFormVisible} />
        </div>
      </div>
      <div className="w-full h-36 bg-LammahBrown text-LammmahBG flex flex-col lg:flex-row justify-center lg:gap-32 items-center" >
      <a 
            href="tel:966566619193" 
            className="hover:text-amber-200 hover:scale-110 transition-all duration-200"
          >
            +966 56 661 9193
          </a>
          <a 
            href="mailto:LAMMAH.AI.KSA@gmail.com"
            className="hover:text-amber-200  hover:scale-110 transition-all duration-200"
          >
            LAMMAH.AI.KSA@gmail.com
          </a>
          <p className="text-sm">©2024 LAMMAH AI</p>
      </div>
    </div>
  );
}

export default App;
