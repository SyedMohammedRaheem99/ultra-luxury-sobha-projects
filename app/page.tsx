'use client'

import React, { useState, useEffect } from 'react'
import { 
  Camera, Building2, Users, Award, Globe, Shield, 
  MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ChevronRight 
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  budget: string
  message: string
}

interface Project {
  name: string
  location: string
  image: string
}

interface Highlight {
  icon: any
  title: string
  desc: string
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
    setShowThankYou(true)
    setTimeout(() => {
      window.open(`https://wa.me/919187138799?text=Hi, I registered for Dubai Property Roadshow. Name: ${formData.name}`, '_blank')
    }, 1500)
  }

  const projects: Project[] = [
    { name: 'Sobha Hartland', location: 'Mohammed Bin Rashid City', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800' },
    { name: 'Creek Harbour', location: 'Dubai Creek', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800' },
    { name: 'Palm Residences', location: 'Palm Jumeirah', image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800' },
    { name: 'Business Bay Tower', location: 'Business Bay', image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800' }
  ]

  const highlights: Highlight[] = [
    { icon: Users, title: 'Meet Dubai Experts', desc: 'Connect with top property consultants' },
    { icon: Building2, title: 'Premium Projects', desc: 'Explore investment-grade developments' },
    { icon: Award, title: 'Exclusive Offers', desc: 'Access limited-time deals' },
    { icon: Globe, title: 'Residency Support', desc: 'Investment visa assistance' },
    { icon: Shield, title: 'Trusted Partners', desc: 'Verified developers only' },
    { icon: Camera, title: 'Virtual Tours', desc: 'Immersive property experiences' }
  ]

  return (
    <div className="bg-navy text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[20s] hover:scale-110"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=2000')",
              filter: 'brightness(0.6)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/80 to-transparent" />
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/50 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div 
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(201, 167, 78, 0.15)' }}
          >
            <h1 
              className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-wide opacity-0"
              style={{ animation: 'fadeInUp 1.2s ease-out 0.2s forwards' }}
            >
              DUBAI PROPERTY ROADSHOW
            </h1>
            
            <h2 
              className="text-3xl md:text-4xl font-semibold mb-6 text-gold opacity-0"
              style={{ 
                textShadow: '0 0 30px rgba(212, 175, 55, 0.5)', 
                animation: 'fadeInUp 1.2s ease-out 0.4s forwards' 
              }}
            >
              COIMBATORE | 15–16 NOVEMBER 2025
            </h2>
            
            <div 
              className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6 opacity-0"
              style={{ animation: 'fadeIn 1s ease-out 0.6s forwards' }}
            />
            
            <p 
              className="text-lg md:text-xl mb-3 text-gray-200 opacity-0"
              style={{ animation: 'fadeInUp 1.2s ease-out 0.6s forwards' }}
            >
              Vivanta Surya, by Taj | 10 AM – 9 PM
            </p>
            
            <p 
              className="font-serif italic text-2xl mb-10 text-gold opacity-0"
              style={{ 
                textShadow: '0 0 25px rgba(212, 175, 55, 0.4)', 
                animation: 'fadeInUp 1.2s ease-out 0.8s forwards' 
              }}
            >
              Discover Premium Dubai Residences
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center opacity-0"
              style={{ animation: 'fadeInUp 1.2s ease-out 1s forwards' }}
            >
              <a 
                href="#register" 
                className="bg-gradient-to-r from-gold to-gold-light text-white px-10 py-4 rounded-lg font-semibold tracking-wider hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                REGISTER NOW
              </a>
              <a 
                href="https://wa.me/919187138799" 
                className="bg-transparent border-2 border-gold text-gold px-10 py-4 rounded-lg font-semibold tracking-wider hover:bg-gold/10 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                CONTACT VIA WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="animate-about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible['animate-about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800" 
              alt="Luxury Dubai Interior"
              className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gold">
              An Exclusive Investment Showcase
            </h2>
            <div className="h-1 w-20 bg-gold" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Step into the world of Dubai's most coveted real estate opportunities. Super Realty Dubai brings you an intimate, two-day showcase featuring handpicked premium developments from the region's most trusted developers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're seeking a luxury residence, a strategic investment, or residency through property ownership, our expert consultants will guide you through every step of your Dubai property journey.
            </p>
            <div className="pt-4">
              <a href="#register" className="inline-flex items-center text-gold font-semibold hover:gap-3 transition-all duration-300">
                Secure Your Spot <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="animate-projects" className="py-24 px-6 bg-navy-dark">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gold">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Explore world-class developments in prime Dubai locations</p>
          </div>
          
          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gold flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-gold text-gold px-10 py-3 rounded-lg font-semibold hover:bg-gold/10 transition-all duration-300">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section id="animate-highlights" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gold">Attend</span>
          </h2>
          <p className="text-gray-400 text-lg">Exclusive benefits crafted for discerning investors</p>
        </div>
        
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isVisible['animate-highlights'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {highlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div 
                key={idx}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,167,78,0.2)] hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 px-6 bg-navy-dark">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gold">Register</span> Now
            </h2>
            <p className="text-gray-400 text-lg">Secure your exclusive consultation slot</p>
          </div>
          
          {showThankYou ? (
            <div className="backdrop-blur-xl bg-white/5 border border-gold/50 rounded-3xl p-12 text-center shadow-[0_0_60px_rgba(201,167,78,0.3)]">
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
              <p className="text-gray-300 text-lg">Your registration is confirmed. We'll connect with you shortly via WhatsApp.</p>
            </div>
          ) : (
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone / WhatsApp Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
                
                <div>
                  <select
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  >
                    <option value="" className="bg-navy">Investment Budget</option>
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
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-gold to-gold-light text-white px-10 py-4 rounded-lg font-bold text-lg tracking-wider hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 hover:-translate-y-1 animate-pulse-glow"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact & Map */}
      <section id="animate-contact" className="py-24 px-6 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible['animate-contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-white/5">
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Visit <span className="text-gold">Us</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Reach us for exclusive Dubai investment consultations
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Event Venue</h4>
                  <p className="text-gray-400">Vivanta Surya, by Taj<br />Coimbatore, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Contact Number</h4>
                  <a href="tel:+919187138799" className="text-gold hover:underline">+91 91871 38799</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:info@superrealtydubai.com" className="text-gold hover:underline">info@superrealtydubai.com</a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="https://wa.me/919187138799"
                className="inline-flex items-center bg-gradient-to-r from-gold to-gold-light text-white px-8 py-3 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl font-bold mb-2 text-gold">
              Super Realty Dubai
            </h3>
            <p className="text-gray-400">Your Gateway to Premium Dubai Properties</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
              <Instagram className="w-5 h-5 text-gold" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
              <Linkedin className="w-5 h-5 text-gold" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300">
              <Facebook className="w-5 h-5 text-gold" />
            </a>
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 Super Realty Dubai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
