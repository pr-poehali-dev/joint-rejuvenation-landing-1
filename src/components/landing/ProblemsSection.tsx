
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

            {/* Новая анатомическая иллюстрация с выделенными болевыми точками */}
            <div className="mt-6 bg-white p-4 rounded-lg border border-blue-100">
              <div className="relative w-full h-64 flex items-center justify-center bg-blue-50/50 rounded-md">
                <div className="relative w-48 h-64">
                  {/* Силуэт человека с выделенными точками боли */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Базовый силуэт человека */}
                    <path
                      d="M50,10 C55,10 60,15 60,20 C60,25 55,30 50,30 C45,30 40,25 40,20 C40,15 45,10 50,10"
                      fill="#e0e7ff"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M43,30 L43,38 C43,40 45,42 50,42 C55,42 57,40 57,38 L57,30"
                      fill="#e0e7ff"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M50,42 L50,75"
                      stroke="#3b82f6"
                      strokeWidth="1"
                      strokeDasharray="2,1"
                    />
                    <path
                      d="M43,42 L40,62 L37,75 L40,90"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M57,42 L60,62 L63,75 L60,90"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M37,48 L28,58"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M63,48 L72,58"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                    />

                    {/* Выделенные болевые точки */}
                    <circle cx="50" cy="18" r="3" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <title>Головные боли</title>
                    </circle>
                    <circle cx="50" cy="25" r="4" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0.3s"
                      />
                      <title>Боли в шее</title>
                    </circle>
                    <circle cx="50" cy="38" r="4" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0.6s"
                      />
                      <title>Боли в верхней части спины</title>
                    </circle>
                    <circle cx="50" cy="55" r="5" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0.9s"
                      />
                      <title>Боли в пояснице</title>
                    </circle>
                    <circle cx="37" cy="48" r="3" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.2s"
                      />
                      <title>Боли в плече</title>
                    </circle>
                    <circle cx="63" cy="48" r="3" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.2s"
                      />
                      <title>Боли в плече</title>
                    </circle>
                    <circle cx="28" cy="58" r="3" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.5s"
                      />
                      <title>Боли в локте</title>
                    </circle>
                    <circle cx="72" cy="58" r="3" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.5s"
                      />
                      <title>Боли в локте</title>
                    </circle>
                    <circle cx="38" cy="75" r="3" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.8s"
                      />
                      <title>Боли в колене</title>
                    </circle>
                    <circle cx="62" cy="75" r="3" fill="#f87171" opacity="0.8">
                      <animate
                        attributeName="opacity"
                        values="0.8;0.4;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="1.8s"
                      />
                      <title>Боли в колене</title>
                    </circle>

                    {/* Линии позвоночника с выделением проблемных зон */}
                    <path
                      d="M50,25 C48,30 52,35 50,40 C48,45 52,50 50,55 C48,60 52,65 50,70"
                      fill="none"
                      stroke="#f87171"
                      strokeWidth="2"
                      strokeDasharray="1,1"
                      opacity="0.8"
                    >
                      <title>Проблемы позвоночника</title>
                    </path>

                    {/* Анатомические обозначения */}
                    <line
                      x1="56"
                      y1="18"
                      x2="70"
                      y2="15"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                      strokeDasharray="1,1"
                    />
                    <text
                      x="71"
                      y="15"
                      fontSize="3"
                      fill="#3b82f6"
                      fontWeight="bold"
                    >
                      ШОП
                    </text>

                    <line
                      x1="57"
                      y1="38"
                      x2="75"
                      y2="38"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                      strokeDasharray="1,1"
                    />
                    <text
                      x="76"
                      y="38"
                      fontSize="3"
                      fill="#3b82f6"
                      fontWeight="bold"
                    >
                      ГОП
                    </text>

                    <line
                      x1="57"
                      y1="55"
                      x2="75"
                      y2="55"
                      stroke="#3b82f6"
                      strokeWidth="0.5"
                      strokeDasharray="1,1"
                    />
                    <text
                      x="76"
                      y="55"
                      fontSize="3"
                      fill="#3b82f6"
                      fontWeight="bold"
                    >
                      ПОП
                    </text>
                  </svg>

                  {/* Медицинские указатели и обозначения */}
                  <div className="absolute top-1 left-0 bg-white/70 backdrop-blur-sm p-1 rounded text-xs text-blue-800 border border-blue-200 shadow-sm">
                    Области хронических болей
                  </div>
                </div>
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
