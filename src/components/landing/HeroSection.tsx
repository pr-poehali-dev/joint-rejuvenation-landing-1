import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
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
            <p className="text-xl text-gray-600">
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
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative z-10 h-auto max-h-[80vh] w-auto">
              <img
                src="https://cdn.poehali.dev/files/fe55c1e4-216a-4dd2-9f59-f91f05c340e4.png"
                alt="Вячеслав Ан - автор методики Ось Жизни"
                className="h-auto max-h-[80vh] object-contain drop-shadow-2xl"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm shadow-lg rounded-lg px-4 py-3 text-sm border border-blue-400 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon name="User" className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-base">Вячеслав Ан</p>
                    <p className="text-white/90 text-xs">
                      специалист физической реабилитации
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full -z-10 opacity-70 blur-lg"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full -z-10 opacity-70 blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
