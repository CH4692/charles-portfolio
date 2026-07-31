'use client';

import { FormEvent, useState } from 'react';

function readField(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'ready'>('idle');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = readField(data, 'name');
    const email = readField(data, 'email');
    const message = readField(data, 'message');

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'someone'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}\n`);

    setStatus('ready');
    window.location.href = `mailto:charles@charlesheller.dev?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 w-full max-w-xl text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-cool-grey">Name</span>
          <input
            required
            name="name"
            autoComplete="name"
            className="bg-card focus:border-primary mt-2 w-full rounded-lg border border-white/15 px-3 py-2.5 text-white outline-none"
          />
        </label>
        <label className="block text-sm">
          <span className="text-cool-grey">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="bg-card focus:border-primary mt-2 w-full rounded-lg border border-white/15 px-3 py-2.5 text-white outline-none"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="text-cool-grey">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="bg-card focus:border-primary mt-2 w-full rounded-lg border border-white/15 px-3 py-2.5 text-white outline-none"
          placeholder="Role, timeline, or project context…"
        />
      </label>
      <button
        type="submit"
        className="text-background from-cta-grad-start to-cta-grad-end focus-ring mt-5 inline-flex rounded-lg bg-gradient-to-br px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]"
      >
        Send message
      </button>
      {status === 'ready' && (
        <p className="text-cool-grey mt-3 text-xs">
          Opening your email client… If nothing opens, write to charles@charlesheller.dev.
        </p>
      )}
    </form>
  );
}
