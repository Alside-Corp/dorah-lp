import { contactSchema, type ContactInput } from '../model/contact-schema';

export const contactFormName = 'solicitar-contato';

export async function submitContact(input: ContactInput, botField: string) {
  const data = contactSchema.parse(input);
  const body = new URLSearchParams({
    ...data,
    'form-name': contactFormName,
    subject: 'Novo contato pelo site da Dorah',
    'bot-field': botField,
  });

  const response = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) throw new Error('Falha ao registrar a submissão');
}
