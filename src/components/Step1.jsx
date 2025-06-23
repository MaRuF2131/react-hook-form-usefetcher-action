// src/components/Step1.jsx
import { useForm } from "react-hook-form";

export default function Step1({ onNext, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <input
          {...register("firstName", { required: "First name required" })}
          placeholder="First Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.firstName && (
          <p className="text-sm text-red-600 mt-1">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
        <input
          {...register("lastName", { required: "Last name required" })}
          placeholder="Last Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.lastName && (
          <p className="text-sm text-red-600 mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Next
      </button>
    </form>
  );
}
