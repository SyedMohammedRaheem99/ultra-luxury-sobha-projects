'use client'

import React, { useState, useEffect } from 'react'
import { 
  Building2, Users, Award, Globe, Shield, MapPin, Phone, Mail, 
  Instagram, Linkedin, Facebook, ChevronRight, Check, Star, Sparkles, ArrowRight
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
    <div className="bg-black text-white">
      {/* Hero Section - Ultra Minimalist */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Ambient Silver Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto py-20">
          <div 
            className="mb-8 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.1s forwards' }}
          >
            <span className="inline-block text-gray-400 text-xs font-medium tracking-[0.4em] uppercase">
              Exclusive Event
            </span>
          </div>

          <h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light mb-8 text-white opacity-0"
            style={{ 
              animation: 'fadeInUp 0.8s ease-out 0.2s forwards',
              letterSpacing: '-0.04em',
              fontWeight: 200
            }}
          >
            Dubai Property<br />
            <span className="font-extralight text-gray-300">Roadshow</span>
          </h1>
          
          <div 
            className="mb-12 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.3s forwards' }}
          >
            <div className="inline-flex items-center gap-6 px-8 py-4 border border-gray-800 rounded-full bg-gray-900/30 backdrop-blur-sm">
              <span className="text-xl font-light text-gray-300">Coimbatore</span>
              <div className="w-px h-6 bg-gray-700" />
              <span className="text-xl font-light text-white">2025</span>
            </div>
          </div>
          
          <div 
            className="space-y-3 mb-16 text-gray-400 opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards' }}
          >
            <p className="text-lg sm:text-xl font-light tracking-wide">15–16 November 2025</p>
            <p className="text-base sm:text-lg font-light">Vivanta Surya, by Taj</p>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.5s forwards' }}
          >
            <a 
              href="#register" 
              className="group bg-white text-black px-10 py-4 rounded-full font-medium text-base hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Reserve Your Spot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/919187138799" 
              className="bg-transparent border border-gray-700 text-white px-10 py-4 rounded-full font-light text-base hover:bg-gray-900/50 hover:border-gray-600 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <div 
            className="mt-20 flex flex-wrap items-center justify-center gap-12 text-xs text-gray-500 opacity-0"
            style={{ animation: 'fadeIn 0.8s ease-out 0.7s forwards' }}
          >
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              Free Entry
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              No Obligation
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-gray-600" />
              Expert Guidance
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl md:text-6xl font-extralight text-white mb-3 group-hover:text-gray-300 transition-colors">{stat.number}</div>
                <div className="text-gray-500 text-sm tracking-wider uppercase font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="animate-about" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-900">
        <div className={`grid md:grid-cols-2 gap-20 items-center transition-all duration-1000 ${isVisible['animate-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="order-2 md:order-1">
            <span className="inline-block text-gray-500 text-xs font-light tracking-[0.3em] uppercase mb-6">
              About the Event
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 leading-tight">
              An Exclusive<br />Investment Showcase
            </h2>
            <div className="h-px w-16 bg-gray-700 mb-10" />
            <p className="text-lg text-gray-400 leading-relaxed mb-6 font-light">
              Step into the world of Dubai's most coveted real estate opportunities. Super Realty Dubai presents an intimate showcase featuring handpicked premium developments.
            </p>
            <p className="text-gray-500 leading-relaxed mb-12 font-light">
              Whether you're seeking a luxury residence, strategic investment, or residency through property ownership, our expert consultants will guide you through every step.
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <span className="text-white font-light">Free Consultation</span>
                  <span className="text-gray-600 ml-2">Worth ₹50,000</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <span className="text-white font-light">Special Pricing</span>
                  <span className="text-gray-600 ml-2">Up to 5% off</span>
                </div>
              </div>
            </div>

            <a href="#register" className="inline-flex items-center text-white font-light hover:gap-3 transition-all duration-300 group">
              Reserve Your Spot
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="order-1 md:order-2 relative rounded-none overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800" 
              alt="Luxury Dubai Interior"
              className="w-full h-[600px] object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="animate-projects" className="py-32 px-6 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <span className="inline-block text-gray-500 text-xs font-light tracking-[0.3em] uppercase mb-6">
              Premium Developments
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
              Explore world-class developments in Dubai's most prestigious locations
            </p>
          </div>
          
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group bg-gray-950 border border-gray-900 overflow-hidden transition-all duration-500 hover:border-gray-700"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                
                <div className="p-6 border-t border-gray-900">
                  <div className="text-xs text-gray-600 mb-2 tracking-wider uppercase font-light">{project.price}</div>
                  <h3 className="text-xl font-light text-white mb-2">{project.name}</h3>
                  <p className="text-gray-500 flex items-center text-sm font-light">
                    <MapPin className="w-3 h-3 mr-2" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="border border-gray-800 text-white px-12 py-4 rounded-full font-light hover:bg-gray-900/50 hover:border-gray-700 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section id="animate-highlights" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-900">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <span className="inline-block text-gray-500 text-xs font-light tracking-[0.3em] uppercase mb-6">
            Event Benefits
          </span>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6">
            Why Attend
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Exclusive benefits for discerning investors
          </p>
        </div>
        
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="bg-gray-950 border border-gray-900 p-10 transition-all duration-300 hover:border-gray-700 group"
              >
                <Icon className="w-10 h-10 text-gray-600 mb-6 group-hover:text-gray-400 transition-colors" />
                <h3 className="text-xl font-light text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-block text-gray-500 text-xs font-light tracking-[0.3em] uppercase mb-6">
              Success Stories
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-950 border border-gray-900 p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gray-700 text-gray-700" />
                  ))}
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed font-light text-sm">{testimonial.text}</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-900">
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-gray-500 font-light text-sm">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-light text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600 font-light">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-32 px-6 bg-black border-t border-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-gray-500 text-xs font-light tracking-[0.3em] uppercase mb-6">
              Limited Spots
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6">
              Reserve Your Spot
            </h2>
            <p className="text-gray-500 text-lg font-light">
              Secure your exclusive consultation slot today
            </p>
          </div>
          
          {showThankYou ? (
            <div className="bg-gray-950 border border-gray-900 p-16 text-center">
              <div className="w-16 h-16 rounded-full border border-gray-800 flex items-center justify-center mx-auto mb-8">
                <Check className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-3xl font-light text-white mb-4">Registration Confirmed</h3>
              <p className="text-gray-500 font-light">We'll connect with you shortly via WhatsApp.</p>
            </div>
          ) : (
            <div className="bg-gray-950 border border-gray-900 p-12">
              <div className="space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black border border-gray-900 px-6 py-4 text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-all font-light"
                />
                
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black border border-gray-900 px-6 py-4 text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-all font-light"
                />
                
                <input
                  type="tel"
                  required
                  placeholder="Phone / WhatsApp Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-black border border-gray-900 px-6 py-4 text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-all font-light"
                />
                
                <select
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-black border border-gray-900 px-6 py-4 text-white focus:border-gray-700 focus:outline-none transition-all font-light"
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
                  className="w-full bg-black border border-gray-900 px-6 py-4 text-white placeholder-gray-600 focus:border-gray-700 focus:outline-none transition-all resize-none font-light"
                />
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-white text-black px-10 py-5 font-medium hover:bg-gray-200 transition-all duration-300"
                >
                  Register Now
                </button>

                <p className="text-center text-xs text-gray-600 font-light">
                  By registering, you agree to receive event updates
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact & Map */}
      <section id="animate-contact" className="py-32 px-6 max-w-7xl mx-auto border-t border-gray-900">
        <div className={`grid md:grid-cols-2 gap-16 transition-all duration-1000 ${isVisible['animate-contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="overflow-hidden h-[500px] grayscale">
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
              <span className="inline-block text-gray-500 text-xs font-light tracking-[0.3em] uppercase mb-6">
                Get In Touch
              </span>
              <h2 className="text-5xl font-extralight text-white mb-6">
                Visit Us
              </h2>
              <p className="text-gray-500 text-lg font-light">
                Reach us for exclusive Dubai investment consultations
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 border border-gray-900 bg-gray-950">
                <MapPin className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-light text-white mb-2 text-sm">Event Venue</h4>
                  <p className="text-gray-500 font-light text-sm">Vivanta Surya, by Taj<br />Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 border border-gray-900 bg-gray-950">
                <Phone className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-light text-white mb-2 text-sm">Contact Number</h4>
                  <a href="tel:+919187138799" className="text-gray-400 font-light text-sm hover:text-white transition-colors">+91 91871 38799</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 border border-gray-900 bg-gray-950">
                <Mail className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-light text-white mb-2 text-sm">Email</h4>
                  <a href="mailto:info@superrealtydubai.com" className="text-gray-400 font-light text-sm hover:text-white transition-colors">info@superrealtydubai.com</a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/919187138799"
                className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extralight text-white mb-3">
              Super Realty Dubai
            </h3>
            <p className="text-gray-600 font-light text-sm">Your Gateway to Premium Dubai Properties</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 mb-12 text-xs">
            <a href="#" className="text-gray-600 hover:text-white transition-colors font-light">About Us</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors font-light">Properties</a>
            <a href="#register" className="text-gray-600 hover:text-white transition-colors font-light">Register</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors font-light">Contact</a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center hover:border-gray-700 transition-all duration-300">
              <Instagram className="w-4 h-4 text-gray-600" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center hover:border-gray-700 transition-all duration-300">
              <Linkedin className="w-4 h-4 text-gray-600" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center hover:border-gray-700 transition-all duration-300">
              <Facebook className="w-4 h-4 text-gray-600" />
            </a>
          </div>
          
          <div className="text-center">
            <div className="h-px w-64 mx-auto bg-gray-900 mb-6" />
            <p className="text-gray-700 text-xs font-light">© 2025 Super Realty Dubai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
