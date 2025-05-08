import React from "react";
import Icon from "@/components/ui/icon";

// Компонент для отображения симптомов
const SymptomItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
    <Icon name="AlertCircle" className="shrink-0 mt-1 text-orange-500" />
    <span className="font-medium">{children}</span>
  </li>
);

// Компонент для отображения проблем с лечением
const TreatmentItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow">
    <Icon name="Slash" className="shrink-0 mt-1 text-red-500" />
    <span className="font-medium">{children}</span>
  </li>
);

// Компонент для сравнения методов лечения
const TreatmentComparison = () => (
  <div className="grid grid-cols-2 gap-2">
    <div className="bg-red-50 p-3 rounded-lg">
      <div className="font-medium text-center mb-2 text-red-800">
        Традиционные методы
      </div>
      <ul className="space-y-1 text-sm">
        <li className="flex items-center gap-1">
          <Icon name="Clock" className="h-3 w-3 text-red-500" />
          <span>Длительное лечение</span>
        </li>
        <li className="flex items-center gap-1">
          <Icon name="DollarSign" className="h-3 w-3 text-red-500" />
          <span>Высокая стоимость</span>
        </li>
        <li className="flex items-center gap-1">
          <Icon name="AlertTriangle" className="h-3 w-3 text-red-500" />
          <span>Побочные эффекты</span>
        </li>
        <li className="flex items-center gap-1">
          <Icon name="Repeat" className="h-3 w-3 text-red-500" />
          <span>Временный эффект</span>
        </li>
      </ul>
    </div>
    <div className="bg-green-50 p-3 rounded-lg">
      <div className="font-medium text-center mb-2 text-green-800">
        Ось Жизни
      </div>
      <ul className="space-y-1 text-sm">
        <li className="flex items-center gap-1">
          <Icon name="Clock" className="h-3 w-3 text-green-500" />
          <span>45 минут в неделю</span>
        </li>
        <li className="flex items-center gap-1">
          <Icon name="Check" className="h-3 w-3 text-green-500" />
          <span>Доступная цена</span>
        </li>
        <li className="flex items-center gap-1">
          <Icon name="Shield" className="h-3 w-3 text-green-500" />
          <span>Без побочных эффектов</span>
        </li>
        <li className="flex items-center gap-1">
          <Icon name="ThumbsUp" className="h-3 w-3 text-green-500" />
          <span>Длительный результат</span>
        </li>
      </ul>
    </div>
  </div>
);

// Компонент для анатомической иллюстрации
const AnatomyIllustration = () => (
  <div className="mt-6 bg-white p-4 rounded-lg border border-blue-100">
    <div className="relative w-full flex items-center justify-center bg-blue-50/50 rounded-md overflow-hidden">
      <img
        src="https://cdn.poehali.dev/files/dbf6aece-e163-4f03-be32-c724769ec279.png"
        alt="Области хронических болей"
        className="w-full max-w-md h-auto"
      />
      <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm p-1.5 rounded text-xs text-blue-800 border border-blue-200 shadow-sm">
        Области хронических болей
      </div>
    </div>
  </div>
);

// Компонент для блока решения проблем
const SolutionBlock = () => (
  <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-orange-100 rounded-lg border border-purple-200">
    <div className="flex items-center gap-3 mb-2">
      <Icon name="Lightbulb" className="shrink-0 h-8 w-8 text-purple-600" />
      <h3 className="font-semibold text-xl">Мы знаем решение!</h3>
    </div>
    <p className="font-medium text-gray-800">
      Мы знаем, как вновь сделать вас молодыми, энергичными и активными, за одну
      программу, опираясь лишь на научные открытия скрытых ресурсов вашего тела!
    </p>
  </div>
);

// Главный компонент для раздела проблем
export const ProblemsSection = () => {
  // Данные для разделов
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
    <section id="problems" className="py-16 bg-white">
      <div className="container max-w-6xl">
        <SectionHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SymptomsSection symptoms={symptoms} />
          <TreatmentsSection treatments={treatments} />
        </div>
      </div>
    </section>
  );
};

// Компонент заголовка секции
const SectionHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Узнаете себя?</h2>
    <p className="text-lg text-gray-600">
      Эти симптомы могут сигнализировать о проблемах с позвоночником, суставами
      и нервной системой
    </p>
  </div>
);

// Компонент для секции симптомов
const SymptomsSection = ({ symptoms }: { symptoms: string[] }) => (
  <div className="space-y-4 bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <Icon name="Activity" className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold">Распространенные симптомы</h3>
    </div>

    <ul className="space-y-3">
      {symptoms.map((item, index) => (
        <SymptomItem key={index}>{item}</SymptomItem>
      ))}
    </ul>

    <AnatomyIllustration />
  </div>
);

// Компонент для секции лечения
const TreatmentsSection = ({ treatments }: { treatments: string[] }) => (
  <div className="space-y-4 bg-red-50 p-6 rounded-lg border border-red-100 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
        <Icon name="XCircle" className="h-6 w-6 text-red-600" />
      </div>
      <h3 className="text-2xl font-bold">Что вы уже пробовали?</h3>
    </div>

    <ul className="space-y-3">
      {treatments.map((item, index) => (
        <TreatmentItem key={index}>{item}</TreatmentItem>
      ))}
    </ul>

    {/* Схема сравнения методов */}
    <div className="mt-6 bg-white p-4 rounded-lg border border-red-100">
      <h4 className="font-semibold mb-2 text-center">
        Традиционные методы vs Ось Жизни
      </h4>
      <TreatmentComparison />
    </div>

    <SolutionBlock />
  </div>
);

export default ProblemsSection;
