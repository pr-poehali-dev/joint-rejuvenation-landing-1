import Icon from "@/components/ui/icon";

export const ProblemsSection = () => {
  const symptoms = [
    "Постоянная усталость и сонливость",
    "Боли в суставах, спине, шее",
    "Потеря гибкости и мелкой моторики",
    "Ломота в костях и остеопороз",
    "Стресс, раздражительность, апатия",
    "Сколиоз, искривления позвоночного столба",
  ];

  const treatments = [
    "Массажи, йога, медитации — без результата",
    "Операции, уколы, гормоны — дорого и опасно",
    "Блокады, таблетки, приборы — временно снимают симптомы",
    "БАДы, иголки, колдуны – боль возвращается",
  ];

  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Узнаете себя?</h2>
          <p className="text-lg text-gray-600">
            Эти симптомы могут сигнализировать о проблемах с позвоночником,
            суставами и нервной системой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Icon name="Activity" className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold">Распространенные симптомы</h3>
            </div>

            <ul className="space-y-3">
              {symptoms.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon
                    name="AlertCircle"
                    className="shrink-0 mt-1 text-orange-500"
                  />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Схематическое изображение проблемных зон */}
            <div className="mt-6 bg-white p-4 rounded-lg border border-blue-100 flex items-center justify-center">
              <div className="relative w-48 h-64">
                <svg viewBox="0 0 100 140" className="w-full h-full">
                  {/* Силуэт человека */}
                  <path
                    d="M50,20 C60,20 65,15 65,5 C65,15 70,20 80,20 C70,25 70,35 70,40 C70,50 75,55 75,65 C75,75 65,85 65,100 C65,115 70,120 70,130 C70,135 65,140 50,140 C35,140 30,135 30,130 C30,120 35,115 35,100 C35,85 25,75 25,65 C25,55 30,50 30,40 C30,35 30,25 20,20 C30,20 35,15 35,5 C35,15 40,20 50,20"
                    fill="#f0f9ff"
                    stroke="#3b82f6"
                    strokeWidth="1"
                  />

                  {/* Проблемные зоны */}
                  <circle
                    cx="50"
                    cy="12"
                    r="5"
                    fill="#f87171"
                    opacity="0.7"
                    className="animate-pulse"
                  >
                    <title>Боли в шее</title>
                  </circle>
                  <circle
                    cx="50"
                    cy="40"
                    r="7"
                    fill="#f87171"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <title>Боли в спине</title>
                  </circle>
                  <circle
                    cx="50"
                    cy="65"
                    r="6"
                    fill="#f87171"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <title>Боли в пояснице</title>
                  </circle>
                  <circle
                    cx="30"
                    cy="55"
                    r="4"
                    fill="#f87171"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <title>Боли в суставах</title>
                  </circle>
                  <circle
                    cx="70"
                    cy="55"
                    r="4"
                    fill="#f87171"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <title>Боли в суставах</title>
                  </circle>
                  <circle
                    cx="35"
                    cy="100"
                    r="4"
                    fill="#f87171"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <title>Боли в коленях</title>
                  </circle>
                  <circle
                    cx="65"
                    cy="100"
                    r="4"
                    fill="#f87171"
                    opacity="0.7"
                    className="animate-pulse"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <title>Боли в коленях</title>
                  </circle>
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-red-50 p-6 rounded-lg border border-red-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <Icon name="XCircle" className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold">Что вы уже пробовали?</h3>
            </div>

            <ul className="space-y-3">
              {treatments.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon name="Slash" className="shrink-0 mt-1 text-red-500" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Схема сравнения методов */}
            <div className="mt-6 bg-white p-4 rounded-lg border border-red-100">
              <h4 className="font-semibold mb-2 text-center">
                Традиционные методы vs Ось Жизни
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="font-medium text-center mb-2 text-red-800">
                    Традиционные методы
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-1">
                      <Icon name="Clock" className="h-3 w-3 text-red-500" />
                      <span>Длительное лечение</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Icon
                        name="DollarSign"
                        className="h-3 w-3 text-red-500"
                      />
                      <span>Высокая стоимость</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Icon
                        name="AlertTriangle"
                        className="h-3 w-3 text-red-500"
                      />
                      <span>Побочные эффекты</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Icon name="Repeat" className="h-3 w-3 text-red-500" />
                      <span>Временный эффект</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="font-medium text-center mb-2 text-green-800">
                    Ось Жизни
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-1">
                      <Icon name="Clock" className="h-3 w-3 text-green-500" />
                      <span>45 минут в неделю</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Icon name="Check" className="h-3 w-3 text-green-500" />
                      <span>Доступная цена</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Icon name="Shield" className="h-3 w-3 text-green-500" />
                      <span>Без побочных эффектов</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <Icon
                        name="ThumbsUp"
                        className="h-3 w-3 text-green-500"
                      />
                      <span>Длительный результат</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-orange-100 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-2">
                <Icon
                  name="Lightbulb"
                  className="shrink-0 h-8 w-8 text-purple-600"
                />
                <h3 className="font-semibold text-xl">Мы знаем решение!</h3>
              </div>
              <p className="font-medium text-gray-800">
                Мы знаем, как вновь сделать вас молодыми, энергичными и
                активными, за одну программу, опираясь лишь на научные открытия
                скрытых ресурсов вашего тела!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
