
import { Button } from "@/components/ui/button";

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
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              Революционная методика оздоровления
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Природное омоложение суставов и позвоночника{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-700 via-purple-500 to-orange-500">
                без лекарств
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Адаптивно функциональная гимнастика на запатентованном тренажёре «Ось Жизни» —
              ваш короткий путь к омоложению и источнику энергии молодости
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href="#contact">Записаться на первое занятие</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#method">Узнать подробнее</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative aspect-square max-w-lg">
            <img
              src="https://cdn.poehali.dev/files/2629f2ea-4800-4572-aa3b-b83611ecb88a.png"
              alt="Тренажер Ось Жизни"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
