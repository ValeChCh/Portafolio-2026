# Skill: Contact live (email + Meet)

## Qué hace
- **Mensaje** → FormSubmit.co (default a `profile.email`) o Formspree si hay `VITE_FORMSPREE_ENDPOINT`.
- **Meet** → Calendly con Google Meet (`VITE_CALENDLY_URL`). Sin esa URL, el form envía horario preferido por email (Meet manual).

## Setup Valeria (una vez)

### 1. Activar FormSubmit
1. Enviar un mensaje de prueba desde Contact.
2. Abrir el mail de confirmación en `Valechch05@gmail.com` y confirmar.
3. Reenviar: ya llegan los mensajes.

### 2. Calendly + Google Meet
1. Crear cuenta Calendly (free) con la misma Google que usa Meet.
2. Evento 15 min → Location → **Google Meet**.
3. Copiar URL del evento.
4. Crear `.env.local` en la raíz:

```bash
VITE_CALENDLY_URL=https://calendly.com/TU_USER/15min
```

5. Reiniciar Vite (`npm run dev`).

### 3. (Opcional) Formspree
Si FormSubmit molesta con captcha/activación:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxx
```

## Archivos
`src/components/Contact.tsx` · `src/lib/submitContact.ts` · `src/lib/contactConfig.ts` · `src/components/CalendlyEmbed.tsx` · `.env.example`

## Deploy
En Vercel/Netlify, añadir las mismas `VITE_*` en Environment Variables y redeploy.
