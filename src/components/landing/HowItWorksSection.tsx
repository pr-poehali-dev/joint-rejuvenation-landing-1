
export const HowItWorksSection = () => {
  const steps = [
    {
      icon: "Clipboard",
      title: "Индивидуальная программа",
      desc: "Упражнения подбираются под ваши цели и состояние",
    },
    {
      icon: "Shield",
      title: "Тренировки под контролем",
      desc: "Только сертифицированные специалисты",
    },
    {
      icon: "BarChart",
      title: "Мгновенная обратная связь",
      desc: "Результат можно измерить анализами",
    },
    {
      icon: "Target",
      title: "Комплексный эффект",
      desc: "Укрепляются все системы организма",
    },
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Как это работает?</h2>
          <p className="text-lg text-gray-600">
            Четкий процесс, который ведет к гарантированному результату
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 -z-10" />
              )}
              <div className="bg-white rounded-lg border p-6 text-center relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
