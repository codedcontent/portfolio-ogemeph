"use client";

import TextField from "@/components/common/TextField";
import { useState } from "react";

const ContactMeForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle form change
  const handleFormChange = (type: string, value: string) => {
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  // Function to handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.email && form.message && form.name) {
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/mailer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        alert("Message sent successfully.");
      } catch (error) {
        console.log({ error });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      alert("Please fill required inputs");
    }
  };

  return (
    <form className="w-full space-y-2.5" onSubmit={(e) => handleSubmit(e)}>
      {/* Name */}
      <TextField
        value={form.name}
        type="name"
        placeholder="What's you name?"
        handleChange={handleFormChange}
      />

      {/* Email */}
      <TextField
        value={form.email}
        type="email"
        placeholder="What's you email?"
        handleChange={handleFormChange}
      />

      {/* Message */}
      <textarea
        className="border-2 border-primary py-2 px-10 w-full outline-none placeholder:italic placeholder:font-light"
        placeholder="What could this be about?"
        onChange={(e) => handleFormChange("message", e.target.value)}
        value={form.message}
      ></textarea>

      {/* Submit */}
      <button
        className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2.5 px-4 rounded uppercase"
        type="submit"
      >
        {isSubmitting ? <p>Loading...</p> : <span>Send</span>}
      </button>
    </form>
  );
};

export default ContactMeForm;
