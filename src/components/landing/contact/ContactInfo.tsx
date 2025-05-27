import Icon from "@/components/ui/icon";

export const ContactInfo = () => (
  <div className="mt-6 pt-6 border-t border-gray-200">
    <div className="flex items-center gap-2 mb-2">
      <Icon name="Clock" className="h-4 w-4 text-blue-600" />
      <span className="text-sm font-medium">
        Время работы: Пн-Пт с 9:00 до 20:00
      </span>
    </div>
    <div className="flex items-center gap-2">
      <Icon name="MapPin" className="h-4 w-4 text-blue-600" />
      <span className="text-sm font-medium">
        Адрес: г. Санкт-Петербург, улица Большой Смоленский проспект, д10
      </span>
    </div>
  </div>
);
