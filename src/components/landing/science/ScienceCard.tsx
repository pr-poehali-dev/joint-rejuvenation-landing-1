import Icon from "@/components/ui/icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SciencePoint } from "./types";

interface ScienceCardProps extends SciencePoint {
  number: number;
}

export const ScienceCard = ({
  number,
  title,
  description,
  icon,
}: ScienceCardProps) => (
  <Card className="bg-white border-blue-100 shadow-md relative z-10">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
          {number}
        </div>
        <CardTitle className="flex items-center gap-2">
          <Icon name={icon} className="text-blue-600" />
          {title}
        </CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);
