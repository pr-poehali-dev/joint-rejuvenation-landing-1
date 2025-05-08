
import Icon from "@/components/ui/icon";

export const ProblemsSection = () => {
  const symptoms = [
    "Постоянная усталость и сонливость",
    "Боли в суставах, спине, шее",
    "Потеря гибкости и мелкой моторики",
    "Ломота в костях и остеопороз",
    "Стресс, раздражительность, апатия",
    "Сколиоз, искривления позвоночного столба",
  ];

  const treatments = [
    "Массажи, йога, медитации — без результата",
    "Операции, уколы, гормоны — дорого и опасно",
    "Блокады, таблетки, приборы — временно снимают симптомы",
    "БАДы, иголки, колдуны – боль возвращается",
  ];

  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Узнаете себя?</h2>
          <p className="text-lg text-gray-600">
            Эти симптомы могут сигнализировать о проблемах с позвоночником, суставами и нервной системой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Распространенные симптомы</h3>
            <ul className="space-y-3">
              {symptoms.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="AlertCircle" className="shrink-0 mt-1 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Что вы уже пробовали?</h3>
            <ul className="space-y-3">
              {treatments.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="XCircle" className="shrink-0 mt-1 text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg border border-purple-100">
              <p className="font-medium text-lg">
                Мы знаем, как вновь сделать вас молодыми, энергичными и активными, за одну программу, опираясь лишь на научные открытия скрытых ресурсов вашего тела!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
