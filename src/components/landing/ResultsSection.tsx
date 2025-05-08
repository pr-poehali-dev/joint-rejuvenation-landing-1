
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ResultCardProps {
  icon: string;
  title: string;
  desc: string;
}

const ResultCard = ({ icon, title, desc }: ResultCardProps) => (
  <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-white hover-scale">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-2">
        <Icon name={icon} className="text-purple-600" />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{desc}</p>
    </CardContent>
  </Card>
);

export const ResultsSection = () => {
  const results = [
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
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">У 92% занимающихся</h2>
          <p className="text-lg text-gray-600">
            Наши клиенты отмечают значительные улучшения в различных аспектах здоровья
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  );
};
