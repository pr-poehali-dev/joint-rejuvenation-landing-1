import Icon from "@/components/ui/icon";
import { principlesLeft, principlesRight } from "./data";

interface PrincipleListProps {
  items: string[];
  title: string;
  icon: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
}

const PrincipleList = ({
  items,
  title,
  icon,
  bgColor,
  textColor,
  accentColor,
}: PrincipleListProps) => (
  <div className={`${bgColor} p-4 rounded-lg`}>
    <h4 className={`font-medium ${textColor} mb-3 flex items-center gap-2`}>
      <Icon name={icon} className="h-5 w-5" />
      {title}
    </h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 bg-white p-3 rounded-md shadow-sm"
        >
          <div
            className={`w-6 h-6 rounded-full ${accentColor} flex-shrink-0 flex items-center justify-center text-xs font-medium`}
          >
            {index + 1}
          </div>
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const PrinciplesSection = () => (
  <div className="mt-12 bg-white rounded-lg border border-blue-100 shadow-md overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
          <Icon name="Cog" className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold">
          Принцип воздействия тренажёра «Ось Жизни»
        </h3>
      </div>
    </div>

    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 bg-blue-50 rounded-lg flex items-center justify-center p-4 overflow-hidden">
          <img
            src="https://cdn.poehali.dev/files/2629f2ea-4800-4572-aa3b-b83611ecb88a.png"
            alt="Тренажер Ось Жизни"
            className="max-w-full h-auto object-contain max-h-64"
          />
        </div>

        <div className="md:w-2/3 flex flex-col">
          <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-100">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-blue-800">
              <Icon name="Target" className="h-5 w-5" />
              Ключевой механизм действия
            </h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex-1 bg-white p-3 rounded shadow-sm min-w-[250px] border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    1
                  </div>
                  <h5 className="font-medium">Механическое давление</h5>
                </div>
                <p className="text-sm text-gray-600">
                  Точечно направленная нагрузка на осевой скелет активирует
                  пьезоэлектрический эффект
                </p>
              </div>

              <div className="flex-1 bg-white p-3 rounded shadow-sm min-w-[250px] border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                    2
                  </div>
                  <h5 className="font-medium">Биологический отклик</h5>
                </div>
                <p className="text-sm text-gray-600">
                  Кости и ткани генерируют электрический сигнал, запускающий
                  процессы регенерации
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PrincipleList
              items={principlesLeft}
              title="Механизм действия"
              icon="ArrowDownToLine"
              bgColor="bg-blue-50"
              textColor="text-blue-900"
              accentColor="bg-blue-100 text-blue-600"
            />
            <PrincipleList
              items={principlesRight}
              title="Физиологический результат"
              icon="BarChart"
              bgColor="bg-purple-50"
              textColor="text-purple-900"
              accentColor="bg-purple-100 text-purple-600"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
