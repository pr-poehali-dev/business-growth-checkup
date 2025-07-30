import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface BookingFormProps {
  onClose: () => void;
}

export default function BookingForm({ onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="relative">
          <CardTitle className="font-sans text-2xl font-bold text-center text-[#1a1a1a]">
            Записаться на чек-ап
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 p-2"
          >
            <Icon name="X" size={20} />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-sans font-medium text-gray-700">
                Ваше имя
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="font-sans"
                placeholder="Введите ваше имя"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-sans font-medium text-gray-700">
                Телефон
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="font-sans"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-sans font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="font-sans"
                placeholder="your@email.com"
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-sans font-medium py-3 rounded-lg transition-all duration-300"
              >
                Записаться на чек-ап
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center font-sans">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}