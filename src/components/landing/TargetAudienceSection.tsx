
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AudienceCardProps {
  icon: string;
  title: string;
  desc: string;
}

const AudienceCard = ({ icon, title, desc }: AudienceCardProps) => (
  <Card className="border bg-white/80 backdrop-blur">
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2">
        <Icon name={icon} className="text-blue-600" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{desc}</p>
    </CardContent>
  </Card>
);

export const TargetAudienceSection = () => {
  const audienceGroups = [
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
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Кому и когда нужно?</h2>
          <p className="text-lg text-gray-600">
            Наша методика эффективна для широкого круга людей
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceGroups.map((item, index) => (
            <AudienceCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
