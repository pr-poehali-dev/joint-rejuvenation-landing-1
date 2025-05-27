import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const ContactFormCard = () => (
  <Card className="border-0 shadow-lg" id="contact-form">
    <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 rounded-full p-2">
          <Icon name="Send" className="h-6 w-6" />
        </div>
        <div>
          <CardTitle>Оставьте заявку</CardTitle>
          <CardDescription className="text-white/80 mt-1">
            Ваш ключ к новым возможностям!
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-6">
      <ContactForm />
      <ContactInfo />
    </CardContent>
  </Card>
);
