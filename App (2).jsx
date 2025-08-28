import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Heart, Star, Users, CheckCircle, ArrowRight } from 'lucide-react'
import stefanPhoto from './assets/stefan_new_photo.png'
import heroBackground from './assets/IMG_3268.PNG'
import stefanLogo from './assets/STEFANOVPEČAT.png'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://hook.eu2.make.com/hktvndukbtxpvt6ytslyfh4cicuk1hj7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '' })
      } else {
        alert('Došlo je do greške. Molimo pokušajte ponovo.')
      }
    } catch (error) {
      alert('Došlo je do greške. Molimo pokušajte ponovo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100">
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-2xl font-bold text-orange-600">Stefan Stanisić</h1>
        <p className="text-gray-600 mt-2">Duhovno Mentorstvo</p>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-8">
            <img src={stefanLogo} alt="Stefanov Pecat Logo" className="w-24 h-24 mx-auto mb-6" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-800">Otkrijte svoju</span><br />
            <span className="text-orange-500">duhovnu snagu</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Pridružite se transformativnom putovanju koje će vam pomoći da pronađete 
            nadahnuće, povjerujete u sebe i živite život bez žaljenja.
          </p>
          
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            onClick={() => document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })}
          >
            Prijavite se sada
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transformišite svoj život kroz duhovni razvoj
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stefan Stanisić vam kroz svoj program mentorstva pomaže da pronađete 
              unutrašnju snagu i živite život pun značenja i svrhe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pronađite nadahnuće</h3>
              <p className="text-gray-600 leading-relaxed">
                Otkrijte svoju unutrašnju snagu i nadahnuće potrebno za svakodnevnu borbu 
                sa življenskim izazovima i iskušenjima.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Povjerujte u sebe</h3>
              <p className="text-gray-600 leading-relaxed">
                Naučite da se oslonite na vlastite sposobnosti, uzdajte se u Gospoda 
                i kreativno pristupite življenjskim izazovima.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Živite bez žaljenja</h3>
              <p className="text-gray-600 leading-relaxed">
                Znanstvite kako da dajete apsolutno sve od sebe i živite tako da na kraju 
                ne žalite za protraćenim vremenjem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-12 text-center text-white shadow-2xl">
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "Suština je da ćete kroz program dobiti nadahnuće da nastavite svakodnevnu borbu 
              sa iskušenjima i izazovima koji dolaze. Nadahnuće da zapravo povjerujete u sebe, 
              uzdajte se u Gospoda i ne protračite ovaj život."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img 
                src={stefanPhoto} 
                alt="Stefan Stanisić" 
                className="w-16 h-16 rounded-full border-4 border-white/30 object-cover"
              />
              <div className="text-left">
                <p className="font-bold text-xl">Stefan Stanisić</p>
                <p className="text-orange-100">Duhovni mentor i vodič</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Stefan Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">O Stefanu</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full max-w-md mx-auto rounded-2xl shadow-2xl overflow-hidden h-[350px]">
              <img 
                src={stefanPhoto} 
                alt="Stefan Stanisić" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Stefan Stanisić - sin sveštenika Srpske Pravoslavne Crkve, rođen je 1. jula 2005. godine u Beranama. 
                Najveću inspiraciju za misiju u koju je krenuo pronalazi u Svetom Savi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Božjom promišlju, u aprilu 2024. se zajedno sa svojim dobrim prijateljem upućuje na hodočašće 
                od Bijelog Polja do manastira Ostrog, dugo 155 kilometara.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kako Stefan govori: "Biti vitez u današnjem vremenu je veliki podvig jer ono što je suština života, 
                danas je postalo 'čudno' u svijetu. Zato želim da pomognem svakome od vas da prepozna darove 
                koje mu je Gospod podarijo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Započnite svoje transformativno putovanje
            </h2>
            <p className="text-xl text-gray-600">
              Pridružite se program mentorstva i otkrijte svoju duhovnu snagu
            </p>
          </div>

          {isSubmitted ? (
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-8 text-center">
                <CheckCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Uspješno ste se prijavili!</h3>
                <p className="text-gray-600">
                  Stefan će vas uskoro kontaktirati sa više informacija o programu mentorstva.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-orange-200 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Vaše ime *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Unesite vaše ime"
                      className="w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email adresa *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="vaš@email.com"
                      className="w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Šalje se...' : 'Prijavite se za mentorstvo'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-orange-500 mr-2" />
            <h3 className="text-2xl font-bold">Stefan Stanisić</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Duhovni mentor posvećen vašem ličnom rastu i transformaciji
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Stefan Stanisić. Sva prava zadržana.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

