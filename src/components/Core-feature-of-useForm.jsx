import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";

export default function SmartForm() {
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
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      touchedFields,
      dirtyFields,
    }
  } = useForm({
    mode: "onChange",
    shouldUnregister: true, // 💡 Remove unmounted inputs from state
    defaultValues: {
      username: "maruf",
      email: "",
      age: "",
      dob: null
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

  const onSubmit = (data) => {
    console.log("✅ Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto space-y-4 p-6 border rounded shadow"
    >
      <h2 className="text-xl font-bold">🌟 Smart Form</h2>

      <div>
        <label>Username</label>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: { value: 3, message: "Too short" },
            maxLength: { value: 12, message: "Too long" },
            pattern: {
              value: /^[a-z0-9_]+$/,
              message: "Only lowercase letters, numbers, and underscores"
            }
          })}
          className="w-full p-2 border rounded"
          placeholder="Enter username"
        />
        {errors.username && (
          <p className="text-red-600 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email"
            }
          })}
          className="w-full p-2 border rounded"
          placeholder="Enter email"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label>Age</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Minimum age is 18" },
            max: { value: 60, message: "Maximum age is 60" },
            setValueAs: (v) => parseInt(v, 10)
          })}
          className="w-full p-2 border rounded"
          placeholder="Enter age"
        />
        {errors.age && (
          <p className="text-red-600 text-sm">{errors.age.message}</p>
        )}
      </div>

      <div>
        <label>Date of Birth</label>
        <Controller
          name="dob"
          control={control}
          rules={{ required: "DOB is required" }}
          render={({ field }) => (
            <input
              type="date"
              {...field}
              className="w-full p-2 border rounded"
            />
          )}
        />
        {errors.dob && (
          <p className="text-red-600 text-sm">{errors.dob.message}</p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => trigger()}
          className="bg-yellow-400 px-4 py-2 rounded"
        >
          Validate
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="bg-gray-400 px-4 py-2 rounded"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() =>
            setValue("email", "maruf@example.com", { shouldValidate: true })
          }
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fill Email
        </button>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className={`w-full text-white px-4 py-2 rounded ${
          isValid ? "bg-green-600" : "bg-gray-500"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      <div className="text-sm text-gray-600 mt-4 space-y-1">
        <p>📌 <strong>isDirty:</strong> {String(isDirty)}</p>
        <p>📌 <strong>isValid:</strong> {String(isValid)}</p>
        <p>📌 <strong>isSubmitted:</strong> {String(isSubmitted)}</p>
        <p>📌 <strong>isSubmitSuccessful:</strong> {String(isSubmitSuccessful)}</p>
        <p>📌 <strong>touchedFields:</strong> {JSON.stringify(touchedFields)}</p>
        <p>📌 <strong>dirtyFields:</strong> {JSON.stringify(dirtyFields)}</p>
        <p>📌 <strong>All Values:</strong> {JSON.stringify(getValues())}</p>
      </div>
    </form>
  );
}
