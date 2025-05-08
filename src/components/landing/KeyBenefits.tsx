
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BenefitCardProps {
  icon: string;
  title: string; 
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <Card className="bg-white/80 backdrop-blur border-blue-100 hover:shadow-md transition-shadow">
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2">
        <Icon name={icon} className="text-blue-600" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

export const KeyBenefits = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Быстрый результат",
      description: "Всего 45 минут, 1 раз в неделю и вы почувствуете изменения уже после первого занятия"
    },
    {
      icon: "Shield",
      title: "Безопасно для всех",
      description: "Методика безопасна для любого возраста и уровня подготовки, научно подтверждена"
    },
    {
      icon: "Leaf",
      title: "Без медикаментов",
      description: "Никаких лекарств, уколов и операций — только естественные ресурсы вашего организма"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 container max-w-6xl">
      {benefits.map((benefit, index) => (
        <BenefitCard 
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
};
