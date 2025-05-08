
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
}

const TestimonialCard = ({ name, role, comment }: TestimonialProps) => (
  <Card className="border bg-white">
    <CardHeader>
      <div className="flex items-center gap-2 mb-2">
        <Icon name="Quote" className="text-blue-500" />
      </div>
      <CardDescription className="text-gray-800 text-lg font-medium italic">
        "{comment}"
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <div className="flex text-yellow-400">
          {Array(5).fill(0).map((_, i) => (
            <Icon key={i} name="Star" />
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section id="reviews" className="py-20 bg-blue-50">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Реальные истории</h2>
          <p className="text-lg text-gray-600">
            Послушайте тех, кто уже испытал эффект от нашей методики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
