import Icon from "@/components/ui/icon";

export const SectionHeader = () => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium text-sm mb-4">
      <Icon name="Check" className="h-4 w-4" />
      Сделайте первый шаг к здоровью
    </div>
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Запись на тренировку за 3 недели
    </h2>
    <p className="text-lg text-gray-600">
      Запишитесь на первое занятие уже сегодня, потому как тренировки расписаны
      на 3 недели вперед!
    </p>
  </div>
);
