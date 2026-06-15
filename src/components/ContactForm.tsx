"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms Access Key
    formData.append("access_key", "4d3adef8-0ad4-4606-8928-68465a662634");
    // Optional: Add a subject to the email
    formData.append("subject", "New Inquiry from Nirmeeti Nexus Spaces Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ padding: '3rem', backgroundColor: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
        <h3 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Thank You!</h3>
        <p className="text-body" style={{ marginBottom: '2rem' }}>Your inquiry has been successfully sent. Our team will review your project details and contact you shortly.</p>
        <button onClick={() => setStatus("idle")} className="btn-secondary">Send Another Message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <input type="text" name="name" placeholder="Full Name" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} required />
      <input type="email" name="email" placeholder="Email Address" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} required />
      <input type="tel" name="phone" placeholder="Phone Number" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} required />
      
      <select name="project_type" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', backgroundColor: '#fff' }} required defaultValue="">
        <option value="" disabled>Select Project Type</option>
        <option value="commercial">Commercial Interior</option>
        <option value="residential">Residential Interior</option>
        <option value="turnkey">Turnkey Execution</option>
      </select>
      
      <textarea name="message" placeholder="Project Details & Message" rows={5} style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', resize: 'vertical' }} required></textarea>
      
      <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }} disabled={status === "submitting"}>
        {status === "submitting" ? "Sending Inquiry..." : "Submit Inquiry"}
      </button>

      {status === "error" && (
        <p style={{ color: 'red', fontSize: '0.875rem' }}>There was an error sending your message. Please try again or contact us via phone.</p>
      )}
    </form>
  );
}
