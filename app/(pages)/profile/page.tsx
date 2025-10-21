"use client";

import React, {
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";

// 1️⃣ Define validation schema with Zod
const UserDataSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be under 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be under 50 characters"),
  dob: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)) && val.length > 0, {
      message: "Please enter a valid date of birth (YYYY-MM-DD)",
    }),
});

// 2️⃣ Derive TypeScript type from schema
type UserData = z.infer<typeof UserDataSchema>;

const UserInfoFormPage: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    dob: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UserData, string>>>({});
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState<
    Partial<Record<keyof UserData, boolean>>
  >({});

  // --- Real-time validation ---
  useEffect(() => {
    const result = UserDataSchema.safeParse(userData);

    if (result.success) {
      setErrors({});
      setIsFormValid(true);
    } else {
      const fieldErrors: Partial<Record<keyof UserData, string>> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof UserData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsFormValid(false);
    }

    if (successMessage) setSuccessMessage("");
  }, [userData]);

  // --- Input change ---
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  // --- Blur tracking ---
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name as keyof UserData]: true }));
  }, []);

  // --- Submit handler ---
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!isFormValid) {
        setTouchedFields({ firstName: true, lastName: true, dob: true });
        console.error("Attempted submission on an invalid form.");
        return;
      }

      const validation = UserDataSchema.safeParse(userData);
      if (!validation.success) {
        setErrors(
          validation.error.issues.reduce((acc, err) => {
            acc[err.path[0] as keyof UserData] = err.message;
            return acc;
          }, {} as Partial<Record<keyof UserData, string>>)
        );
        return;
      }

      setIsSubmitting(true);

      try {
        const payload = {
          firstname: userData.firstName,
          lastname: userData.lastName,
          dateOfBirth: userData.dob, // match API schema
        };
        
        const response = await fetch("/api/profile/update-info", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });


        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to update profile");
        }

        const data = await response.json();
        console.log("✅ Server response:", data);
        setSuccessMessage("Profile updated successfully!");
        router.push("/"); 
      } catch (err: unknown) {
        console.error("❌ API request failed:", err);
        setSuccessMessage("Something went wrong while updating your profile.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [isFormValid, userData]
  );

  // --- Render ---
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-8 gap-5 flex flex-col rounded-xl shadow-2xl transition duration-500 hover:shadow-3xl">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-800 text-center">
          Secure User Enrollment
        </h2>

        {/* Success message */}
        {successMessage && (
          <div
            className="mb-4 p-3 text-green-800 bg-green-100 rounded-lg text-sm font-medium"
            role="alert"
          >
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              placeholder="e.g., Jane"
              className={`w-full text-black px-4 py-2 border rounded-lg shadow-inner transition duration-150 sm:text-sm focus:outline-none ${
                errors.firstName && touchedFields.firstName
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
            {errors.firstName && touchedFields.firstName && (
              <p className="mt-1 text-sm text-red-600 font-medium">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              placeholder="e.g., Doe"
              className={`w-full text-black px-4 py-2 border rounded-lg shadow-inner transition duration-150 sm:text-sm focus:outline-none ${
                errors.lastName && touchedFields.lastName
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
            {errors.lastName && touchedFields.lastName && (
              <p className="mt-1 text-sm text-red-600 font-medium">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={userData.dob}
              onChange={handleInputChange}
              onBlur={handleBlur}
              required
              className={`w-full text-black px-4 py-2 border rounded-lg shadow-inner transition duration-150 sm:text-sm focus:outline-none ${
                errors.dob && touchedFields.dob
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
            />
            {errors.dob && touchedFields.dob && (
              <p className="mt-1 text-sm text-red-600 font-medium">
                {errors.dob}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg 
                shadow-md text-base font-bold text-white transition duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                isFormValid && !isSubmitting
                  ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 transform hover:scale-[1.01]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Information"}
            </button>
          </div>
        </form>

        {!isFormValid &&
          Object.keys(errors).length > 0 &&
          Object.keys(touchedFields).length === 3 && (
            <div
              className="mb-4 p-3 text-sm text-red-800 bg-red-100 rounded-lg font-medium"
              role="alert"
            >
              Uh-Oh! You sure you punched that in right?
            </div>
          )}
      </div>
    </div>
  );
};

export default UserInfoFormPage;
