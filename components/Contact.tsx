import { useState, type FormEvent } from 'react';
import Split from './Split';
import Arrow from './Arrow';

// The inbox lives in an env var (VITE_CONTACT_EMAIL) so it isn't hard-coded in the source.
const INBOX = import.meta.env.VITE_CONTACT_EMAIL as string | undefined;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!INBOX) return;
    setStatus('sending');
    const form = e.currentTarget;
    try {
      const res = await fetch(`https://formsubmit.co/${INBOX}`, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="sec orchid" id="contact" aria-labelledby="contact-h">
      <div className="sec-top mono">
        <span>Contact</span>
        <span>Toronto, Canada</span>
      </div>
      <h2 id="contact-h" className="contact-title display" data-reveal>
        <Split text="Let's talk." step={50} />
      </h2>
      <div className="contact-grid">
        <div>
          <p className="lead">Have a question, an opportunity, or just want to say hello? My inbox is always open.</p>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/loribattouk/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diag /></a>
            <a href="https://github.com/LoriB14" target="_blank" rel="noopener noreferrer">GitHub <Arrow diag /></a>
          </div>
        </div>

        {status === 'sent' ? (
          <div aria-live="polite">
            <p className="lead" style={{ fontWeight: 600 }}>Thanks, your message is on its way. I'll get back to you soon.</p>
            <button type="button" className="pill ink" style={{ marginTop: 24 }} onClick={() => setStatus('idle')}>
              Send another
            </button>
          </div>
        ) : INBOX ? (
          <form className="form" onSubmit={submit}>
            <input type="hidden" name="_subject" value="New portfolio message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="field">
              <label className="mono" htmlFor="c-name">Name</label>
              <input id="c-name" name="name" required autoComplete="name" placeholder="Your name" />
            </div>
            <div className="field">
              <label className="mono" htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" />
            </div>
            <div className="field">
              <label className="mono" htmlFor="c-msg">Message</label>
              <textarea id="c-msg" name="message" required rows={3} placeholder="What's on your mind?" />
            </div>
            {status === 'error' && <p className="err" role="alert">That didn't send. Try again, or reach me on LinkedIn.</p>}
            <button type="submit" className="pill ink" disabled={status === 'sending'} style={{ justifySelf: 'start' }}>
              {status === 'sending' ? 'Sending…' : 'Send message'} <Arrow />
            </button>
          </form>
        ) : (
          <div>
            <p className="lead">The fastest way to reach me is LinkedIn.</p>
            <a className="pill ink" style={{ marginTop: 24 }} href="https://www.linkedin.com/in/loribattouk/" target="_blank" rel="noopener noreferrer">
              Message me on LinkedIn <Arrow diag />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
