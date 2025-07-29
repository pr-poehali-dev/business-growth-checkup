import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#1a1a1a] mb-6 animate-fade-in">
            Чек-ап роста бизнеса <br/>
            <span className="text-[#c9a96e]">за 1 час и 15 000 ₽</span>
          </h1>
          <p className="font-inter text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto animate-slide-up">
            Узнайте, что мешает вашему бизнесу масштабироваться, и получите готовый план изменений на 90 дней.
          </p>
          <Button 
            size="lg" 
            className="bg-[#c9a96e] hover:bg-[#b8956] text-white px-12 py-6 text-lg font-inter font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            Записаться на чек-ап →
          </Button>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-[#f8f8f8]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-16">
            Подходит владельцам бизнеса:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "TrendingUp", text: "С выручкой от 30 млн ₽ в год" },
              { icon: "Users", text: "Штатом от 10 человек" },
              { icon: "Target", text: "С амбициями на рост, инвестиции или выход на новые рынки" },
              { icon: "AlertCircle", text: "Уставшим от операционки и хаоса" }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#c9a96e] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon} size={32} className="text-[#c9a96e]" />
                  </div>
                  <p className="font-inter text-gray-700 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-16">
            Результат уже через <span className="text-[#c9a96e]">1 час:</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { number: "01", title: "Индекс готовности к росту", desc: "вашего бизнеса (0–100)" },
                { number: "02", title: "3 ключевые точки", desc: "которые мешают масштабироваться" },
                { number: "03", title: "План из 3–5 шагов", desc: "на 90 дней" },
                { number: "04", title: "PDF-отчёт", desc: "с практическими рекомендациями" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#c9a96e] text-white rounded-full flex items-center justify-center font-inter font-bold text-lg">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-[#1a1a1a] mb-2">{item.title}</h3>
                    <p className="text-gray-600 font-inter">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-[#c9a96e] to-[#b8956] p-12 rounded-2xl text-white text-center">
              <Icon name="BarChart3" size={80} className="mx-auto mb-8 opacity-20" />
              <h3 className="font-playfair text-3xl font-bold mb-4">Комплексная диагностика</h3>
              <p className="font-inter text-lg opacity-90">Получите четкое понимание текущего состояния бизнеса и пошаговый план развития</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-[#c9a96e] hover:bg-[#b8956] text-white px-12 py-6 text-lg font-inter font-medium rounded-lg"
            >
              Получить результат →
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-[#f8f8f8]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-16">
            Почему нам доверяют?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "Award",
                title: "100+ проектов",
                desc: "с крупным и средним бизнесом (Сбер, Северсталь, Газпромнефть)"
              },
              {
                icon: "Brain",
                title: "Экспертиза",
                desc: "в поведенческих стратегиях и управлении изменениями"
              },
              {
                icon: "Zap",
                title: "Практические инструменты",
                desc: "результат за 1 час, без «консалтинговой воды»"
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white text-center">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-[#c9a96e] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon} size={40} className="text-[#c9a96e]" />
                  </div>
                  <h3 className="font-inter font-bold text-xl text-[#1a1a1a] mb-4">{item.title}</h3>
                  <p className="text-gray-600 font-inter leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-16">
            Как проходит чек-ап
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Короткий онлайн-опрос",
                time: "5 минут",
                desc: "чтобы не тратить время на базовые вещи",
                icon: "FileText"
              },
              {
                step: "2", 
                title: "Онлайн-сессия",
                time: "1 час",
                desc: "задаём уточняющие вопросы и формируем карту роста",
                icon: "Video"
              },
              {
                step: "3",
                title: "Отчёт PDF",
                time: "сразу после",
                desc: "готовые выводы и план на 90 дней",
                icon: "Download"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-24 h-24 bg-[#c9a96e] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-playfair font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="font-inter font-bold text-2xl text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-[#c9a96e] font-inter font-semibold mb-4">({item.time})</p>
                <p className="text-gray-600 font-inter leading-relaxed">{item.desc}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-6 w-12 h-0.5 bg-[#c9a96e] opacity-30"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-[#c9a96e] hover:bg-[#b8956] text-white px-12 py-6 text-lg font-inter font-medium rounded-lg"
            >
              Хочу пройти чек-ап →
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
            Только сейчас — <span className="text-[#c9a96e]">15 000 ₽</span>
          </h2>
          <p className="font-inter text-xl text-gray-300 mb-12">
            Это промо-цена (стандартная стоимость полной диагностики — <span className="line-through">50 000 ₽</span>)
          </p>
          <div className="bg-white bg-opacity-5 rounded-2xl p-12 backdrop-blur-sm border border-white border-opacity-10">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Icon name="Clock" size={32} className="text-[#c9a96e]" />
              <span className="font-inter text-lg">Ограниченное предложение</span>
            </div>
            <Button 
              size="lg" 
              className="bg-[#c9a96e] hover:bg-[#b8956] text-white px-16 py-8 text-xl font-inter font-medium rounded-lg"
            >
              Записаться со скидкой →
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#f8f8f8]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center mb-16">
            Что говорят клиенты:
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Михаил Петров",
                company: "ООО «ТехПром»",
                text: "За час получил четкое понимание узких мест. План на 90 дней уже начал работать — выручка выросла на 15%."
              },
              {
                name: "Елена Васильева", 
                company: "Сеть ресторанов «Вкус»",
                text: "Конкретные рекомендации без воды. Особенно помог анализ операционных процессов — сэкономили 200 тысяч в месяц."
              },
              {
                name: "Андрей Козлов",
                company: "IT-компания «Цифра»",
                text: "Профессиональный подход и быстрый результат. Теперь понимаем, как масштабироваться без потери качества."
              }
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-[#c9a96e] fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-gray-700 mb-6 leading-relaxed">"{item.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-inter font-semibold text-[#1a1a1a]">{item.name}</p>
                    <p className="font-inter text-sm text-gray-500">{item.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#c9a96e] to-[#b8956] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
            Готовы узнать, что мешает <br/> вашему бизнесу расти?
          </h2>
          <p className="font-inter text-xl mb-12 opacity-90">
            Получите персональный план развития уже сегодня
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#c9a96e] hover:bg-gray-100 px-16 py-8 text-xl font-inter font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Записаться на чек-ап →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="font-inter text-gray-400">
            © 2024 Бизнес-консалтинг. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}