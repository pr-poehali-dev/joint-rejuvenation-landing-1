
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

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // В реальном проекте здесь будет отправка данных на сервер
  };

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
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Выберите свой результат</h2>
          <p className="text-lg text-gray-600">
            Запишитесь на первое занятие уже сегодня, потому как тренировки расписаны на 3 недели вперед!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Что вы получите</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="shrink-0 mt-1 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="p-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-4">Предложение для бизнеса</h3>
              <p className="mb-4">
                Предложите своим клиентам уникальный метод восстановления и укрепления организма, с гарантированным эффектом - откройте свой Центр или возьмите тренажер для себя, мы научим вас освам гимнастики, для самостоятельной практики!
              </p>
              <Button variant="secondary" size="lg" asChild>
                <a href="#contact-form">Узнать подробнее</a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg" id="contact-form">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>
                  Ваш ключ к новым возможностям!
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
                      <Icon name="Check" className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold">Спасибо за заявку!</h3>
                    <p className="text-gray-600">
                      Мы свяжемся с вами в ближайшее время для уточнения деталей.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        placeholder="Введите ваше имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Номер телефона
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                      Записаться на занятие
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
