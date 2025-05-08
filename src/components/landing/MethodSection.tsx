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
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/files/996e86a4-180c-49a1-9fbe-d22060d38540.jpeg"
              alt="Вячеслав Ан - автор методики"
              className="rounded-lg shadow-xl max-w-full relative z-10"
            />
            {/* Декоративные элементы вокруг фото */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full -z-0 opacity-70"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full -z-0 opacity-70"></div>

            {/* Блок с информацией об авторе */}
            <div className="absolute -bottom-5 -right-5 bg-white shadow-lg rounded-lg p-4 max-w-xs z-20 border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon name="User" className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Вячеслав Ан</h3>
                  <p className="text-sm text-gray-600">
                    автор АФГ гимнастики и тренажера «Ось Жизни»
                  </p>
                </div>
              </div>
              <ul className="space-y-2">
                {authorCredentials.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Icon
                      name="Medal"
                      className="shrink-0 mt-1 text-yellow-500 h-4 w-4"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              <Icon name="Info" className="h-4 w-4" />О методике
            </div>
            <h2 className="text-3xl font-bold">
              Что такое гимнастика и тренажер «Ось Жизни»
            </h2>

            {/* Схема преимуществ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                  <Icon name="Clock" className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">Быстро</h3>
                <p className="text-center text-sm">
                  Всего 45 минут 1 раз в неделю
                </p>
              </div>
              <div className="flex flex-col items-center bg-green-50 p-4 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                  <Icon name="ShieldCheck" className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-1">Безопасно</h3>
                <p className="text-center text-sm">
                  Для любого возраста и подготовки
                </p>
              </div>
            </div>

            <ul className="space-y-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon
                    name="CheckCircle"
                    className="shrink-0 mt-1 text-green-500"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Диаграмма эффективности */}
            <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="font-semibold mb-3 text-center">
                Эффективность методики
              </h3>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Обычные упражнения</span>
                    <span>30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-500 h-2 rounded-full"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Медикаментозное лечение</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-medium">
                    <span>АФГ «Ось Жизни»</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
