import { useState } from "react";
import LammahContactForm from "./components/LammahContactForm";
import Subscriptions from "./components/Subscriptions";
function App() {
  return (
    <div className="bg-LammmahBG mx-auto h-full flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex justify-center"> <bdi className="font-arian font-bold text-3xl lg:text-6xl animate-fade-left animate-duration-1000"> مرحبا بك في لـمّـاح</bdi></div>
        <img className="lg:w-2/5  w-full animate-fade-left animate-duration-1000 mr-5" src="/LammahAIFullLogo-Cropped.png"/>
      </div>
      <div className=" mx-auto">
      <LammahContactForm />
      <Subscriptions/>
      </div>
      
    </div>
  );
}

export default App;
