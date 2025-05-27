import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const submitToGoogleForm = async (
  data: { name: string; phone: string },
  formUrl: string,
) => {
  const formData = new FormData();
  formData.append("entry.YOUR_NAME_ENTRY_ID", data.name);
  formData.append("entry.YOUR_PHONE_ENTRY_ID", data.phone);

  try {
    await fetch(formUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await submitToGoogleForm(
      formData,
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
    );

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", phone: "" });
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Преобразите свою жизнь с помощью науки
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Научно обоснованные методы для достижения ваших целей и создания устойчивых позитивных изменений
            </p>
            
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <h3 className="text-lg font-semibold mb-4">Получите бесплатную консультацию</h3>
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Icon name="Loader2" className="animate-spin mr-2" size={16} />
                  ) : null}
                  {isSubmitting ? "Отправка..." : "Получить консультацию"}
                </Button>
                {isSubmitted && (
                  <p className="text-green-600 text-center">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
                )}
              </div>
            </form>
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
    </section>
  );
};
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
          </div>
          {/* Декоративные элементы фона */}
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full -z-10 opacity-70 blur-lg"></div>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full -z-10 opacity-70 blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
