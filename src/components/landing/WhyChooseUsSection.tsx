
export const WhyChooseUsSection = () => {
  const reasons = [
    {
      title: "Не маскировка симптомов",
      description: "Это не временное исправление положения — это раскрытие внутреннего потенциала вашего тела"
    },
    {
      title: "Не лечение",
      description: "А пробуждение врожденного иммунитета, быстро, безопасно и навсегда"
    },
    {
      title: "Гарантированный результат",
      description: "Без болезненных процедур и долгого восстановления"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl">
        <div className="px-6 py-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Почему наш метод выбирают 1000+ клиентов
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-white/90">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
