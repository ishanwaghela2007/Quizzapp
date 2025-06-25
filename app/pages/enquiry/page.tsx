//@/pages/enquiry
'use client';

import { useState } from 'react';

export default function EnquiryPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'India',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    // You can handle the submission logic here (API call, validation, etc.)
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 py-10 gap-10">
      {/* Left Content */}
      <div className="max-w-lg text-left">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mb-4">
          Unlock the fastest path to grade-level instruction.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Scaffolding up without watering down is easier said than done. Let’s see what we can do together.
        </p>
        <ul className="text-gray-700 dark:text-gray-300 space-y-3 pl-4 list-disc">
          <li>Access to AI-driven quiz creation and performance analysis.</li>
          <li>Personalized features to match the Indian education system.</li>
          <li>Track performance of students across subjects & classes.</li>
          <li>One-stop platform for teachers, tutors, and coaching institutes.</li>
        </ul>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
          Trusted by teachers across India – from CBSE, ICSE, and state boards.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Hear from us within 10 minutes!</h2>

        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name*"
            className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name*"
            className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Work email address*"
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your phone number*"
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        >
          <option value="" disabled>
            Which of the following best describes your role?
          </option>
          <option value="teacher">School Teacher</option>
          <option value="tutor">Private Tutor</option>
          <option value="student">Student</option>
          <option value="admin">Institute Administrator</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
