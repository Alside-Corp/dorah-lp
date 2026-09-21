'use client';

import { ArrowUpRight } from 'lucide-react';
import { useRef, useState, type FormEvent } from 'react';
import { contactFormName, submitContact } from '../api/submit-contact';
import { contactSchema } from '../model/contact-schema';

const inputClassName =
  'w-full rounded-brand-md border border-solid border-white/24 bg-white/92 px-4 py-3.5 text-brand-base leading-[normal] text-brand-grafite outline-none placeholder:text-brand-ardosia/55 hover:border-brand-gelo-profundo/35 focus:border-brand-gelo-profundo focus:shadow-brand-focus transition-[border-color,box-shadow] duration-200 ease-[ease] motion-reduce:transition-none';

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
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [validationError, setValidationError] = useState('');
  const submitting = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = contactSchema.safeParse(Object.fromEntries(formData));
    setValidationError('');
    if (!result.success) {
      setStatus('idle');
      setValidationError(result.error.issues[0].message);
      const field = form.elements.namedItem(String(result.error.issues[0].path[0]));
      if (field instanceof HTMLInputElement) field.focus();
      return;
    }
    submitting.current = true;
    setStatus('submitting');

    try {
      await submitContact(result.data, String(formData.get('bot-field') ?? ''));

      form.reset();
      setPhone('');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      submitting.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      name={contactFormName}
      method="POST"
      action="/__forms.html"
      onSubmit={handleSubmit}
      aria-busy={status === 'submitting'}
      aria-describedby="contact-feedback"
    >
      <input type="hidden" name="form-name" value={contactFormName} />
      <input type="hidden" name="subject" value="Novo contato pelo site da Dorah" />

      <p className="contact-honeypot" aria-hidden="true">
        <label>
          Não preencha este campo
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-x-6 gap-y-5 min-[640px]:grid-cols-2">
        <label className="grid gap-2 text-brand-sm font-semibold text-brand-gelo">
          Nome
          <input
            className={inputClassName}
            type="text"
            name="name"
            autoComplete="name"
            maxLength={120}
            placeholder="Seu nome completo"
            required
          />
        </label>

        <label className="grid gap-2 text-brand-sm font-semibold text-brand-gelo">
          E-mail
          <input
            className={inputClassName}
            type="email"
            name="email"
            autoComplete="email"
            maxLength={254}
            inputMode="email"
            placeholder="voce@empresa.com.br"
            required
          />
        </label>

        <label className="grid gap-2 text-brand-sm font-semibold text-brand-gelo">
          Telefone
          <input
            className={inputClassName}
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

        <label className="grid gap-2 text-brand-sm font-semibold text-brand-gelo">
          Nome da empresa
          <input
            className={inputClassName}
            type="text"
            name="company"
            autoComplete="organization"
            maxLength={160}
            placeholder="Nome da sua empresa"
            required
          />
        </label>
      </div>

      <button
        className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-brand-pill border-0 bg-brand-papel px-6 py-4 text-brand-sm font-semibold text-brand-grafite transition-[background-color,box-shadow,transform] duration-200 ease-[ease] enabled:hover:bg-brand-ciano-vivo enabled:hover:shadow-brand-lift motion-safe:enabled:hover:-translate-y-0.5 enabled:active:translate-y-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-brand-gelo-profundo focus-visible:outline-offset-3 disabled:cursor-wait disabled:opacity-65 motion-reduce:transition-none"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Enviando...' : 'Solicitar contato com especialista'}
        <ArrowUpRight aria-hidden="true" size={17} />
      </button>

      <div
        id="contact-feedback"
        className="min-h-5 text-center text-sm"
        aria-live="polite"
        aria-atomic="true"
      >
        {validationError && <p className="text-brand-error">{validationError}</p>}
        {status === 'success' && (
          <p className="text-brand-success">Solicitação enviada. Em breve entraremos em contato.</p>
        )}
        {status === 'error' && (
          <p className="text-brand-error">
            Não foi possível enviar agora. Tente novamente em instantes.
          </p>
        )}
      </div>
    </form>
  );
}
