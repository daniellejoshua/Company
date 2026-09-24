"use client";

import {
  AlertCircle,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileText,
  LayoutGrid,
  Loader2,
  Lock,
  Mail,
  Phone,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { submitContactMessage } from "@/lib/contact";

type ContactDialogProps = {
  open: boolean;
  onClose: () => void;
};

const LOOKING_FOR_OPTIONS = [
  "Business Systems",
  "MLM Platforms",
  "POS Systems",
  "eCommerce",
  "Mobile Applications",
  "Desktop Applications",
  "Web Applications",
  "Other / Not Sure Yet",
];

const inputBase =
  "h-11 w-full rounded-lg border bg-white px-3.5 text-[13px] text-[#111827] shadow-[0_1px_2px_rgba(15,23,42,0.05)] outline-none transition-colors placeholder:text-[#9AA5B1] focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/15";

const inputBorder = (hasError: boolean) =>
  hasError
    ? "border-[#DC2626]/70 focus:border-[#DC2626] focus:ring-[#DC2626]/15"
    : "border-[#DDE3E8]";

const labelClass = "mb-1.5 block text-[13px] font-medium text-[#334155]";

const errorTextClass = "mt-1.5 text-xs text-[#DC2626]";

const iconClass =
  "pointer-events-none absolute top-1/2 left-3.5 size-[17px] -translate-y-1/2 text-[#9AA5B1]";

type FormValues = {
  fullName: string;
  email: string;
  company: string;
  contactNumber: string;
  lookingFor: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  company: "",
  contactNumber: "",
  lookingFor: "",
  details: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.fullName.trim()) {
    errors.fullName = "Please tell us your full name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.lookingFor) {
    errors.lookingFor = "Please choose an option from the list.";
  }
  if (!values.details.trim()) {
    errors.details = "Please share a few details about your project.";
  }
  return errors;
}

function focusField(name: keyof FormValues) {
  document.getElementById(`contact-${name}`)?.focus();
}

function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/assets/PRAXIS_JADE_symbol_only.svg"
        alt=""
        width={40}
        height={48}
        className={`${compact ? "h-7 w-auto" : "h-8 w-auto"} shrink-0`}
      />
      <span
        className={`${
          compact ? "text-base" : "text-lg"
        } font-michroma leading-none tracking-[-0.02em] text-white`}
      >
        PRAXIS
      </span>
      <span
        className={`${
          compact ? "text-base" : "text-lg"
        } font-michroma leading-none tracking-[-0.02em] text-[#6EE7B7]`}
      >
        JADE
      </span>
    </div>
  );
}

function BrandTagline() {
  return (
    <p className="mt-3 text-[10px] font-poppins font-normal uppercase tracking-[0.35em] text-[#6EE7B7]/70">
      Ideas Into Impact
    </p>
  );
}

function FormInput({
  id,
  label,
  required,
  error,
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  icon: LucideIcon;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span className="ml-0.5 text-[#10B981]" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      <div className="relative">
        <Icon className={iconClass} aria-hidden="true" />
        <input
          id={id}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputBase} ${inputBorder(Boolean(error))} pl-11`}
          {...props}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className={errorTextClass} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function FormSelect({
  id,
  label,
  required,
  error,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? (
          <span className="ml-0.5 text-[#10B981]" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      <div className="relative">
        <LayoutGrid className={iconClass} aria-hidden="true" />
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${inputBase} ${inputBorder(Boolean(error))} appearance-none pr-9 pl-11 ${value ? "text-[#111827]" : "text-[#9AA5B1]"}`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9AA5B1]"
          aria-hidden="true"
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className={errorTextClass} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function DialogPanel({ onClose }: { onClose: () => void }) {
  const reducedMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    return () => previouslyFocused?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleTabTrap = (event: React.KeyboardEvent) => {
    if (event.key !== "Tab" || !panelRef.current) return;
    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleChange =
    (field: keyof FormValues) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstError = (
        ["fullName", "email", "lookingFor", "details"] as const
      ).find((field) => nextErrors[field]);
      if (firstError) focusField(firstError);
      return;
    }

    setSubmitError(null);
    setStatus("submitting");
    const result = await submitContactMessage({
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      contactNumber: values.contactNumber.trim(),
      lookingFor: values.lookingFor,
      details: values.details.trim(),
    });

    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("idle");
      setSubmitError(result.message);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto"
      onKeyDown={handleTabTrap}
    >
      <motion.div
        className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-[3px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.22, ease: "easeOut" }}
        aria-hidden="true"
      />

      <div
        className="relative flex min-h-full justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-dialog-title"
          ref={panelRef}
          onClick={(event) => event.stopPropagation()}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{
            duration: reducedMotion ? 0 : 0.22,
            ease: "easeOut",
          }}
          className="relative my-auto w-full max-w-[1050px] font-poppins"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="absolute top-4 right-4 z-30 flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#DDE3E8] bg-white text-[#475569] shadow-sm transition-colors duration-200 hover:bg-[#F1F5F9] hover:text-[#111827] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
          >
            <X className="size-4" aria-hidden="true" />
          </button>

          <div className="grid grid-cols-1 overflow-hidden rounded-[18px] bg-white shadow-[0_32px_80px_rgba(2,24,18,0.45)] ring-1 ring-black/5 md:max-h-[calc(100dvh-3rem)] md:grid-cols-[39%_61%] md:grid-rows-[minmax(0,1fr)]">
            {/* Mobile compact branded header */}
            <div className="relative overflow-hidden bg-[#071D1A] px-5 py-4 md:hidden">
              <Image
                src="/assets/praxis-geometric-panel.svg"
                alt=""
                fill
                className="pointer-events-none object-cover opacity-60"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,20,16,0.7),transparent_60%)]" aria-hidden="true" />
              <div className="relative z-10">
                <BrandLockup compact />
                <BrandTagline />
              </div>
            </div>

            {/* Brand panel — desktop */}
            <aside className="relative hidden min-h-0 overflow-hidden bg-[#071D1A] md:flex md:flex-col">
              <Image
                src="/assets/praxis-geometric-panel.svg"
                alt=""
                fill
                className="pointer-events-none object-cover"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_82%_100%,rgba(2,18,14,0.8),transparent_55%)]"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-full flex-col p-7 sm:p-8 lg:p-10">
                <BrandLockup />
                <BrandTagline />

                <div className="mt-auto pt-12">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6EE7B7]">
                    Let&apos;s Talk
                  </p>
                  <h2 className="mt-3 font-poppins text-[32px] leading-[1.25] font-bold text-white">
                    Turn Your Ideas
                    <br />
                    Into Real
                    <br />
                    <span className="text-[#6EE7B7]">Solutions.</span>
                  </h2>
                  <p className="mt-4 max-w-[36ch] text-sm leading-[1.6] text-white/75">
                    Have a project in mind or just want to explore
                    possibilities? We&apos;d love to hear from you.
                  </p>
                </div>
              </div>
            </aside>

            {/* Contact form — desktop + mobile */}
            <div className="min-w-0 bg-white p-5 sm:p-8 md:min-h-0 md:max-h-[inherit] md:overflow-y-auto lg:p-10">
              {status === "success" ? (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center py-10 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-[#D1FAE5]/70">
                    <CheckCircle2
                      className="size-8 text-[#10B981]"
                      aria-hidden="true"
                    />
                  </span>
                  <h3
                    id="contact-dialog-title"
                    className="mt-5 font-poppins text-2xl font-semibold text-[#111827]"
                  >
                    Message Sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-[1.6] text-[#6B7280]">
                    Thank you for reaching out — we&apos;ve received your
                    inquiry and will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 h-[46px] cursor-pointer rounded-lg bg-gradient-to-r from-[#064E3B] to-[#059669] px-7 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981]"
                  >
                    Back to Site
                  </button>
                </div>
              ) : (
                <>
                  <header>
                    <h2
                      id="contact-dialog-title"
                      className="font-poppins text-[30px] leading-[1.2] font-bold tracking-[-0.01em] text-[#111827]"
                    >
                      Send Us a Message
                    </h2>
                    <p className="mt-2 text-sm leading-[1.6] text-[#6B7280]">
                      Fill out the form and we&apos;ll get back to you as soon
                      as possible.
                    </p>
                  </header>

                  <form
                    noValidate
                    onSubmit={handleSubmit}
                    className="mt-7 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
                  >
                    <FormInput
                      id="contact-fullName"
                      label="Full Name"
                      required
                      icon={User}
                      placeholder="Juan Dela Cruz"
                      value={values.fullName}
                      onChange={handleChange("fullName")}
                      error={errors.fullName}
                      autoComplete="name"
                    />
                    <FormInput
                      id="contact-email"
                      label="Email Address"
                      required
                      type="email"
                      icon={Mail}
                      placeholder="you@company.com"
                      value={values.email}
                      onChange={handleChange("email")}
                      error={errors.email}
                      autoComplete="email"
                    />
                    <FormInput
                      id="contact-company"
                      label="Company / Organization"
                      icon={Building2}
                      placeholder="Company name"
                      value={values.company}
                      onChange={handleChange("company")}
                      error={errors.company}
                      autoComplete="organization"
                    />
                    <FormInput
                      id="contact-contactNumber"
                      label="Contact Number"
                      type="tel"
                      icon={Phone}
                      placeholder="+63 900 000 0000"
                      value={values.contactNumber}
                      onChange={handleChange("contactNumber")}
                      error={errors.contactNumber}
                      autoComplete="tel"
                    />
                    <div className="sm:col-span-2">
                      <FormSelect
                        id="contact-lookingFor"
                        label="What are you looking for?"
                        required
                        value={values.lookingFor}
                        onChange={(value) => {
                          setValues((prev) => ({
                            ...prev,
                            lookingFor: value,
                          }));
                          if (errors.lookingFor) {
                            setErrors((prev) => ({
                              ...prev,
                              lookingFor: undefined,
                            }));
                          }
                        }}
                        error={errors.lookingFor}
                        options={LOOKING_FOR_OPTIONS}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-details" className={labelClass}>
                        Project Details
                        <span className="ml-0.5 text-[#10B981]" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <FileText
                          className="pointer-events-none absolute top-3.5 left-3.5 size-[17px] text-[#9AA5B1]"
                          aria-hidden="true"
                        />
                        <textarea
                          id="contact-details"
                          rows={4}
                          maxLength={500}
                          value={values.details}
                          onChange={handleChange("details")}
                          aria-invalid={Boolean(errors.details)}
                          aria-describedby={
                            errors.details ? "contact-details-error" : undefined
                          }
                          placeholder="Tell us about your project, goals, or any specific requirements..."
                          className={`${inputBase} min-h-[112px] resize-none pt-3 pl-11 leading-[1.6] ${inputBorder(Boolean(errors.details))}`}
                        />
                      </div>
                      <div className="mt-1.5 flex items-start justify-between gap-3">
                        {errors.details ? (
                          <p
                            id="contact-details-error"
                            className={errorTextClass}
                            role="alert"
                          >
                            {errors.details}
                          </p>
                        ) : (
                          <span aria-hidden="true" />
                        )}
                        <span className="ml-auto shrink-0 text-xs text-[#9AA5B1]">
                          {values.details.length}/500
                        </span>
                      </div>
                    </div>

                    {submitError ? (
                      <div
                        className="flex items-start gap-2.5 rounded-lg border border-[#FECACA]/70 bg-[#FEF2F2] p-3.5 text-sm text-[#B91C1C] sm:col-span-2"
                        role="alert"
                      >
                        <AlertCircle
                          className="mt-0.5 size-4 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{submitError}</span>
                      </div>
                    ) : null}

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group flex h-[46px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#064E3B] to-[#059669] text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10B981] disabled:cursor-not-allowed disabled:opacity-80"
                      >
                        {status === "submitting" ? (
                          <>
                            Sending
                            <Loader2
                              className="size-4 animate-spin"
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight
                              className="size-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </button>
                      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-[#6B7280]">
                        <Lock
                          className="size-3.5 shrink-0 text-[#10B981]"
                          aria-hidden="true"
                        />
                        Your information is secure and will only be used for
                        this inquiry.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ContactDialog({ open, onClose }: ContactDialogProps) {
  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && <DialogPanel key="dialog" onClose={onClose} />}
    </AnimatePresence>,
    document.body,
  );
}