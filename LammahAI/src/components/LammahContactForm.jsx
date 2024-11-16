import React, { useState } from "react";
import { CheckCircle, Loader2, AlertCircle, XCircle } from "lucide-react";

const LammahContactForm = ({isFormVisible}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });

  const [submitStatus, setSubmitStatus] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    about: false,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "الاسم مطلوب";
        if (!value.includes(" ") || value.trim().split(" ").length < 2) {
          return "يرجى إدخال الاسم الأول واسم العائلة";
        }
        return "";

      case "email":
        if (!value) return "البريد الإلكتروني مطلوب";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "يرجى إدخال بريد إلكتروني صحيح";

      case "phone":
        if (!value) return "رقم الهاتف مطلوب";
        if (!value.startsWith("05")) return "يجب أن يبدأ رقم الهاتف بـ 05";
        if (value.length !== 10) return "يجب أن يتكون رقم الهاتف من 10 أرقام";
        if (!/^\d+$/.test(value)) return "يجب أن يحتوي رقم الهاتف على أرقام فقط";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setFocusedField(null);
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      about: "",
    };

    setTouched({
      name: true,
      email: true,
      phone: true,
      about: true,
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      setSubmitStatus("error");
      return;
    }

    setSubmitStatus("loading");

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({ name: "", email: "", phone: "", about: "" });
        setTouched({ name: false, email: false, phone: false, about: false });
        setErrors({ name: "", email: "", phone: "", about: "" });
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  const inputClasses = (fieldName) => `
    w-full bg-white/95 text-right px-4 py-3 rounded-lg
    border-2 transition-all duration-300 ease-in-out
    ${errors[fieldName] && touched[fieldName]
      ? "border-LammahRed shadow-lg shadow-LammahRed/10"
      : focusedField === fieldName
      ? "border-LammahGreen shadow-lg shadow-LammahBiege/50 -translate-y-1"
      : "border-LammahBiege/50 hover:border-LammahBrown/50"}
    focus:outline-none focus:border-LammahGreen
    backdrop-blur-sm
  `;

  return (
    <div className="min-h-screen bg-LammmahBG">
    {isFormVisible &&
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12 animate-fade-in">
          {/* Form Section */}
          <div className="lg:w-2/3 mt-8 lg:mt-0 animate-fade-right animate-duration-700 lg:animate-delay-75 animate-delay-1000 ">
            <div className="bg-LammahBiege/25 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-LammahBrown/20 animate-slide-up">
              {/* Header */}
              <div className="bg-gradient-to-r from-LammahBrown/85 to-LammahBrown p-8">
                <h2 className="text-3xl font-bold text-white text-right animate-fade-left duration-500">
                  تواصل معنا
                </h2>
                <p className="text-white/90 mt-2 text-right animate-fade-up duration-700 delay-200 ">
                   ودنا نتواصل معك
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {["name", "email", "phone", "about"].map((field, index) => (
                  <div 
                    key={field}
                    className="transform  transition-all duration-500 animate-slide-up"
                
                  >
                    <label className="block mb-2 text-lg font-medium text-LammahBlack text-right">
                      {field === "name" && "الاسم الكامل"}
                      {field === "email" && "الايميل"}
                      {field === "phone" && "رقم الجوال"}
                      {field === "about" && "اكتب تخصصك ، واكتب تحدياتك"}
                    </label>
                    {field === "about" ? (
                      <textarea
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={handleBlur}
                        className={inputClasses(field)}
                        rows={4}
                        placeholder="...اخبرنا المزيد عنك"
                      />
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={handleBlur}
                        className={inputClasses(field)}
                        placeholder={
                          field === "name" ? "ادخل اسمك الكامل" :
                          field === "email" ? "example@domain.com" :
                          "05xxxxxxxx"
                        }
                      />
                    )}
                    {errors[field] && touched[field] && (
                      <div className="mt-2 text-LammahRed text-sm flex items-center justify-end gap-1 animate-fade-in">
                        <span>{errors[field]}</span>
                        <XCircle size={16} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitStatus === "loading" || submitStatus === "success"}
                  className={`
                    w-full py-3 px-6 rounded-lg text-white font-medium text-lg lg:text-xl
                    transition-all duration-300 ease-in-out transform
                    ${submitStatus === "idle"
                      ? "bg-LammahBrown hover:bg-LammahGreen hover:-translate-y-1 hover:shadow-lg"
                      : submitStatus === "success"
                      ? "bg-LammahGreen"
                      : submitStatus === "error"
                      ? "bg-LammahRed"
                      : "bg-gray-400"}
                    flex items-center justify-center gap-2
                    animate-fade-in
                  `}
                >
                  {submitStatus === "loading" && <Loader2 className="animate-spin" size={20} />}
                  {submitStatus === "success" && <CheckCircle size={20} />}
                  {submitStatus === "error" && <AlertCircle size={20} />}
                  {submitStatus === "idle" ? "ارسل" :
                   submitStatus === "loading" ? "...جاري الارسال" :
                   submitStatus === "success" ? "تم الارسال بنجاح!" :
                   "يرجى تصحيح الأخطاء"}
                </button>
              </form>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/3 space-y-6 animate-fade-in delay-300">
            <h1 className="text-4xl lg:text-5xl font-bold text-right text-LammahBrown animate-fade-left animate-duration-700 animate-delay-150">
              ودّنا نعرفك أكثر
            </h1>
            <p className="text-xl lg:text-2xl text-right leading-relaxed animate-fade-left animate-duration-700 animate-delay-300">
            <bdi>
              علّمنا عن شغلك وشغفك، ووش هي التحديات اللي تواجهك في عالم الإنتاج.
              لمّاح صُمم ليخدمك ويوفر لك حلول ذكية، وما نرتاح إلا لين نلقى لك أفضل
              الحلول.
              </bdi>
            </p>
            
            <p className="text-xl lg:text-2xl text-right leading-relaxed animate-fade-left animate-duration-700 animate-delay-500">
             <bdi>
              سواءً كنت مخرج، منتج، كاتب، أو بأي تخصص ثاني – تواصل معنا وخلك
              شريك برحلتنا
              </bdi>
            </p>
            <a 
              href="mailto:LAMMAH.AI.KSA@GMAIL.COM"
              className="block text-xl lg:text-2xl text-right text-LammahBrown hover:text-LammahGreen transition-colors duration-300 animate-fade-left animate-duration-700 animate-delay-700"
            >
              LAMMAH.AI.KSA@GMAIL.COM
            </a>
          </div>
        </div>
      </div>
      
    }
    </div>
  );
};

export default LammahContactForm;