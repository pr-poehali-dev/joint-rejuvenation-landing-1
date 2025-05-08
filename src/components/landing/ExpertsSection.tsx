
import {
  Card,
} from "@/components/ui/card";

export const ExpertsSection = () => {
  const experts = [
    {
      image: "https://cdn.poehali.dev/files/7785be95-163e-4214-8362-ee630d812adb.png",
      name: "Виктор Алексеевич Ефимов",
      title: "Советский и российский партийный и государственный деятель, инженер-метролог, экономист и публицист. Кандидат технических наук, доктор экономических наук, профессор.",
      quote: "Автор серии книг: Концепция Общественной Безопасности, Концептуальная власть и десятки других книг в сфере экономики, политики, управления",
    },
    {
      image: "https://cdn.poehali.dev/files/8325f78d-8344-41d9-b9f2-e0d504706c47.png",
      name: "Борис Алексеевич Семенов",
      title: "Советский российский живописец, график, член Санкт-Петербургского Союза художников, представитель ленинградской школы живописи.",
      quote: "Академик Российской Академии естественных наук.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Нас рекомендуют</h2>
          <p className="text-lg text-gray-600">
            Профессионалы в различных областях оценили эффективность нашей методики
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experts.map((expert, index) => (
            <Card key={index} className="border bg-white flex flex-col md:flex-row overflow-hidden">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full md:w-1/3 object-cover object-center"
              />
              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold mb-1">{expert.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{expert.title}</p>
                <p className="italic">{expert.quote}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
