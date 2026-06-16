"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/site";

const formAction = `https://formsubmit.co/${business.email}`;
const ajaxAction = `https://formsubmit.co/ajax/${business.email}`;

export default function ContactForm({ sent = false }) {
  const [nextUrl, setNextUrl] = useState(
    "https://steadyhandcontractors.com/contact?sent=1"
  );
  const [status, setStatus] = useState(sent ? "sent" : "idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?sent=1`);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_honey")) {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch(ajaxAction, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      const result = await response.json().catch(() => null);
      const message = result?.message || "";
      const needsActivation = /activation|activate form/i.test(message);
      const formSubmitFailed =
        result?.success === false || result?.success === "false";

      if (!response.ok || formSubmitFailed || needsActivation) {
        throw new Error(
          needsActivation
            ? `This form needs one-time activation. Check ${business.email} for the FormSubmit activation email, click the activation link, then submit the form again.`
            : message ||
                "The form could not be sent. Please call or email us directly."
        );
      }

      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.message ||
          "The form could not be sent. Please call or email us directly."
      );
    }
  }

  const isSending = status === "sending";
  const showSuccess = sent || status === "sent";

  return (
    <div className="form-card">
      {showSuccess ? (
        <div className="form-success" role="status">
          Thank you. Your request was sent, and we will follow up with you soon.
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-error" role="alert">
          {errorMessage}
        </div>
      ) : null}

      <form action={formAction} method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="_subject" value="New estimate request" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={nextUrl} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" className="honeypot" tabIndex="-1" />

        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
        <label>
          Project Location
          <input
            type="text"
            name="location"
            placeholder="City or neighborhood"
            autoComplete="address-level2"
          />
        </label>
        <label>
          Project Details
          <textarea
            name="message"
            required
            placeholder="Tell us what you need help with."
          />
        </label>
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Request"}
        </button>
      </form>
      <p className="form-note">
        Requests are sent directly to {business.email}. The first live
        submission may require a one-time email confirmation from FormSubmit.
      </p>
    </div>
  );
}
