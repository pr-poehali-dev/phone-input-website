import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите номер телефона",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Симуляция отправки заявки
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setPhone("");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg border-0 bg-white animate-fade-in">
        <CardHeader className="text-center pb-8">
          <div className="mx-auto mb-4 w-16 h-16 bg-black rounded-full flex items-center justify-center animate-scale-in">
            <Icon name="Phone" className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-black mb-2">
            Обратный звонок
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg">
            Оставьте номер телефона и мы свяжемся с вами
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Номер телефона
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (999) 123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 text-lg border-gray-300 focus:border-black focus:ring-black"
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-black hover:bg-gray-900 text-white font-medium text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Отправляем...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="w-5 h-5" />
                  <span>Заказать звонок</span>
                </div>
              )}
            </Button>
          </form>

          <div className="text-center pt-4">
            <p className="text-sm text-gray-500">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
