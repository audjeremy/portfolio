'use client';

import { useState, FormEvent } from 'react';
import Window from '@/components/os/Window';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      errors.email = 'L\'adresse courriel est requise';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Veuillez entrer une adresse courriel valide';
    }

    if (!formData.message.trim()) {
      errors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    setFieldErrors({});

    if (!validateForm()) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Une erreur est survenue');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <Window title="Contact">
      <div className="p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Contactez-moi
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              Une question ? Un projet ? N'hésitez pas à me contacter.
              Je vous répondrai dans les plus brefs délais.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a
              href="mailto:jeremyaudette@icloud.com"
              className="group bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 hover:shadow-lg transition-shadow"
            >
              <p className="text-xs text-gray-600 mb-1">Email</p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold break-all group-hover:text-emerald-700 transition-colors">
                jeremyaudette@icloud.com
              </p>
            </a>
            <a
              href="tel:+14385044533"
              className="group bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50 hover:shadow-lg transition-shadow"
            >
              <p className="text-xs text-gray-600 mb-1">Téléphone</p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold group-hover:text-emerald-700 transition-colors">
                (438) 504-4533
              </p>
            </a>
            <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200/50">
              <p className="text-xs text-gray-600 mb-1">Ville</p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold">Montréal</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/50 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 ${
                  fieldErrors.name
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
                placeholder="Votre nom"
              />
              {fieldErrors.name && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Adresse courriel
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/50 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-900 ${
                  fieldErrors.email
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
                placeholder="votre@email.com"
              />
              {fieldErrors.email && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white/50 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-gray-900 ${
                  fieldErrors.message
                    ? 'border-red-300'
                    : 'border-gray-300'
                }`}
                placeholder="Votre message..."
              />
              {fieldErrors.message && (
                <p className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
              )}
              {!fieldErrors.message && formData.message.length > 0 && (
                <p className="mt-1 text-xs text-gray-600">
                  {formData.message.length}/10 caractères minimum
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white text-sm sm:text-base font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed hover:scale-[1.02]"
            >
              <span className="inline-flex items-center justify-center gap-2">
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>
          {status === 'success' && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-green-800 text-center font-medium">
                ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
              </p>
            </div>
          )}
          {status === 'error' && errorMessage && (
            <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-800 text-center font-medium">
                ✗ {errorMessage}
              </p>
            </div>
          )}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
              Autres moyens de contact
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 text-center px-4 mb-4 sm:mb-6">
              Vous pouvez aussi me joindre directement par email ou téléphone, ou me suivre sur mes réseaux.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/audjeremy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-lg transition-all hover:scale-105"
                aria-label="Voir mon profil GitHub"
              >
                <svg className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 font-medium transition-colors">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jeremy-audette/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200/50 hover:shadow-lg transition-all hover:scale-105"
                aria-label="Voir mon profil LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm sm:text-base text-gray-700 group-hover:text-blue-600 font-medium transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}

