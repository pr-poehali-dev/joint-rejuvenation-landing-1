import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Преобразите свою жизнь с помощью науки
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Научно обоснованные методы для достижения ваших целей и создания
              устойчивых позитивных изменений
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-3">
                Начать изменения
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Научный подход к изменениям"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* Декоративные элементы фона */}
      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full -z-10 opacity-70 blur-lg"></div>
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full -z-10 opacity-70 blur-md"></div>
    </section>
  );
};

export default HeroSection;
