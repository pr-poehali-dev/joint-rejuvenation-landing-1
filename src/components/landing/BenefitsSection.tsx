
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BenefitItemProps {
  icon: string;
  title: string;
  desc: string;
}

const BenefitItem = ({ icon, title, desc }: BenefitItemProps) => (
  <Card className="border-0 shadow-lg bg-white hover-scale">
    <CardHeader className="text-center pb-2">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
        <Icon name={icon} className="h-6 w-6 text-purple-600" />
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-center text-gray-600">
      <p>{desc}</p>
    </CardContent>
  </Card>
);

export const BenefitsSection = () => {
  const benefits = [
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
  ];

  return (
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
          {benefits.map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
