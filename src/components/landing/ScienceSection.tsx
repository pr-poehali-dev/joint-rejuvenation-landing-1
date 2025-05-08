
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ScienceCardProps {
  number: number;
  title: string;
  description: string;
}

const ScienceCard = ({ number, title, description }: ScienceCardProps) => (
  <Card className="bg-white border shadow-md">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-900 font-bold">{number}</div>
        {title}
      </CardTitle>
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
      description: "Открытие пьезоэлектрического эффекта в костях (1957, Ивао Ясуда): Кости генерируют электрический сигнал при механическом давлении, стимулируя регенерацию."
    },
    {
      title: "Закон Вольфа",
      description: "Кости укрепляются при механической нагрузке, в 15 раз превышающей вес тела, активируется рост костной ткани, а также происходит выделение гормонов, регулирующих метаболизм."
    },
    {
      title: "Практическое применение",
      description: "Практическое применение в США с 1997 г: Институты Harvard, Emory и др., создали фитнес-программы и тренажеры, доказав эффективность укрепления костной ткани."
    }
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
    <section id="science" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Научное обоснование</h2>
          <p className="text-lg text-gray-600">
            Наша методика основана на серьезных научных открытиях и исследованиях
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sciencePoints.map((point, index) => (
            <ScienceCard 
              key={index}
              number={index + 1}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg border shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Принцип воздействия тренажёра «Ось Жизни»</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-2">
              {principlesLeft.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="ArrowRight" className="shrink-0 mt-1 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {principlesRight.map((item, index) => (
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
  );
};
