import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 -z-10" />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(249, 115, 22, 0.15) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      />
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              <Icon name="Award" className="h-4 w-4" />
              Революционная методика оздоровления
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Природное омоложение суставов и позвоночника{` `}
              <span className="text-gradient bg-gradient-to-r from-blue-700 via-purple-500 to-orange-500">
                без лекарств
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Адаптивно функциональная гимнастика на запатентованном тренажёре
              «Ось Жизни» — ваш короткий путь к омоложению и источнику энергии
              молодости
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a href="#contact">
                  <Icon name="CalendarCheck" className="mr-2" />
                  Записаться на первое занятие
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#method">
                  <Icon name="Info" className="mr-2" />
                  Узнать подробнее
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative aspect-square max-w-lg">
            {/* Фотография тренера вместо тренажера */}
            <div className="relative z-10">
              <img
                src="https://cdn.poehali.dev/files/e074d577-d9d6-4c6f-a868-d6d1a27e3a87.jpeg"
                alt="Вячеслав Ан - автор методики Ось Жизни"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>

            {/* Информационные указатели */}
            <div className="absolute top-10 right-0 bg-white/80 backdrop-blur shadow-md rounded-lg p-3 text-sm border border-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon name="Award" className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold">Автор методики</p>
                  <p className="text-xs text-gray-600">Вячеслав Ан</p>
                </div>
              </div>
            </div>

            {/* Достижения тренера */}
            <div className="absolute bottom-10 right-0 bg-white/80 backdrop-blur shadow-md rounded-lg p-3 text-sm border border-blue-100 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Medal" className="h-5 w-5 text-yellow-500" />
                <p className="font-semibold">Достижения автора:</p>
              </div>
              <ul className="space-y-1 text-xs">
                <li className="flex items-start gap-1">
                  <Icon
                    name="Check"
                    className="h-3 w-3 text-green-500 mt-0.5"
                  />
                  <span>30+ лет опыта в оздоровительных практиках</span>
                </li>
                <li className="flex items-start gap-1">
                  <Icon
                    name="Check"
                    className="h-3 w-3 text-green-500 mt-0.5"
                  />
                  <span>Трёхкратный чемпион страны, МС по гребле</span>
                </li>
                <li className="flex items-start gap-1">
                  <Icon
                    name="Check"
                    className="h-3 w-3 text-green-500 mt-0.5"
                  />
                  <span>Чемпион по паурлифтингу, 1 дан кекусинкай карате</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
