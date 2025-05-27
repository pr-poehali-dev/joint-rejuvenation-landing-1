import Icon from "@/components/ui/icon";

interface BenefitItemProps {
  children: React.ReactNode;
}

export const BenefitItem = ({ children }: BenefitItemProps) => (
  <div className="flex items-start gap-3 p-3 rounded-md hover:bg-blue-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center">
      <Icon name="CheckCircle" className="h-5 w-5 text-green-600" />
    </div>
    <span className="font-medium">{children}</span>
  </div>
);
