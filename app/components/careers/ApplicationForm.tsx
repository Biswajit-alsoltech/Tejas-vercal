"use client";

import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BASE_URL } from "@/utils/constant";

const jobRoles = [
  { value: "digital marketing executive", label: "Digital Marketing Executive" },
  { value: "content writer", label: "Content Writer" },
  { value: "social media manager", label: "Social Media Manager" },
  { value: "account manager", label: "Account Manager" },
  { value: "project manager", label: "Project Manager" },
  { value: "business development executive", label: "Business Development Executive" },
  { value: "sales executive", label: "Sales Executive" },
  { value: "customer support executive", label: "Customer Support Executive" },
  { value: "hr executive", label: "HR Executive" },
  { value: "finance executive", label: "Finance Executive" },
  { value: "admin executive", label: "Admin Executive" },
  { value: "office assistant", label: "Office Assistant" },
];

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
  message?: string;
};

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [responseMsg, setResponseMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    if (resumeFile) {
      formData.append("resume", resumeFile);
    }

    try {
      const res = await axios.post(`${BASE_URL}/api/application`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResponseMsg(res.data.message);
      reset();
      setResumeFile(null);
    } catch (err: any) {
      setResponseMsg(err.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-xl rounded-3xl p-10">
        <p className="text-3xl font-bold text-gray-800">
          Interested? <span className="text-app">Let&apos;s Talk</span>
        </p>
        <p className="text-md text-zinc-600 mt-2 mb-4">
          Enter your details and we will reach out to you.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="form-filed-2">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
              <input
                {...register("first_name", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="John"
              />
              {errors.first_name && <p className="text-red-500 text-sm mt-1">First name is required</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
              <input
                {...register("last_name", { required: true })}
                className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Doe"
              />
              {errors.last_name && <p className="text-red-500 text-sm mt-1">Last name is required</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
            <input
              {...register("phone", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="+91 98765XXXXX"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">Phone number is required</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Role</label>
            <select
              {...register("role", { required: true })}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            >
              <option value="">Select a role</option>
              {jobRoles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </select>
            {errors.role && <p className="text-red-500 text-sm mt-1">Role is required</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message (optional)</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Say something..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Resume (PDF/DOC)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setResumeFile(file);
              }}
              className="w-full p-3 border border-gray-300 rounded-xl bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>

          {responseMsg && (
            <p className="text-center mt-4 text-sm text-green-600 font-medium">
              {responseMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
