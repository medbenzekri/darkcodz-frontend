'use client'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Store, Globe, Lock, UserCheck, AlertTriangle, Github, Star, GitFork, Send, Menu } from 'lucide-react'
import Image from 'next/image'

export default function DarkCodzLanding() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en')
  const [logoText, setLogoText] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const text = 'DarkCodz'
    let i = 0
    const intervalId = setInterval(() => {
      if (i <= text.length) {
        setLogoText(text.slice(0, i))
        i++
      } else {
        clearInterval(intervalId)
      }
    }, 150)
    return () => clearInterval(intervalId)
  }, [])

  const content = {
    en: {
      title: "DarkCodz",
      subtitle: "Secure Your Cash on Delivery Business",
      description: "An open-source project and service that helps Cash on Delivery stores and businesses check the legitimacy of clients before confirming orders.",
      apiFeature: "API for COD Stores",
      botFeature: "Telegram Bot for Quick Lookup",
      cta: "Get Started",
      features: "Our Features",
      howItWorks: "How It Works",
      secure: "Secure Your Business",
      verify: "Verify Clients",
      reduce: "Reduce Fraud",
      openSource: "Open Source Project",
      viewOnGithub: "View on GitHub",
      starProject: "Star the project",
      forkProject: "Fork the project",
      contributeText: "Contribute to DarkCodz and help improve security for COD businesses worldwide.",
      integrateApi: "Integrate API",
      telegramBot: "Open Telegram Bot",
      footer: "All rights reserved.",
      languageToggle: "العربية 🇩🇿",
      documentation: "Documentation",
      pricing: "Pricing",
      contribution: "Contribution"
    },
    ar: {
      title: "داركودز",
      subtitle: "أمّن أعمالك في الدفع عند الاستلام",
      description: "مشروع مفتوح المصدر وخدمة تساعد متاجر وأعمال الدفع عند الاستلام على التحقق من شرعية العملاء قبل تأكيد طلباتهم.",
      apiFeature: "واجهة برمجة التطبيقات لمتاجر الدفع عند الاستلام",
      botFeature: "بوت تيليجرام للبحث السريع",
      cta: "ابدأ الآن",
      features: "مميزاتنا",
      howItWorks: "كيف يعمل",
      secure: "أمّن أعمالك",
      verify: "تحقق من العملاء",
      reduce: "قلل الاحتيال",
      openSource: "مشروع مفتوح المصدر",
      viewOnGithub: "عرض على GitHub",
      starProject: "أضف نجمة للمشروع",
      forkProject: "انسخ المشروع",
      contributeText: "ساهم في داركودز وساعد في تحسين الأمان لأعمال الدفع عند الاستلام حول العالم.",
      integrateApi: "دمج واجهة برمجة التطبيقات",
      telegramBot: "فتح بوت تيليجرام",
      footer: "جميع الحقوق محفوظة.",
      languageToggle: "English 🇺🇸",
      documentation: "الوثائق",
      pricing: "التسعير",
      contribution: "المساهمة"
    }
  }

  const isArabic = language === 'ar'

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white ${isArabic ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center mb-4 md:mb-0">
            <Lock className="w-8 h-8 mr-2" />
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Courier New', monospace", letterSpacing: '0.1em' }}>
              {logoText}
              <span className="animate-pulse">_</span>
            </h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              {content[language].documentation}
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              {content[language].pricing}
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              {content[language].contribution}
            </Button>
            <Button
              variant="outline"
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              className="bg-gray-800 hover:bg-gray-700"
            >
              <Globe className="w-4 h-4 mr-2" />
              {content[language].languageToggle}
            </Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </Button>
          </nav>
        </header>

        {isMenuOpen && (
          <div className="md:hidden mb-4">
            <Button variant="ghost" className="w-full text-left mb-2">
              {content[language].documentation}
            </Button>
            <Button variant="ghost" className="w-full text-left mb-2">
              {content[language].pricing}
            </Button>
            <Button variant="ghost" className="w-full text-left mb-2">
              {content[language].contribution}
            </Button>
          </div>
        )}

        <main>
          <section className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {content[language].subtitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {content[language].description}
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-4xl font-bold mb-12 text-center">{content[language].features}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center p-8">
                  <div className="bg-white rounded-full p-4 mb-6">
                    <Code2 className="w-12 h-12 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-white">{content[language].apiFeature}</h4>
                  <p className="text-blue-100 mb-6 text-center">Integrate our powerful API to verify clients seamlessly within your existing systems.</p>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    {content[language].integrateApi}
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-400 to-blue-600 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center p-8">
                  <div className="bg-white rounded-full p-4 mb-6">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg"
                      width={48}
                      height={48}
                      alt="Telegram Logo"
                      className="w-12 h-12"
                    />
                  </div>
                  <h4 className="text-2xl font-semibold mb-4 text-white">{content[language].botFeature}</h4>
                  <p className="text-blue-100 mb-6 text-center">Quickly verify clients on-the-go with our user-friendly Telegram bot.</p>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    <Send className="w-5 h-5 mr-2" />
                    {content[language].telegramBot}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="text-center mb-16">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              {content[language].cta}
            </Button>
          </div>

          <section className="text-center mb-16">
            <h3 className="text-3xl font-semibold mb-8">{content[language].howItWorks}</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex flex-col items-center max-w-xs">
                <Store className="w-20 h-20 mb-4 text-green-400" />
                <h4 className="text-xl font-semibold mb-2">{content[language].secure}</h4>
                <p className="text-gray-300">Protect your COD business from fraudulent orders.</p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <UserCheck className="w-20 h-20 mb-4 text-blue-400" />
                <h4 className="text-xl font-semibold mb-2">{content[language].verify}</h4>
                <p className="text-gray-300">Quickly check client legitimacy before processing orders.</p>
              </div>
              <div className="flex flex-col items-center max-w-xs">
                <AlertTriangle className="w-20 h-20 mb-4 text-yellow-400" />
                <h4 className="text-xl font-semibold mb-2">{content[language].reduce}</h4>
                <p className="text-gray-300">Minimize financial losses due to fraudulent activities.</p>
              </div>
            </div>
          </section>

          <section className="mb-16 bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-semibold mb-6 text-center">{content[language].openSource}</h3>
            <div className="flex flex-col items-center">
              <Github className="w-24 h-24 mb-6 text-white" />
              <p className="text-xl text-gray-300 mb-6 text-center max-w-2xl">
                {content[language].contributeText}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                  <Github className="w-5 h-5 mr-2" />
                  {content[language].viewOnGithub}
                </Button>
                <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  <Star className="w-5 h-5 mr-2" />
                  {content[language].starProject}
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <GitFork className="w-5 h-5 mr-2" />
                  {content[language].forkProject}
                </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>&copy; 2023 DarkCodz. {content[language].footer}</p>
        </footer>
      </div>
    </div>
  )
}