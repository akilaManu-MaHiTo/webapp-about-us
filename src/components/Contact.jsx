import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { AlertCircle, ArrowUpRight, CheckCircle2, Loader2, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const FORM_ID = "xaeqzbpp";

export default function Contact() {
  const [state, handleSubmit] = useForm(FORM_ID);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) formRef.current?.reset();
  }, [state.succeeded]);

  const hasErrors = Boolean(state.errors?.length);

  return (
    <section id="contact" className="section section-anchor contact-section">
      <div className="container contact-grid">
        <div className="contact-intro">
          <div>
            <SectionHeading
              eyebrow="07 / Contact"
              title="Let&apos;s make assessment more meaningful."
              text="Have a question about our research, the team, or the Gradex AI project? We would love to hear from you."
            />
            <a href="mailto:akilamanujith@gmail.com" className="contact-email">akilamanujith@gmail.com <ArrowUpRight size={18} /></a>
          </div>
          <div className="map-card">
            <div className="map-grid" />
            <div className="map-pin"><MapPin size={23} /></div>
            <div className="map-label">
              <b>SLIIT Malabe Campus</b>
              <span>New Kandy Road, Malabe</span>
            </div>
            <a className="map-link" href="https://maps.google.com/?q=SLIIT+Malabe+Campus" target="_blank" rel="noreferrer">Open in Maps <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-head">
            <h3>Send us a message</h3>
            <p>Fill in the form and we&apos;ll get back to you within two working days.</p>
          </div>

          <div className="form-row">
            <label className="form-field">
              <span className="form-label">Your name</span>
              <input id="name" className="form-control" type="text" name="name" placeholder="Jane Perera" autoComplete="name" required />
              <ValidationError className="form-error" prefix="Name" field="name" errors={state.errors} />
            </label>
            <label className="form-field">
              <span className="form-label">Email address</span>
              <input id="email" className="form-control" type="email" name="email" placeholder="jane@example.com" autoComplete="email" required />
              <ValidationError className="form-error" prefix="Email" field="email" errors={state.errors} />
            </label>
          </div>

          <label className="form-field">
            <span className="form-label">Subject</span>
            <input id="subject" className="form-control" type="text" name="subject" placeholder="Question about Gradex AI" />
          </label>

          <label className="form-field">
            <span className="form-label">Message</span>
            <textarea id="message" className="form-control" name="message" rows="5" placeholder="Tell us what you'd like to know…" required />
            <ValidationError className="form-error" prefix="Message" field="message" errors={state.errors} />
          </label>

          <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="_subject" value="New message from the Gradex AI website" />

          <div className="form-actions">
            <button className="form-submit" type="submit" disabled={state.submitting}>
              {state.submitting ? <Loader2 className="spin" size={16} /> : <Send size={16} />}
              {state.submitting ? "Sending…" : "Send message"}
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {state.succeeded && (
                <span className="is-success"><CheckCircle2 size={15} /> Thanks! Your message is on its way.</span>
              )}
              {hasErrors && !state.succeeded && (
                <span className="is-error"><AlertCircle size={15} /> Please check the highlighted fields and try again.</span>
              )}
            </p>
          </div>

          <ValidationError className="form-error" errors={state.errors} />
        </form>
      </div>
    </section>
  );
}
