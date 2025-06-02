import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  // Dummy form. Replace.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
  };
  return (
    <form
      className="contactform"
      onSubmit={handleSubmit}
      style={{ maxWidth: 400 }}
    >
      <div>
        <label htmlFor="name">Nimi</label>
        <input id="name" name="name" required className="input" />
      </div>
      <div>
        <label htmlFor="email">Sähköposti</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="message">Viesti</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input"
        />
      </div>
      <button type="submit" className="formbtn">
        Lähetä
      </button>
      {status === "sent" && (
        <div className="form-success">Viesti lähetetty!</div>
      )}
      {status === "error" && (
        <div className="form-error">Virhe lähetyksessä.</div>
      )}
    </form>
  );
};
