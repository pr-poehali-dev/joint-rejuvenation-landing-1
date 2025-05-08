
export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      icon: "Clipboard",
      title: "Индивидуальная программа",
      desc: "Упражнения подбираются под ваши цели и состояние",
    },
    {
      number: 2,
      icon: "Shield",
      title: "Тренировки под контролем",
      desc: "Только сертифицированные специалисты",
    },
    {
      number: 3,
      icon: "BarChart",
      title: "Мгновенная обратная связь",
      desc: "Результат можно измерить анализами",
    },
    {
      number: 4,
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

        {/* Визуальная процессная схема */}
        <div className="relative mb-16">
          {/* Линия процесса */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Круг с номером шага */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold mb-4 shadow-lg">
                  {step.number}
                </div>
                
                {/* Карточка с информацией */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center h-full w-full relative">
                  {/* Стрелка если не последний шаг */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-purple-100 rotate-45 border-t border-r border-purple-200 z-10"></div>
                  )}
                  
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      {step.icon === "Clipboard" && (
                        <>
                          <rect width="14" height="18" x="5" y="3" rx="2" />
                          <path d="M9 7h6" />
                          <path d="M9 11h6" />
                          <path d="M9 15h4" />
                        </>
                      )}
                      {step.icon === "Shield" && (
                        <>
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m9 12 2 2 4-4" />
                        </>
                      )}
                      {step.icon === "BarChart" && (
                        <>
                          <path d="M12 20V10" />
                          <path d="M18 20V4" />
                          <path d="M6 20v-4" />
                        </>
                      )}
                      {step.icon === "Target" && (
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                        </>
                      )}
                    </svg>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Дополнительные индикаторы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-4 rounded-lg border border-blue-100 shadow text-center">
            <div className="bg-blue-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                <path d="M7 2v20" />
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
              </svg>
            </div>
            <h4 className="font-medium mb-1">1 тренировка в неделю</h4>
            <p className="text-sm text-gray-600">45 минут под наблюдением тренера</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-100 shadow text-center">
            <div className="bg-purple-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                <path d="M17.5 19.5 12 21l-5.5-1.5" />
                <path d="M12 3v18" />
                <path d="M8 7.5 12 6l4 1.5" />
                <path d="M10 10.5 12 10l2 .5" />
                <path d="M8.5 14.5 12 13l3.5 1.5" />
              </svg>
            </div>
            <h4 className="font-medium mb-1">Индивидуальный план</h4>
            <p className="text-sm text-gray-600">С учетом вашего состояния здоровья</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-100 shadow text-center">
            <div className="bg-green-50 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h4 className="font-medium mb-1">Быстрый результат</h4>
            <p className="text-sm text-gray-600">Улучшения заметны после первого занятия</p>
          </div>
        </div>
      </div>
    </section>
  );
};
