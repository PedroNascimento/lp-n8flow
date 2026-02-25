"use server";

export async function sendLeadToWebhook(formData: {
  nome: string;
  whatsapp: string;
  empresa: string;
  segmento: string;
  desafio: string;
}) {
  try {
    const response = await fetch('https://editor.n8flow.com.br/webhook/form-lp-n8flow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      console.error(`Status HTTP Erro: ${response.status}`);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Erro no envio do Webhook:", error);
    return { success: false };
  }
}
