import Icon from "@/components/ui/icon";
import { ScienceCard } from "./science/ScienceCard";
import { ScienceDiagram } from "./science/ScienceDiagram";
import { PrinciplesSection } from "./science/PrinciplesSection";
import { sciencePoints } from "./science/data";

export const ScienceSection = () => {
  return (
    <section
      id="science"
      className="py-16 bg-gradient-to-b from-white to-blue-50 relative"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJWMTZoMTB2MmgtOHYxNnptLTQtNGgtMnYtOWg4djJoLTZ2N3ptMi0xMWgtMlY4aDh2MmgtNnY1eiIvPjxwYXRoIGQ9Ik0yMCAxOGgtMlYyaDEwdjJoLTh2MTR6bS00LTRoLTJ2LTloOHYyaC02djd6bTItMTFoLTJWMGg4djJoLTZ2MXpNMzYgMzRoLTJWMTZoMTB2MmgtOHYxNnptLTQtNGgtMnYtOWg4djJoLTZ2N3ptMi0xMWgtMlY4aDh2MmgtNnY1eiIvPjxwYXRoIGQ9Ik0yMCAxOGgtMlYyaDEwdjJoLTh2MTR6bS00LTRoLTJ2LTloOHYyaC02djd6bTItMTFoLTJWMGg4djJoLTZ2MXpNNTYgMzRoLTJWMTZoMTB2MmgtOHYxNnptLTQtNGgtMnYtOWg4djJoLTZ2N3ptMi0xMWgtMlY4aDh2MmgtNnY1eiIvPjxwYXRoIGQ9Ik00MCAxOGgtMlYyaDEwdjJoLTh2MTR6bS00LTRoLTJ2LTloOHYyaC02djd6bTItMTFoLTJWMGg4djJoLTZ2MXoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            <Icon name="Microscope" className="h-4 w-4" />
            Подтверждено исследованиями
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Научное обоснование
          </h2>
          <p className="text-lg text-gray-600">
            Наша методика основана на серьезных научных открытиях и
            исследованиях
          </p>
        </div>

        <ScienceDiagram />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {sciencePoints.map((point, index) => (
            <ScienceCard key={index} number={index + 1} {...point} />
          ))}
        </div>

        <PrinciplesSection />
      </div>
    </section>
  );
};
