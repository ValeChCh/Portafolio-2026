import React, { useMemo, useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Clock, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { VALERIA_PROFILE } from '../data';

const WEEKDAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

/** Horarios cada hora de 10:00 a 16:00 */
const AVAILABLE_TIMES = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM'
];

function toDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function formatDateLabel(dateKey: string) {
  const [y, m, d] = dateKey.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  const weekday = WEEKDAYS[(date.getDay() + 6) % 7]; // Mon-first index
  return `${weekday} ${d} de ${MONTH_NAMES[m - 1]} ${y}`;
}

function startOfToday() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Colaboración en Proyecto',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simulated calendar picker — month view
  const today = useMemo(() => startOfToday(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isCallBooked, setIsCallBooked] = useState(false);

  const calendarCells = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    // Monday-first offset: Sun=0 → 6, Mon=1 → 0, ...
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: Array<{ day: number | null; key: string | null; disabled: boolean }> = [];

    for (let i = 0; i < startPad; i++) {
      cells.push({ day: null, key: null, disabled: true });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewYear, viewMonth, day);
      const dow = date.getDay(); // 0 Sun … 6 Sat
      const isWeekend = dow === 0 || dow === 6;
      const isPast = date < today;
      cells.push({
        day,
        key: toDateKey(viewYear, viewMonth, day),
        disabled: isWeekend || isPast
      });
    }

    while (cells.length % 7 !== 0) {
      cells.push({ day: null, key: null, disabled: true });
    }

    return cells;
  }, [viewYear, viewMonth, today]);

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

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

  const selectDate = (key: string) => {
    setSelectedDate(key);
    setSelectedTime(null);
  };
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
                      {selectedDate ? formatDateLabel(selectedDate) : ''} a las {selectedTime}
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
                  {/* Month calendar */}
                  <div className="space-y-2" id="date-picker-group">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-black text-black dark:text-white uppercase tracking-wider">
                        1. Selecciona Fecha
                      </span>
                      <div className="flex items-center gap-1" id="month-nav">
                        <button
                          type="button"
                          onClick={goPrevMonth}
                          className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:border-white cursor-pointer"
                          aria-label="Mes anterior"
                          id="calendar-prev-month"
                        >
                          <ChevronLeft size={14} strokeWidth={2.5} />
                        </button>
                        <span className="min-w-[7.5rem] text-center text-[11px] font-black uppercase tracking-wider text-black dark:text-white">
                          {MONTH_NAMES[viewMonth]} {viewYear}
                        </span>
                        <button
                          type="button"
                          onClick={goNextMonth}
                          className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:border-white cursor-pointer"
                          aria-label="Mes siguiente"
                          id="calendar-next-month"
                        >
                          <ChevronRight size={14} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>

                    <div className="rounded-xl border-2 border-black bg-white dark:bg-slate-800 dark:border-white p-2" id="month-calendar">
                      <div className="grid grid-cols-7 gap-1 mb-1" id="weekday-headers">
                        {WEEKDAYS.map((wd) => (
                          <span
                            key={wd}
                            className="text-center text-[9px] font-black uppercase text-slate-500 dark:text-slate-400 py-1"
                          >
                            {wd}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1" id="days-grid">
                        {calendarCells.map((cell, idx) => {
                          if (cell.day === null || !cell.key) {
                            return <div key={`empty-${idx}`} className="aspect-square" />;
                          }

                          const isSelected = selectedDate === cell.key;
                          const isToday =
                            cell.key === toDateKey(today.getFullYear(), today.getMonth(), today.getDate());

                          return (
                            <button
                              key={cell.key}
                              type="button"
                              disabled={cell.disabled}
                              onClick={() => selectDate(cell.key!)}
                              className={`aspect-square rounded-lg border-2 text-[11px] font-black transition-colors ${
                                cell.disabled
                                  ? 'border-transparent text-slate-300 dark:text-slate-600 cursor-not-allowed'
                                  : isSelected
                                    ? 'border-black bg-[#fef08a] text-black cursor-pointer'
                                    : 'border-black bg-white text-black hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:border-white dark:hover:bg-slate-700 cursor-pointer'
                              } ${isToday && !isSelected && !cell.disabled ? 'ring-2 ring-[#bae6fd] ring-offset-0' : ''}`}
                              id={`date-btn-${cell.key}`}
                              aria-label={formatDateLabel(cell.key)}
                              aria-pressed={isSelected}
                            >
                              {cell.day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                      Disponible lun–vie · fines de semana bloqueados
                    </p>
                  </div>

                  {/* Time selector 10am–4pm */}
                  {selectedDate && (
                    <div className="space-y-1.5 animate-fade-in" id="time-picker-group">
                      <span className="text-[11px] font-black text-black dark:text-white uppercase tracking-wider">
                        2. Selecciona Hora (UTC-4) · 10:00–16:00
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" id="times-grid">
                        {AVAILABLE_TIMES.map((time) => (
                          <button
                            key={time}
                            type="button"
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
