import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface BenefitItemProps {
  icon: string;
  title: string;
  desc: string;
  checked?: boolean;
}

const BenefitItem = ({
  icon,
  title,
  desc,
  checked = true,
}: BenefitItemProps) => (
  <div
    className={cn(
      "flex items-start gap-4 p-4 rounded-lg transition-all",
      "bg-white border border-gray-100 shadow-sm hover:shadow-md",
      checked ? "border-l-4 border-l-green-500" : "",
    )}
  >
    <div className="flex-shrink-0">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
        <Icon name={icon} className="h-6 w-6 text-purple-600" />
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        {checked && (
          <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center">
            <Icon name="Check" className="h-4 w-4 text-green-600" />
          </div>
        )}
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Zap",
      title: "Перезагрузка нервной системы",
      desc: "Расслабление и мгновенный прилив сил",
    },
    {
      icon: "Brain",
      title: "Улучшение работы мозга",
      desc: "Быстрая активация всех отделов мозга",
    },
    {
      icon: "Mail",
      title: "Улучшение связей организма",
      desc: "Восстановление передачи сигналов",
    },
    {
      icon: "ArrowUp",
      title: "Повышение концентрации",
      desc: "Ясное мышление, лучше запоминание",
    },
    {
      icon: "Smartphone",
      title: "Снижение чувствительности",
      desc: "Уменьшение или исчезновение болей",
    },
    {
      icon: "ShieldCheck",
      title: "Мышечная релаксация",
      desc: "Разрушение мышечных блоков",
    },
    {
      icon: "Pilcrow",
      title: "Коррекция позвоночника",
      desc: "Расслабление мышц и коррекция осанки",
    },
    {
      icon: "Moon",
      title: "Улучшение сна",
      desc: "Глубокий сон и лёгкое пробуждение",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            <Icon name="CheckCircle" className="h-4 w-4" />
            Эффективность с первого занятия
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            1 занятие даст вам
          </h2>
          <p className="text-lg text-gray-600">
            Уже после первого сеанса на тренажере «Ось Жизни» вы почувствуете
            эти изменения
          </p>
        </div>

        {/* Медицинский чек-лист */}
        <div className="mb-10 p-5 bg-blue-50 rounded-xl border border-blue-100 shadow-sm max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
              <Icon name="Clipboard" className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Форма №OZ-1
                </div>
                <h3 className="font-bold text-xl">ЛИСТ РЕЗУЛЬТАТИВНОСТИ</h3>
              </div>
              <div className="ml-auto bg-blue-100 px-3 py-1 rounded text-blue-800 text-sm font-medium">
                1 сеанс
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.slice(0, benefits.length / 2).map((item, index) => (
                <BenefitItem key={index} {...item} />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              {benefits.slice(benefits.length / 2).map((item, index) => (
                <BenefitItem key={index + benefits.length / 2} {...item} />
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span className="font-medium">Примечание врача:</span> Стойкий
                терапевтический эффект с первого сеанса. Рекомендуется полный
                курс для закрепления.
              </div>
              <div className="flex-shrink-0 flex items-center gap-2">
                <Icon name="FileCheck" className="h-5 w-5 text-green-600" />
                <span className="text-green-600 font-medium">ПОДТВЕРЖДЕНО</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
