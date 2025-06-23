// src/pages/Registration.jsx
import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import { useFormData } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [step, setStep] = useState(1);
  const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  const totalSteps = 2;
  const progressPercent = (step / totalSteps) * 100;

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const finish = (data) => {
    const fullData = { ...formData, ...data };
    setFormData(fullData);
    navigate("/register/review");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <div className="mb-6">
        <div className="relative w-full bg-gray-200 h-3 rounded-full">
          <div
            className="absolute h-3 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="text-sm text-center mt-2 text-gray-600">
          Step {step} of {totalSteps}
        </p>
      </div>

      {step === 1 && <Step1 onNext={nextStep} defaultValues={formData} />}
      {step === 2 && <Step2 onBack={prevStep} onNext={finish} defaultValues={formData} />}
    </div>
  );
}
