"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            _subject: "New message from kiankamshad.com",
            _captcha: "false",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please email me directly at kiankamshad717@gmail.com.",
      );
    }
  }

  const inputClass =
    "mobile-input mt-2 w-full border border-line bg-cream px-4 py-3.5 text-base text-navy outline-none transition-colors focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-[10px] uppercase tracking-widest text-gold"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-[10px] uppercase tracking-widest text-gold"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-[10px] uppercase tracking-widest text-gold"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Tell me about your project or say hello..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full min-h-[48px] border border-navy bg-navy px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-cream transition-colors active:bg-navy-light disabled:opacity-60 md:min-h-0 md:w-auto md:hover:bg-navy-light"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-navy">
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700">{errorMessage}</p>
      )}
    </form>
  );
}
