'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState, type FormEvent } from 'react';

const formName = 'solicitar-contato';
const fieldClassName =
  'w-full rounded-2xl border border-grafite/15 bg-papel/75 px-4 py-3.5 text-base text-grafite outline-none transition placeholder:text-ardosia/55 hover:border-gelo-profundo/35 focus:border-gelo-profundo focus:ring-4 focus:ring-gelo-profundo/10';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

function formatBrazilianPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) return digits ? '(' + digits : '';
  if (digits.length <= 6) return '(' + digits.slice(0, 2) + ') ' + digits.slice(2);
  if (digits.length <= 10) {
    return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 6) + '-' + digits.slice(6);
  }

  return '(' + digits.slice(0, 2) + ') ' + digits.slice(2, 7) + '-' + digits.slice(7);
}

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [phone, setPhone] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, String(value));
    });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) throw new Error('Falha ao enviar formulário');

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      className="grid w-full gap-6 rounded-[2rem] border border-white/70 bg-white/45 p-10 text-left shadow-2xl backdrop-blur-2xl max-sm:p-6"
      name={formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value="Novo contato pelo site da Dorah" />

      <p
        className="absolute -m-px size-px overflow-hidden border-0 p-0 [clip:rect(0,0,0,0)]"
        aria-hidden="true"
      >
        <label>
          Não preencha este campo
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-grafite">
          Nome
          <input className={fieldClassName} type="text" name="name" autoComplete="name" required />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-grafite">
          E-mail
          <input
            className={fieldClassName}
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-grafite">
          Telefone
          <input
            className={fieldClassName}
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="numeric"
            placeholder="(00) 00000-0000"
            value={phone}
            maxLength={15}
            onChange={(event) => setPhone(formatBrazilianPhone(event.target.value))}
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-grafite">
          Nome da empresa
          <input
            className={fieldClassName}
            type="text"
            name="company"
            autoComplete="organization"
            required
          />
        </label>
      </div>

      <button
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-grafite px-6 py-4 text-sm font-semibold text-papel transition hover:-translate-y-0.5 hover:bg-gelo-profundo hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gelo-profundo active:translate-y-0 disabled:cursor-wait disabled:opacity-65 motion-reduce:transition-none"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Enviando...' : 'Solicitar contato com especialista'}
        <ArrowUpRight aria-hidden="true" size={17} />
      </button>

      <div className="min-h-5 text-center text-sm" aria-live="polite">
        {status === 'success' && (
          <p className="text-gelo-profundo">Solicitação enviada. Em breve entraremos em contato.</p>
        )}
        {status === 'error' && (
          <p className="text-red-700">
            Não foi possível enviar agora. Tente novamente em instantes.
          </p>
        )}
      </div>
    </form>
  );
}
