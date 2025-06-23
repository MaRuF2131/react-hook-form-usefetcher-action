// src/pages/Review.jsx
import { useFormData } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const { formData } = useFormData();
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Review Your Details</h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">First Name</p>
          <p className="text-lg font-medium text-gray-800">{formData.firstName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Last Name</p>
          <p className="text-lg font-medium text-gray-800">{formData.lastName}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-lg font-medium text-gray-800">{formData.email}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Password</p>
          <p className="text-lg font-medium text-gray-800">••••••••</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/register")}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => alert("Submitted!")}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
