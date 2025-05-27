import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { BenefitItem } from "./BenefitItem";
import { benefits } from "./data";

export const BenefitsCard = () => {
  return (
    <Card className="border-0 shadow-lg overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 rounded-full p-2">
            <Icon name="Gift" className="h-6 w-6" />
          </div>
          <CardTitle>Что вы получите</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((item, index) => (
            <BenefitItem key={index}>{item}</BenefitItem>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
