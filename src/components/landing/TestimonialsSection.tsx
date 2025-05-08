
import Icon from "@/components/ui/icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  comment: string;
  avatar?: string;
  initials?: string;
}

const TestimonialCard = ({
  name,
  role,
  comment,
  avatar,
  initials,
}: TestimonialProps) => {
  const nameInitials = initials || name.split(",")[0].charAt(0);

  return (
    <Card className="border bg-white hover:shadow-md transition-shadow relative">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full text-white flex items-center justify-center shadow-md">
        <Icon name="Star" className="h-6 w-6" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-14 w-14 bg-gradient-to-br from-blue-400 to-purple-500 text-white">
            {avatar ? <AvatarImage src={avatar} alt={name} /> : null}
            <AvatarFallback className="text-xl font-semibold">{nameInitials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </div>
        <CardDescription className="text-gray-800 text-lg font-medium italic relative">
          <Icon
            name="Quote"
            className="absolute -top-2 -left-1 h-6 w-6 text-blue-200 -z-0"
          />
          <span className="relative z-10">"{comment}"</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-end">
          <div className="flex text-yellow-400">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Icon key={i} name="Star" className="h-4 w-4" />
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const TestimonialsSection = () => {
  // Используем реалистичные аватары для каждого отзыва
  const testimonials = [
    {
      name: "Владимир, 62 года",
      role: "военный пенсионер",
      comment:
        "Я снова бегаю с внуком и сплю всю ночь без боли. Вы подарили мне вторую молодость!",
      avatar: "https://randomuser.me/api/portraits/men/72.jpg"
    },
    {
      name: "Дмитрий, 55 лет",
      role: "проектировщик",
      comment:
        "После первой тренировки улучшился сон, а после курса исправилась осанка, ушёл горб.",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      name: "Вера, 67 лет",
      role: "владелец сети ювелирных магазинов",
      comment:
        "За 3 занятия исчезла «холка», подтянулась кожа лица, а после программы прошли боли в кистях.",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg"
    },
    {
      name: "Юрий, 77 лет",
      role: "пенсионер, мастер цигун",
      comment:
        "После 1 занятия давление снизилось с 150/130 до 130/110, после полного курса ушла боль в шее, повысилась жизненная энергия.",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      name: "Вероника, 66 лет",
      role: "владелец юридической компании",
      comment:
        "Пройдя полный курс, у меня восстановилась чувствительность половины тела, которой не было уже полтора года после инсульта.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Светлана, 66 лет",
      role: "владелец гостиницы",
      comment:
        "После курса ушли трещины на пятках, выровнялся позвоночник, плечи, улучшился сон, появилась личная жизнь.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <div className="container max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 font-medium text-sm mb-4">
            <Icon name="Star" className="h-4 w-4" />
            Отзывы наших клиентов
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Реальные истории
          </h2>
          <p className="text-lg text-gray-600">
            Послушайте тех, кто уже испытал эффект от нашей методики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <p className="text-gray-700">положительных отзывов</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <p className="text-gray-700">довольных клиентов</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
            <p className="text-gray-700">улучшили здоровье</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-md">
            <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
            <p className="text-gray-700">забыли о болях</p>
          </div>
        </div>
      </div>
    </section>
  );
};
