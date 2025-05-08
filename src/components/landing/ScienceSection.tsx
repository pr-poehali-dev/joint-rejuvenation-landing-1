import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScienceCardProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const ScienceCard = ({
  number,
  title,
  description,
  icon,
}: ScienceCardProps) => (
  <Card className="bg-white border-blue-100 shadow-md relative z-10">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
          {number}
        </div>
        <CardTitle className="flex items-center gap-2">
          <Icon name={icon} className="text-blue-600" />
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export const ScienceSection = () => {
  const sciencePoints = [
    {
      title: "Пьезоэлектрический эффект",
      icon: "Zap",
      description:
        "Открытие пьезоэлектрического эффекта в костях (1957, Ивао Ясуда): Кости генерируют электрический сигнал при механическом давлении, стимулируя регенерацию.",
    },
    {
      title: "Закон Вольфа",
      icon: "Scale",
      description:
        "Кости укрепляются при механической нагрузке, в 15 раз превышающей вес тела, активируется рост костной ткани, а также происходит выделение гормонов, регулирующих метаболизм.",
    },
    {
      title: "Практическое применение",
      icon: "Flask",
      description:
        "Практическое применение в США с 1997 г: Институты Harvard, Emory и др., создали фитнес-программы и тренажеры, доказав эффективность укрепления костной ткани.",
    },
  ];

  const principlesLeft = [
    "Формирует точечно направленную весовую нагрузку на осевой̆ скелет",
    "Передаёт усилие в кость, минуя суставы и поверхностные мышцы",
    "Включает в работу глубокие стабилизирующие цепи тела",
  ];

  const principlesRight = [
    "Происходит выделение новых клеток, коллагена",
    "Запускается мобилизация гормональной и нервной регуляции",
    "Активируются естественные процессы регенерации тканей",
  ];

  return (
    <section
      id="science"
      className="py-16 bg-gradient-to-b from-white to-blue-50 relative"
    >
      {/* Медицинский/научный фон */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMTB2MmgtOHYxNnptLTQtNGgtMnYtOWg4djJoLTZ2N3ptMi0xMWgtMlY4aDh2MmgtNnY1eiIvPjxwYXRoIGQ9Ik0yMCAxOGgtMlYyaDEwdjJoLTh2MTR6bS00LTRoLTJ2LTloOHYyaC02djd6bTItMTFoLTJWMGg4djJoLTZ2MXpNMzYgMzRoLTJWMTZoMTB2MmgtOHYxNnptLTQtNGgtMnYtOWg4djJoLTZ2N3ptMi0xMWgtMlY4aDh2MmgtNnY1eiIvPjxwYXRoIGQ9Ik0yMCAxOGgtMlYyaDEwdjJoLTh2MTR6bS00LTRoLTJ2LTloOHYyaC02djd6bTItMTFoLTJWMGg4djJoLTZ2MXpNNTYgMzRoLTJWMTZoMTB2MmgtOHYxNnptLTQtNGgtMnYtOWg4djJoLTZ2N3ptMi0xMWgtMlY4aDh2MmgtNnY1eiIvPjxwYXRoIGQ9Ik00MCAxOGgtMlYyaDEwdjJoLTh2MTR6bS00LTRoLTJ2LTloOHYyaC02djd6bTItMTFoLTJWMGg4djJoLTZ2MXoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            <Icon name="Microscope" className="h-4 w-4" />
            Подтверждено исследованиями
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Научное обоснование
          </h2>
          <p className="text-lg text-gray-600">
            Наша методика основана на серьезных научных открытиях и
            исследованиях
          </p>
        </div>

        {/* Стилизованная научная схема */}
        <div className="relative">
          {/* Медицинский фон */}
          <div className="absolute inset-0 -z-10">
            <svg width="100%" height="100%" viewBox="0 0 800 300">
              {/* Научная сетка */}
              <pattern
                id="grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 30 0 L 0 0 0 30"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.3"
                  opacity="0.2"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Градиент для линии процесса */}
              <linearGradient
                id="processLine"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>

              {/* Линия процесса */}
              <line
                x1="50"
                y1="50"
                x2="750"
                y2="50"
                stroke="url(#processLine)"
                strokeWidth="4"
                strokeDasharray="0"
              />

              {/* Точки на процессе */}
              <circle cx="150" cy="50" r="12" fill="#3b82f6" />
              <circle cx="400" cy="50" r="12" fill="#8b5cf6" />
              <circle cx="650" cy="50" r="12" fill="#3b82f6" />

              {/* Номера в точках */}
              <text
                x="150"
                y="54"
                textAnchor="middle"
                fill="white"
                fontWeight="bold"
                fontSize="12"
              >
                1
              </text>
              <text
                x="400"
                y="54"
                textAnchor="middle"
                fill="white"
                fontWeight="bold"
                fontSize="12"
              >
                2
              </text>
              <text
                x="650"
                y="54"
                textAnchor="middle"
                fill="white"
                fontWeight="bold"
                fontSize="12"
              >
                3
              </text>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {sciencePoints.map((point, index) => (
            <ScienceCard
              key={index}
              number={index + 1}
              title={point.title}
              icon={point.icon}
              description={point.description}
            />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg border border-blue-100 shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="Cog" className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">
                Принцип воздействия тренажёра «Ось Жизни»
              </h3>
            </div>
          </div>

          {/* Принцип работы тренажера с фото */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Фотография тренажера */}
              <div className="md:w-1/3 bg-blue-50 rounded-lg flex items-center justify-center p-4 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/2629f2ea-4800-4572-aa3b-b83611ecb88a.png"
                  alt="Тренажер Ось Жизни"
                  className="max-w-full h-auto object-contain max-h-64"
                />
              </div>

              {/* Схема принципа работы */}
              <div className="md:w-2/3 flex flex-col">
                <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-800">
                    <Icon name="Target" className="h-5 w-5" />
                    Ключевой механизм действия
                  </h4>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <div className="flex-1 bg-white p-3 rounded shadow-sm min-w-[250px] border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                          1
                        </div>
                        <h5 className="font-medium">Механическое давление</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        Точечно направленная нагрузка на осевой скелет
                        активирует пьезоэлектрический эффект
                      </p>
                    </div>

                    <div className="flex-1 bg-white p-3 rounded shadow-sm min-w-[250px] border-l-4 border-purple-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                          2
                        </div>
                        <h5 className="font-medium">Биологический отклик</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        Кости и ткани генерируют электрический сигнал,
                        запускающий процессы регенерации
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-3 flex items-center gap-2">
                      <Icon name="ArrowDownToLine" className="h-5 w-5" />
                      Механизм действия
                    </h4>
                    <ul className="space-y-2">
                      {principlesLeft.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600 font-medium text-xs">
                            {index + 1}
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-900 mb-3 flex items-center gap-2">
                      <Icon name="BarChart" className="h-5 w-5" />
                      Физиологический результат
                    </h4>
                    <ul className="space-y-2">
                      {principlesRight.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm"
                        >
                          <div className="w-6 h-6 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 font-medium text-xs">
                            {index + 1}
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
