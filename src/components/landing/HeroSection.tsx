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
            {/* Тренажер с выделенными узлами */}
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/files/2629f2ea-4800-4572-aa3b-b83611ecb88a.png"
                alt="Тренажер Ось Жизни"
                className="w-full h-full object-contain relative z-10"
              />
              {/* Акценты на основных узлах */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-blue-500/20 animate-pulse -z-0" />
              <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full bg-purple-500/20 animate-pulse delay-150 -z-0" />
              <div className="absolute bottom-1/3 right-1/4 w-14 h-14 rounded-full bg-orange-500/20 animate-pulse delay-300 -z-0" />

              {/* Информационные указатели */}
              <div className="absolute top-1/5 right-0 bg-white/80 backdrop-blur shadow-md rounded-lg p-2 text-sm border border-blue-100">
                <p className="font-medium">Запатентованная технология</p>
                <p className="text-xs text-gray-600">
                  Уникальная механика движения
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
