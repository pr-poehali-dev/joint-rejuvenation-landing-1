
import Icon from "@/components/ui/icon";

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Не маскировка симптомов",
      description: "Это не временное исправление положения — это раскрытие внутреннего потенциала вашего тела",
      icon: "Ban",
    },
    {
      title: "Не лечение",
      description: "А пробуждение врожденного иммунитета, быстро, безопасно и навсегда",
      icon: "ThumbsUp",
    },
    {
      title: "Гарантированный результат",
      description: "Без болезненных процедур и долгого восстановления",
      icon: "Medal",
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 relative">
          {/* Фоновое изображение счастливых людей */}
          <div className="absolute inset-0 opacity-15 mix-blend-overlay">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566120122163-4253642ba4a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center"></div>
          </div>
          
          <div className="relative z-10 px-6 py-8 text-white">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Почему наш метод выбирают 1000+ клиентов
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
              {reasons.map((reason, index) => (
                <div key={index} className="flex-1 flex flex-col items-center text-center bg-white/10 backdrop-blur rounded-lg p-6 shadow">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-4">
                    <Icon name={reason.icon} className="h-10 w-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-white/90">{reason.description}</p>
                </div>
              ))}
            </div>
            
            {/* Клиентский успех - фотогалерея */}
            <div className="mt-10 pt-6 border-t border-white/20">
              <h3 className="text-xl font-semibold mb-4 text-center">Наши счастливые клиенты</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
                    <img 
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i + 10}.jpg`} 
                      alt={`Клиент ${i+1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Статистика */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full flex items-center gap-2">
                  <Icon name="Heart" className="text-red-300" />
                  <span className="font-semibold">97% довольных клиентов</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full flex items-center gap-2">
                  <Icon name="Clock" className="text-yellow-300" />
                  <span className="font-semibold">Более 5 лет на рынке</span>
                </div>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-full flex items-center gap-2">
                  <Icon name="Users" className="text-blue-300" />
                  <span className="font-semibold">1000+ клиентов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
