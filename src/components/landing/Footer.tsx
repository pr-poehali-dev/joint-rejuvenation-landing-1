
import Icon from "@/components/ui/icon";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.poehali.dev/files/4324ffc8-7d84-4a61-b40b-2fd0bb8e4803.JPG"
                alt="Ось Жизни"
                className="h-9 bg-white rounded-full p-1"
              />
              <span className="font-bold text-xl">Ось Жизни</span>
            </div>
            <p className="text-gray-400">
              Революционная методика естественного омоложения суставов, позвоночника и центральной нервной системы.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="text-blue-400" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="text-blue-400" />
                <span>info@os-zhizni.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" className="text-blue-400" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Icon name="Vk" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ось Жизни. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
