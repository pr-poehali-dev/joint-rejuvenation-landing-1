import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export const BusinessOffer = () => (
  <div className="p-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg relative overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

    <div className="relative z-10 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 rounded-full p-2">
            <Icon name="Building" className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold">Предложение для бизнеса</h3>
        </div>
        <p className="mb-6">
          Предложите своим клиентам уникальный метод восстановления и укрепления
          организма, с гарантированным эффектом - откройте свой Центр или
          возьмите тренажер для себя, мы научим вас освам гимнастики, для
          самостоятельной практики!
        </p>
        <Button
          variant="secondary"
          size="lg"
          asChild
          className="relative inline-flex"
        >
          <a href="#contact-form">
            <Icon name="Info" className="mr-2" />
            Узнать подробнее
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 animate-pulse"></span>
          </a>
        </Button>
      </div>

      <div className="flex-shrink-0 md:w-1/3 flex justify-center">
        <img
          src="https://cdn.poehali.dev/files/fe55c1e4-216a-4dd2-9f59-f91f05c340e4.png"
          alt="Вячеслав Ан - автор методики"
          className="h-40 md:h-auto object-contain drop-shadow-lg"
        />
      </div>
    </div>
  </div>
);
