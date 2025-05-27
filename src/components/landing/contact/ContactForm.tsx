import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { submitToGoogleForm } from "./utils";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // URL вашей Google Form (замените на свой)
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitToGoogleForm({ name, phone }, GOOGLE_FORM_URL);

    setIsSubmitting(false);

    if (success) {
      setIsSubmitted(true);
      setName("");
      setPhone("");

      // Сбросить состояние через 3 секунды
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("Произошла ошибка. Попробуйте ещё раз.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <Icon
            name="CheckCircle"
            className="h-12 w-12 text-green-600 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Заявка отправлена!
          </h3>
          <p className="text-green-700">Мы свяжемся с вами в ближайшее время</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium flex items-center gap-1"
        >
          <Icon name="User" className="h-4 w-4" />
          Ваше имя
        </label>
        <Input
          id="name"
          placeholder="Введите ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={isSubmitting}
          className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="text-sm font-medium flex items-center gap-1"
        >
          <Icon name="Phone" className="h-4 w-4" />
          Номер телефона
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          disabled={isSubmitting}
          className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all h-12 text-base disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            <Icon name="CalendarCheck" className="mr-2" />
            Записаться на занятие
          </>
        )}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        Нажимая на кнопку, вы соглашаетесь с нашей{" "}
        <a href="#" className="text-blue-600 hover:underline">
          политикой конфиденциальности
        </a>
        .
      </p>
    </form>
  );
};
