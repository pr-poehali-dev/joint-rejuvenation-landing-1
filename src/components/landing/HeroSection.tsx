import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-12">
          <div className="max-w-4xl space-y-6">
            {/* Бейдж */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm">
              <Icon name="Heart" size={16} className="text-blue-600" />
              Революционная методика оздоровления
            </div>

            {/* Основной заголовок */}
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Природное</span>
              <br />
              <span className="text-gray-900">омоложение</span>
              <br />
              <span className="text-gray-900">суставов и</span>
              <br />
              <span className="text-gray-900">позвоночника</span>{" "}
              <span className="text-blue-600">без</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                лекарств
              </span>
            </h1>

            {/* Описание */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Адаптивно функциональная гимнастика на запатентованном тренажёре
              «Ось Жизни» — ваш короткий путь к омоложению и источнику энергии
              молодости
            </p>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-xl"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на первое занятие
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 px-8 py-4 text-lg rounded-xl hover:bg-gray-50"
              >
                <Icon name="Info" className="mr-2" size={20} />
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>

          {/* Правая часть с фото специалиста */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/a08764a1-cf06-4b8e-8065-7870d2c5268a.png"
                alt="Вячеслав Ан - специалист физической реабилитации"
                className="w-full max-w-lg ml-auto"
              />

              {/* Карточка специалиста */}
              <div className="absolute bottom-8 right-8 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Icon name="User" size={24} className="text-blue-200" />
                  <div>
                    <div className="font-semibold text-lg">Вячеслав Ан</div>
                    <div className="text-blue-200 text-sm">
                      специалист физической реабилитации
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full opacity-20 blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
