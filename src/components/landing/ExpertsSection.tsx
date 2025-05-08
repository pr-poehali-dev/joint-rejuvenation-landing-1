
import { Card } from "@/components/ui/card";

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

        <div className="space-y-8 max-w-4xl mx-auto">
          {experts.map((expert, index) => (
            <Card 
              key={index} 
              className="border overflow-hidden transition-shadow hover:shadow-lg bg-white"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 overflow-hidden bg-blue-50">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.2">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{expert.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{expert.title}</p>
                  <blockquote className="italic border-l-4 border-blue-500 pl-4 py-2 text-lg">
                    {expert.quote}
                  </blockquote>
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Рекомендует нашу методику</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
