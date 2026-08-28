'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const formName = 'solicitar-contato';

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
  const submitted = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') === '1';

  return (
    <form
      className="contact-form"
      name={formName}
      method="POST"
      action="/?success=1#contato"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="subject" value="Novo contato pelo site da Dorah" />

      <p className="contact-honeypot" aria-hidden="true">
        <label>
          Não preencha este campo
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-fields">
        <label className="contact-field">
          Nome
          <input
            className="contact-input"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Seu nome completo"
            required
          />
        </label>

        <label className="contact-field">
          E-mail
          <input
            className="contact-input"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="voce@empresa.com.br"
            required
          />
        </label>

        <label className="contact-field">
          Telefone
          <input
            className="contact-input"
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

        <label className="contact-field">
          Nome da empresa
          <input
            className="contact-input"
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Nome da sua empresa"
            required
          />
        </label>
      </div>

      <button className="contact-submit" type="submit">
        Solicitar contato com especialista
        <ArrowUpRight aria-hidden="true" size={17} />
      </button>

      {submitted && (
        <div className="contact-feedback" aria-live="polite">
          <p className="contact-success">Solicitação enviada. Em breve entraremos em contato.</p>
        </div>
      )}
    </form>
  );
}
