import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

// Компонент для отображения преимуществ методики
const BenefitItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-3 p-3 rounded-md hover:bg-blue-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
      <Icon name="CheckCircle" className="h-5 w-5 text-green-600" />
    </div>
    <span className="font-medium">{children}</span>
  </div>
);

// Компонент формы контакта
const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // В реальном проекте здесь будет отправка данных на сервер
  };

  if (formSubmitted) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center">
          <Icon name="Check" className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold">Спасибо за заявку!</h3>
        <p className="text-gray-600">
          Мы свяжемся с вами в ближайшее время для уточнения деталей.
        </p>
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
          className="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all h-12 text-base"
      >
        <Icon name="CalendarCheck" className="mr-2" />
        Записаться на занятие
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

// Компонент с контактной информацией
const ContactInfo = () => (
  <div className="mt-6 pt-6 border-t border-gray-200">
    <div className="flex items-center gap-2 mb-2">
      <Icon name="Clock" className="h-4 w-4 text-blue-600" />
      <span className="text-sm font-medium">
        Время работы: Пн-Пт с 9:00 до 20:00
      </span>
    </div>
    <div className="flex items-center gap-2">
      <Icon name="MapPin" className="h-4 w-4 text-blue-600" />
      <span className="text-sm font-medium">
        Адрес: г. Москва, ул. Примерная, д. 123
      </span>
    </div>
  </div>
);

// Компонент блока "Что вы получите"
const BenefitsCard = () => {
  const benefits = [
    "Быстрое избавление от болей в спине, шее, суставах и конечностях",
    "Красивая осанка и здоровый мышечный тонус",
    "Свобода движений, сила и гибкость",
    "Восстановление работы опорно-двигательного аппарата, уменьшение воспаления",
    "Улучшение координации, равновесия, кровообращения и обмена веществ",
    "Повышение энергии, отличное самочувствие и качество жизни",
    "Меньше потребности в обезболивающих, быстрая реабилитация",
    "Для детей: развитие речи, внимания, мелкой моторики и коррекция осанки",
  ];

  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 rounded-full p-2">
            <Icon name="Gift" className="h-6 w-6" />
          </div>
          <CardTitle>Что вы получите</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((item, index) => (
            <BenefitItem key={index}>{item}</BenefitItem>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

// Компонент с предложением для бизнеса
const BusinessOffer = () => (
  <div className="p-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg relative overflow-hidden">
    {/* Декоративные элементы */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

    <div className="relative z-10 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 rounded-full p-2">
            <Icon name="Building" className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Предложение для бизнеса</h3>
        </div>
        <p className="mb-6">
          Предложите своим клиентам уникальный метод восстановления и укрепления
          организма, с гарантированным эффектом - откройте свой Центр или
          возьмите тренажер для себя, мы научим вас освам гимнастики, для
          самостоятельной практики!
        </p>
        <Button
          variant="secondary"
          size="lg"
          asChild
          className="relative inline-flex"
        >
          <a href="#contact-form">
            <Icon name="Info" className="mr-2" />
            Узнать подробнее
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 animate-pulse"></span>
          </a>
        </Button>
      </div>

      <div className="flex-shrink-0 md:w-1/3 flex justify-center">
        <img
          src="https://cdn.poehali.dev/files/fe55c1e4-216a-4dd2-9f59-f91f05c340e4.png"
          alt="Вячеслав Ан - автор методики"
          className="h-40 md:h-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  </div>
);

// Компонент формы контакта
const ContactFormCard = () => (
  <Card className="border-0 shadow-lg" id="contact-form">
    <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 rounded-full p-2">
          <Icon name="Send" className="h-6 w-6" />
        </div>
        <div>
          <CardTitle>Оставьте заявку</CardTitle>
          <CardDescription className="text-white/80 mt-1">
            Ваш ключ к новым возможностям!
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-6">
      <ContactForm />
      <ContactInfo />
    </CardContent>
  </Card>
);

// Основной компонент секции контактов
export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-blue-50 relative">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="opacity-10"
        >
          <path
            d="M0,0 L100,0 L100,20 C80,40 50,30 20,50 L0,70 Z"
            fill="url(#grad1)"
          />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container max-w-6xl relative z-10">
        <SectionHeader />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <BenefitsCard />
            <BusinessOffer />
          </div>

          <div className="lg:col-span-2">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
};

// Компонент заголовка секции
const SectionHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-4">
      <Icon name="Check" className="h-4 w-4" />
      Сделайте первый шаг к здоровью
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Выберите свой результат
    </h2>
    <p className="text-lg text-gray-600">
      Запишитесь на первое занятие уже сегодня, потому как тренировки расписаны
      на 3 недели вперед!
    </p>
  </div>
);
