'use client';

import { useTranslations } from 'next-intl';
import { FormEvent, useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

function readField(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setErrorMessage('');

    void (async () => {
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: readField(data, 'name'),
            email: readField(data, 'email'),
            message: readField(data, 'message'),
            company: readField(data, 'company'),
          }),
        });

        const payload = (await res.json().catch(() => ({}))) as { error?: string };

        if (!res.ok) {
          setStatus('error');
          setErrorMessage(payload.error || t('errorGeneric'));
          return;
        }

        setStatus('success');
        form.reset();
      } catch {
        setStatus('error');
        setErrorMessage(t('errorNetwork'));
      }
    })();
  }

  return (
    <form onSubmit={onSubmit} className="relative mx-auto mt-10 w-full max-w-xl text-left">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input tabIndex={-1} autoComplete="off" name="company" type="text" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-cool-grey">{t('name')}</span>
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={120}
            disabled={status === 'submitting'}
            className="bg-card focus:border-primary mt-2 w-full rounded-lg border border-white/15 px-3 py-2.5 text-white outline-none disabled:opacity-60"
          />
        </label>
        <label className="block text-sm">
          <span className="text-cool-grey">{t('email')}</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            disabled={status === 'submitting'}
            className="bg-card focus:border-primary mt-2 w-full rounded-lg border border-white/15 px-3 py-2.5 text-white outline-none disabled:opacity-60"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm">
        <span className="text-cool-grey">{t('message')}</span>
        <textarea
          required
          name="message"
          rows={5}
          maxLength={5000}
          disabled={status === 'submitting'}
          className="bg-card focus:border-primary mt-2 w-full rounded-lg border border-white/15 px-3 py-2.5 text-white outline-none disabled:opacity-60"
          placeholder={t('placeholder')}
        />
      </label>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="text-background from-cta-grad-start to-cta-grad-end focus-ring mt-5 inline-flex rounded-lg bg-gradient-to-br px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === 'submitting' ? t('sending') : t('send')}
      </button>

      <div aria-live="polite" className="mt-3 min-h-[1.25rem] text-xs">
        {status === 'success' && <p className="text-primary">{t('success')}</p>}
        {status === 'error' && <p className="text-red-300">{errorMessage}</p>}
      </div>
    </form>
  );
}
