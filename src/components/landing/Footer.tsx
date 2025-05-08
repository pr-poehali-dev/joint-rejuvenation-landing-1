import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/files/4324ffc8-7d84-4a61-b40b-2fd0bb8e4803.JPG"
                  alt="Ось Жизни"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-bold text-2xl">Ось Жизни</span>
            </div>
            <p className="text-gray-400 mb-4">
              Революционная методика естественного омоложения суставов,
              позвоночника и центральной нервной системы.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="#method"
                className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <Icon name="ArrowRight" className="h-4 w-4" />
                Узнать больше о методике
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Icon name="Phone" className="text-blue-400" />
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon
                  name="Smartphone"
                  className="shrink-0 mt-1 text-blue-400"
                />
                <div>
                  <p className="font-medium">Телефон</p>
                  <a
                    href="tel:+78001234567"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +7 (800) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Mail" className="shrink-0 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:info@os-zhizni.ru"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@os-zhizni.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="MapPin" className="shrink-0 mt-1 text-blue-400" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-gray-400">
                    г. Москва, ул. Примерная, д. 123
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Icon name="Share2" className="text-blue-400" />
              Социальные сети
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="Facebook" />
                </div>
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0">
                  <Icon name="Twitter" />
                </div>
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Instagram" />
                </div>
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <Icon name="Vk" />
                </div>
                <span>ВКонтакте</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Ось Жизни. Все права защищены.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
