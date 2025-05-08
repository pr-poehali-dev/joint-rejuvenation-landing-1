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
  <Card className="bg-white border shadow-md hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold">
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
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container max-w-6xl">
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
        {/* Визуальная схема научного подхода */}
        <div className="relative h-16 mb-10 hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-1 w-full bg-gray-200 relative">
              <div className="absolute left-0 right-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-1/3 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm z-10">
              1
            </div>
          </div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm z-10">
              2
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm z-10">
              3
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <div className="mt-12 bg-white rounded-lg border shadow-md p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Icon name="Cog" className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">
              Принцип воздействия тренажёра «Ось Жизни»
            </h3>
          </div>
          {/* Схема принципа работы */}
          <div className="mb-8">
            <div className="relative p-4 bg-blue-50 rounded-lg overflow-hidden">
              <img
                src="https://cdn.poehali.dev/files/2629f2ea-4800-4572-aa3b-b83611ecb88a.png"
                alt="Схема тренажера"
                className="h-40 object-contain mx-auto opacity-10"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                  <Icon name="Bone" className="h-8 w-8 text-blue-600" />
                </div>
                <div className="grid grid-cols-2 gap-8 mt-8 w-full max-w-lg">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto bg-blue-100 rounded-full mb-2 flex items-center justify-center">
                      <Icon
                        name="ArrowDown"
                        className="h-5 w-5 text-blue-600"
                      />
                    </div>
                    <p className="text-sm font-medium">Механическое давление</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto bg-purple-100 rounded-full mb-2 flex items-center justify-center">
                      <Icon name="Zap" className="h-5 w-5 text-purple-600" />
                    </div>
                    <p className="text-sm font-medium">
                      Пьезоэлектрический эффект
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <Icon
                      name="ArrowRight"
                      className="shrink-0 mt-1 text-blue-600"
                    />
                    <span>{item}</span>
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
                    <Icon
                      name="ArrowRight"
                      className="shrink-0 mt-1 text-purple-600"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
