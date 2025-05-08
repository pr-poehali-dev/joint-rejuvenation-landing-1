
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // В реальном проекте здесь будет отправка данных на сервер
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      {/* Навигация */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn.poehali.dev/files/4324ffc8-7d84-4a61-b40b-2fd0bb8e4803.JPG"
              alt="Ось Жизни"
              className="h-9"
            />
            <span className="font-bold text-xl">Ось Жизни</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#problems" className="text-sm font-medium hover:text-primary">
              Проблемы
            </a>
            <a href="#method" className="text-sm font-medium hover:text-primary">
              Метод
            </a>
            <a href="#science" className="text-sm font-medium hover:text-primary">
              Наука
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary">
              Отзывы
            </a>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <a href="#contact">Записаться</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Секция Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 -z-10" />
          <div
            className="absolute inset-0 -z-10 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(249, 115, 22, 0.15) 2%, transparent 0%)",
              backgroundSize: "100px 100px",
            }}
          />
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
                  Революционная методика оздоровления
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Природное омоложение суставов и позвоночника{" "}
                  <span className="text-gradient bg-gradient-to-r from-blue-700 via-purple-500 to-orange-500">
                    без лекарств
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-xl">
                  Адаптивно функциональная гимнастика на запатентованном тренажёре «Ось Жизни» —
                  ваш короткий путь к омоложению и источнику энергии молодости
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <a href="#contact">Записаться на первое занятие</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#method">Узнать подробнее</a>
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative aspect-square max-w-lg">
                <img
                  src="https://cdn.poehali.dev/files/2629f2ea-4800-4572-aa3b-b83611ecb88a.png"
                  alt="Тренажер Ось Жизни"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Краткие преимущества */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-white/80 backdrop-blur border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" className="text-blue-600" />
                    Быстрый результат
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Всего 45 минут, 1 раз в неделю и вы почувствуете изменения уже после первого занятия
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Shield" className="text-blue-600" />
                    Безопасно для всех
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Методика безопасна для любого возраста и уровня подготовки, научно подтверждена
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Leaf" className="text-blue-600" />
                    Без медикаментов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Никаких лекарств, уколов и операций — только естественные ресурсы вашего организма
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Секция проблем */}
        <section id="problems" className="py-20 bg-white">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Узнаете себя?</h2>
              <p className="text-lg text-gray-600">
                Эти симптомы могут сигнализировать о проблемах с позвоночником, суставами и нервной системой
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Распространенные симптомы</h3>
                <ul className="space-y-3">
                  {[
                    "Постоянная усталость и сонливость",
                    "Боли в суставах, спине, шее",
                    "Потеря гибкости и мелкой моторики",
                    "Ломота в костях и остеопороз",
                    "Стресс, раздражительность, апатия",
                    "Сколиоз, искривления позвоночного столба",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="AlertCircle" className="shrink-0 mt-1 text-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Что вы уже пробовали?</h3>
                <ul className="space-y-3">
                  {[
                    "Массажи, йога, медитации — без результата",
                    "Операции, уколы, гормоны — дорого и опасно",
                    "Блокады, таблетки, приборы — временно снимают симптомы",
                    "БАДы, иголки, колдуны – боль возвращается",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="XCircle" className="shrink-0 mt-1 text-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg border border-purple-100">
                  <p className="font-medium text-lg">
                    Мы знаем, как вновь сделать вас молодыми, энергичными и активными, за одну программу, опираясь лишь на научные открытия скрытых ресурсов вашего тела!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция результатов */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                1 занятие даст вам
              </h2>
              <p className="text-lg text-gray-600">
                Уже после первого сеанса на тренажере «Ось Жизни» вы почувствуете значительные изменения
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Zap",
                  title: "Перезагрузка нервной системы",
                  desc: "Расслабление и мгновенный прилив сил",
                },
                {
                  icon: "Shield",
                  title: "Усиление иммунитета",
                  desc: "Защитные функции активируются на уровне ДНК",
                },
                {
                  icon: "Activity",
                  title: "Баланс гормонов",
                  desc: "Возвращение к молодым показателям",
                },
                {
                  icon: "Bone",
                  title: "Регенерация костей",
                  desc: "Восстановление соединительной ткани",
                },
                {
                  icon: "Droplets",
                  title: "Восстановление коллагена",
                  desc: "Возвращение суставам гибкости",
                },
                {
                  icon: "Waves",
                  title: "Очищение лимфы",
                  desc: "Усиление очистительных функций",
                },
                {
                  icon: "Heart",
                  title: "Гормоны радости",
                  desc: "Мгновенное улучшение настроения",
                },
                {
                  icon: "Battery",
                  title: "Прилив энергии",
                  desc: "Заряд бодрости уже во время тренировки",
                },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white hover-scale">
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
                      <Icon name={item.icon} className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-gray-600">
                    <p>{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Секция о методе */}
        <section id="method" className="py-20 bg-white">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://cdn.poehali.dev/files/996e86a4-180c-49a1-9fbe-d22060d38540.jpeg"
                  alt="Вячеслав Ан - автор методики"
                  className="rounded-lg shadow-xl max-w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Что такое гимнастика и тренажер «Ось Жизни»</h2>
                <ul className="space-y-4">
                  {[
                    "Адаптивная гимнастика на тренажёре «Ось Жизни» — революционный способ укрепления костей и суставов.",
                    "Запуск естественного омоложения: за 45 минут, 1 раз в неделю, под контролем специалиста.",
                    "Результаты с первого занятия: улучшение осанки, исчезновение болей, повышение плотности костей.",
                    "Безопасно для любого возраста и уровня подготовки — научно доказано, подтверждено исследованиями Harvard, Emory, 100+ публикаций.",
                    "Без лекарств, операций и побочных эффектов — только ваши внутренние ресурсы!",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="CheckCircle" className="shrink-0 mt-1 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-xl">Вячеслав Ан</h3>
                      <p className="text-gray-600">автор АФГ гимнастики и тренажера «Ось Жизни»</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Мастер-тренер с 30-летним опытом в оздоровительных практиках",
                      "Профессиональный спортсмен с высшим тренерским образованием",
                      "Трижды чемпион страны, МС по гребле, чемпион по паурлифтингу, 1 дан кекусинкай карате.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="Medal" className="shrink-0 mt-1 text-yellow-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Научное обоснование */}
        <section id="science" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Научное обоснование</h2>
              <p className="text-lg text-gray-600">
                Наша методика основана на серьезных научных открытиях и исследованиях
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold">1</div>
                    Пьезоэлектрический эффект
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Открытие пьезоэлектрического эффекта в костях (1957, Ивао Ясуда): Кости генерируют электрический сигнал при механическом давлении, стимулируя регенерацию.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold">2</div>
                    Закон Вольфа
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Кости укрепляются при механической нагрузке, в 15 раз превышающей вес тела, активируется рост костной ткани, а также происходит выделение гормонов, регулирующих метаболизм.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold">3</div>
                    Практическое применение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Практическое применение в США с 1997 г: Институты Harvard, Emory и др., создали фитнес-программы и тренажеры, доказав эффективность укрепления костной ткани.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-white rounded-lg border shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Принцип воздействия тренажёра «Ось Жизни»</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  {[
                    "Формирует точечно направленную весовую нагрузку на осевой̆ скелет",
                    "Передаёт усилие в кость, минуя суставы и поверхностные мышцы",
                    "Включает в работу глубокие стабилизирующие цепи тела",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="ArrowRight" className="shrink-0 mt-1 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {[
                    "Происходит выделение новых клеток, коллагена",
                    "Запускается мобилизация гормональной и нервной регуляции",
                    "Активируются естественные процессы регенерации тканей",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Icon name="ArrowRight" className="shrink-0 mt-1 text-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Кому подходит */}
        <section className="py-20 bg-blue-50">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Кому и когда нужно?</h2>
              <p className="text-lg text-gray-600">
                Наша методика эффективна для широкого круга людей
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "Shield",
                  title: "Военным",
                  desc: "Мобилизация скрытых ресурсов организма при реабилитации",
                },
                {
                  icon: "Trophy",
                  title: "Спортсменам",
                  desc: "Быстрое восстановление после травм, ушибов, растяжений",
                },
                {
                  icon: "Car",
                  title: "Водителям",
                  desc: "Исправление тазовой деформации и шейно-воротниковой зоны",
                },
                {
                  icon: "Briefcase",
                  title: "Офисным работникам",
                  desc: "При нервных истощениях, стрессах и депрессиях",
                },
                {
                  icon: "Users",
                  title: "Людям с избыточным весом",
                  desc: "Нормализация гормонального фона и метаболизма",
                },
                {
                  icon: "Flame",
                  title: "При травмах",
                  desc: "Способствует ускорению регенеративных процессов",
                },
                {
                  icon: "Baby",
                  title: "Детям и подросткам",
                  desc: "Исправление осанки и нарушений опорно-двигательного аппарата",
                },
                {
                  icon: "Heart",
                  title: "Пожилым людям",
                  desc: "Для сохранения подвижности и возвращения активности суставам",
                },
                {
                  icon: "ActivitySquare",
                  title: "При болях",
                  desc: "Людям с болями в спине, суставах, шее, коленях, локтях, кистях",
                },
              ].map((item, index) => (
                <Card key={index} className="border bg-white/80 backdrop-blur">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Icon name={item.icon} className="text-blue-600" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Почему выбирают нас */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl">
            <div className="px-6 py-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="max-w-3xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Почему наш метод выбирают 1000+ клиентов
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Не маскировка симптомов</h3>
                  <p className="text-white/90">
                    Это не временное исправление положения — это раскрытие внутреннего потенциала вашего тела
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Не лечение</h3>
                  <p className="text-white/90">
                    А пробуждение врожденного иммунитета, быстро, безопасно и навсегда
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Гарантированный результат</h3>
                  <p className="text-white/90">
                    Без болезненных процедур и долгого восстановления
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Процесс работы */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Как это работает?</h2>
              <p className="text-lg text-gray-600">
                Четкий процесс, который ведет к гарантированному результату
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: "Clipboard",
                  title: "Индивидуальная программа",
                  desc: "Упражнения подбираются под ваши цели и состояние",
                },
                {
                  icon: "Shield",
                  title: "Тренировки под контролем",
                  desc: "Только сертифицированные специалисты",
                },
                {
                  icon: "BarChart",
                  title: "Мгновенная обратная связь",
                  desc: "Результат можно измерить анализами",
                },
                {
                  icon: "Target",
                  title: "Комплексный эффект",
                  desc: "Укрепляются все системы организма",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 -z-10" />
                  )}
                  <div className="bg-white rounded-lg border p-6 text-center relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Отзывы */}
        <section id="reviews" className="py-20 bg-blue-50">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Реальные истории</h2>
              <p className="text-lg text-gray-600">
                Послушайте тех, кто уже испытал эффект от нашей методики
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Владимир, 62 года",
                  role: "военный пенсионер",
                  comment: "Я снова бегаю с внуком и сплю всю ночь без боли. Вы подарили мне вторую молодость!",
                },
                {
                  name: "Дмитрий, 55 лет",
                  role: "проектировщик",
                  comment: "После первой тренировки улучшился сон, а после курса исправилась осанка, ушёл горб.",
                },
                {
                  name: "Вера, 67 лет",
                  role: "владелец сети ювелирных магазинов",
                  comment: "За 3 занятия исчезла «холка», подтянулась кожа лица, а после программы прошли боли в кистях.",
                },
                {
                  name: "Юрий, 77 лет",
                  role: "пенсионер, мастер цигун",
                  comment: "После 1 занятия давление снизилось с 150/130 до 130/110, после полного курса ушла боль в шее, повысилась жизненная энергия.",
                },
                {
                  name: "Вероника, 66 лет",
                  role: "владелец юридической компании",
                  comment: "Пройдя полный курс, у меня восстановилась чувствительность половины тела, которой не было уже полтора года после инсульта.",
                },
                {
                  name: "Светлана, 66 лет",
                  role: "владелец гостиницы",
                  comment: "После курса ушли трещины на пятках, выровнялся позвоночник, плечи, улучшился сон, появилась личная жизнь.",
                },
              ].map((item, index) => (
                <Card key={index} className="border bg-white">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Quote" className="text-blue-500" />
                    </div>
                    <CardDescription className="text-gray-800 text-lg font-medium italic">
                      "{item.comment}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.role}</p>
                      </div>
                      <div className="flex text-yellow-400">
                        {Array(5).fill(0).map((_, i) => (
                          <Icon key={i} name="Star" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Результаты */}
        <section className="py-20 bg-white">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">У 92% занимающихся</h2>
              <p className="text-lg text-gray-600">
                Наши клиенты отмечают значительные улучшения в различных аспектах здоровья
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Coffee",
                  title: "Уходят зависимости",
                  desc: "От «стимуляторов радости и бодрости»",
                },
                {
                  icon: "TouchSquare",
                  title: "Возвращается чувствительность",
                  desc: "В конечностях тела",
                },
                {
                  icon: "Laugh",
                  title: "Раскрепощение",
                  desc: "Нервных и мышечных зажимов",
                },
                {
                  icon: "Cloudy",
                  title: "Выход из депрессии",
                  desc: "Мгновенный выход из подавленности",
                },
                {
                  icon: "Heart",
                  title: "Либидо",
                  desc: "Снова захочет «страсти»",
                },
                {
                  icon: "Sparkle",
                  title: "Омоложение кожи",
                  desc: "Улучшение внешнего вида",
                },
                {
                  icon: "Zap",
                  title: "Прилив энергии",
                  desc: "Умственной, физической, психической",
                },
                {
                  icon: "Brain",
                  title: "Рост способностей",
                  desc: "Память, мышление, речь, обучение",
                },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-white hover-scale">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Icon name={item.icon} className="text-purple-600" />
                      <CardTitle>{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Эксперты рекомендуют */}
        <section className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container max-w-6xl">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Нас рекомендуют</h2>
              <p className="text-lg text-gray-600">
                Профессионалы в различных областях оценили эффективность нашей методики
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border bg-white flex flex-col md:flex-row overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/7785be95-163e-4214-8362-ee630d812adb.png"
                  alt="Виктор Алексеевич Ефимов"
                  className="w-full md:w-1/3 object-cover object-center"
                />
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-1">Виктор Алексеевич Ефимов</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Советский и российский партийный и государственный деятель, инженер-метролог, 
                    экономист и публицист. Кандидат технических наук, доктор экономических наук, профессор.
                  </p>
                  <p className="italic">
                    "Автор серии книг: Концепция Общественной Безопасности, Концептуальная власть и 
                    десятки других книг в сфере экономики, политики, управления"
                  </p>
                </div>
              </Card>

              <Card className="border bg-white flex flex-col md:flex-row overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/8325f78d-8344-41d9-b9f2-e0d504706c47.png"
                  alt="Борис Алексеевич Семенов"
                  className="w-full md:w-1/3 object-cover object-center"
                />
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-1">Борис Алексеевич Семенов</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Советский российский живописец, график, член Санкт-Петербургского Союза художников, 
                    представитель ленинградской школы живописи.
                  </p>
                  <p className="italic">
                    "Академик Российской Академии естественных наук."
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Форма записи */}
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
                      {[
                        "Быстрое избавление от болей в спине, шее, суставах и конечностях",
                        "Красивая осанка и здоровый мышечный тонус",
                        "Свобода движений, сила и гибкость",
                        "Восстановление работы опорно-двигательного аппарата, уменьшение воспаления",
                        "Улучшение координации, равновесия, кровообращения и обмена веществ",
                        "Повышение энергии, отличное самочувствие и качество жизни",
                        "Меньше потребности в обезболивающих, быстрая реабилитация",
                        "Для детей: развитие речи, внимания, мелкой моторики и коррекция осанки",
                      ].map((item, index) => (
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
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://cdn.poehali.dev/files/4324ffc8-7d84-4a61-b40b-2fd0bb8e4803.JPG"
                  alt="Ось Жизни"
                  className="h-9 bg-white rounded-full p-1"
                />
                <span className="font-bold text-xl">Ось Жизни</span>
              </div>
              <p className="text-gray-400">
                Революционная методика естественного омоложения суставов, позвоночника и центральной нервной системы.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="text-blue-400" />
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="text-blue-400" />
                  <span>info@os-zhizni.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-blue-400" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                  <Icon name="Twitter" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="Vk" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Ось Жизни. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
