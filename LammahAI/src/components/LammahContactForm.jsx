import React, { useState } from 'react';
import { motion } from 'framer-motion';


const LammahContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    about: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form payload:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-LammahBiegeBg p-8 rounded-lg shadow-lg max-w-2xl mx-auto lg:max-w-4xl"
    >
      <h2 className="text-2xl font-bold mb-6 text-LammahBrown text-right">تواصل معنا</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-right">
        <div>
          <label htmlFor="name" className="block mb-1 text-LammahBrown">الاسم الكامل</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border-2 border-LammahBrown focus:outline-none focus:ring-2 focus:ring-LammahBrown"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 text-LammahBrown">الايميل</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border-2 border-LammahBrown focus:outline-none focus:ring-2 focus:ring-LammahBrown"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1 text-LammahBrown">رقم الجوال</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border-2 border-LammahBrown focus:outline-none focus:ring-2 focus:ring-LammahBrown"
          />
        </div>
        <div>
          <label htmlFor="about" className="block mb-1 text-LammahBrown">تعريف عن النفس</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border-2 border-LammahBrown focus:outline-none focus:ring-2 focus:ring-LammahBrown"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-LammahBrown hover:bg-LammahRed text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
        >
          ارسل
        </button>
      </form>
    </motion.div>
  );
};

export default LammahContactForm;