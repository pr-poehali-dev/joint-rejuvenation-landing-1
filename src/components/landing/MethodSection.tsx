import Icon from "@/components/ui/icon";

export const MethodSection = () => {
  const features = [
    "Революционный способ укрепления суставов и костей",
    "Запуск естественного омоложения за 45 минут",
    "С одного занятия результат: улучшение осанки, исчезновение болей",
    "Научно доказано, подтверждено Harvard, Emory",
    "Без лекарств, операций - только ваш внутренний ресурс",
  ];

  return (
    <section id="method" className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            {/* Фотография тренера с интегрированной информацией */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://cdn.poehali.dev/files/996e86a4-180c-49a1-9fbe-d22060d38540.jpeg"
                alt="Вячеслав Ан - автор методики"
                className="w-full h-auto object-cover rounded-lg"
              />

              {/* Полупрозрачный градиентный оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Информация об авторе внутри фото */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-2xl mb-1">Вячеслав Ан</h3>
                <p className="text-white/80 mb-3">
                  Автор АФГ гимнастики и тренажера «Ось Жизни»
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-sm">
                    <Icon
                      name="Medal"
                      className="shrink-0 mt-0.5 text-yellow-400 h-4 w-4"
                    />
                    <span className="text-white/90">
                      30+ лет опыта в оздоровительных практиках
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon
                      name="Medal"
                      className="shrink-0 mt-0.5 text-yellow-400 h-4 w-4"
                    />
                    <span className="text-white/90">
                      Трёхкратный чемпион страны, МС по гребле
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Icon
                      name="Medal"
                      className="shrink-0 mt-0.5 text-yellow-400 h-4 w-4"
                    />
                    <span className="text-white/90">
                      Чемпион по паурлифтингу, 1 дан кекусинкай карате
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Декоративные элементы вокруг фото */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-full -z-10 opacity-70"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-200 rounded-full -z-10 opacity-70"></div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              <Icon name="Info" className="h-4 w-4" />О методике
            </div>
            <h2 className="text-3xl font-bold">
              Что такое гимнастика и тренажер «Ось Жизни»
            </h2>

            {/* Конденсированный список преимуществ */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Icon name="CheckCircle" className="text-green-600" />
                <span>Ключевые преимущества</span>
              </h3>
              <ul className="space-y-2">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 bg-white p-3 rounded shadow-sm"
                  >
                    <Icon
                      name="ArrowRight"
                      className="shrink-0 mt-1 text-blue-600"
                    />
                    <p className="text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Сравнительная таблица рядом с преимуществами */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
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
