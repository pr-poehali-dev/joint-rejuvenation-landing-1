
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/files/4324ffc8-7d84-4a61-b40b-2fd0bb8e4803.JPG"
            alt="Ось Жизни"
            className="h-9"
          />
          <span className="font-bold text-xl">Ось Жизни</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#problems" className="text-sm font-medium hover:text-primary">
            Проблемы
          </a>
          <a href="#method" className="text-sm font-medium hover:text-primary">
            Метод
          </a>
          <a href="#science" className="text-sm font-medium hover:text-primary">
            Наука
          </a>
          <a href="#reviews" className="text-sm font-medium hover:text-primary">
            Отзывы
          </a>
        </nav>
        <Button asChild size="sm" className="hidden md:flex">
          <a href="#contact">Записаться</a>
        </Button>
      </div>
    </header>
  );
};
