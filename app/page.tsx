'use client'

import React, { useState, useEffect } from 'react'
import { 
  Camera, Building2, Users, Award, Globe, Shield, 
  MapPin, Phone, Mail, Instagram, Linkedin, Facebook, 
  ChevronRight, Check, Star, TrendingUp, Clock, Sparkles
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  budget: string
  message: string
}

export default function Home() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  })
  const [showThankYou, setShowThankYou] = useState(false)
  const [spotsLeft, setSpotsLeft] = useState(47)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[id^="animate-"]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.budget) {
      alert('Please fill all required fields')
      return
    }
    setShowThankYou(true)
    setTimeout(() => {
      window.open(`https://wa.me/919187138799?text=Hi, I registered for Dubai Property Roadshow.%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ABudget: ${formData.budget}`, '_blank')
    }, 1500)
  }

  const projects = [
    { name: 'Sobha Hartland', location: 'Mohammed Bin Rashid City', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', price: 'From AED 1.2M' },
    { name: 'Creek Harbour', location: 'Dubai Creek', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800', price: 'From AED 890K' },
    { name: 'Palm Residences', location: 'Palm Jumeirah', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800', price: 'From AED 2.5M' },
    { name: 'Business Bay Tower', location: 'Business Bay', image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800', price: 'From AED 750K' }
  ]

  const highlights = [
    { icon: Users, title: 'Meet Dubai's Elite Property Experts', desc: 'Face-to-face access to top consultants from leading developers' },
    { icon: Building2, title: 'Investment-Grade Premium Projects', desc: 'Handpicked luxury developments with proven ROI' },
    { icon: Award, title: 'Exclusive Launch Offers & Discounts', desc: 'Special pricing available only at this event - up to 5% off' },
    { icon: Globe, title: 'Golden Visa & Residency Support', desc: 'Complete guidance for property-based UAE residency' },
    { icon: Shield, title: 'Verified Developer Partners Only', desc: 'Work directly with Emaar, Sobha, DAMAC & Azizi' },
    { icon: Camera, title: '360° Virtual Property Tours', desc: 'Immersive walkthroughs of your dream Dubai home' }
  ]

  const stats = [
    { number: '₹500Cr+', label: 'Transactions Facilitated' },
    { number: '1,200+', label: 'Happy Investors' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '50+', label: 'Premium Projects' }
  ]

  const testimonials = [
    { name: 'Rajesh Kumar', location: 'Chennai', text: 'Invested in Creek Harbour through Super Realty. The entire process was seamless and transparent. Highly recommend!', rating: 5 },
    { name: 'Priya Sharma', location: 'Bangalore', text: 'Got my Golden Visa within 3 months. The team handled everything professionally. Best decision for my family.', rating: 5 },
    { name: 'Amit Patel', location: 'Mumbai', text: 'Excellent ROI on my Business Bay property. The roadshow gave me all the information I needed to invest confidently.', rating: 5 }
  ]

  return (
    <div className="bg-navy text-white overflow-x-hidden">
      {/* Hero Section - REDESIGNED */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background with Particles Effect */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2400')",
              filter: 'brightness(0.4)'
            }}
          />
          {/* Multiple gradient layers for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          
          {/* Animated Golden Particles */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-gold rounded-full animate-ping opacity-50" />
          <div className="absolute top-32 right-20 w-1 h-1 bg-gold rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-gold rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }} />
          
          {/* Enhanced Ambient Glows */}
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gold/15 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto py-20">
          {/* VIP Badge */}
          <div 
            className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm opacity-0"
            style={{ animation: 'fadeInUp 1s ease-out 0.1s forwards' }}
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-semibold tracking-wider">EXCLUSIVE VIP EVENT</span>
          </div>

          <div 
            className="backdrop-blur-2xl bg-white/[0.03] border-2 border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden"
            style={{ boxShadow: '0 0 80px rgba(201, 167, 78, 0.2), inset 0 0 80px rgba(201, 167, 78, 0.03)' }}
          >
            {/* Top golden line accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <h1 
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider opacity-0"
              style={{ 
                animation: 'fadeInUp 1.2s ease-out 0.3s forwards',
                textShadow: '0 0 40px rgba(255, 255, 255, 0.1)'
              }}
            >
              DUBAI PROPERTY<br />ROADSHOW
            </h1>
            
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gold opacity-0"
              style={{ 
                textShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.3)', 
                animation: 'fadeInUp 1.2s ease-out 0.5s forwards',
                letterSpacing: '0.15em'
              }}
            >
              COIMBATORE 2025
            </h2>
            
            <div 
              className="h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-8 opacity-0 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              style={{ animation: 'fadeIn 1s ease-out 0.7s forwards' }}
            />
            
            <div 
              className="space-y-3 mb-6 opacity-0"
              style={{ animation: 'fadeInUp 1.2s ease-out 0.8s forwards' }}
            >
              <p className="text-xl sm:text-2xl font-semibold text-gray-100 flex items-center justify-center gap-3">
                <Clock className="w-6 h-6 text-gold" />
                15–16 November 2025
              </p>
              <p className="text-lg sm:text-xl text-gray-200">
                Vivanta Surya, by Taj | 10 AM – 9 PM
              </p>
            </div>
            
            <p 
              className="font-serif italic text-2xl sm:text-3xl mb-10 text-gold opacity-0"
              style={{ 
                textShadow: '0 0 30px rgba(212, 175, 55, 0.5)', 
                animation: 'fadeInUp 1.2s ease-out 1s forwards' 
              }}
            >
              Discover Premium Dubai Residences
            </p>

            {/* Limited Spots Alert */}
            <div 
              className="bg-gold/10 border border-gold/30 rounded-2xl p-4 mb-8 backdrop-blur-sm opacity-0"
              style={{ animation: 'fadeInUp 1.2s ease-out 1.1s forwards' }}
            >
              <p className="text-gold font-bold text-lg">⚡ Limited VIP Slots: Only {spotsLeft} Spots Remaining!</p>
            </div>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
              style={{ animation: 'fadeInUp 1.2s ease-out 1.2s forwards' }}
            >
              <a 
                href="#register" 
                className="group relative bg-gradient-to-r from-gold via-gold-light to-gold text-navy px-10 py-5 rounded-xl font-bold text-lg tracking-wider transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.5)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  SECURE MY EXCLUSIVE SPOT
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="https://wa.me/919187138799" 
                className="bg-transparent border-2 border-gold text-gold px-10 py-5 rounded-xl font-bold text-lg tracking-wider hover:bg-gold/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                style={{ boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
              >
                <Phone className="w-5 h-5" />
                CONTACT VIA WHATSAPP
              </a>
            </div>

            {/* Trust indicators */}
            <div 
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 opacity-0"
              style={{ animation: 'fadeIn 1s ease-out 1.4s forwards' }}
            >
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold" /> 100% Free Entry
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold" /> No Obligation
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold" /> SSL Secured
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gold rotate-90" />
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-16 px-6 bg-navy-dark/50 border-y border-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Partners - NEW */}
      <section className="py-16 px-6 bg-navy">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-300">Authorized Partners</h3>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            <div className="text-3xl font-bold text-gold">EMAAR</div>
            <div className="text-3xl font-bold text-gold">SOBHA</div>
            <div className="text-3xl font-bold text-gold">DAMAC</div>
            <div className="text-3xl font-bold text-gold">AZIZI</div>
          </div>
        </div>
      </section>

      {/* About Section - ENHANCED */}
      <section id="animate-about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible['animate-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-2 border-gold/20">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" 
              alt="Luxury Dubai Interior"
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
          </div>
          
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-gold text-sm font-bold tracking-widest uppercase border border-gold/30 rounded-full px-4 py-1">Exclusive Opportunity</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold leading-tight">
              An Exclusive Investment Showcase
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-transparent" />
            <p className="text-xl text-gray-300 leading-relaxed">
              Step into the world of Dubai's most coveted real estate opportunities. Super Realty Dubai presents an intimate, two-day showcase featuring handpicked premium developments from the region's most trusted developers.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether you're seeking a luxury residence, a strategic investment, or residency through property ownership, our expert consultants will guide you through every step of your Dubai property journey.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-white">Free Consultation</div>
                  <div className="text-sm text-gray-400">Worth ₹50,000</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="font-semibold text-white">Exclusive Pricing</div>
                  <div className="text-sm text-gray-400">Up to 5% off</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="#register" className="inline-flex items-center text-gold font-bold text-lg hover:gap-4 transition-all duration-300 group">
                Reserve Your Spot Now
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - ENHANCED */}
      <section id="animate-projects" className="py-24 px-6 bg-navy-dark">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="text-gold text-sm font-bold tracking-widest uppercase border border-gold/30 rounded-full px-4 py-2">Premium Developments</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 mt-6">
              Featured <span className="text-gold">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Handpicked luxury developments in Dubai's most prestigious locations with proven investment returns</p>
          </div>
          
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer border-2 border-gold/0 hover:border-gold/50 transition-all duration-500"
              >
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gold text-navy px-6 py-3 rounded-full font-bold">
                      View Details
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-gold/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-sm font-bold inline-block mb-3">
                    {project.price}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
                  <p className="text-gold flex items-center font-semibold">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gold text-navy px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
              View All 50+ Projects
            </button>
          </div>
        </div>
      </section>

      {/* Why Attend - ENHANCED */}
      <section id="animate-highlights" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <span className="text-gold text-sm font-bold tracking-widest uppercase border border-gold/30 rounded-full px-4 py-2">Event Benefits</span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 mt-6">
            Why <span className="text-gold">Attend</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Exclusive benefits crafted specifically for high-value investors and luxury property buyers</p>
        </div>
        
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="relative backdrop-blur-sm bg-white/5 border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,167,78,0.3)] hover:-translate-y-2 group"
              >
                {/* Golden glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
                
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gold/20">
                    <Icon className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-24 px-6 bg-navy-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-bold tracking-widest uppercase border border-gold/30 rounded-full px-4 py-2">Success Stories</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 mt-6">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-gold/30 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form - ENHANCED */}
      <section id="register" className="py-24 px-6 bg-navy relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-bold tracking-widest uppercase border border-gold/30 rounded-full px-4 py-2">Limited Spots Available</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 mt-6">
              <span className="text-gold">Reserve</span> Your Spot
            </h2>
            <p className="text-gray-400 text-lg">Secure your exclusive consultation slot - Only {spotsLeft} VIP spots remaining!</p>
          </div>
          
          {showThankYou ? (
            <div className="backdrop-blur-xl bg-white/5 border-2 border-gold/50 rounded-3xl p-12 text-center shadow-[0_0_80px_rgba(201,167,78,0.4)]">
              <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 border-2 border-gold">
                <Award className="w-12 h-12 text-gold" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Registration Confirmed! 🎉</h3>
              <p className="text-gray-300 text-lg mb-6">Your spot is secured! We'll connect with you shortly via WhatsApp to confirm your VIP consultation slot.</p>
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
                <p className="text-gold font-semibold">Check your WhatsApp for immediate confirmation</p>
              </div>
            </div>
          ) : (
            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8 pb-8 border-b border-white/10">
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-gold" /> SSL Secured
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-gold" /> 100% Privacy
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-400">
                  <Users className="w-4 h-4 text-gold" /> 127 registered today
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
                
                <div>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-6 py-4 text-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  >
                    <option value="" className="bg-navy">Investment Budget *</option>
                    <option value="500k-1m" className="bg-navy">AED 500K - 1M</option>
                    <option value="1m-2m" className="bg-navy">AED 1M - 2M</option>
                    <option value="2m-5m" className="bg-navy">AED 2M - 5M</option>
                    <option value="5m+" className="bg-navy">AED 5M+</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-white/5 border-2 border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-gold via-gold-light to-gold text-navy px-10 py-5 rounded-xl font-bold text-xl tracking-wider transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                  style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.5)' }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    SECURE MY EXCLUSIVE SPOT NOW
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <p className="text-center text-sm text-gray-500">
                  By registering, you agree to receive event updates via WhatsApp & Email
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact & Map - ENHANCED */}
      <section id="animate-contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible['animate-contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-2 border-gold/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.99!3d11.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzM2LjAiTiA3NsKwNTknMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Vivanta Surya Location"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-gold text-sm font-bold tracking-widest uppercase border border-gold/30 rounded-full px-4 py-1">Get In Touch</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 mt-4">
                Visit <span className="text-gold">Us</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Reach us for exclusive Dubai investment consultations and VIP event access
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 border border-gold/20">
                  <MapPin className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Event Venue</h4>
                  <p className="text-gray-400">Vivanta Surya, by Taj<br />Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 border border-gold/20">
                  <Phone className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Contact Number</h4>
                  <a href="tel:+919187138799" className="text-gold hover:text-gold-light transition-colors text-lg font-semibold">+91 91871 38799</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center flex-shrink-0 border border-gold/20">
                  <Mail className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Email</h4>
                  <a href="mailto:info@superrealtydubai.com" className="text-gold hover:text-gold-light transition-colors">info@superrealtydubai.com</a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/919187138799"
                className="inline-flex items-center bg-gradient-to-r from-gold to-gold-light text-navy px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - ENHANCED */}
      <footer className="bg-navy-dark border-t-2 border-gold/20 py-16 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="font-serif text-4xl font-bold mb-3 text-gold">
              Super Realty Dubai
            </h3>
            <p className="text-gray-400 text-lg">Your Gateway to Premium Dubai Properties</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">About Us</a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Properties</a>
            <a href="#register" className="text-gray-400 hover:text-gold transition-colors">Register</a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Contact</a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 group">
              <Instagram className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 group">
              <Linkedin className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold/20 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 group">
              <Facebook className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6" />
            <p className="text-gray-500 text-sm">© 2025 Super Realty Dubai. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2">Designed with luxury in mind</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
