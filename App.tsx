import React, { useEffect, useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [isVisible, setIsVisible] = useState({
    hero: false,
    biography: false,
    benefits: false,
    quote: false,
    form: false
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-section');
          if (sectionName) {
            setIsVisible(prev => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    // Hero section appears immediately
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 300);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Хвала вам! Ваша пријава је послата.');
    setFormData({ name: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="w-full py-6 px-4 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl hilandarski-font">СС</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-amber-800 mb-8 hilandarski-font leading-tight">
            Надахнуће
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-700 mb-12 leading-relaxed max-w-5xl mx-auto hilandarski-font">
            Програм који ће те надахнути да убијеш стару верзију себе, не би ли допустио рођење нове, која ће живот живјети тако да када смрт једног дана покуца на твоја врата, не зажалиш за животом јер знаш да си дао апсолутно све од себе, а остало препустио вољи Божијој.
          </p>
          
          <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-12 py-4 rounded-full text-xl font-semibold hilandarski-font shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Пријави се одмах
          </button>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="w-8 h-8 text-amber-600 mx-auto" />
          </div>
        </div>
      </section>

      {/* Stefan Biography Section */}
      <section 
        data-section="biography"
        className="py-20 px-4 bg-white/40 backdrop-blur-sm"
      >
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible.biography ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Stefan's Photo */}
            <div className="order-2 md:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  {/* Placeholder for Stefan's photo */}
                  <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold text-3xl hilandarski-font">СС</span>
                      </div>
                      <p className="text-amber-700 hilandarski-font text-lg">Стефанова фотографија</p>
                      <p className="text-amber-600 hilandarski-font text-sm mt-2">биће додата касније</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Biography Text */}
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-8 hilandarski-font">
                О Стефану
              </h2>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <p className="text-xl text-amber-800 leading-relaxed hilandarski-font">
                  Рођен 2005. у Беранама, Стефан је одрастао у свештеничкој породици где је вера била темељ живота. Завршио је смер информационих технологија у Бијелом Пољу, а свој пут наставља ка Богословском факултету у Београду, вођен жељом да служи Богу и људима.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        data-section="benefits"
        className="py-20 px-4 bg-white/60 backdrop-blur-sm"
      >
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 text-center mb-16 hilandarski-font">
            Шта добијаш од програма
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-amber-800 leading-relaxed hilandarski-font">
                Кроз овај програм стећи ћеш снагу да савладаш своје слабости и пронађеш веру у свој пут. Научићеш како да препознаш своју унутрашњу снагу и суочиш се са свакодневним изазовима.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-lg text-amber-800 leading-relaxed hilandarski-font">
                Програм ће те водити да живиш смислен и испуњен живот, постајући боља верзија себе сваког дана док остајеш веран Божијем путу и откриваш мир у својој души.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        data-section="quote"
        className="py-20 px-4 bg-gradient-to-r from-amber-200 to-orange-200"
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 ${
          isVisible.quote ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl">
            <blockquote className="text-2xl md:text-3xl text-amber-800 italic leading-relaxed quote-font">
              „Овде ће бити Стефанов цитат када га пошаљете..."
            </blockquote>
            <cite className="block mt-8 text-xl text-amber-700 font-semibold hilandarski-font">
              — Стефан Станишић
            </cite>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section 
        data-section="form"
        className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-700 ${
          isVisible.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 text-center mb-12 hilandarski-font">
            Пријава за менторство
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-semibold text-amber-800 mb-2 hilandarski-font">
                Име
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-amber-800 hilandarski-font"
                placeholder="Ваше пуно име"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="email" className="block text-lg font-semibold text-amber-800 mb-2 hilandarski-font">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors duration-300 text-amber-800 hilandarski-font"
                placeholder="vasa.email@example.com"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-xl font-semibold hilandarski-font shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Пријави се
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-amber-800 text-center">
        <p className="text-amber-100 hilandarski-font">
          © 2025 Стефан Станишић. Сва права задржана.
        </p>
      </footer>
    </div>
  );
}

export default App;


