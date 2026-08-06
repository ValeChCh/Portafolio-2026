# Contact live: FormSubmit + Calendly

**Fecha:** 2026-08-05  
**Decisión:** Reemplazar simulación local del form por envío real (FormSubmit/Formspree) y Meet vía Calendly.  
**Por qué:** El front no puede crear Meet ni garantizar email sin un proveedor. Calendly genera Meet; FormSubmit llega a Gmail sin backend.  
**Consecuencia:** I8 actualizado. Requiere activación FormSubmit + `VITE_CALENDLY_URL` en deploy.  
**Refs:** `skills/contact-live.md`, `src/lib/submitContact.ts`
