import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { VALERIA_PROFILE } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Colaboración en Proyecto',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulated calendar picker
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isCallBooked, setIsCallBooked] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitContactForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Colaboración en Proyecto', message: '' });
    }, 1200);
  };

  const handleBookCall = () => {
    if (!selectedDate || !selectedTime) return;
    setIsCallBooked(true);
  };

  const availableDates = [
    { dayName: "Lun", dayNum: "27", fullDate: "Lunes, 27 de Julio" },
    { dayName: "Mar", dayNum: "28", fullDate: "Martes, 28 de Julio" },
    { dayName: "Mié", dayNum: "29", fullDate: "Miércoles, 29 de Julio" },
    { dayName: "Jue", dayNum: "30", fullDate: "Jueves, 30 de Julio" },
    { dayName: "Vie", dayNum: "31", fullDate: "Viernes, 31 de Julio" }
  ];

  const availableTimes = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

  return (
    <div className="space-y-12 py-2 md:py-6" id="contact-section-container">
      {/* Intro info */}
      <div>
        <h2 className="font-display text-3xl font-black tracking-tight text-black dark:text-white flex items-center space-x-2" id="contact-heading">
          <span className="bg-[#fef08a] text-black px-3 py-1 rounded-full border-2 border-black text-sm font-mono">04</span>
          <span>¡Hablemos de tu próximo proyecto!</span>
        </h2>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1 max-w-xl">
          ¿Tienes un problema de experiencia de usuario o de producto digital que necesitas resolver? Cuéntame sobre tus metas o agenda una llamada rápida.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="contact-grids">
        
        {/* Left Column: Form Inquiry */}
        <div className="lg:col-span-7 neo-window" id="contact-form-card">
          <div className="neo-window-bar">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>SEND_MESSAGE.EXE</span>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <h3 className="font-display text-xl font-black text-black dark:text-white flex items-center space-x-2">
              <Mail className="text-black dark:text-white" size={20} />
              <span>Enviar un Mensaje</span>
            </h3>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-[#a7f3d0] border-2 border-black text-black text-center space-y-3 animate-scale-up" id="contact-success-state">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-black text-black">
                  <CheckCircle size={24} />
                </div>
                <h4 className="font-display text-base font-black">¡Mensaje Enviado con Éxito!</h4>
                <p className="text-xs md:text-sm font-medium text-slate-800 leading-relaxed max-w-sm mx-auto">
                  Gracias por escribirme. He recibido tu consulta y te responderé en menos de 24 horas hábiles. ¡Que tengas un excelente día!
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="neo-btn-black text-xs pt-1"
                  id="reset-form-btn"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitContactForm} className="space-y-4" id="contact-actual-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-grid-names">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-black text-black dark:text-white uppercase tracking-wider">Tu Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ej. Valeria Silva"
                      className="w-full rounded-xl border-2 border-black bg-white dark:bg-slate-800 dark:border-white px-4 py-2.5 text-sm font-semibold outline-hidden focus:bg-[#fef08a] dark:focus:bg-slate-700 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-black text-black dark:text-white uppercase tracking-wider">Email de Contacto</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ejemplo@correo.com"
                      className="w-full rounded-xl border-2 border-black bg-white dark:bg-slate-800 dark:border-white px-4 py-2.5 text-sm font-semibold outline-hidden focus:bg-[#fef08a] dark:focus:bg-slate-700 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-black text-black dark:text-white uppercase tracking-wider">Asunto</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-2 border-black bg-white dark:bg-slate-800 dark:border-white px-4 py-2.5 text-sm font-bold outline-hidden focus:bg-[#fef08a] dark:focus:bg-slate-700 transition-colors cursor-pointer"
                  >
                    <option value="Colaboración en Proyecto">Colaboración en Proyecto / Contratación</option>
                    <option value="Consulta General">Consulta General / Asesoramiento</option>
                    <option value="Feedback de Diseño">Feedback de Diseño / Redes</option>
                    <option value="Charla o Podcast">Charla, Ponencia o Podcast</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-black text-black dark:text-white uppercase tracking-wider">Descripción de tu Idea o Necesidad</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Explícame brevemente el producto que quieres crear o rediseñar, tus plazos y lo que esperas lograr..."
                    className="w-full rounded-xl border-2 border-black bg-white dark:bg-slate-800 dark:border-white px-4 py-2.5 text-sm font-semibold outline-hidden focus:bg-[#fef08a] dark:focus:bg-slate-700 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neo-btn-primary w-full justify-center"
                  id="submit-contact-form"
                >
                  {isSubmitting ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar Mensaje</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Calendly call Mockup */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6" id="calendly-booking-section">
          {/* Calendar Box */}
          <div className="neo-window p-0 flex-grow flex flex-col justify-between" id="booking-card">
            <div className="neo-window-bar">
              <div className="flex space-x-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
              </div>
              <span>CALENDAR_BOOKING.SYS</span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-lg font-black text-black dark:text-white flex items-center space-x-2">
                  <Calendar className="text-black dark:text-white" size={18} />
                  <span>Agendar Café Virtual (15 min)</span>
                </h3>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed mt-1">
                  Selecciona una fecha y hora disponibles para conversar informalmente sobre tu producto digital por Google Meet.
                </p>
              </div>

              {isCallBooked ? (
                <div className="p-4 rounded-xl bg-[#bae6fd] border-2 border-black text-black text-center space-y-2 animate-scale-up my-auto" id="booking-success-state">
                  <Clock className="text-black mx-auto" size={24} />
                  <h4 className="text-xs font-black">¡Reunión Agendada con Éxito!</h4>
                  <p className="text-[11px] font-medium leading-relaxed">
                    Agendado para: <br />
                    <strong className="text-black font-black underline">
                      {availableDates.find(d => d.dayNum === selectedDate)?.fullDate} a las {selectedTime}
                    </strong>
                  </p>
                  <p className="text-[10px] font-mono italic">Te hemos enviado la invitación de calendario y enlace Meet.</p>
                  <button
                    onClick={() => {
                      setIsCallBooked(false);
                      setSelectedDate(null);
                      setSelectedTime(null);
                    }}
                    className="text-[10px] font-bold text-black underline hover:text-slate-700 mt-2 block mx-auto cursor-pointer"
                    id="reset-booking-btn"
                  >
                    Agendar otra fecha
                  </button>
                </div>
              ) : (
                <div className="space-y-4 mt-3" id="booking-picker">
                  {/* Day selector */}
                  <div className="space-y-1.5" id="date-picker-group">
                    <span className="text-[11px] font-black text-black dark:text-white uppercase tracking-wider">1. Selecciona Fecha (Julio 2026)</span>
                    <div className="grid grid-cols-5 gap-1.5" id="days-grid">
                      {availableDates.map((date) => (
                        <button
                          key={date.dayNum}
                          onClick={() => setSelectedDate(date.dayNum)}
                          className={`flex flex-col items-center justify-center p-2 rounded-xl border-2 border-black text-center transition-all cursor-pointer ${
                            selectedDate === date.dayNum
                              ? 'bg-[#fef08a] text-black'
                              : 'bg-white hover:bg-slate-100 text-black dark:bg-slate-800 dark:text-white dark:border-white'
                          }`}
                          id={`date-btn-${date.dayNum}`}
                        >
                          <span className={`text-[9px] uppercase font-bold ${selectedDate === date.dayNum ? 'text-black' : 'text-slate-500 dark:text-slate-400'}`}>
                            {date.dayName}
                          </span>
                          <span className="text-sm font-black mt-0.5">{date.dayNum}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time selector */}
                  {selectedDate && (
                    <div className="space-y-1.5 animate-fade-in" id="time-picker-group">
                      <span className="text-[11px] font-black text-black dark:text-white uppercase tracking-wider">2. Selecciona Hora (UTC-4)</span>
                      <div className="grid grid-cols-2 gap-2" id="times-grid">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`px-3 py-1.5 rounded-xl border-2 border-black text-center text-xs font-black transition-colors cursor-pointer ${
                              selectedTime === time
                                ? 'bg-[#fbcfe8] text-black'
                                : 'bg-white hover:bg-slate-100 text-black dark:bg-slate-800 dark:text-white dark:border-white'
                            }`}
                            id={`time-btn-${time.replace(/[:\s]/g, '-')}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Confirm call Button */}
                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleBookCall}
                    className="neo-btn-black w-full justify-center"
                    id="confirm-booking-btn"
                  >
                    <span>Confirmar Reunión</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Location details card */}
          <div className="rounded-xl border-2 border-black bg-[#fef08a] text-black p-5 text-xs font-bold space-y-3" id="quick-info-card">
            <div className="flex items-center space-x-2.5" id="info-row-location">
              <MapPin size={16} className="text-black shrink-0" />
              <span>{VALERIA_PROFILE.location}</span>
            </div>
            <div className="flex items-center space-x-2.5" id="info-row-email">
              <Mail size={16} className="text-black shrink-0" />
              <a href={`mailto:${VALERIA_PROFILE.email}`} className="hover:underline">{VALERIA_PROFILE.email}</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
