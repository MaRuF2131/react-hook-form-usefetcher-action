import { useForm, Controller} from "react-hook-form";
import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { 
  StringValidationCheck,
  DangerousContentCheck,
  EmailValidationCheck,
  PasswordValidationCheck,
  NumberValidationCheck,
  UrlValidationCheck,
  PhoneValidationCheck,
  DateValidationCheck,
  TimeValidationCheck,
  ColorValidationCheck,
} from "./custom-validation/CustomValidation";
import {
  userNameValidation,
  numberValidation
} from "./built-in-validation/built-in-validation";

export default function SmartForm() {

  const Fetcher=useFetcher();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    trigger,
    setError,
    clearErrors,
    control,
    formState: {
      errors,
      isDirty,
      isValid,
      isValidating,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      touchedFields,
      dirtyFields,
    }
  } = useForm({
    mode: "onTouched",
    shouldUnregister: true,
    criteriaMode: "all",
    defaultValues: {
      username: "maruf",
      email: "",
      password: "",
      age: "",
      website: "",
      phone: "",
      birthDate: null,
      meetingTime: "",
      favoriteColor: "#000000",
      bio: "",
      terms: false
    }
  });

  const watchUsername = watch("username");

  useEffect(() => {
    if (watchUsername === "admin") {
      setError("username", {
        type: "manual",
        message: "Username 'admin' is not allowed"
      });
    } else {
      clearErrors("username");
    }
  }, [watchUsername]);

 

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    const formdata=new FormData();
    // Convert all form data to FormData object
      Object.entries(data).forEach(([key, value]) => {
          formdata.append(key, value);
      });
     
    formdata.append("auth_token", import.meta.env.VITE_ACCESS_TOKEN );

    Fetcher.submit(formdata, {
      method: "post",
      action: "/save",
      encType: "multipart/form-data",
    });
  };

  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-4 p-6 border rounded shadow"
    >
      <h2 className="text-xl font-bold">🌟 Comprehensive Smart Form</h2>

      {/* Username */}
      <div>
        <label className="block mb-1">Username</label>
        <input
          {...register("username", {
            ...userNameValidation,
            ...StringValidationCheck,
            ...DangerousContentCheck
          })}
          className="w-full p-2 border rounded"
          placeholder="Enter username"
        />
        {errors.username && (
          <p className="text-red-600 text-sm">{errors.username.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            ...EmailValidationCheck
          })}
          className="w-full p-2 border rounded"
          placeholder="Enter email"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
               ...PasswordValidationCheck
          })}
          className="w-full p-2 border rounded"
          placeholder="Enter password"
        />
        {errors.password && (
          <div className="text-red-600 text-sm">
            {Object.values(errors.password.types).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      </div>

      {/* Age */}
      <div>
        <label className="block mb-1">Age</label>
        <input
          type="number"
          {...register("age", {
            ...numberValidation,
            ...NumberValidationCheck
          })}
          className="w-full p-2 border rounded"
          placeholder="Enter age"
        />
        {errors.age && (
          <p className="text-red-600 text-sm">{errors.age.message}</p>
        )}
      </div>

      {/* Website URL */}
      <div>
        <label className="block mb-1">Website</label>
        <input
          type="url"
          {...register("website", {
            required: "Website URL is required",
            ...UrlValidationCheck
          })}
          className="w-full p-2 border rounded"
          placeholder="https://example.com"
        />
        {errors.website && (
          <p className="text-red-600 text-sm">{errors.website.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block mb-1">Phone Number</label>
        <input
          {...register("phone", {
            required: "Phone number is required",
            ...PhoneValidationCheck
          })}
          className="w-full p-2 border rounded"
          placeholder="+1234567890"
        />
        {errors.phone && (
          <p className="text-red-600 text-sm">{errors.phone.message}</p>
        )}
      </div>

      {/* Birth Date */}
      <div>
        <label className="block mb-1">Birth Date</label>
        <Controller
          name="birthDate"
          control={control}
          rules={{ 
            required: "Birth date is required",
            ...DateValidationCheck
          }}
          render={({ field }) => (
            <input
              type="date"
              {...field}
              className="w-full p-2 border rounded"
            />
          )}
        />
        {errors.birthDate && (
          <p className="text-red-600 text-sm">{errors.birthDate.message}</p>
        )}
      </div>

      {/* Meeting Time */}
      <div>
        <label className="block mb-1">Meeting Time (HH:MM)</label>
        <input
          {...register("meetingTime", {
            required: "Meeting time is required",
            ...TimeValidationCheck
          })}
          className="w-full p-2 border rounded"
          placeholder="14:30"
        />
        {errors.meetingTime && (
          <p className="text-red-600 text-sm">{errors.meetingTime.message}</p>
        )}
      </div>

      {/* Favorite Color */}
      <div>
        <label className="block mb-1">Favorite Color</label>
        <input
          type="color"
          {...register("favoriteColor", {
            required: "Color is required",
            ...ColorValidationCheck
          })}
          className="w-full h-10 p-1 border rounded"
        />
        {errors.favoriteColor && (
          <p className="text-red-600 text-sm">{errors.favoriteColor.message}</p>
        )}
      </div>

      {/* Bio */}
      <div>
        <label className="block mb-1">Bio</label>
        <textarea
          {...register("bio", {
            required: "Bio is required",
            maxLength: {
              value: 500,
              message: "Bio cannot exceed 500 characters"
            },
            ...StringValidationCheck
          })}
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="Tell us about yourself"
        />
        {errors.bio && (
          <p className="text-red-600 text-sm">{errors.bio.message}</p>
        )}
      </div>

      {/* Terms Agreement */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          {...register("terms", {
            required: "You must accept the terms and conditions"
          })}
          className="mr-2"
        />
        <label htmlFor="terms">I agree to the terms and conditions</label>
        {errors.terms && (
          <p className="text-red-600 text-sm">{errors.terms.message}</p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => trigger()}
          className="bg-yellow-400 px-4 py-2 rounded"
        >
          Validate All
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="bg-gray-400 px-4 py-2 rounded"
        >
          Reset Form
        </button>
        <button
          type="button"
          onClick={() => {
            setValue("email", "test@example.com", { shouldValidate: true });
            setValue("phone", "+1234567890", { shouldValidate: true });
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fill Sample Data
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!isValid || isSubmitting || Fetcher.state === "submitting"}
        className={`w-full text-white px-4 py-2 rounded ${
          isValid ? "bg-green-600" : "bg-gray-500 opacity-35"
        }`}
      >
        {isSubmitting || Fetcher.state === "submitting" ? "Submitting..." : "Submit"}
      </button>

      {/* Form State Information */}
      <div className="text-sm text-gray-600 mt-4 space-y-1 p-2 bg-gray-50 rounded">
        <h3 className="font-bold mb-1">Form State:</h3>
        <p>📌 <strong>isDirty:</strong> {String(isDirty)}</p>
        <p>📌 <strong>isValid:</strong> {String(isValid)}</p>
        <p>📌 <strong>isSubmitted:</strong> {String(isSubmitted)}</p>
        <p>📌 <strong>isSubmitSuccessful:</strong> {String(isSubmitSuccessful)}</p>
        <p>📌 <strong>touchedFields:</strong> {JSON.stringify(touchedFields)}</p>
        <p>📌 <strong>dirtyFields:</strong> {JSON.stringify(dirtyFields)}</p>
      </div>
    </form>
  );
}