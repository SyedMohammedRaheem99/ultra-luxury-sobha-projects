'use client'

import React, { useState, useEffect } from 'react'
import { 
  Building2, Users, Award, Globe, Shield, MapPin, Phone, Mail, 
  Instagram, Linkedin, Facebook, ChevronRight, Check, Star, Sparkles, ArrowRight, Calendar
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
    { icon: Users, title: 'Expert Consultations', desc: 'Direct access to top Dubai property consultants' },
    { icon: Building2, title: 'Premium Developments', desc: 'Handpicked luxury projects with proven ROI' },
    { icon: Award, title: 'Exclusive Pricing', desc: 'Special launch offers up to 5% discount' },
    { icon: Globe, title: 'Golden Visa Support', desc: 'Complete UAE residency assistance included' },
    { icon: Shield, title: 'Trusted Developers', desc: 'Emaar, Sobha, DAMAC partnerships' },
    { icon: Sparkles, title: 'Virtual Tours', desc: 'Immersive 3D property walkthroughs' }
  ]

  const stats = [
    { number: '500Cr+', label: 'Transactions' },
    { number: '1,200+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Projects' }
  ]

  const testimonials = [
    { name: 'Rajesh Kumar', location: 'Chennai', text: 'Invested in Creek Harbour through Super Realty. Professional service and transparent process throughout.', rating: 5 },
    { name: 'Priya Sharma', location: 'Bangalore', text: 'Got my Golden Visa within 3 months. The team handled everything professionally.', rating: 5 },
    { name: 'Amit Patel', location: 'Mumbai', text: 'Excellent ROI on my Business Bay property. The roadshow gave me all the info I needed.', rating: 5 }
  ]

  return (
    <div className="bg-[#1a1a1a] text-[#f5f5f0]">
      {/* Hero Section - Luxury Premium */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #C9A961 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Premium Golden Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-[#C9A961]/10 via-transparent to-transparent blur-3xl" />
        
        {/* Subtle Dubai Skyline */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2400')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a]/50 to-[#1a1a1a]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-7xl mx-auto py-20">
          <div 
            className="mb-8 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.1s forwards' }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-[#C9A961]/30 rounded-full bg-[#C9A961]/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-[#C9A961] animate-pulse" />
              <span className="text-[#C9A961] text-xs font-semibold tracking-[0.25em] uppercase">
                Exclusive Event • Coimbatore 2025
              </span>
            </div>
          </div>

          <h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-8 text-[#f5f5f0] opacity-0 leading-[1.1]"
            style={{ 
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
              letterSpacing: '-0.02em'
            }}
          >
            Dubai Property<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#C9A961]">
              Roadshow
            </span>
          </h1>
          
          <div 
            className="flex items-center justify-center gap-6 mb-10 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.3s forwards' }}
          >
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
            <div className="flex items-center gap-3 text-[#C9A961]">
              <Calendar className="w-5 h-5" />
              <span className="text-lg font-medium">15–16 November 2025</span>
            </div>
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
          </div>
          
          <div 
            className="space-y-2 mb-12 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}
          >
            <p className="text-xl text-[#d4d4c8] font-light">Vivanta Surya, by Taj • 10 AM – 9 PM</p>
          </div>
          
          <p 
            className="text-xl sm:text-2xl text-[#a3a399] mb-14 max-w-3xl mx-auto leading-relaxed opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.5s forwards' }}
          >
            Experience Dubai's most prestigious real estate developments.<br className="hidden sm:block" />
            Connect with elite developers. Secure exclusive opportunities.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-5 justify-center opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}
          >
            <a 
              href="#register" 
              className="group relative bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#C9A961] text-[#1a1a1a] px-12 py-5 rounded-full font-bold text-base hover:shadow-[0_20px_60px_rgba(201,169,97,0.4)] transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Reserve Your Spot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a 
              href="https://wa.me/919187138799" 
              className="border-2 border-[#C9A961]/50 text-[#C9A961] px-12 py-5 rounded-full font-semibold text-base hover:bg-[#C9A961]/10 hover:border-[#C9A961] transition-all duration-300"
            >
              Contact via WhatsApp
            </a>
          </div>

          <div 
            className="mt-16 flex flex-wrap items-center justify-center gap-10 opacity-0"
            style={{ animation: 'fadeIn 0.8s ease-out 0.8s forwards' }}
          >
            <div className="flex items-center gap-3 text-[#a3a399]">
              <div className="w-8 h-8 rounded-full border border-[#C9A961]/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#C9A961]" />
              </div>
              <span className="text-sm">Complimentary Entry</span>
            </div>
            <div className="flex items-center gap-3 text-[#a3a399]">
              <div className="w-8 h-8 rounded-full border border-[#C9A961]/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#C9A961]" />
              </div>
              <span className="text-sm">Expert Consultations</span>
            </div>
            <div className="flex items-center gap-3 text-[#a3a399]">
              <div className="w-8 h-8 rounded-full border border-[#C9A961]/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-[#C9A961]" />
              </div>
              <span className="text-sm">Exclusive Offers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#252525] to-[#1a1a1a] border-t border-[#C9A961]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-[#C9A961] to-[#D4AF37] bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-[#a3a399] text-sm tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="animate-about" className="py-28 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-20 items-center transition-all duration-1000 ${isVisible['animate-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C9A961]/20 rounded-full bg-[#C9A961]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-semibold tracking-widest uppercase">
                About the Event
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#f5f5f0] mb-6 leading-tight">
              An Exclusive Investment<br />Showcase
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#C9A961] to-transparent mb-8" />
            <p className="text-lg text-[#d4d4c8] leading-relaxed mb-6">
              Step into the world of Dubai's most coveted real estate opportunities. Super Realty Dubai presents an intimate showcase featuring handpicked premium developments from the region's most trusted developers.
            </p>
            <p className="text-[#a3a399] leading-relaxed mb-10">
              Whether you're seeking a luxury residence, strategic investment, or residency through property ownership, our expert consultants will guide you through every step of your journey to owning a piece of Dubai.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#C9A961]/10 to-transparent border border-[#C9A961]/20">
                <div className="w-12 h-12 rounded-xl bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#C9A961]" />
                </div>
                <div>
                  <div className="font-semibold text-[#f5f5f0] mb-1">Free Consultation</div>
                  <div className="text-sm text-[#a3a399]">Worth ₹50,000</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#C9A961]/10 to-transparent border border-[#C9A961]/20">
                <div className="w-12 h-12 rounded-xl bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-[#C9A961]" />
                </div>
                <div>
                  <div className="font-semibold text-[#f5f5f0] mb-1">Special Pricing</div>
                  <div className="text-sm text-[#a3a399]">Up to 5% discount</div>
                </div>
              </div>
            </div>

            <a href="#register" className="inline-flex items-center text-[#C9A961] font-semibold hover:gap-3 transition-all duration-300 group">
              Reserve Your Spot
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="order-1 md:order-2 relative rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" 
              alt="Luxury Dubai Interior"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-[#1a1a1a]/20 to-transparent" />
            <div className="absolute inset-0 border-2 border-[#C9A961]/20 rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="animate-projects" className="py-28 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#252525]">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C9A961]/20 rounded-full bg-[#C9A961]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-semibold tracking-widest uppercase">
                Premium Developments
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#f5f5f0] mb-6">
              Featured Projects
            </h2>
            <p className="text-[#a3a399] text-lg max-w-2xl mx-auto">
              Explore world-class developments in Dubai's most prestigious locations
            </p>
          </div>
          
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#C9A961]/20 hover:border-[#C9A961]/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,169,97,0.2)] hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-[#1a1a1a] px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-b from-transparent to-[#C9A961]/5">
                  <h3 className="text-xl font-semibold text-[#f5f5f0] mb-3">{project.name}</h3>
                  <p className="text-[#a3a399] flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-[#C9A961]" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-14">
            <button className="border-2 border-[#C9A961] text-[#C9A961] px-12 py-4 rounded-full font-semibold hover:bg-[#C9A961] hover:text-[#1a1a1a] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(201,169,97,0.3)]">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section id="animate-highlights" className="py-28 px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C9A961]/20 rounded-full bg-[#C9A961]/5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
            <span className="text-[#C9A961] text-xs font-semibold tracking-widest uppercase">
              Event Benefits
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif text-[#f5f5f0] mb-6">
            Why Attend
          </h2>
          <p className="text-[#a3a399] text-lg max-w-2xl mx-auto">
            Exclusive benefits crafted for discerning investors
          </p>
        </div>
        
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-[#252525] to-[#1a1a1a] rounded-3xl p-8 border border-[#C9A961]/20 hover:border-[#C9A961]/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(201,169,97,0.15)] hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#C9A961]" />
                </div>
                <h3 className="text-xl font-semibold text-[#f5f5f0] mb-3">{item.title}</h3>
                <p className="text-[#a3a399] leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6 bg-gradient-to-b from-[#252525] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C9A961]/20 rounded-full bg-[#C9A961]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
              <span className="text-[#C9A961] text-xs font-semibold tracking-widest uppercase">
                Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#f5f5f0] mb-6">
              Client Testimonials
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-[#1a1a1a] rounded-3xl p-8 border border-[#C9A961]/20 hover:border-[#C9A961]/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(201,169,97,0.1)]">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A961] text-[#C9A961]" />
                  ))}
                </div>
                <p className="text-[#d4d4c8] mb-8 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#C9A961]/20">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A961]/30 to-[#C9A961]/10 flex items-center justify-center border border-[#C9A961]/30">
                    <span className="text-[#C9A961] font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#f5f5f0]">{testimonial.name}</div>
                    <div className="text-sm text-[#a3a399]">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-28 px-6 bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A961]/5 rounded-full blur-3xl" />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C9A961]/20 rounded-full bg-[#C9A961]/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961] animate-pulse" />
              <span className="text-[#C9A961] text-xs font-semibold tracking-widest uppercase">
                Limited Spots Available
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#f5f5f0] mb-6">
              Reserve Your Spot
            </h2>
            <p className="text-[#a3a399] text-lg">
              Secure your exclusive consultation slot today
            </p>
          </div>
          
          {showThankYou ? (
            <div className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] rounded-3xl p-16 text-center border-2 border-[#C9A961]/30 shadow-[0_20px_80px_rgba(201,169,97,0.2)]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 border-2 border-[#C9A961]/50 flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-[#C9A961]" />
              </div>
              <h3 className="text-3xl font-serif text-[#f5f5f0] mb-4">Registration Confirmed!</h3>
              <p className="text-[#a3a399] text-lg">We'll connect with you shortly via WhatsApp.</p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-[#252525] to-[#1a1a1a] rounded-3xl p-10 md:p-14 border-2 border-[#C9A961]/30 shadow-[0_20px_80px_rgba(201,169,97,0.2)]">
              <div className="space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#1a1a1a] border-2 border-[#C9A961]/30 rounded-2xl px-6 py-4 text-[#f5f5f0] placeholder-[#a3a399] focus:border-[#C9A961] focus:outline-none transition-all"
                />
                
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#1a1a1a] border-2 border-[#C9A961]/30 rounded-2xl px-6 py-4 text-[#f5f5f0] placeholder-[#a3a399] focus:border-[#C9A961] focus:outline-none transition-all"
                />
                
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#1a1a1a] border-2 border-[#C9A961]/30 rounded-2xl px-6 py-4 text-[#f5f5f0] placeholder-[#a3a399] focus:border-[#C9A961] focus:outline-none transition-all"
                />
                
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-[#1a1a1a] border-2 border-[#C9A961]/30 rounded-2xl px-6 py-4 text-[#f5f5f0] focus:border-[#C9A961] focus:outline-none transition-all"
                >
                  <option value="">Investment Budget</option>
                  <option value="500k-1m">AED 500K - 1M</option>
                  <option value="1m-2m">AED 1M - 2M</option>
                  <option value="2m-5m">AED 2M - 5M</option>
                  <option value="5m+">AED 5M+</option>
                </select>
                
                <textarea
                  placeholder="Message (Optional)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full bg-[#1a1a1a] border-2 border-[#C9A961]/30 rounded-2xl px-6 py-4 text-[#f5f5f0] placeholder-[#a3a399] focus:border-[#C9A961] focus:outline-none transition-all resize-none"
                />
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-[#C9A961] via-[#D4AF37] to-[#C9A961] text-[#1a1a1a] px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_20px_60px_rgba(201,169,97,0.4)] transition-all duration-300 hover:scale-[1.02]"
                >
                  Register Now
                </button>

                <p className="text-center text-sm text-[#a3a399]">
                  By registering, you agree to receive event updates
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact & Map */}
      <section id="animate-contact" className="py-28 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 ${isVisible['animate-contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="rounded-3xl overflow-hidden h-[500px] border-2 border-[#C9A961]/20">
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
          
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C9A961]/20 rounded-full bg-[#C9A961]/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                <span className="text-[#C9A961] text-xs font-semibold tracking-widest uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#f5f5f0] mb-6">
                Visit Us
              </h2>
              <p className="text-[#a3a399] text-lg">
                Reach us for exclusive Dubai investment consultations
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-[#252525] to-[#1a1a1a] border border-[#C9A961]/20 hover:border-[#C9A961]/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C9A961]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#f5f5f0] mb-2">Event Venue</h4>
                  <p className="text-[#a3a399]">Vivanta Surya, by Taj<br />Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-[#252525] to-[#1a1a1a] border border-[#C9A961]/20 hover:border-[#C9A961]/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#C9A961]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#f5f5f0] mb-2">Contact Number</h4>
                  <a href="tel:+919187138799" className="text-[#C9A961] font-semibold hover:text-[#D4AF37] transition-colors">+91 91871 38799</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-[#252525] to-[#1a1a1a] border border-[#C9A961]/20 hover:border-[#C9A961]/40 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#C9A961]/20 to-[#C9A961]/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#C9A961]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#f5f5f0] mb-2">Email</h4>
                  <a href="mailto:info@superrealtydubai.com" className="text-[#C9A961] hover:text-[#D4AF37] transition-colors">info@superrealtydubai.com</a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/919187138799"
                className="inline-flex items-center bg-gradient-to-r from-[#C9A961] to-[#D4AF37] text-[#1a1a1a] px-8 py-4 rounded-full font-bold hover:shadow-[0_20px_40px_rgba(201,169,97,0.4)] transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] py-20 px-6 border-t border-[#C9A961]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-[#f5f5f0] mb-3">
              Super Realty Dubai
            </h3>
            <p className="text-[#a3a399]">Your Gateway to Premium Dubai Properties</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 mb-12 text-sm">
            <a href="#" className="text-[#a3a399] hover:text-[#C9A961] transition-colors">About Us</a>
            <a href="#" className="text-[#a3a399] hover:text-[#C9A961] transition-colors">Properties</a>
            <a href="#register" className="text-[#a3a399] hover:text-[#C9A961] transition-colors">Register</a>
            <a href="#" className="text-[#a3a399] hover:text-[#C9A961] transition-colors">Contact</a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="w-12 h-12 rounded-full border border-[#C9A961]/30 flex items-center justify-center hover:bg-[#C9A961]/10 hover:border-[#C9A961]/50 transition-all duration-300">
              <Instagram className="w-5 h-5 text-[#C9A961]" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-[#C9A961]/30 flex items-center justify-center hover:bg-[#C9A961]/10 hover:border-[#C9A961]/50 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-[#C9A961]" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-[#C9A961]/30 flex items-center justify-center hover:bg-[#C9A961]/10 hover:border-[#C9A961]/50 transition-all duration-300">
              <Facebook className="w-5 h-5 text-[#C9A961]" />
            </a>
          </div>
          
          <div className="text-center">
            <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-[#C9A961]/30 to-transparent mb-6" />
            <p className="text-[#6b6b60] text-sm">© 2025 Super Realty Dubai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
