'use client'

import React, { useState, useEffect } from 'react'
import { 
  Building2, Users, Award, Globe, Shield, MapPin, Phone, Mail, 
  Instagram, Linkedin, Facebook, ChevronRight, Check, Star, Sparkles
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
    <div className="bg-white text-gray-900">
      {/* Hero Section - Clean & Minimal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0D3B66] to-[#0A2540]">
        {/* Background Dubai Image */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2400')"
            }}
          />
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(#00D9FF 1px, transparent 1px), linear-gradient(90deg, #00D9FF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto py-20">
          <div 
            className="mb-6 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.1s forwards' }}
          >
            <span className="inline-block text-[#00D9FF] text-sm font-bold tracking-[0.3em] uppercase">
              Exclusive Event
            </span>
          </div>

          <h1 
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white opacity-0"
            style={{ 
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
              letterSpacing: '-0.02em'
            }}
          >
            Dubai Property<br />Roadshow
          </h1>
          
          <div 
            className="flex items-center justify-center gap-4 mb-8 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.3s forwards' }}
          >
            <div className="h-px w-16 bg-[#00D9FF]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00D9FF]">
              Coimbatore 2025
            </h2>
            <div className="h-px w-16 bg-[#00D9FF]" />
          </div>
          
          <div 
            className="space-y-2 mb-8 text-white/90 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}
          >
            <p className="text-xl sm:text-2xl font-medium">15–16 November 2025</p>
            <p className="text-lg sm:text-xl">Vivanta Surya, by Taj | 10 AM – 9 PM</p>
          </div>
          
          <p 
            className="text-xl sm:text-2xl text-white/80 mb-12 max-w-2xl mx-auto opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.5s forwards' }}
          >
            Discover premium Dubai residences and investment opportunities
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s forwards' }}
          >
            <a 
              href="#register" 
              className="bg-[#00D9FF] text-[#0A2540] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00F0FF] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,217,255,0.3)] hover:-translate-y-1"
            >
              Register Now
            </a>
            <a 
              href="https://wa.me/919187138799" 
              className="bg-transparent border-2 border-[#00D9FF] text-[#00D9FF] px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#00D9FF]/10 transition-all duration-300"
            >
              Contact via WhatsApp
            </a>
          </div>

          <div 
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60 opacity-0"
            style={{ animation: 'fadeIn 0.8s ease-out 0.8s forwards' }}
          >
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00D9FF]" /> Free Entry
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00D9FF]" /> No Obligation
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#00D9FF]" /> Expert Guidance
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="animate-about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible['animate-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="order-2 md:order-1">
            <span className="inline-block text-[#00D9FF] text-sm font-bold tracking-widest uppercase mb-4">
              About the Event
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
              An Exclusive Investment Showcase
            </h2>
            <div className="h-1 w-20 bg-[#00D9FF] mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Step into the world of Dubai's most coveted real estate opportunities. Super Realty Dubai presents an intimate showcase featuring handpicked premium developments from the region's most trusted developers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're seeking a luxury residence, strategic investment, or residency through property ownership, our expert consultants will guide you through every step.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A2540]">Free Consultation</div>
                  <div className="text-sm text-gray-600">Worth ₹50,000</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-[#00D9FF]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0A2540]">Special Pricing</div>
                  <div className="text-sm text-gray-600">Up to 5% off</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#register" className="inline-flex items-center text-[#00D9FF] font-bold hover:gap-3 transition-all duration-300">
                Reserve Your Spot
                <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" 
              alt="Luxury Dubai Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="animate-projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="inline-block text-[#00D9FF] text-sm font-bold tracking-widest uppercase mb-4">
              Premium Developments
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore world-class developments in Dubai's most prestigious locations
            </p>
          </div>
          
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#00D9FF] text-white px-4 py-2 rounded-full text-sm font-bold">
                      {project.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">{project.name}</h3>
                  <p className="text-gray-600 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-[#00D9FF]" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#0A2540] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#0D3B66] transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section id="animate-highlights" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <span className="inline-block text-[#00D9FF] text-sm font-bold tracking-widest uppercase mb-4">
            Event Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            Why Attend
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exclusive benefits for discerning investors
          </p>
        </div>
        
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#00D9FF]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[#00D9FF] text-sm font-bold tracking-widest uppercase mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00D9FF] text-[#00D9FF]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00D9FF]/20 flex items-center justify-center">
                    <span className="text-[#00D9FF] font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-[#0A2540]">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 px-6 bg-gradient-to-br from-[#0A2540] to-[#0D3B66]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[#00D9FF] text-sm font-bold tracking-widest uppercase mb-4">
              Limited Spots
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reserve Your Spot
            </h2>
            <p className="text-white/80 text-lg">
              Secure your exclusive consultation slot today
            </p>
          </div>
          
          {showThankYou ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
              <div className="w-20 h-20 rounded-full bg-[#00D9FF]/20 flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#00D9FF]" />
              </div>
              <h3 className="text-3xl font-bold text-[#0A2540] mb-4">Registration Confirmed!</h3>
              <p className="text-gray-600 text-lg">We'll connect with you shortly via WhatsApp.</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4 text-gray-900 focus:border-[#00D9FF] focus:outline-none transition-all"
                />
                
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4 text-gray-900 focus:border-[#00D9FF] focus:outline-none transition-all"
                />
                
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4 text-gray-900 focus:border-[#00D9FF] focus:outline-none transition-all"
                />
                
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4 text-gray-900 focus:border-[#00D9FF] focus:outline-none transition-all"
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
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-6 py-4 text-gray-900 focus:border-[#00D9FF] focus:outline-none transition-all resize-none"
                />
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#00D9FF] text-[#0A2540] px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#00F0FF] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,217,255,0.3)]"
                >
                  Register Now
                </button>

                <p className="text-center text-sm text-gray-500">
                  By registering, you agree to receive event updates
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact & Map */}
      <section id="animate-contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible['animate-contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
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
              <span className="inline-block text-[#00D9FF] text-sm font-bold tracking-widest uppercase mb-4">
                Get In Touch
              </span>
              <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
                Visit Us
              </h2>
              <p className="text-gray-600 text-lg">
                Reach us for exclusive Dubai investment consultations
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Event Venue</h4>
                  <p className="text-gray-600">Vivanta Surya, by Taj<br />Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Contact Number</h4>
                  <a href="tel:+919187138799" className="text-[#00D9FF] font-semibold">+91 91871 38799</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] mb-1">Email</h4>
                  <a href="mailto:info@superrealtydubai.com" className="text-[#00D9FF]">info@superrealtydubai.com</a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/919187138799"
                className="inline-flex items-center bg-[#00D9FF] text-[#0A2540] px-8 py-4 rounded-xl font-bold hover:bg-[#00F0FF] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,217,255,0.3)]"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">
              Super Realty Dubai
            </h3>
            <p className="text-white/60">Your Gateway to Premium Dubai Properties</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
            <a href="#" className="text-white/60 hover:text-[#00D9FF] transition-colors">About Us</a>
            <a href="#" className="text-white/60 hover:text-[#00D9FF] transition-colors">Properties</a>
            <a href="#register" className="text-white/60 hover:text-[#00D9FF] transition-colors">Register</a>
            <a href="#" className="text-white/60 hover:text-[#00D9FF] transition-colors">Contact</a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00D9FF]/20 transition-all duration-300">
              <Instagram className="w-5 h-5 text-[#00D9FF]" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00D9FF]/20 transition-all duration-300">
              <Linkedin className="w-5 h-5 text-[#00D9FF]" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00D9FF]/20 transition-all duration-300">
              <Facebook className="w-5 h-5 text-[#00D9FF]" />
            </a>
          </div>
          
          <div className="text-center">
            <div className="h-px w-64 mx-auto bg-white/10 mb-6" />
            <p className="text-white/40 text-sm">© 2025 Super Realty Dubai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
