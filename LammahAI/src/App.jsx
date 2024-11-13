import { useState } from "react";
import LammahContactForm from "./components/LammahContactForm";

function App() {
  return (
    <div className="bg-LammahBiegeBg mx-auto h-full flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex justify-center"> <bdi className="font-arian font-bold text-3xl lg:text-6xl animate-fade-left animate-duration-1000"> مرحبا بك في لماح</bdi></div>
        <img className="lg:w-2/5  w-full animate-fade-left animate-duration-1000" src="/LammahAIFullLogo-Cropped.png"/>
      </div>
      <LammahContactForm />
    </div>
  );
}

export default App;
