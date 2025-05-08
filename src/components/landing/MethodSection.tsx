
import Icon from "@/components/ui/icon";

export const MethodSection = () => {
  const features = [
    "Адаптивная гимнастика на тренажёре «Ось Жизни» — революционный способ укрепления костей и суставов.",
    "Запуск естественного омоложения: за 45 минут, 1 раз в неделю, под контролем специалиста.",
    "Результаты с первого занятия: улучшение осанки, исчезновение болей, повышение плотности костей.",
    "Безопасно для любого возраста и уровня подготовки — научно доказано, подтверждено исследованиями Harvard, Emory, 100+ публикаций.",
    "Без лекарств, операций и побочных эффектов — только ваши внутренние ресурсы!",
  ];

  const authorCredentials = [
    "Мастер-тренер с 30-летним опытом в оздоровительных практиках",
    "Профессиональный спортсмен с высшим тренерским образованием",
    "Трижды чемпион страны, МС по гребле, чемпион по паурлифтингу, 1 дан кекусинкай карате.",
  ];

  return (
    <section id="method" className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://cdn.poehali.dev/files/996e86a4-180c-49a1-9fbe-d22060d38540.jpeg"
              alt="Вячеслав Ан - автор методики"
              className="rounded-lg shadow-xl max-w-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Что такое гимнастика и тренажер «Ось Жизни»</h2>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="shrink-0 mt-1 text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-xl">Вячеслав Ан</h3>
                  <p className="text-gray-600">автор АФГ гимнастики и тренажера «Ось Жизни»</p>
                </div>
              </div>
              <ul className="space-y-2">
                {authorCredentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon name="Medal" className="shrink-0 mt-1 text-yellow-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
